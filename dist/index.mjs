// src/books.ts
var BIBLE_BOOKS = [
  // Cựu Ước (Old Testament)
  {
    number: 1,
    name: "S\xE1ng Th\u1EBF K\xFD",
    shortName: "Stk",
    osis: "Gen",
    youVersionCode: "GEN",
    maxChapters: 50,
    aliases: ["s\xE1ng th\u1EBF k\xFD", "s\xE1ng-th\u1EBF k\xFD", "s\xE1ng th\u1EBF", "s\xE1ng-th\u1EBF", "s\xE1ng", "stk", "st", "kh\u1EDFi nguy\xEAn", "genesis", "gen"]
  },
  {
    number: 2,
    name: "Xu\u1EA5t \xCA-d\xEDp-t\xF4 K\xFD",
    shortName: "Xh",
    osis: "Exod",
    youVersionCode: "EXO",
    maxChapters: 40,
    aliases: ["xu\u1EA5t \xEA-d\xEDp-t\xF4 k\xFD", "xu\u1EA5t \xEA d\xEDp t\xF4 k\xFD", "xu\u1EA5t \xEA-d\xEDp-t\xF4", "xu\u1EA5t h\xE0nh k\xFD", "xu\u1EA5t h\xE0nh", "xu\u1EA5t", "xst", "x\xEA", "xh", "exodus", "exo"]
  },
  {
    number: 3,
    name: "L\xEA-vi K\xFD",
    shortName: "Lv",
    osis: "Lev",
    youVersionCode: "LEV",
    maxChapters: 27,
    aliases: ["l\xEA-vi k\xFD", "l\xEA vi k\xFD", "l\xEA-vi", "l\xEA vi", "lv", "leviticus", "lev"]
  },
  {
    number: 4,
    name: "D\xE2n S\u1ED1 K\xFD",
    shortName: "Ds",
    osis: "Num",
    youVersionCode: "NUM",
    maxChapters: 36,
    aliases: ["d\xE2n s\u1ED1 k\xFD", "d\xE2n-s\u1ED1 k\xFD", "d\xE2n s\u1ED1", "d\xE2n-s\u1ED1", "s\u1ED1 \u0111\u1EBFm k\xFD", "s\u1ED1 \u0111\u1EBFm", "ds", "numbers", "num"]
  },
  {
    number: 5,
    name: "Ph\u1EE5c Truy\u1EC1n Lu\u1EADt L\u1EC7 K\xFD",
    shortName: "Pt",
    osis: "Deut",
    youVersionCode: "DEU",
    maxChapters: 34,
    aliases: ["ph\u1EE5c truy\u1EC1n lu\u1EADt l\u1EC7 k\xFD", "ph\u1EE5c truy\u1EC1n", "ph\u1EE5c-truy\u1EC1n", "\u0111\u1EC7 nh\u1ECB lu\u1EADt", "pt", "deuteronomy", "deut", "deu"]
  },
  {
    number: 6,
    name: "Gi\xF4-su\xEA",
    shortName: "Gs",
    osis: "Josh",
    youVersionCode: "JOS",
    maxChapters: 24,
    aliases: ["gi\xF4-su\xEA", "gi\xF4 su\xEA", "gi\xF4su\xEA", "gi\xF4-s\xEA", "gs", "joshua", "josh"]
  },
  {
    number: 7,
    name: "C\xE1c Quan X\xE9t",
    shortName: "Qx",
    osis: "Judg",
    youVersionCode: "JDG",
    maxChapters: 21,
    aliases: ["c\xE1c quan x\xE9t", "quan x\xE9t", "quan-x\xE9t", "th\u1EE7 l\xE3nh", "th\u1EE7-l\xE3nh", "qx", "tl", "judges", "judg", "jdg"]
  },
  {
    number: 8,
    name: "Ru-t\u01A1",
    shortName: "Rt",
    osis: "Ruth",
    youVersionCode: "RUT",
    maxChapters: 4,
    aliases: ["ru-t\u01A1", "ru t\u01A1", "rut\u01A1", "r\xFAt", "rt", "ruth", "rut"]
  },
  {
    number: 9,
    name: "1 Sa-mu-\xEAn",
    shortName: "1Sm",
    osis: "1Sam",
    youVersionCode: "1SA",
    maxChapters: 31,
    aliases: ["1 sa-mu-\xEAn", "i sa-mu-\xEAn", "1 samu\xEAn", "i samu\xEAn", "1 sa mu \xEAn", "1 sm", "1sm", "i sm", "1 sam", "1sa", "1 samuel", "1samuel"]
  },
  {
    number: 10,
    name: "2 Sa-mu-\xEAn",
    shortName: "2Sm",
    osis: "2Sam",
    youVersionCode: "2SA",
    maxChapters: 24,
    aliases: ["2 sa-mu-\xEAn", "ii sa-mu-\xEAn", "2 samu\xEAn", "ii samu\xEAn", "2 sa mu \xEAn", "2 sm", "2sm", "ii sm", "2 sam", "2sa", "2 samuel", "2samuel"]
  },
  {
    number: 11,
    name: "1 C\xE1c Vua",
    shortName: "1V",
    osis: "1Kgs",
    youVersionCode: "1KI",
    maxChapters: 22,
    aliases: ["1 c\xE1c vua", "i c\xE1c vua", "1 vua", "i vua", "1v", "1 v", "1 ki", "1ki", "1 kgs", "1 kings", "1kings"]
  },
  {
    number: 12,
    name: "2 C\xE1c Vua",
    shortName: "2V",
    osis: "2Kgs",
    youVersionCode: "2KI",
    maxChapters: 25,
    aliases: ["2 c\xE1c vua", "ii c\xE1c vua", "2 vua", "ii vua", "2v", "2 v", "2 ki", "2ki", "2 kgs", "2 kings", "2kings"]
  },
  {
    number: 13,
    name: "1 S\u1EED K\xFD",
    shortName: "1Sk",
    osis: "1Chr",
    youVersionCode: "1CH",
    maxChapters: 29,
    aliases: ["1 s\u1EED k\xFD", "i s\u1EED k\xFD", "1 s\u1EED", "i s\u1EED", "1 sk", "1sk", "i sk", "1 ch", "1ch", "1 chr", "1 chronicles"]
  },
  {
    number: 14,
    name: "2 S\u1EED K\xFD",
    shortName: "2Sk",
    osis: "2Chr",
    youVersionCode: "2CH",
    maxChapters: 36,
    aliases: ["2 s\u1EED k\xFD", "ii s\u1EED k\xFD", "2 s\u1EED", "ii s\u1EED", "2 sk", "2sk", "ii sk", "2 ch", "2ch", "2 chr", "2 chronicles"]
  },
  {
    number: 15,
    name: "\xCA-x\u01A1-ra",
    shortName: "Er",
    osis: "Ezra",
    youVersionCode: "EZR",
    maxChapters: 10,
    aliases: ["\xEA-x\u01A1-ra", "\xEA x\u01A1 ra", "e-x\u01A1-ra", "\xE9t-ra", "et-ra", "exr", "ezr", "er", "ezra"]
  },
  {
    number: 16,
    name: "N\xEA-h\xEA-mi",
    shortName: "Ne",
    osis: "Neh",
    youVersionCode: "NEH",
    maxChapters: 13,
    aliases: ["n\xEA-h\xEA-mi", "n\xEA h\xEA mi", "n\xEAkhemi", "nhm", "ne", "neh", "nehemiah"]
  },
  {
    number: 17,
    name: "\xCA-x\u01A1-t\xEA",
    shortName: "Et",
    osis: "Esth",
    youVersionCode: "EST",
    maxChapters: 10,
    aliases: ["\xEA-x\u01A1-t\xEA", "\xEA x\u01A1 t\xEA", "e-x\u01A1-t\xEA", "\xE9t-te", "ext", "\xEAt", "et", "est", "esth", "esther"]
  },
  {
    number: 18,
    name: "Gi\xF3p",
    shortName: "Gp",
    osis: "Job",
    youVersionCode: "JOB",
    maxChapters: 42,
    aliases: ["gi\xF3p", "gp", "job"]
  },
  {
    number: 19,
    name: "Thi Thi\xEAn",
    shortName: "Tv",
    osis: "Ps",
    youVersionCode: "PSA",
    maxChapters: 150,
    aliases: ["thi thi\xEAn", "thi-thi\xEAn", "th\xE1nh v\u1ECBnh", "tv", "th", "tt", "thi", "psa", "psalm", "psalms"]
  },
  {
    number: 20,
    name: "Ch\xE2m Ng\xF4n",
    shortName: "Cn",
    osis: "Prov",
    youVersionCode: "PRO",
    maxChapters: 31,
    aliases: ["ch\xE2m ng\xF4n", "ch\xE2m-ng\xF4n", "cn", "pro", "prov", "proverbs"]
  },
  {
    number: 21,
    name: "Truy\u1EC1n \u0110\u1EA1o",
    shortName: "T\u0111",
    osis: "Eccl",
    youVersionCode: "ECC",
    maxChapters: 12,
    aliases: ["truy\u1EC1n \u0111\u1EA1o", "truy\u1EC1n-\u0111\u1EA1o", "gi\u1EA3ng vi\xEAn", "t\u0111", "gv", "ecc", "eccl", "ecclesiastes"]
  },
  {
    number: 22,
    name: "Nh\xE3 Ca",
    shortName: "Nc",
    osis: "Song",
    youVersionCode: "SNG",
    maxChapters: 8,
    aliases: ["nh\xE3 ca", "nh\xE3-ca", "di\u1EC5m ca", "nc", "dc", "song", "song of songs", "canticles"]
  },
  {
    number: 23,
    name: "\xCA-sai",
    shortName: "Es",
    osis: "Isa",
    youVersionCode: "ISA",
    maxChapters: 66,
    aliases: ["\xEA-sai", "\xEA sai", "e-sai", "y-sai", "isaia", "\xEAs", "es", "isa", "isaiah"]
  },
  {
    number: 24,
    name: "Gi\xEA-r\xEA-mi",
    shortName: "Gr",
    osis: "Jer",
    youVersionCode: "JER",
    maxChapters: 52,
    aliases: ["gi\xEA-r\xEA-mi", "gi\xEA r\xEA mi", "gi\xEAr\xEAmi", "grm", "gr", "jer", "jeremiah"]
  },
  {
    number: 25,
    name: "Ca Th\u01B0\u01A1ng",
    shortName: "Ct",
    osis: "Lam",
    youVersionCode: "LAM",
    maxChapters: 5,
    aliases: ["ca th\u01B0\u01A1ng", "ca-th\u01B0\u01A1ng", "ai ca", "ai-ca", "ct", "ac", "lam", "lamentations"]
  },
  {
    number: 26,
    name: "\xCA-x\xEA-chi-\xEAn",
    shortName: "Ec",
    osis: "Ezek",
    youVersionCode: "EZK",
    maxChapters: 48,
    aliases: ["\xEA-x\xEA-chi-\xEAn", "\xEA x\xEA chi \xEAn", "e-xe-chi-en", "\xEAx\xEAchi\xEAn", "\xEAxc", "exc", "ec", "eze", "ezek", "ezekiel"]
  },
  {
    number: 27,
    name: "\u0110a-ni-\xEAn",
    shortName: "\u0110n",
    osis: "Dan",
    youVersionCode: "DAN",
    maxChapters: 12,
    aliases: ["\u0111a-ni-\xEAn", "\u0111a ni \xEAn", "\u0111a-ni-en", "\u0111ani\xEAn", "\u0111n", "dn", "dan", "daniel"]
  },
  {
    number: 28,
    name: "\xD4-s\xEA",
    shortName: "Os",
    osis: "Hos",
    youVersionCode: "HOS",
    maxChapters: 14,
    aliases: ["\xF4-s\xEA", "\xF4 s\xEA", "o-se", "h\xF4-s\xEAa", "h\xF4-s\xEA", "\xF4s", "os", "hos", "hosea"]
  },
  {
    number: 29,
    name: "Gi\xF4-\xEAn",
    shortName: "Ge",
    osis: "Joel",
    youVersionCode: "JOL",
    maxChapters: 3,
    aliases: ["gi\xF4-\xEAn", "gi\xF4 \xEAn", "gio-en", "gi\xF4\xEAn", "g\xEAn", "ge", "joe", "joel"]
  },
  {
    number: 30,
    name: "A-m\u1ED1t",
    shortName: "Am",
    osis: "Amos",
    youVersionCode: "AMO",
    maxChapters: 9,
    aliases: ["a-m\u1ED1t", "a m\u1ED1t", "a-mot", "am\u1ED1t", "am", "amo", "amos"]
  },
  {
    number: 31,
    name: "\xC1p-\u0111ia",
    shortName: "Ob",
    osis: "Obad",
    youVersionCode: "OBA",
    maxChapters: 1,
    aliases: ["\xE1p-\u0111ia", "\xE1p \u0111ia", "ap-dia", "\xE1p-\u0111i-a", "\xF4-ba-\u0111ia", "ob", "oba", "obad", "obadiah"]
  },
  {
    number: 32,
    name: "Gi\xF4-na",
    shortName: "Gn",
    osis: "Jonah",
    youVersionCode: "JON",
    maxChapters: 4,
    aliases: ["gi\xF4-na", "gi\xF4 na", "gio-na", "gi\xF4na", "gn", "jon", "jonah"]
  },
  {
    number: 33,
    name: "Mi-ch\xEA",
    shortName: "Mc",
    osis: "Mic",
    youVersionCode: "MIC",
    maxChapters: 7,
    aliases: ["mi-ch\xEA", "mi ch\xEA", "mi-che", "mich\xEA", "mc", "mic", "micah"]
  },
  {
    number: 34,
    name: "Na-hum",
    shortName: "Na",
    osis: "Nah",
    youVersionCode: "NAM",
    maxChapters: 3,
    aliases: ["na-hum", "na hum", "na-khum", "na", "nah", "nahum"]
  },
  {
    number: 35,
    name: "Ha-ba-c\xFAc",
    shortName: "Hb",
    osis: "Hab",
    youVersionCode: "HAB",
    maxChapters: 3,
    aliases: ["ha-ba-c\xFAc", "ha ba c\xFAc", "kha-ba-c\xFAc", "hbc", "hb", "hab", "habakkuk"]
  },
  {
    number: 36,
    name: "X\xF4-ph\xF4-ni",
    shortName: "Xp",
    osis: "Zeph",
    youVersionCode: "ZEP",
    maxChapters: 3,
    aliases: ["x\xF4-ph\xF4-ni", "x\xF4 ph\xF4 ni", "s\xF4-ph\xF4-ni", "xp", "sp", "zep", "zeph", "zephaniah"]
  },
  {
    number: 37,
    name: "A-gh\xEA",
    shortName: "Ag",
    osis: "Hag",
    youVersionCode: "HAG",
    maxChapters: 2,
    aliases: ["a-gh\xEA", "a gh\xEA", "a-g\xEA", "ag", "hag", "haggai"]
  },
  {
    number: 38,
    name: "Xa-cha-ri",
    shortName: "Xc",
    osis: "Zech",
    youVersionCode: "ZEC",
    maxChapters: 14,
    aliases: ["xa-cha-ri", "xa cha ri", "xa-ca-ri", "xcr", "xc", "zec", "zech", "zechariah"]
  },
  {
    number: 39,
    name: "Ma-la-chi",
    shortName: "Ml",
    osis: "Mal",
    youVersionCode: "MAL",
    maxChapters: 4,
    aliases: ["ma-la-chi", "ma la chi", "ma-la-ki", "ml", "mal", "malachi"]
  },
  // Tân Ước (New Testament)
  {
    number: 40,
    name: "Ma-thi-\u01A1",
    shortName: "Mt",
    osis: "Matt",
    youVersionCode: "MAT",
    maxChapters: 28,
    aliases: ["ma-thi-\u01A1", "ma thi \u01A1", "mathi\u01A1", "ma-th\xEAu", "math\xEAu", "mt", "mat", "matt", "matthew"]
  },
  {
    number: 41,
    name: "M\xE1c",
    shortName: "Mc",
    osis: "Mark",
    youVersionCode: "MRK",
    maxChapters: 16,
    aliases: ["m\xE1c", "m\xE1c-c\xF4", "m\xE1cc\xF4", "mrk", "mark"]
  },
  {
    number: 42,
    name: "Lu-ca",
    shortName: "Lc",
    osis: "Luke",
    youVersionCode: "LUK",
    maxChapters: 24,
    aliases: ["lu-ca", "lu ca", "luca", "lc", "luk", "luke"]
  },
  {
    number: 43,
    name: "Gi\u0103ng",
    shortName: "Gg",
    osis: "John",
    youVersionCode: "JHN",
    maxChapters: 21,
    aliases: ["gi\u0103ng", "gioan", "ga", "gg", "jhn", "joh", "john"]
  },
  {
    number: 44,
    name: "C\xF4ng V\u1EE5 C\xE1c S\u1EE9 \u0110\u1ED3",
    shortName: "Cv",
    osis: "Acts",
    youVersionCode: "ACT",
    maxChapters: 28,
    aliases: ["c\xF4ng v\u1EE5 c\xE1c s\u1EE9 \u0111\u1ED3", "c\xF4ng v\u1EE5", "c\xF4ng-v\u1EE5", "cv", "act", "acts"]
  },
  {
    number: 45,
    name: "R\xF4-ma",
    shortName: "Rm",
    osis: "Rom",
    youVersionCode: "ROM",
    maxChapters: 16,
    aliases: ["r\xF4-ma", "r\xF4 ma", "roma", "rm", "ro", "rom", "romans"]
  },
  {
    number: 46,
    name: "1 C\xF4-rinh-t\xF4",
    shortName: "1Cr",
    osis: "1Cor",
    youVersionCode: "1CO",
    maxChapters: 16,
    aliases: ["1 c\xF4-rinh-t\xF4", "i c\xF4-rinh-t\xF4", "1 c\xF4 rinh t\xF4", "1 c\xF4-rin-t\xF4", "1 c\xF4", "i c\xF4", "1cr", "1 cr", "1co", "1 co", "1cor", "1 corinthians"]
  },
  {
    number: 47,
    name: "2 C\xF4-rinh-t\xF4",
    shortName: "2Cr",
    osis: "2Cor",
    youVersionCode: "2CO",
    maxChapters: 13,
    aliases: ["2 c\xF4-rinh-t\xF4", "ii c\xF4-rinh-t\xF4", "2 c\xF4 rinh t\xF4", "2 c\xF4-rin-t\xF4", "2 c\xF4", "ii c\xF4", "2cr", "2 cr", "2co", "2 co", "2cor", "2 corinthians"]
  },
  {
    number: 48,
    name: "Ga-la-ti",
    shortName: "Gl",
    osis: "Gal",
    youVersionCode: "GAL",
    maxChapters: 6,
    aliases: ["ga-la-ti", "ga la ti", "galati", "gl", "gal", "galatians"]
  },
  {
    number: 49,
    name: "\xCA-ph\xEA-s\xF4",
    shortName: "Ep",
    osis: "Eph",
    youVersionCode: "EPH",
    maxChapters: 6,
    aliases: ["\xEA-ph\xEA-s\xF4", "\xEA ph\xEA s\xF4", "e-phe-so", "\xEAph\xEAs\xF4", "\xEAp", "ep", "eph", "ephesians"]
  },
  {
    number: 50,
    name: "Phi-l\xEDp",
    shortName: "Pl",
    osis: "Phil",
    youVersionCode: "PHP",
    maxChapters: 4,
    aliases: ["phi-l\xEDp", "phi l\xEDp", "phi-lip", "phil\xEDp", "pl", "php", "phil", "philippians"]
  },
  {
    number: 51,
    name: "C\xF4-l\xF4-se",
    shortName: "Cl",
    osis: "Col",
    youVersionCode: "COL",
    maxChapters: 4,
    aliases: ["c\xF4-l\xF4-se", "c\xF4 l\xF4 se", "c\xF4-l\xF4-s\xEA", "c\xF4l\xF4se", "cl", "col", "colossians"]
  },
  {
    number: 52,
    name: "1 T\xEA-sa-l\xF4-ni-ca",
    shortName: "1Tx",
    osis: "1Thess",
    youVersionCode: "1TH",
    maxChapters: 5,
    aliases: ["1 t\xEA-sa-l\xF4-ni-ca", "i t\xEA-sa-l\xF4-ni-ca", "1 t\xEA sa l\xF4 ni ca", "1 t\xEA-xa-l\xF4-ni-ca", "1 t\xEA", "i t\xEA", "1tx", "1th", "1thess", "1 thessalonians"]
  },
  {
    number: 53,
    name: "2 T\xEA-sa-l\xF4-ni-ca",
    shortName: "2Tx",
    osis: "2Thess",
    youVersionCode: "2TH",
    maxChapters: 3,
    aliases: ["2 t\xEA-sa-l\xF4-ni-ca", "ii t\xEA-sa-l\xF4-ni-ca", "2 t\xEA sa l\xF4 ni ca", "2 t\xEA-xa-l\xF4-ni-ca", "2 t\xEA", "ii t\xEA", "2tx", "2th", "2thess", "2 thessalonians"]
  },
  {
    number: 54,
    name: "1 Ti-m\xF4-th\xEA",
    shortName: "1Tm",
    osis: "1Tim",
    youVersionCode: "1TI",
    maxChapters: 6,
    aliases: ["1 ti-m\xF4-th\xEA", "i ti-m\xF4-th\xEA", "1 ti m\xF4 th\xEA", "1 ti", "i ti", "1tm", "1 tm", "1tim", "1 timothy"]
  },
  {
    number: 55,
    name: "2 Ti-m\xF4-th\xEA",
    shortName: "2Tm",
    osis: "2Tim",
    youVersionCode: "2TI",
    maxChapters: 4,
    aliases: ["2 ti-m\xF4-th\xEA", "ii ti-m\xF4-th\xEA", "2 ti m\xF4 th\xEA", "2 ti", "ii ti", "2tm", "2 tm", "2tim", "2 timothy"]
  },
  {
    number: 56,
    name: "T\xEDt",
    shortName: "Tt",
    osis: "Titus",
    youVersionCode: "TIT",
    maxChapters: 3,
    aliases: ["t\xEDt", "tito", "tit", "titus"]
  },
  {
    number: 57,
    name: "Phi-l\xEA-m\xF4n",
    shortName: "Phm",
    osis: "Phlm",
    youVersionCode: "PHM",
    maxChapters: 1,
    aliases: ["phi-l\xEA-m\xF4n", "phi l\xEA m\xF4n", "phil\xEAm\xF4n", "plm", "phm", "phlm", "philemon"]
  },
  {
    number: 58,
    name: "H\xEA-b\u01A1-r\u01A1",
    shortName: "Hb",
    osis: "Heb",
    youVersionCode: "HEB",
    maxChapters: 13,
    aliases: ["h\xEA-b\u01A1-r\u01A1", "h\xEA b\u01A1 r\u01A1", "h\xEAb\u01A1r\u01A1", "do th\xE1i", "hbr", "heb", "hebrews"]
  },
  {
    number: 59,
    name: "Gia-c\u01A1",
    shortName: "Gc",
    osis: "Jas",
    youVersionCode: "JAS",
    maxChapters: 5,
    aliases: ["gia-c\u01A1", "gia c\u01A1", "giac\u01A1", "gc", "jas", "jam", "james"]
  },
  {
    number: 60,
    name: "1 Phi-e-r\u01A1",
    shortName: "1Pr",
    osis: "1Pet",
    youVersionCode: "1PE",
    maxChapters: 5,
    aliases: ["1 phi-e-r\u01A1", "i phi-e-r\u01A1", "1 phi e r\u01A1", "1 ph\xEA-r\xF4", "1 phi-r\u01A1", "1 ph", "1pr", "1pe", "1pet", "1 peter"]
  },
  {
    number: 61,
    name: "2 Phi-e-r\u01A1",
    shortName: "2Pr",
    osis: "2Pet",
    youVersionCode: "2PE",
    maxChapters: 3,
    aliases: ["2 phi-e-r\u01A1", "ii phi-e-r\u01A1", "2 phi e r\u01A1", "2 ph\xEA-r\xF4", "2 phi-r\u01A1", "2 ph", "2pr", "2pe", "2pet", "2 peter"]
  },
  {
    number: 62,
    name: "1 Gi\u0103ng",
    shortName: "1Gg",
    osis: "1John",
    youVersionCode: "1JN",
    maxChapters: 5,
    aliases: ["1 gi\u0103ng", "i gi\u0103ng", "1 gioan", "i gioan", "1 gg", "1gg", "1 ga", "1ga", "1jn", "1joh", "1john"]
  },
  {
    number: 63,
    name: "2 Gi\u0103ng",
    shortName: "2Gg",
    osis: "2John",
    youVersionCode: "2JN",
    maxChapters: 1,
    aliases: ["2 gi\u0103ng", "ii gi\u0103ng", "2 gioan", "ii gioan", "2 gg", "2gg", "2 ga", "2ga", "2jn", "2joh", "2john"]
  },
  {
    number: 64,
    name: "3 Gi\u0103ng",
    shortName: "3Gg",
    osis: "3John",
    youVersionCode: "3JN",
    maxChapters: 1,
    aliases: ["3 gi\u0103ng", "iii gi\u0103ng", "3 gioan", "iii gioan", "3 gg", "3gg", "3 ga", "3ga", "3jn", "3joh", "3john"]
  },
  {
    number: 65,
    name: "Giu-\u0111e",
    shortName: "G\u0111",
    osis: "Jude",
    youVersionCode: "JUD",
    maxChapters: 1,
    aliases: ["giu-\u0111e", "giu \u0111e", "giu\u0111a", "g\u0111", "gd", "jd", "jud", "jude"]
  },
  {
    number: 66,
    name: "Kh\u1EA3i Huy\u1EC1n",
    shortName: "Kh",
    osis: "Rev",
    youVersionCode: "REV",
    maxChapters: 22,
    aliases: ["kh\u1EA3i huy\u1EC1n", "kh\u1EA3i-huy\u1EC1n", "kh\u1EA3i", "kh", "rev", "revelation"]
  }
];
var ALIAS_LOOKUP = /* @__PURE__ */ new Map();
function normalizeAlias(input) {
  return input.toLowerCase().normalize("NFC").replace(/[\u2010\u2011\u2012\u2013\u2014\u2015]/g, "-").replace(/\s+/g, " ").trim();
}
for (const book of BIBLE_BOOKS) {
  ALIAS_LOOKUP.set(normalizeAlias(book.name), book);
  ALIAS_LOOKUP.set(normalizeAlias(book.shortName), book);
  ALIAS_LOOKUP.set(normalizeAlias(book.osis), book);
  for (const alias of book.aliases) {
    ALIAS_LOOKUP.set(normalizeAlias(alias), book);
  }
}
function findBookByAlias(alias) {
  return ALIAS_LOOKUP.get(normalizeAlias(alias));
}

