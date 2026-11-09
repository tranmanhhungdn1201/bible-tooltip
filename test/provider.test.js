const test = require('node:test');
const assert = require('node:assert/strict');
const { VerseProvider, SUPPORTED_VERSIONS } = require('../dist/index.cjs');

test('VerseProvider defaults to VI2010 (Bản Hiệu Đính 2010)', async () => {
  const provider = new VerseProvider();
  const result = await provider.getVerse({
    bookNumber: 40,
    bookName: 'Ma-thi-ơ',
    osis: 'Matt',
    youVersionCode: 'MAT',
    chapter: 1,
    verseStart: 1,
  });

  assert.equal(result.bookName, 'Ma-thi-ơ');
  assert.equal(result.chapter, 1);
  assert.equal(result.verseStart, 1);
  assert.equal(result.verses.length, 1);
  assert.equal(result.verses[0].verse, 1);
  assert.match(result.verses[0].text, /Gia phổ Đức Chúa/i);
  assert.equal(result.translation, 'Bản Hiệu Đính 2010');
  assert.equal(result.chapterUrl, 'https://www.bible.com/vi/bible/151/MAT.1.VIE2010');
});

test('VerseProvider fetches multi-verse range correctly (John 3:16-17)', async () => {
  const provider = new VerseProvider();
  const result = await provider.getVerse({
    bookNumber: 43,
    bookName: 'Giăng',
    osis: 'John',
    youVersionCode: 'JHN',
    chapter: 3,
    verseStart: 16,
    verseEnd: 17,
  });

  assert.equal(result.title, 'Giăng 3:16-17');
  assert.equal(result.verses.length, 2);
  assert.equal(result.verses[0].verse, 16);
  assert.equal(result.verses[1].verse, 17);
  assert.match(result.verses[0].text, /Đức Chúa Trời yêu thương thế gian/i);
  assert.equal(result.chapterUrl, 'https://www.bible.com/vi/bible/151/JHN.3.VIE2010');
});

test('VerseProvider can be configured to use VI1925 (Bản Truyền Thống 1925)', async () => {
  const provider = new VerseProvider({ translation: 'VI1925' });
  const result = await provider.getVerse({
    bookNumber: 40,
    bookName: 'Ma-thi-ơ',
    osis: 'Matt',
    youVersionCode: 'MAT',
    chapter: 1,
    verseStart: 1,
  });

  assert.equal(result.translation, 'Bản Truyền Thống 1925');
  assert.equal(result.chapterUrl, 'https://www.bible.com/vi/bible/193/MAT.1.VIE1925');
});

test('VerseProvider uses cache for subsequent queries on same chapter', async () => {
  const provider = new VerseProvider();
  await provider.getVerse({
    bookNumber: 40,
    bookName: 'Ma-thi-ơ',
    osis: 'Matt',
    youVersionCode: 'MAT',
    chapter: 1,
    verseStart: 1,
  });

  // Second fetch from cached chapter should be nearly instantaneous (< 20ms)
  const cachedStart = Date.now();
  const res2 = await provider.getVerse({
    bookNumber: 40,
    bookName: 'Ma-thi-ơ',
    osis: 'Matt',
    youVersionCode: 'MAT',
    chapter: 1,
    verseStart: 18,
    verseEnd: 19,
  });
  const cachedDuration = Date.now() - cachedStart;

  assert.equal(res2.verses[0].verse, 18);
  assert.ok(cachedDuration < 20, `Cache duration was ${cachedDuration}ms, expected < 20ms`);
});
