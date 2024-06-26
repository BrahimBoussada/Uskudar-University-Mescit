import { defineConfig, type DefaultTheme } from "vitepress";

export const tr = defineConfig({
  lang: "tr-TR",
  description: "Namaz kıl, ders çalış ve öğren",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/": { base: "/", items: sidebarEn() },
      "/tr/": { base: "/tr/", items: sidebarTr() },
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: "Ana Sayfa", link: "/tr/" },
    { text: "Namaz Alanları", link: "/tr/prayer-spaces" },
    { text: "Namaz Vakti", link: "/tr/prayer-time" },
    { text: "Kur'an", link: "/tr/quran/" },
    { text: "İndir", link: "/tr/download" },
    { text: "Hakkında", link: "/tr/about" },
    { text: "İletişim", link: "/tr/contact" },
  ];
}

function sidebarEn(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Chapters",
      items: [
        { text: "1 &nbsp; Al-Fatihah", link: "quran/1" },
        { text: "2 &nbsp; Al-Baqarah", link: "quran/2" },
        { text: "3 &nbsp; Ali 'Imran", link: "quran/3" },
        { text: "4 &nbsp; An-Nisa", link: "quran/4" },
        { text: "5 &nbsp; Al-Ma'idah", link: "quran/5" },
        { text: "6 &nbsp; Al-An'am", link: "quran/6" },
        { text: "7 &nbsp; Al-A'raf", link: "quran/7" },
        { text: "8 &nbsp; Al-Anfal", link: "quran/8" },
        { text: "9 &nbsp; At-Tawbah", link: "quran/9" },
        { text: "10 &nbsp; Yunus", link: "quran/10" },
        { text: "11 &nbsp; Hud", link: "quran/11" },
        { text: "12 &nbsp; Yusuf", link: "quran/12" },
        { text: "13 &nbsp; Ar-Ra'd", link: "quran/13" },
        { text: "14 &nbsp; Ibrahim", link: "quran/14" },
        { text: "15 &nbsp; Al-Hijr", link: "quran/15" },
        { text: "16 &nbsp; An-Nahl", link: "quran/16" },
        { text: "17 &nbsp; Al-Isra", link: "quran/17" },
        { text: "18 &nbsp; Al-Kahf", link: "quran/18" },
        { text: "19 &nbsp; Maryam", link: "quran/19" },
        { text: "20 &nbsp; Taha", link: "quran/20" },
        { text: "21 &nbsp; Al-Anbya", link: "quran/21" },
        { text: "22 &nbsp; Al-Hajj", link: "quran/22" },
        { text: "23 &nbsp; Al-Mu'minun", link: "quran/23" },
        { text: "24 &nbsp; An-Nur", link: "quran/24" },
        { text: "25 &nbsp; Al-Furqan", link: "quran/25" },
        { text: "26 &nbsp; Ash-Shu'ara", link: "quran/26" },
        { text: "27 &nbsp; An-Naml", link: "quran/27" },
        { text: "28 &nbsp; Al-Qasas", link: "quran/28" },
        { text: "29 &nbsp; Al-'Ankabut", link: "quran/29" },
        { text: "30 &nbsp; Ar-Rum", link: "quran/30" },
        { text: "31 &nbsp; Luqman", link: "quran/31" },
        { text: "32 &nbsp; As-Sajdah", link: "quran/32" },
        { text: "33 &nbsp; Al-Ahzab", link: "quran/33" },
        { text: "34 &nbsp; Saba", link: "quran/34" },
        { text: "35 &nbsp; Fatir", link: "quran/35" },
        { text: "36 &nbsp; Ya-Sin", link: "quran/36" },
        { text: "37 &nbsp; As-Saffat", link: "quran/37" },
        { text: "38 &nbsp; Sad", link: "quran/38" },
        { text: "39 &nbsp; Az-Zumar", link: "quran/39" },
        { text: "40 &nbsp; Ghafir", link: "quran/40" },
        { text: "41 &nbsp; Fussilat", link: "quran/41" },
        { text: "42 &nbsp; Ash-Shuraa", link: "quran/42" },
        { text: "43 &nbsp; Az-Zukhruf", link: "quran/43" },
        { text: "44 &nbsp; Ad-Dukhan", link: "quran/44" },
        { text: "45 &nbsp; Al-Jathiyah", link: "quran/45" },
        { text: "46 &nbsp; Al-Ahqaf", link: "quran/46" },
        { text: "47 &nbsp; Muhammad", link: "quran/47" },
        { text: "48 &nbsp; Al-Fath", link: "quran/48" },
        { text: "49 &nbsp; Al-Hujurat", link: "quran/49" },
        { text: "50 &nbsp; Qaf", link: "quran/50" },
        { text: "51 &nbsp; Adh-Dhariyat", link: "quran/51" },
        { text: "52 &nbsp; At-Tur", link: "quran/52" },
        { text: "53 &nbsp; An-Najm", link: "quran/53" },
        { text: "54 &nbsp; Al-Qamar", link: "quran/54" },
        { text: "55 &nbsp; Ar-Rahman", link: "quran/55" },
        { text: "56 &nbsp; Al-Waqi'ah", link: "quran/56" },
        { text: "57 &nbsp; Al-Hadid", link: "quran/57" },
        { text: "58 &nbsp; Al-Mujadila", link: "quran/58" },
        { text: "59 &nbsp; Al-Hashr", link: "quran/59" },
        { text: "60 &nbsp; Al-Mumtahanah", link: "quran/60" },
        { text: "61 &nbsp; As-Saf", link: "quran/61" },
        { text: "62 &nbsp; Al-Jumu'ah", link: "quran/62" },
        { text: "63 &nbsp; Al-Munafiqun", link: "quran/63" },
        { text: "64 &nbsp; At-Taghabun", link: "quran/64" },
        { text: "65 &nbsp; At-Talaq", link: "quran/65" },
        { text: "66 &nbsp; At-Tahrim", link: "quran/66" },
        { text: "67 &nbsp; Al-Mulk", link: "quran/67" },
        { text: "68 &nbsp; Al-Qalam", link: "quran/68" },
        { text: "69 &nbsp; Al-Haqqah", link: "quran/69" },
        { text: "70 &nbsp; Al-Ma'arij", link: "quran/70" },
        { text: "71 &nbsp; Nuh", link: "quran/71" },
        { text: "72 &nbsp; Al-Jinn", link: "quran/72" },
        { text: "73 &nbsp; Al-Muzzammil", link: "quran/73" },
        { text: "74 &nbsp; Al-Muddaththir", link: "quran/74" },
        { text: "75 &nbsp; Al-Qiyamah", link: "quran/75" },
        { text: "76 &nbsp; Al-Insan", link: "quran/76" },
        { text: "77 &nbsp; Al-Mursalat", link: "quran/77" },
        { text: "78 &nbsp; An-Naba", link: "quran/78" },
        { text: "79 &nbsp; An-Nazi'at", link: "quran/79" },
        { text: "80 &nbsp; 'Abasa", link: "quran/80" },
        { text: "81 &nbsp; At-Takwir", link: "quran/81" },
        { text: "82 &nbsp; Al-Infitar", link: "quran/82" },
        { text: "83 &nbsp; Al-Mutaffifin", link: "quran/83" },
        { text: "84 &nbsp; Al-Inshiqaq", link: "quran/84" },
        { text: "85 &nbsp; Al-Buruj", link: "quran/85" },
        { text: "86 &nbsp; At-Tariq", link: "quran/86" },
        { text: "87 &nbsp; Al-A'la", link: "quran/87" },
        { text: "88 &nbsp; Al-Ghashiyah", link: "quran/88" },
        { text: "89 &nbsp; Al-Fajr", link: "quran/89" },
        { text: "90 &nbsp; Al-Balad", link: "quran/90" },
        { text: "91 &nbsp; Ash-Shams", link: "quran/91" },
        { text: "92 &nbsp; Al-Layl", link: "quran/92" },
        { text: "93 &nbsp; Ad-Duhaa", link: "quran/93" },
        { text: "94 &nbsp; Ash-Sharh", link: "quran/94" },
        { text: "95 &nbsp; At-Tin", link: "quran/95" },
        { text: "96 &nbsp; Al-'Alaq", link: "quran/96" },
        { text: "97 &nbsp; Al-Qadr", link: "quran/97" },
        { text: "98 &nbsp; Al-Bayyinah", link: "quran/98" },
        { text: "99 &nbsp; Az-Zalzalah", link: "quran/99" },
        { text: "100 &nbsp; Al-'Adiyat", link: "quran/100" },
        { text: "101 &nbsp; Al-Qari'ah", link: "quran/101" },
        { text: "102 &nbsp; At-Takathur", link: "quran/102" },
        { text: "103 &nbsp; Al-'Asr", link: "quran/103" },
        { text: "104 &nbsp; Al-Humazah", link: "quran/104" },
        { text: "105 &nbsp; Al-Fil", link: "quran/105" },
        { text: "106 &nbsp; Quraysh", link: "quran/106" },
        { text: "107 &nbsp; Al-Ma'un", link: "quran/107" },
        { text: "108 &nbsp; Al-Kawthar", link: "quran/108" },
        { text: "109 &nbsp; Al-Kafirun", link: "quran/109" },
        { text: "110 &nbsp; An-Nasr", link: "quran/110" },
        { text: "111 &nbsp; Al-Masad", link: "quran/111" },
        { text: "112 &nbsp; Al-Ikhlas", link: "quran/112" },
        { text: "113 &nbsp; Al-Falaq", link: "quran/113" },
        { text: "114 &nbsp; An-Nas", link: "quran/114" },
      ],
    },
  ];
}