// src/parser.ts
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function buildBibleRegex() {
  const allAliases = [];
  for (const book of BIBLE_BOOKS) {
    allAliases.push(book.name);
    allAliases.push(book.shortName);
    allAliases.push(book.osis);
    for (const alias of book.aliases) {
      allAliases.push(alias);
    }
  }
  const uniqueAliases = Array.from(new Set(allAliases)).sort((a, b) => b.length - a.length);
  const aliasPattern = uniqueAliases.map(escapeRegex).join("|");
  return new RegExp(
    `(?<=^|[^\\p{L}\\p{N}])(${aliasPattern})\\.?\\s*(\\d{1,3})(?:\\s*[:.,]\\s*(\\d{1,3})(?:\\s*[-\u2013\u2014]\\s*(\\d{1,3}))?)?(?=$|[^\\p{L}\\p{N}])`,
    "giu"
  );
}
var BIBLE_REFERENCE_REGEX = buildBibleRegex();
function parseReference(text) {
  const regex = new RegExp(BIBLE_REFERENCE_REGEX.source, "iu");
  const match = regex.exec(text);
  if (!match) return null;
  const rawBook = match[1];
  const book = findBookByAlias(rawBook);
  if (!book) return null;
  const chapter = parseInt(match[2], 10);
  if (chapter <= 0 || chapter > book.maxChapters) return null;
  const verseStart = match[3] ? parseInt(match[3], 10) : 1;
  const verseEnd = match[4] ? parseInt(match[4], 10) : void 0;
  if (verseEnd !== void 0 && verseEnd < verseStart) {
    return null;
  }
  return {
    rawText: match[0],
    book,
    chapter,
    verseStart,
    verseEnd
  };
}
var DEFAULT_EXCLUDE_SELECTORS = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "script",
  "style",
  "code",
  "pre",
  "noscript",
  "template",
  "head",
  ".vb-ref",
  "[data-no-bible-ref]",
  ".no-bible-ref"
];
function tagContainer(container, options = {}) {
  const className = options.className || "vb-ref";
  const excludeQuery = (options.excludeSelectors || DEFAULT_EXCLUDE_SELECTORS).join(", ");
  const textNodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (parent.closest(excludeQuery)) {
        return NodeFilter.FILTER_REJECT;
      }
      if (!node.nodeValue || node.nodeValue.trim().length === 0) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  let currentNode;
  while (currentNode = walker.nextNode()) {
    textNodes.push(currentNode);
  }
  const taggedElements = [];
  const regex = new RegExp(BIBLE_REFERENCE_REGEX.source, "giu");
  for (const textNode of textNodes) {
    const text = textNode.nodeValue;
    if (!text) continue;
    regex.lastIndex = 0;
    let match;
    let lastIndex = 0;
    const fragment = document.createDocumentFragment();
    let hasMatches = false;
    while ((match = regex.exec(text)) !== null) {
      const matchedString = match[0];
      const matchIndex = match.index;
      const rawBook = match[1];
      const book = findBookByAlias(rawBook);
      if (!book) continue;
      const chapter = parseInt(match[2], 10);
      if (chapter <= 0 || chapter > book.maxChapters) continue;
      const verseStart = match[3] ? parseInt(match[3], 10) : 1;
      const verseEnd = match[4] ? parseInt(match[4], 10) : void 0;
      if (verseEnd !== void 0 && verseEnd < verseStart) continue;
      hasMatches = true;
      if (matchIndex > lastIndex) {
        fragment.appendChild(document.createTextNode(text.substring(lastIndex, matchIndex)));
      }
      const refSpan = document.createElement("span");
      refSpan.className = className;
      refSpan.setAttribute("role", "button");
      refSpan.setAttribute("tabindex", "0");
      refSpan.setAttribute("aria-haspopup", "dialog");
      refSpan.dataset.vbBookNumber = String(book.number);
      refSpan.dataset.vbBookName = book.name;
      refSpan.dataset.vbOsis = book.osis;
      refSpan.dataset.vbYvCode = book.youVersionCode;
      refSpan.dataset.vbChapter = String(chapter);
      refSpan.dataset.vbVerseStart = String(verseStart);
      if (verseEnd !== void 0) {
        refSpan.dataset.vbVerseEnd = String(verseEnd);
      }
      refSpan.dataset.vbRawText = matchedString;
      refSpan.textContent = matchedString;
      fragment.appendChild(refSpan);
      taggedElements.push(refSpan);
      lastIndex = matchIndex + matchedString.length;
    }
    if (hasMatches) {
      if (lastIndex < text.length) {
        fragment.appendChild(document.createTextNode(text.substring(lastIndex)));
      }
      textNode.parentNode?.replaceChild(fragment, textNode);
    }
  }
  return taggedElements;
}

