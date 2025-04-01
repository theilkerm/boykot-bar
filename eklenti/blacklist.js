const blacklist = [
    {
      name: "A101",
      url: "a101.com.tr",
      sector: "Perakende",
      boycott_reason: "Boykot",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Çetinkaya",
      url: "cetinkaya.com.tr",
      sector: "Giyim",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "D&R",
      url: "dr.com.tr",
      sector: "Yayınevi",
      boycott_reason: "Turkuvaz Grubu",
      priority: "YÜKSEK",
      alternative: ""
    },
    {
      name: "Migros",
      url: "migros.com.tr",
      sector: "Perakende",
      boycott_reason: "Boykot",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "D-Maris Bay",
      url: "dmarisbay.com",
      sector: "Otel",
      boycott_reason: "Doğuş Grubu'nun yatırımı altında",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Hyatt",
      url: "",
      sector: "Otel",
      boycott_reason: "Doğuş Grubu'nun yatırımı altında",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Park Hyatt İstanbul – Maçka Palas",
      url: "",
      sector: "Otel",
      boycott_reason: "Doğuş Grubu'nun yatırımı altında",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Avansas.com",
      url: "Avansas.com",
      sector: "Online Alışveriş",
      boycott_reason: "Sahibi Mustafa Latif Topbaş",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "ElmaSepeti.com",
      url: "ElmaSepeti.com",
      sector: "Online Alışveriş",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Memlekettengelsin.com",
      url: "Memlekettengelsin.com",
      sector: "Online Alışveriş",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "n11.com",
      url: "n11.com",
      sector: "Online Alışveriş",
      boycott_reason: "Doğuş Grubu'na ait",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Zubizu.com",
      url: "Zubizu.com",
      sector: "Online Alışveriş",
      boycott_reason: "Doğuş Grubu'na ait",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Tod's",
      url: "",
      sector: "Giyim",
      boycott_reason: "Doğuş Grubu resmi distribütör",
      priority: "DÜŞÜK",
      alternative: "Bit pazarlarıTatavla dayanışma pazarı"
    },
    {
      name: "Hogan",
      url: "",
      sector: "Giyim",
      boycott_reason: "Doğuş Grubu resmi distribütör",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Nautica",
      url: "",
      sector: "Giyim",
      boycott_reason: "Doğuş Grubu resmi distribütör",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Love Moschino",
      url: "",
      sector: "Giyim",
      boycott_reason: "Doğuş bağlantılı satış noktaları bulunuyor",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "LcWaikiki",
      url: "",
      sector: "Giyim",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Defacto",
      url: "",
      sector: "Giyim",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Mavi",
      url: "",
      sector: "Giyim",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Loro Piana",
      url: "",
      sector: "Giyim",
      boycott_reason: "Doğuş Grubu resmi distribütör",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "M Missoni",
      url: "",
      sector: "Giyim",
      boycott_reason: "Doğuş Grubu resmi distribütör",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Under Armour",
      url: "",
      sector: "Giyim",
      boycott_reason: "Doğuş Grubu resmi distribütör",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Armani",
      url: "",
      sector: "Giyim",
      boycott_reason: "Doğuş Grubu resmi distribütör",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Capritouch",
      url: "",
      sector: "Giyim",
      boycott_reason: "Doğuş Grubu resmi distribütör",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Gencallar",
      url: "",
      sector: "Giyim",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Gucci",
      url: "",
      sector: "Giyim",
      boycott_reason: "f",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Huzur",
      url: "",
      sector: "Giyim",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "In4Out",
      url: "",
      sector: "Giyim",
      boycott_reason: "Doğuş Grubu",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "In-Formal",
      url: "",
      sector: "Giyim",
      boycott_reason: "Doğuş Grubu",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Espresso Lab",
      url: "",
      sector: "Gıda",
      boycott_reason: "Über yandaş",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Günaydın Et Restaurant",
      url: "",
      sector: "Gıda",
      boycott_reason: "Sahibi Doğuş Grubu",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Mezzaluna",
      url: "",
      sector: "Gıda",
      boycott_reason: "Sahibi Doğuş Grubu",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Nusret",
      url: "",
      sector: "Gıda",
      boycott_reason: "Sahibi Doğuş Grubu",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Lakırtı Cafe",
      url: "",
      sector: "Gıda",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Glob Coffee",
      url: "",
      sector: "Gıda",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Dublin Cafe",
      url: "",
      sector: "Gıda",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: "Gibi Cafe (Eskişehir)"
    },
    {
      name: "Super Coffee",
      url: "",
      sector: "Gıda",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Zuma",
      url: "",
      sector: "Gıda",
      boycott_reason: "Doğuş Grubu iş birliğiyle Türkiye'de",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Cipriani İstanbul",
      url: "",
      sector: "Gıda",
      boycott_reason: "Doğuş Grubu iş birliğiyle yürütülüyor",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Roka",
      url: "",
      sector: "Gıda",
      boycott_reason: "Doğuş ile giriş yaptı",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Mado",
      url: "",
      sector: "Gıda",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Simit Sarayı",
      url: "",
      sector: "Gıda",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Starbucks",
      url: "",
      sector: "Gıda",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Bereket Döner",
      url: "",
      sector: "Gıda",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Ülker",
      url: "",
      sector: "Gıda",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "McDonalds",
      url: "",
      sector: "Gıda",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Burger King",
      url: "",
      sector: "Gıda",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Kızılkayalar Hamburger",
      url: "",
      sector: "Gıda",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Çitlekçi",
      url: "",
      sector: "Gıda",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Pastavilla",
      url: "",
      sector: "Gıda",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Altus",
      url: "",
      sector: "Gıda",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Dönerci Hacıbaba",
      url: "",
      sector: "Gıda",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Populist",
      url: "",
      sector: "Gıda",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Bıyık",
      url: "",
      sector: "Gıda",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Soulmate Coffee",
      url: "",
      sector: "Gıda",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Kiko Milano",
      url: "",
      sector: "Kozmetik",
      boycott_reason: "Doğuş Grubu resmi distribütör",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Watsons",
      url: "",
      sector: "Kozmetik",
      boycott_reason: "Aksan Holding",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Eyüp Sabri Tuncer",
      url: "",
      sector: "Kozmetik",
      boycott_reason: "2020 sonrası şirketin bazı karar alma pozisyonlarında iktidara yakın kişiler yer aldı.",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "HC Hair Care",
      url: "",
      sector: "Kozmetik",
      boycott_reason: "Lider Kozmetik. HC Hair Care - Lider Kozmetik'in bazı ticari faaliyetleri ve destek aldığı projeler dolayısıyla iktidara yakın STK'larla ortak çalıştığı biliniyor.",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Sinoz Kozmetik",
      url: "",
      sector: "Kozmetik",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Gratis",
      url: "",
      sector: "Kozmetik",
      boycott_reason: "Sedes Holding",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Hobby",
      url: "",
      sector: "Kozmetik",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Ketebe Yayınevi",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "Sahibi Albayrak medya",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Türkiye İş Bankası Yayınları",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Yapı Kredi Yayınları",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Can Yayınları",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Doğan Kitap",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Artemis",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Perseus Yayınevi",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Arkadya",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Jaguar Kitap",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Maya Kitap",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Nemesis Kitap",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "İthaki Yayınları",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Yabancı Yayınları",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Pegasus Yayınları",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Altın Kitapları",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Olimpos",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Indigo Kitap",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Epsilon",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Guardian",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Lapis",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Kırmızıkedi",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Deli Dolu",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Timaş",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Ephesus",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Dokuz Yayınları",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Martı Yayın Grubu",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Domingo",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Ren Kitap",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Dex Kitap",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Athica",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Beta",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Hız Yayınları",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Oleksa Yayınevi",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Aylak",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Dergah",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Alfa Yayınları",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Nox",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Pukka",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Bilgi Yayın",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Eksik Parça",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Kolektif",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "MKB Yayın",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Yargı Yayın",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Mona Kitap",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Everest",
      url: "",
      sector: "Yayınevi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "İddaa",
      url: "",
      sector: "Şans Oyunları",
      boycott_reason: "Demirören Holding",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Misli.com",
      url: "",
      sector: "Şans Oyunları",
      boycott_reason: "Demirören Holding",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Sisal Şans",
      url: "",
      sector: "Şans Oyunları",
      boycott_reason: "Demirören Holding",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Milli Piyango",
      url: "",
      sector: "Şans Oyunları",
      boycott_reason: "Demirören Holding",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "CNN Türk",
      url: "",
      sector: "Medya",
      boycott_reason: "Demirören Holding",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "Kanal D",
      url: "",
      sector: "Medya",
      boycott_reason: "Demirören Holding",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "Dreamtürk",
      url: "",
      sector: "Medya",
      boycott_reason: "Demirören Holding",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "Cartoon Network",
      url: "",
      sector: "Medya",
      boycott_reason: "Demirören Holding",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "Çocuk Smart",
      url: "",
      sector: "Medya",
      boycott_reason: "Demirören Holding",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "NBA TV",
      url: "",
      sector: "Medya",
      boycott_reason: "Demirören Holding",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "Spor Smart",
      url: "",
      sector: "Medya",
      boycott_reason: "Demirören Holding",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "teve2",
      url: "",
      sector: "Medya",
      boycott_reason: "Demirören Holding",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "D-Smart",
      url: "",
      sector: "Medya",
      boycott_reason: "Demirören Holding",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "puhutv",
      url: "",
      sector: "Medya",
      boycott_reason: "Doğuş Grubu",
      priority: "DÜŞÜK",
      alternative: "140Journos"
    },
    {
      name: "NTV",
      url: "",
      sector: "Medya",
      boycott_reason: "Doğuş Grubu",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "Star TV",
      url: "",
      sector: "Medya",
      boycott_reason: "Doğuş Grubu",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "TV8",
      url: "",
      sector: "Medya",
      boycott_reason: "Doğuş Grubu %30'u Acun Medya'dan aldı",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "Eurostar",
      url: "",
      sector: "Medya",
      boycott_reason: "Doğuş Grubu",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "Kral POP TV",
      url: "",
      sector: "Medya",
      boycott_reason: "Doğuş Grubu",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "Kral TV",
      url: "",
      sector: "Medya",
      boycott_reason: "Doğuş Grubu",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "NTV Avrupa",
      url: "",
      sector: "Medya",
      boycott_reason: "Doğuş Grubu",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "NTV Spor",
      url: "",
      sector: "Medya",
      boycott_reason: "Doğuş Grubu",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "A Spor",
      url: "",
      sector: "Medya",
      boycott_reason: "Turkuvaz Medya Grubu",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "ATV",
      url: "",
      sector: "Medya",
      boycott_reason: "Turkuvaz Medya Grubu",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "A Haber",
      url: "",
      sector: "Medya",
      boycott_reason: "Turkuvaz Medya Grubu",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "İzmir TV",
      url: "",
      sector: "Medya",
      boycott_reason: "Turkuvaz Medya Grubu",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "Minika",
      url: "",
      sector: "Medya",
      boycott_reason: "Turkuvaz Medya Grubu",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "Yeni Asır TV",
      url: "",
      sector: "Medya",
      boycott_reason: "Turkuvaz Medya Grubu",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "TGRT Haber",
      url: "",
      sector: "Medya",
      boycott_reason: "İhlas Holding",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "360 TV",
      url: "",
      sector: "Medya",
      boycott_reason: "Esmedya (Ethem Sancak)",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "Kanal 24 TV",
      url: "",
      sector: "Medya",
      boycott_reason: "Star Medya Grubu (Ethem Sancak)",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "Kanal 7",
      url: "",
      sector: "Medya",
      boycott_reason: "Yeni Dünya Medya Grubu",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "Ülke TV",
      url: "",
      sector: "Medya",
      boycott_reason: "Yeni Dünya Medya Grubu",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "Beyaz TV",
      url: "",
      sector: "Medya",
      boycott_reason: "Melih Gökçek'e ait",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "Digiturk",
      url: "",
      sector: "Medya",
      boycott_reason: "Katarlı beIN Media Group'a ait",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "Hilal TV",
      url: "",
      sector: "Medya",
      boycott_reason: "Akabe Vakfı",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "TRT",
      url: "",
      sector: "Medya",
      boycott_reason: "Propoganda medyası",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "TV4",
      url: "",
      sector: "Medya",
      boycott_reason: "Star Medya Grubu (Ethem Sancak)",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "TV5",
      url: "",
      sector: "Medya",
      boycott_reason: "Saadet Partisi Kanalı",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "TVNET",
      url: "",
      sector: "Medya",
      boycott_reason: "Albayrak Holding",
      priority: "DÜŞÜK",
      alternative: "Halk TVFox TV"
    },
    {
      name: "Arkitekt",
      url: "",
      sector: "Medya",
      boycott_reason: "Sahibi Albayrak medya",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Sabah Gazetesi",
      url: "",
      sector: "Gazete",
      boycott_reason: "Turkuvaz Medya Grubu",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "Takvim Gazetesi",
      url: "",
      sector: "Gazete",
      boycott_reason: "Turkuvaz Medya Grubu",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "Yeni Asır Gazetesi",
      url: "",
      sector: "Gazete",
      boycott_reason: "Turkuvaz Medya Grubu",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "Fotomaç Gazetesi",
      url: "",
      sector: "Gazete",
      boycott_reason: "Turkuvaz Medya Grubu",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "Yeni Şafak",
      url: "",
      sector: "Gazete",
      boycott_reason: "Albayrak Medya",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "GZT",
      url: "",
      sector: "Gazete",
      boycott_reason: "Albayrak Medya",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "Fanatik",
      url: "",
      sector: "Gazete",
      boycott_reason: "Demirören Holding",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "Milliyet Gazetesi",
      url: "",
      sector: "Gazete",
      boycott_reason: "Demirören Holding",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "Posta",
      url: "",
      sector: "Gazete",
      boycott_reason: "Demirören Holding",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "Vatan Gazetesi",
      url: "",
      sector: "Gazete",
      boycott_reason: "Demirören Holding",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "Otohaber",
      url: "",
      sector: "Gazete",
      boycott_reason: "Turkuvaz Medya Grubu",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "Fikriyat",
      url: "",
      sector: "Gazete",
      boycott_reason: "Turkuvaz Medya Grubu",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "Daily Sabah",
      url: "",
      sector: "Gazete",
      boycott_reason: "Turkuvaz Medya Grubu",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "Akşam Gazetesi",
      url: "",
      sector: "Gazete",
      boycott_reason: "Esmedya (Ethem Sancak)",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "Güneş Gazetesi",
      url: "",
      sector: "Gazete",
      boycott_reason: "Esmedya (Ethem Sancak)",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "Star Gazetesi",
      url: "",
      sector: "Gazete",
      boycott_reason: "Star Medya Grubu (Ethem Sancak)",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "Karar Gazetesi",
      url: "",
      sector: "Gazete",
      boycott_reason: "Propoganda",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "Türkiye Gazetesi",
      url: "",
      sector: "Gazete",
      boycott_reason: "İhlas Holding",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "Diriliş Postası",
      url: "",
      sector: "Gazete",
      boycott_reason: "Ali Yıldız ve Mehmet Akosman",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "Milat Gazetesi",
      url: "",
      sector: "Gazete",
      boycott_reason: "Propoganda",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "İstiklal Gazetesi",
      url: "",
      sector: "Gazete",
      boycott_reason: "Süleymancılar Tarikatı",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "Yeni Asya",
      url: "",
      sector: "Gazete",
      boycott_reason: "Nurcuların Gazetesi",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "Yeni Söz",
      url: "",
      sector: "Gazete",
      boycott_reason: "Ali Adakoğlu",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "Yeni Birlik",
      url: "",
      sector: "Gazete",
      boycott_reason: "Gül, Arınç, Davutoğlu",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "Yeni Akit",
      url: "",
      sector: "Gazete",
      boycott_reason: "Propoganda",
      priority: "DÜŞÜK",
      alternative: "CumhuriyetGazete DuvarSözcüEvrenselBirGün"
    },
    {
      name: "Cins Dergi",
      url: "",
      sector: "Dergi",
      boycott_reason: "Sahibi Albayrak medya",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Gerçek Hayat Dergisi",
      url: "",
      sector: "Dergi",
      boycott_reason: "Sahibi Albayrak medya",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Post Öykü Dergisi",
      url: "",
      sector: "Dergi",
      boycott_reason: "Sahibi Albayrak medya",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Skyroad Dergi",
      url: "",
      sector: "Dergi",
      boycott_reason: "Sahibi Albayrak medya",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Z Raporu",
      url: "",
      sector: "Dergi",
      boycott_reason: "Sahibi Albayrak medya",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Bilge Minik",
      url: "",
      sector: "Dergi",
      boycott_reason: "Sahibi Albayrak medya",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Bilge Çocuk",
      url: "",
      sector: "Dergi",
      boycott_reason: "Sahibi Albayrak medya",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Lokma Dergisi",
      url: "",
      sector: "Dergi",
      boycott_reason: "Sahibi Albayrak medya",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Nihayet Dergisi",
      url: "",
      sector: "Dergi",
      boycott_reason: "Sahibi Albayrak medya",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Derin Tarih Dergisi",
      url: "",
      sector: "Dergi",
      boycott_reason: "Sahibi Albayrak medya",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Vogue Türkiye",
      url: "",
      sector: "Dergi",
      boycott_reason: "Ocak 2020'de Turkuvaz Medya Grubu'na geçti.",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Cosmopolitan",
      url: "",
      sector: "Dergi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Forbes Türkiye",
      url: "",
      sector: "Dergi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "GQ Türkiye",
      url: "",
      sector: "Dergi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Harper's Bazaar",
      url: "",
      sector: "Dergi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "HomeArt",
      url: "",
      sector: "Dergi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "House Beautiful",
      url: "",
      sector: "Dergi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Lacivert",
      url: "",
      sector: "Dergi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Otohaber",
      url: "",
      sector: "Dergi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Sofra Dergisi",
      url: "",
      sector: "Dergi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Para Dergisi",
      url: "",
      sector: "Dergi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Şamdan Plus Dergisi",
      url: "",
      sector: "Dergi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Kafa Dergisi",
      url: "",
      sector: "Dergi",
      boycott_reason: "Candaş Tolga Işık",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Alem",
      url: "",
      sector: "Dergi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Autocar",
      url: "",
      sector: "Dergi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Bebeğim ve Biz",
      url: "",
      sector: "Dergi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "China Today",
      url: "",
      sector: "Dergi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Conde Nast Traveller Türkiye",
      url: "",
      sector: "Dergi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Mecra",
      url: "",
      sector: "Dergi",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Kral FM",
      url: "",
      sector: "Radyo",
      boycott_reason: "Doğuş Grubu",
      priority: "DÜŞÜK",
      alternative: "Açık Radyo"
    },
    {
      name: "NTV Radyo",
      url: "",
      sector: "Radyo",
      boycott_reason: "Doğuş Grubu",
      priority: "DÜŞÜK",
      alternative: "Açık Radyo"
    },
    {
      name: "Kralpop Radyo",
      url: "",
      sector: "Radyo",
      boycott_reason: "Doğuş Grubu",
      priority: "DÜŞÜK",
      alternative: "Açık Radyo"
    },
    {
      name: "Radyo Eksen",
      url: "",
      sector: "Radyo",
      boycott_reason: "Doğuş Grubu",
      priority: "DÜŞÜK",
      alternative: "Açık Radyo"
    },
    {
      name: "Radyo Voyage",
      url: "",
      sector: "Radyo",
      boycott_reason: "Doğuş Grubu",
      priority: "DÜŞÜK",
      alternative: "Açık Radyo"
    },
    {
      name: "Kral World Radyo",
      url: "",
      sector: "Radyo",
      boycott_reason: "Doğuş Grubu",
      priority: "DÜŞÜK",
      alternative: "Açık Radyo"
    },
    {
      name: "Voyage Radyo",
      url: "",
      sector: "Radyo",
      boycott_reason: "Doğuş Grubu",
      priority: "DÜŞÜK",
      alternative: "Açık Radyo"
    },
    {
      name: "CNN Türk Radyo",
      url: "",
      sector: "Radyo",
      boycott_reason: "Demirören Holding",
      priority: "DÜŞÜK",
      alternative: "Açık Radyo"
    },
    {
      name: "Radyo D",
      url: "",
      sector: "Radyo",
      boycott_reason: "Demirören Holding",
      priority: "DÜŞÜK",
      alternative: "Açık Radyo"
    },
    {
      name: "A Haber Radyo",
      url: "",
      sector: "Radyo",
      boycott_reason: "Turkuvaz Medya Grubu",
      priority: "DÜŞÜK",
      alternative: "Açık Radyo"
    },
    {
      name: "A Spor Radyo",
      url: "",
      sector: "Radyo",
      boycott_reason: "Turkuvaz Medya Grubu",
      priority: "DÜŞÜK",
      alternative: "Açık Radyo"
    },
    {
      name: "Alem FM",
      url: "",
      sector: "Radyo",
      boycott_reason: "TürkMedya",
      priority: "DÜŞÜK",
      alternative: "Açık Radyo"
    },
    {
      name: "Lig Radyo",
      url: "",
      sector: "Radyo",
      boycott_reason: "TürkMedya",
      priority: "DÜŞÜK",
      alternative: "Açık Radyo"
    },
    {
      name: "24 Radyo",
      url: "",
      sector: "Radyo",
      boycott_reason: "TürkMedya",
      priority: "DÜŞÜK",
      alternative: "Açık Radyo"
    },
    {
      name: "Radyo Turkuvaz",
      url: "",
      sector: "Radyo",
      boycott_reason: "Turkuvaz Medya Grubu",
      priority: "DÜŞÜK",
      alternative: "Açık Radyo"
    },
    {
      name: "Romantik Radyo",
      url: "",
      sector: "Radyo",
      boycott_reason: "Turkuvaz Medya Grubu",
      priority: "DÜŞÜK",
      alternative: "Açık Radyo"
    },
    {
      name: "Turkuvaz Efsane",
      url: "",
      sector: "Radyo",
      boycott_reason: "Turkuvaz Medya Grubu",
      priority: "DÜŞÜK",
      alternative: "Açık Radyo"
    },
    {
      name: "Turkuvaz Romantik",
      url: "",
      sector: "Radyo",
      boycott_reason: "Turkuvaz Medya Grubu",
      priority: "DÜŞÜK",
      alternative: "Açık Radyo"
    },
    {
      name: "Vav Radyo",
      url: "",
      sector: "Radyo",
      boycott_reason: "Turkuvaz Medya Grubu",
      priority: "DÜŞÜK",
      alternative: "Açık Radyo"
    },
    {
      name: "Radyo ABC",
      url: "",
      sector: "Radyo",
      boycott_reason: "Star Medya Grubu (Ethem Sancak)",
      priority: "DÜŞÜK",
      alternative: "Açık Radyo"
    },
    {
      name: "Doğuş Otomativ",
      url: "",
      sector: "Otomotiv",
      boycott_reason: "Sahibi Doğuş Grubu",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Milangaz",
      url: "",
      sector: "Gaz",
      boycott_reason: "Demirören Holding sahibi",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Bugatti",
      url: "",
      sector: "Otomotiv",
      boycott_reason: "Doğuş Otomotiv Türkiye distribütörüdür.",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Volkswagen Grubu",
      url: "",
      sector: "Otomotiv",
      boycott_reason: "Doğuş Otomotiv Türkiye distribütörüdür.",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Audi",
      url: "",
      sector: "Otomotiv",
      boycott_reason: "Doğuş Otomotiv Türkiye distribütörüdür.",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "SEAT",
      url: "",
      sector: "Otomotiv",
      boycott_reason: "Doğuş Otomotiv Türkiye distribütörüdür.",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Volkswagen",
      url: "",
      sector: "Otomotiv",
      boycott_reason: "Doğuş Otomotiv Türkiye distribütörüdür.",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Porsche",
      url: "",
      sector: "Otomotiv",
      boycott_reason: "Doğuş Otomotiv Türkiye distribütörüdür.",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Bentley",
      url: "",
      sector: "Otomotiv",
      boycott_reason: "Doğuş Otomotiv Türkiye distribütörüdür.",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Lamborghini",
      url: "",
      sector: "Otomotiv",
      boycott_reason: "Doğuş Otomotiv Türkiye distribütörüdür.",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Scania",
      url: "",
      sector: "Otomotiv",
      boycott_reason: "Doğuş Otomotiv Türkiye distribütörüdür.",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Meiller",
      url: "",
      sector: "Otomotiv",
      boycott_reason: "Doğuş Otomotiv Türkiye distribütörüdür.",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Kipper",
      url: "",
      sector: "Otomotiv",
      boycott_reason: "Doğuş Otomotiv Türkiye distribütörüdür.",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Skoda",
      url: "",
      sector: "Otomotiv",
      boycott_reason: "Doğuş Otomotiv Türkiye distribütörüdür.",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Thermo",
      url: "",
      sector: "Otomotiv",
      boycott_reason: "Doğuş Otomotiv Türkiye distribütörüdür.",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "King",
      url: "",
      sector: "Otomotiv",
      boycott_reason: "Doğuş Otomotiv Türkiye distribütörüdür.",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Krone",
      url: "",
      sector: "Otomotiv",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "DOD",
      url: "",
      sector: "Otomotiv",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "BMC",
      url: "",
      sector: "Otomotiv",
      boycott_reason: "Ethem Sancak'a ait",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Emin Otomotiv",
      url: "",
      sector: "Otomotiv",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "Togg",
      url: "",
      sector: "Otomotiv",
      boycott_reason: "",
      priority: "DÜŞÜK",
      alternative: ""
    },
    {
      name: "BİM",
      url: "",
      sector: "Perakende",
      boycott_reason: "",
      priority: "YÜKSEK",
      alternative: ""
    },
    {
      name: "Altunbilekler",
      url: "",
      sector: "Perakende",
      boycott_reason: "",
      priority: "YÜKSEK",
      alternative: ""
    },
    {
      name: "Bizim",
      url: "",
      sector: "Perakende",
      boycott_reason: "",
      priority: "YÜKSEK",
      alternative: ""
    },
    {
      name: "Çağrı",
      url: "",
      sector: "Perakende",
      boycott_reason: "",
      priority: "YÜKSEK",
      alternative: ""
    },
    {
      name: "Gimsa",
      url: "",
      sector: "Perakende",
      boycott_reason: "",
      priority: "YÜKSEK",
      alternative: ""
    },
    {
      name: "Happy Center",
      url: "",
      sector: "Perakende",
      boycott_reason: "",
      priority: "YÜKSEK",
      alternative: ""
    },
    {
      name: "İsmar",
      url: "",
      sector: "Perakende",
      boycott_reason: "",
      priority: "YÜKSEK",
      alternative: ""
    },
    {
      name: "Kiler",
      url: "",
      sector: "Perakende",
      boycott_reason: "",
      priority: "YÜKSEK",
      alternative: ""
    },
    {
      name: "Namlı",
      url: "",
      sector: "Perakende",
      boycott_reason: "",
      priority: "YÜKSEK",
      alternative: ""
    },
    {
      name: "Mopaş",
      url: "",
      sector: "Perakende",
      boycott_reason: "",
      priority: "YÜKSEK",
      alternative: ""
    },
    {
      name: "Şop",
      url: "",
      sector: "Perakende",
      boycott_reason: "",
      priority: "YÜKSEK",
      alternative: ""
    },
    {
      name: "Yimpaş",
      url: "",
      sector: "Perakende",
      boycott_reason: "",
      priority: "YÜKSEK",
      alternative: ""
    },
    {
        name: "trendyol",
        url: "trendyol.com",
        sector: "Perakende",
        boycott_reason: "",
        priority: "YÜKSEK",
        alternative: ""
      }
  ];