function sidebarTr(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Sure",
      items: [
        { text: "1 &nbsp; Fatiha", link: "quran/1" },
        { text: "2 &nbsp; Bakara", link: "quran/2" },
        { text: "3 &nbsp; Âl-i İmrân", link: "quran/3" },
        { text: "4 &nbsp; Nisa", link: "quran/4" },
        { text: "5 &nbsp; Maide", link: "quran/5" },
        { text: "6 &nbsp; En’âm", link: "quran/6" },
        { text: "7 &nbsp; A'raf", link: "quran/7" },
        { text: "8 &nbsp; Enfal", link: "quran/8" },
        { text: "9 &nbsp; Tevbe", link: "quran/9" },
        { text: "10 &nbsp; Yunus", link: "quran/10" },
        { text: "11 &nbsp; Hud", link: "quran/11" },
        { text: "12 &nbsp; Yusuf", link: "quran/12" },
        { text: "13 &nbsp; Ra'd", link: "quran/13" },
        { text: "14 &nbsp; İbrahim", link: "quran/14" },
        { text: "15 &nbsp; Hicr", link: "quran/15" },
        { text: "16 &nbsp; Nahl", link: "quran/16" },
        { text: "17 &nbsp; İsra", link: "quran/17" },
        { text: "18 &nbsp; Kehf", link: "quran/18" },
        { text: "19 &nbsp; Meryem", link: "quran/19" },
        { text: "20 &nbsp; Ta-Ha", link: "quran/20" },
        { text: "21 &nbsp; Enbiya", link: "quran/21" },
        { text: "22 &nbsp; Hac", link: "quran/22" },
        { text: "23 &nbsp; Mü'minun", link: "quran/23" },
        { text: "24 &nbsp; Nur", link: "quran/24" },
        { text: "25 &nbsp; Furkan", link: "quran/25" },
        { text: "26 &nbsp; Şu'ara", link: "quran/26" },
        { text: "27 &nbsp; Neml", link: "quran/27" },
        { text: "28 &nbsp; Kasas", link: "quran/28" },
        { text: "29 &nbsp; Ankebut", link: "quran/29" },
        { text: "30 &nbsp; Rum", link: "quran/30" },
        { text: "31 &nbsp; Lokman", link: "quran/31" },
        { text: "32 &nbsp; Secde", link: "quran/32" },
        { text: "33 &nbsp; Ahzab", link: "quran/33" },
        { text: "34 &nbsp; Sebe'", link: "quran/34" },
        { text: "35 &nbsp; Fatır", link: "quran/35" },
        { text: "36 &nbsp; Yasin", link: "quran/36" },
        { text: "37 &nbsp; Saffat", link: "quran/37" },
        { text: "38 &nbsp; Sad", link: "quran/38" },
        { text: "39 &nbsp; Zümer", link: "quran/39" },
        { text: "40 &nbsp; Mü'min", link: "quran/40" },
        { text: "41 &nbsp; Fussilet", link: "quran/41" },
        { text: "42 &nbsp; Şura", link: "quran/42" },
        { text: "43 &nbsp; Zuhruf", link: "quran/43" },
        { text: "44 &nbsp; Duhan", link: "quran/44" },
        { text: "45 &nbsp; Casiye", link: "quran/45" },
        { text: "46 &nbsp; Ahkaf", link: "quran/46" },
        { text: "47 &nbsp; Muhammed", link: "quran/47" },
        { text: "48 &nbsp; Fetih", link: "quran/48" },
        { text: "49 &nbsp; Hucurat", link: "quran/49" },
        { text: "50 &nbsp; Kaf", link: "quran/50" },
        { text: "51 &nbsp; Zariyat", link: "quran/51" },
        { text: "52 &nbsp; Tur", link: "quran/52" },
        { text: "53 &nbsp; Necm", link: "quran/53" },
        { text: "54 &nbsp; Kamer", link: "quran/54" },
        { text: "55 &nbsp; Rahman", link: "quran/55" },
        { text: "56 &nbsp; Vakı'a", link: "quran/56" },
        { text: "57 &nbsp; Hadid", link: "quran/57" },
        { text: "58 &nbsp; Mücadele", link: "quran/58" },
        { text: "59 &nbsp; Haşr", link: "quran/59" },
        { text: "60 &nbsp; Mümtehine", link: "quran/60" },
        { text: "61 &nbsp; Saf", link: "quran/61" },
        { text: "62 &nbsp; Cum'a", link: "quran/62" },
        { text: "63 &nbsp; Münafikun", link: "quran/63" },
        { text: "64 &nbsp; Teğabun", link: "quran/64" },
        { text: "65 &nbsp; Talak", link: "quran/65" },
        { text: "66 &nbsp; Tahrim", link: "quran/66" },
        { text: "67 &nbsp; Mülk", link: "quran/67" },
        { text: "68 &nbsp; Kalem", link: "quran/68" },
        { text: "69 &nbsp; Hakka", link: "quran/69" },
        { text: "70 &nbsp; Me'aric", link: "quran/70" },
        { text: "71 &nbsp; Nuh", link: "quran/71" },
        { text: "72 &nbsp; Cin", link: "quran/72" },
        { text: "73 &nbsp; Müzzemmil", link: "quran/73" },
        { text: "74 &nbsp; Müddesir", link: "quran/74" },
        { text: "75 &nbsp; Kıyamet", link: "quran/75" },
        { text: "76 &nbsp; İnsan", link: "quran/76" },
        { text: "77 &nbsp; Mürselat", link: "quran/77" },
        { text: "78 &nbsp; Nebe'", link: "quran/78" },
        { text: "79 &nbsp; Nazi'at", link: "quran/79" },
        { text: "80 &nbsp; Abese", link: "quran/80" },
        { text: "81 &nbsp; Tekvir", link: "quran/81" },
        { text: "82 &nbsp; İnfitar", link: "quran/82" },
        { text: "83 &nbsp; Mutaffifin", link: "quran/83" },
        { text: "84 &nbsp; İnşikak", link: "quran/84" },
        { text: "85 &nbsp; Büruc", link: "quran/85" },
        { text: "86 &nbsp; Tarık", link: "quran/86" },
        { text: "87 &nbsp; A'la", link: "quran/87" },
        { text: "88 &nbsp; Gaşiye", link: "quran/88" },
        { text: "89 &nbsp; Fecr", link: "quran/89" },
        { text: "90 &nbsp; Beled", link: "quran/90" },
        { text: "91 &nbsp; Şems", link: "quran/91" },
        { text: "92 &nbsp; Leyl", link: "quran/92" },
        { text: "93 &nbsp; Duha", link: "quran/93" },
        { text: "94 &nbsp; İnşirah", link: "quran/94" },
        { text: "95 &nbsp; Tin", link: "quran/95" },
        { text: "96 &nbsp; Âlak", link: "quran/96" },
        { text: "97 &nbsp; Kadir", link: "quran/97" },
        { text: "98 &nbsp; Beyyine", link: "quran/98" },
        { text: "99 &nbsp; Zilzal", link: "quran/99" },
        { text: "100 &nbsp; Adiyat", link: "quran/100" },
        { text: "101 &nbsp; Kari'a", link: "quran/101" },
        { text: "102 &nbsp; Tekasür", link: "quran/102" },
        { text: "103 &nbsp; Asr", link: "quran/103" },
        { text: "104 &nbsp; Hümeze", link: "quran/104" },
        { text: "105 &nbsp; Fil", link: "quran/105" },
        { text: "106 &nbsp; Kureyş", link: "quran/106" },
        { text: "107 &nbsp; Ma'un", link: "quran/107" },
        { text: "108 &nbsp; Kevser", link: "quran/108" },
        { text: "109 &nbsp; Kâfirun", link: "quran/109" },
        { text: "110 &nbsp; Nasr", link: "quran/110" },
        { text: "111 &nbsp; Tebbet", link: "quran/111" },
        { text: "112 &nbsp; İhlas", link: "quran/112" },
        { text: "113 &nbsp; Felak", link: "quran/113" },
        { text: "114 &nbsp; Nas", link: "quran/114" },
      ],
    },
  ];
}