// src/provider.ts
var SUPPORTED_VERSIONS = {
  VI2010: {
    code: "VI2010",
    name: "B\u1EA3n Hi\u1EC7u \u0110\xEDnh 2010",
    youVersionId: 151,
    youVersionCode: "VIE2010"
  },
  VIE2010: {
    code: "VIE2010",
    name: "B\u1EA3n Hi\u1EC7u \u0110\xEDnh 2010",
    youVersionId: 151,
    youVersionCode: "VIE2010"
  },
  RVV11: {
    code: "RVV11",
    name: "B\u1EA3n Hi\u1EC7u \u0110\xEDnh 2010",
    youVersionId: 151,
    youVersionCode: "VIE2010"
  },
  VI1925: {
    code: "VI1925",
    name: "B\u1EA3n Truy\u1EC1n Th\u1ED1ng 1925",
    youVersionId: 193,
    youVersionCode: "VIE1925"
  },
  VIE1925: {
    code: "VIE1925",
    name: "B\u1EA3n Truy\u1EC1n Th\u1ED1ng 1925",
    youVersionId: 193,
    youVersionCode: "VIE1925"
  },
  BD2011: {
    code: "BD2011",
    name: "B\u1EA3n D\u1ECBch 2011",
    youVersionId: 19,
    youVersionCode: "BD2011"
  },
  NVB: {
    code: "NVB",
    name: "B\u1EA3n D\u1ECBch M\u1EDBi",
    youVersionId: 449,
    youVersionCode: "NVB"
  },
  KTHD: {
    code: "KTHD",
    name: "Kinh Th\xE1nh Hi\u1EC7n \u0110\u1EA1i",
    youVersionId: 1638,
    youVersionCode: "KTHD"
  },
  BPT: {
    code: "BPT",
    name: "B\u1EA3n Ph\u1ED5 Th\xF4ng",
    youVersionId: 205,
    youVersionCode: "BPT"
  }
};
var DEFAULT_API_BASE = "https://api.getbible.net/v2/vietnamese";
var DEFAULT_TRANSLATION = "VI2010";
var DEFAULT_TRANSLATION_LABEL = "B\u1EA3n Hi\u1EC7u \u0110\xEDnh 2010";
function cleanVietnameseVerseText(text) {
  return text.replace(/\u00D0/g, "\u0110").replace(/\u00F0/g, "\u0111").normalize("NFC").trim();
}
var VerseProvider = class {
  constructor(options = {}) {
    this.cache = /* @__PURE__ */ new Map();
    this.inflight = /* @__PURE__ */ new Map();
    const rawKey = (options.translation || DEFAULT_TRANSLATION).toUpperCase();
    const versionInfo = SUPPORTED_VERSIONS[rawKey] || SUPPORTED_VERSIONS.VI2010;
    this.options = {
      translation: options.translation || versionInfo.code,
      translationLabel: options.translationLabel || versionInfo.name,
      apiBaseUrl: options.apiBaseUrl || DEFAULT_API_BASE,
      customFetcher: options.customFetcher,
      buildChapterUrl: options.buildChapterUrl || ((q) => `https://www.bible.com/vi/bible/${versionInfo.youVersionId}/${q.youVersionCode}.${q.chapter}.${versionInfo.youVersionCode}`)
    };
  }
  /**
   * Fetches the verse text for a given query
   */
  async getVerse(query) {
    if (this.options.customFetcher) {
      return this.options.customFetcher(query);
    }
    const { bookNumber, chapter, verseStart, verseEnd, bookName } = query;
    const cacheKey = `${this.options.translation}:${bookNumber}:${chapter}`;
    let chapterData;
    if (this.cache.has(cacheKey)) {
      chapterData = this.cache.get(cacheKey);
    } else if (this.inflight.has(cacheKey)) {
      chapterData = await this.inflight.get(cacheKey);
    } else {
      const url = `${this.options.apiBaseUrl}/${bookNumber}/${chapter}.json`;
      const fetchPromise = (async () => {
        const response = await fetch(url, {
          headers: {
            Accept: "application/json"
          }
        });
        if (!response.ok) {
          throw new Error(`L\u1ED7i t\u1EA3i d\u1EEF li\u1EC7u Kinh Th\xE1nh (${response.status})`);
        }
        const data = await response.json();
        this.cache.set(cacheKey, data);
        return data;
      })();
      this.inflight.set(cacheKey, fetchPromise);
      try {
        chapterData = await fetchPromise;
      } finally {
        this.inflight.delete(cacheKey);
      }
    }
    const verses = [];
    const end = verseEnd || verseStart;
    if (chapterData && Array.isArray(chapterData.verses)) {
      for (const item of chapterData.verses) {
        if (item.verse >= verseStart && item.verse <= end) {
          verses.push({
            verse: item.verse,
            text: cleanVietnameseVerseText(item.text)
          });
        }
      }
    }
    if (verses.length === 0) {
      throw new Error(`Kh\xF4ng t\xECm th\u1EA5y c\xE2u ${verseStart}${verseEnd ? `-${verseEnd}` : ""} trong ${bookName} ${chapter}`);
    }
    const titleRange = verseEnd && verseEnd !== verseStart ? `${bookName} ${chapter}:${verseStart}-${verseEnd}` : `${bookName} ${chapter}:${verseStart}`;
    const chapterUrl = this.options.buildChapterUrl(query);
    return {
      bookNumber,
      bookName,
      chapter,
      verseStart,
      verseEnd,
      title: titleRange,
      verses,
      translation: this.options.translationLabel || DEFAULT_TRANSLATION_LABEL,
      chapterUrl
    };
  }
  clearCache() {
    this.cache.clear();
  }
};

