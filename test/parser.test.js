const test = require('node:test');
const assert = require('node:assert/strict');
const { parseReference, findBookByAlias, BIBLE_BOOKS } = require('../dist/index.cjs');

test('BIBLE_BOOKS list contains exactly 66 books', () => {
  assert.equal(BIBLE_BOOKS.length, 66);
  assert.equal(BIBLE_BOOKS[0].name, 'Sáng Thế Ký');
  assert.equal(BIBLE_BOOKS[39].name, 'Ma-thi-ơ');
  assert.equal(BIBLE_BOOKS[65].name, 'Khải Huyền');
});

test('findBookByAlias finds books by various aliases and cases', () => {
  // Standard Vietnamese
  const matt = findBookByAlias('Ma-thi-ơ');
  assert.ok(matt);
  assert.equal(matt.number, 40);
  assert.equal(matt.osis, 'Matt');

  // Abbreviations
  assert.equal(findBookByAlias('Mt')?.number, 40);
  assert.equal(findBookByAlias('mat')?.number, 40);
  assert.equal(findBookByAlias('mathiơ')?.number, 40);
  assert.equal(findBookByAlias('Stk')?.number, 1);
  assert.equal(findBookByAlias('Tv')?.number, 19);
  assert.equal(findBookByAlias('1Cr')?.number, 46);
  assert.equal(findBookByAlias('Kh')?.number, 66);

  // Catholic variants
  assert.equal(findBookByAlias('Thánh Vịnh')?.number, 19);
  assert.equal(findBookByAlias('Khởi Nguyên')?.number, 1);
  assert.equal(findBookByAlias('Gioan')?.number, 43);
});

test('parseReference accurately parses single verse references', () => {
  const ref = parseReference('Ma-thi-ơ 1:1');
  assert.ok(ref);
  assert.equal(ref.book.name, 'Ma-thi-ơ');
  assert.equal(ref.chapter, 1);
  assert.equal(ref.verseStart, 1);
  assert.equal(ref.verseEnd, undefined);
});

test('parseReference accurately parses verse ranges', () => {
  const ref = parseReference('Giăng 3:16-17');
  assert.ok(ref);
  assert.equal(ref.book.name, 'Giăng');
  assert.equal(ref.chapter, 3);
  assert.equal(ref.verseStart, 16);
  assert.equal(ref.verseEnd, 17);
});

test('parseReference parses compound numbered books', () => {
  const ref1 = parseReference('1 Cô-rinh-tô 13:4-8');
  assert.ok(ref1);
  assert.equal(ref1.book.name, '1 Cô-rinh-tô');
  assert.equal(ref1.chapter, 13);
  assert.equal(ref1.verseStart, 4);
  assert.equal(ref1.verseEnd, 8);

  const ref2 = parseReference('1 Giăng 1:9');
  assert.ok(ref2);
  assert.equal(ref2.book.name, '1 Giăng');
  assert.equal(ref2.chapter, 1);
  assert.equal(ref2.verseStart, 9);
});

test('parseReference correctly distinguishes 1 Giăng from Giăng', () => {
  const refJn = parseReference('Giăng 3:16');
  assert.equal(refJn?.book.number, 43);

  const ref1Jn = parseReference('1 Giăng 2:1');
  assert.equal(ref1Jn?.book.number, 62);
});

test('parseReference parses chapter-only references', () => {
  const ref = parseReference('Thi Thiên 23');
  assert.ok(ref);
  assert.equal(ref.book.name, 'Thi Thiên');
  assert.equal(ref.chapter, 23);
  assert.equal(ref.verseStart, 1);
  assert.equal(ref.verseEnd, undefined);
});

test('parseReference handles comma separator (Catholic convention)', () => {
  const ref = parseReference('Ga 3, 16');
  assert.ok(ref);
  assert.equal(ref.book.number, 43);
  assert.equal(ref.chapter, 3);
  assert.equal(ref.verseStart, 16);
});

test('parseReference rejects invalid chapter counts or non-biblical texts', () => {
  // Matthew only has 28 chapters
  assert.equal(parseReference('Ma-thi-ơ 99:1'), null);
  // Non-existent book
  assert.equal(parseReference('Sách Nào Đó 1:1'), null);
  // Verse end before verse start
  assert.equal(parseReference('Ma-thi-ơ 1:10-5'), null);
});