// src/tooltip.ts
var BibleTooltipManager = class {
  constructor(provider, options = {}) {
    this.element = null;
    this.headerTitle = null;
    this.headerBadge = null;
    this.bodyContent = null;
    this.footerLink = null;
    this.copyBtn = null;
    this.arrow = null;
    this.currentTarget = null;
    this.currentResult = null;
    this.hoverTimeout = null;
    this.hideTimeout = null;
    this.provider = provider;
    this.options = {
      theme: options.theme || "auto",
      showCopyButton: options.showCopyButton ?? true,
      showChapterLink: options.showChapterLink ?? true,
      hoverDelay: options.hoverDelay ?? 120,
      hideDelay: options.hideDelay ?? 200
    };
    this.initDOM();
  }
  initDOM() {
    if (typeof document === "undefined") return;
    let tooltip = document.getElementById("vb-tooltip");
    if (!tooltip) {
      tooltip = document.createElement("div");
      tooltip.id = "vb-tooltip";
      tooltip.className = "vb-tooltip";
      tooltip.setAttribute("role", "dialog");
      tooltip.setAttribute("aria-hidden", "true");
      tooltip.innerHTML = `
        <div class="vb-tooltip-arrow"></div>
        <div class="vb-tooltip-header">
          <div class="vb-tooltip-title-wrap">
            <span class="vb-tooltip-title"></span>
            <span class="vb-tooltip-badge"></span>
          </div>
          <button type="button" class="vb-tooltip-close" aria-label="\u0110\xF3ng">&times;</button>
        </div>
        <div class="vb-tooltip-body"></div>
        <div class="vb-tooltip-footer">
          <a class="vb-btn-link" target="_blank" rel="noopener noreferrer">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span>\u0110\u1ECDc to\xE0n b\u1ED9 ch\u01B0\u01A1ng</span>
          </a>
          <button type="button" class="vb-btn-copy">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>Sao ch\xE9p</span>
          </button>
        </div>
      `;
      document.body.appendChild(tooltip);
    }
    this.element = tooltip;
    this.arrow = tooltip.querySelector(".vb-tooltip-arrow");
    this.headerTitle = tooltip.querySelector(".vb-tooltip-title");
    this.headerBadge = tooltip.querySelector(".vb-tooltip-badge");
    this.bodyContent = tooltip.querySelector(".vb-tooltip-body");
    this.footerLink = tooltip.querySelector(".vb-btn-link");
    this.copyBtn = tooltip.querySelector(".vb-btn-copy");
    if (this.options.theme && this.options.theme !== "auto") {
      this.element.setAttribute("data-vb-theme", this.options.theme);
    }
    if (!this.options.showCopyButton && this.copyBtn) {
      this.copyBtn.style.display = "none";
    }
    if (!this.options.showChapterLink && this.footerLink) {
      this.footerLink.style.display = "none";
    }
    this.element.addEventListener("mouseenter", () => this.cancelHide());
    this.element.addEventListener("mouseleave", () => this.scheduleHide());
    const closeBtn = tooltip.querySelector(".vb-tooltip-close");
    closeBtn?.addEventListener("click", () => this.hide());
    this.copyBtn?.addEventListener("click", () => this.handleCopy());
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.hide();
    });
    document.addEventListener("pointerdown", (e) => {
      if (!this.element || !this.currentTarget) return;
      const target = e.target;
      if (!this.element.contains(target) && !this.currentTarget.contains(target)) {
        this.hide();
      }
    });
    window.addEventListener("resize", () => {
      if (this.currentTarget) this.positionTooltip(this.currentTarget);
    });
    window.addEventListener("scroll", () => {
      if (this.currentTarget) this.positionTooltip(this.currentTarget);
    }, { passive: true });
  }
  attachListeners(refElement) {
    refElement.addEventListener("mouseenter", () => {
      this.cancelHide();
      this.hoverTimeout = window.setTimeout(() => {
        this.show(refElement);
      }, this.options.hoverDelay);
    });
    refElement.addEventListener("mouseleave", () => {
      this.cancelHover();
      this.scheduleHide();
    });
    refElement.addEventListener("click", (e) => {
      e.preventDefault();
      if (this.currentTarget === refElement && this.isVisible()) {
        this.hide();
      } else {
        this.show(refElement);
      }
    });
    refElement.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.show(refElement);
      }
    });
  }
  async show(refElement) {
    if (!this.element) return;
    this.cancelHide();
    this.currentTarget?.classList.remove("vb-active");
    this.currentTarget = refElement;
    refElement.classList.add("vb-active");
    const query = this.extractQuery(refElement);
    if (!query) return;
    this.renderLoading(query);
    this.positionTooltip(refElement);
    this.element.classList.add("vb-visible");
    this.element.setAttribute("aria-hidden", "false");
    try {
      const result = await this.provider.getVerse(query);
      if (this.currentTarget === refElement) {
        this.currentResult = result;
        this.renderContent(result);
        this.positionTooltip(refElement);
      }
    } catch (err) {
      if (this.currentTarget === refElement) {
        this.renderError(err instanceof Error ? err.message : "L\u1ED7i k\u1EBFt n\u1ED1i khi t\u1EA3i c\xE2u Kinh Th\xE1nh.");
        this.positionTooltip(refElement);
      }
    }
  }
  hide() {
    if (!this.element) return;
    this.element.classList.remove("vb-visible");
    this.element.setAttribute("aria-hidden", "true");
    this.currentTarget?.classList.remove("vb-active");
    this.currentTarget = null;
    this.currentResult = null;
    this.cancelHover();
    this.cancelHide();
  }
  isVisible() {
    return this.element?.classList.contains("vb-visible") ?? false;
  }
  scheduleHide() {
    this.cancelHide();
    this.hideTimeout = window.setTimeout(() => {
      this.hide();
    }, this.options.hideDelay);
  }
  cancelHide() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
  cancelHover() {
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = null;
    }
  }
  extractQuery(el) {
    const bookNumber = parseInt(el.dataset.vbBookNumber || "", 10);
    const bookName = el.dataset.vbBookName || "";
    const osis = el.dataset.vbOsis || "";
    const youVersionCode = el.dataset.vbYvCode || "";
    const chapter = parseInt(el.dataset.vbChapter || "", 10);
    const verseStart = parseInt(el.dataset.vbVerseStart || "1", 10);
    const verseEnd = el.dataset.vbVerseEnd ? parseInt(el.dataset.vbVerseEnd, 10) : void 0;
    if (isNaN(bookNumber) || isNaN(chapter)) return null;
    return {
      bookNumber,
      bookName,
      osis,
      youVersionCode,
      chapter,
      verseStart,
      verseEnd
    };
  }
  positionTooltip(target) {
    if (!this.element) return;
    const targetRect = target.getBoundingClientRect();
    const tooltipRect = this.element.getBoundingClientRect();
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const viewportWidth = document.documentElement.clientWidth;
    const margin = 12;
    const spaceAbove = targetRect.top;
    const spaceBelow = window.innerHeight - targetRect.bottom;
    const placeTop = spaceAbove >= tooltipRect.height + 14 || spaceAbove > spaceBelow;
    let top;
    if (placeTop) {
      top = targetRect.top + scrollY - tooltipRect.height - 10;
      this.element.setAttribute("data-placement", "top");
    } else {
      top = targetRect.bottom + scrollY + 10;
      this.element.setAttribute("data-placement", "bottom");
    }
    const targetCenterX = targetRect.left + scrollX + targetRect.width / 2;
    let left = targetCenterX - tooltipRect.width / 2;
    const minLeft = scrollX + margin;
    const maxLeft = scrollX + viewportWidth - tooltipRect.width - margin;
    left = Math.max(minLeft, Math.min(left, maxLeft));
    this.element.style.top = `${Math.round(top)}px`;
    this.element.style.left = `${Math.round(left)}px`;
    if (this.arrow) {
      const arrowLeft = targetCenterX - left;
      const clampedArrowLeft = Math.max(16, Math.min(arrowLeft, tooltipRect.width - 16));
      this.arrow.style.left = `${Math.round(clampedArrowLeft)}px`;
    }
  }
  renderLoading(query) {
    if (this.headerTitle) {
      const title = query.verseEnd ? `${query.bookName} ${query.chapter}:${query.verseStart}-${query.verseEnd}` : `${query.bookName} ${query.chapter}:${query.verseStart}`;
      this.headerTitle.textContent = title;
    }
    if (this.headerBadge) {
      this.headerBadge.textContent = "\u0110ang t\u1EA3i";
    }
    if (this.bodyContent) {
      this.bodyContent.innerHTML = `
        <div class="vb-tooltip-loading">
          <div class="vb-spinner"></div>
          <span>\u0110ang l\u1EA5y c\xE2u Kinh Th\xE1nh...</span>
        </div>
      `;
    }
    if (this.footerLink) {
      this.footerLink.style.visibility = "hidden";
    }
    if (this.copyBtn) {
      this.copyBtn.style.visibility = "hidden";
    }
  }
  renderContent(result) {
    if (this.headerTitle) {
      this.headerTitle.textContent = result.title;
    }
    if (this.headerBadge) {
      this.headerBadge.textContent = result.translation;
    }
    if (this.bodyContent) {
      this.bodyContent.innerHTML = result.verses.map(
        (v) => `<div class="vb-tooltip-verse"><span class="vb-tooltip-verse-num">${v.verse}</span>${this.escapeHtml(v.text)}</div>`
      ).join("");
    }
    if (this.footerLink) {
      this.footerLink.href = result.chapterUrl;
      this.footerLink.style.visibility = "visible";
    }
    if (this.copyBtn) {
      this.copyBtn.style.visibility = "visible";
      this.resetCopyButton();
    }
  }
  renderError(message) {
    if (this.headerBadge) {
      this.headerBadge.textContent = "L\u1ED7i";
    }
    if (this.bodyContent) {
      this.bodyContent.innerHTML = `<div class="vb-tooltip-error">${this.escapeHtml(message)}</div>`;
    }
    if (this.footerLink) {
      this.footerLink.style.visibility = "hidden";
    }
    if (this.copyBtn) {
      this.copyBtn.style.visibility = "hidden";
    }
  }
  async handleCopy() {
    if (!this.currentResult || !this.copyBtn) return;
    const versesText = this.currentResult.verses.map((v) => `${v.verse}. ${v.text}`).join("\n");
    const fullText = `"${versesText}" (${this.currentResult.title} - ${this.currentResult.translation})`;
    try {
      await navigator.clipboard.writeText(fullText);
      const span = this.copyBtn.querySelector("span");
      if (span) span.textContent = "\u0110\xE3 ch\xE9p!";
      this.copyBtn.classList.add("vb-copied");
      setTimeout(() => {
        this.resetCopyButton();
      }, 2e3);
    } catch {
    }
  }
  resetCopyButton() {
    if (!this.copyBtn) return;
    const span = this.copyBtn.querySelector("span");
    if (span) span.textContent = "Sao ch\xE9p";
    this.copyBtn.classList.remove("vb-copied");
  }
  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
  destroy() {
    this.element?.remove();
    this.element = null;
  }
};

// src/index.ts
function init(config = {}) {
  const provider = new VerseProvider({
    translation: config.translation,
    translationLabel: config.translationLabel,
    apiBaseUrl: config.apiBaseUrl,
    customFetcher: config.customFetcher,
    buildChapterUrl: config.buildChapterUrl
  });
  const tooltip = new BibleTooltipManager(provider, {
    theme: config.theme,
    showCopyButton: config.showCopyButton,
    showChapterLink: config.showChapterLink,
    hoverDelay: config.hoverDelay,
    hideDelay: config.hideDelay
  });
  function scanElement(container) {
    const refs = tagContainer(container, {
      className: config.className,
      excludeSelectors: config.excludeSelectors
    });
    for (const ref of refs) {
      tooltip.attachListeners(ref);
    }
    return refs;
  }
  function resolveContainers(target) {
    const tgt = target || config.target || "body";
    if (typeof tgt === "string") {
      return Array.from(document.querySelectorAll(tgt));
    }
    if (Array.isArray(tgt)) {
      return tgt;
    }
    if (tgt instanceof HTMLElement) {
      return [tgt];
    }
    return [document.body];
  }
  function scan(target) {
    const containers = resolveContainers(target);
    const allRefs = [];
    for (const container of containers) {
      allRefs.push(...scanElement(container));
    }
    return allRefs;
  }
  const initialElements = scan();
  let observer = null;
  if (config.observe && typeof MutationObserver !== "undefined") {
    observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const addedNode of Array.from(mutation.addedNodes)) {
          if (addedNode instanceof HTMLElement && !addedNode.closest(".vb-tooltip")) {
            scanElement(addedNode);
          }
        }
      }
    });
    const containers = resolveContainers();
    for (const c of containers) {
      observer.observe(c, { childList: true, subtree: true });
    }
  }
  return {
    provider,
    tooltip,
    scan,
    show: (el) => tooltip.show(el),
    hide: () => tooltip.hide(),
    destroy: () => {
      observer?.disconnect();
      tooltip.destroy();
    }
  };
}
if (typeof window !== "undefined") {
  window.VietnameseBibleTooltip = {
    init,
    parseReference,
    tagContainer,
    VerseProvider,
    BibleTooltipManager,
    BIBLE_BOOKS,
    findBookByAlias,
    SUPPORTED_VERSIONS
  };
}
export {
  BIBLE_BOOKS,
  BibleTooltipManager,
  SUPPORTED_VERSIONS,
  VerseProvider,
  findBookByAlias,
  init,
  parseReference,
  tagContainer
};
//# sourceMappingURL=index.mjs.map
