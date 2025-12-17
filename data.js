const movieDatabase = [
    {
        id: "m1",
        type: "movie",
        title: "Merv (2025) เมิร์ฟ สี่ขาสื่อหัวใจ",
        quality: "HD",
        category: "comudy",
        poster: "https://m.media-amazon.com/images/M/MV5BNmExNjYzNzMtOTJiYS00MmY2LThlN2UtODk5MjhkMmQwN2NjXkEyXkFqcGc@._V1_.jpg",
        url: "https://master.streamhls.com/hls/f67f50e408c9f566c7d08fc4ac518a1c/master.m3u8"
    },
    {
        id: "s1",
        type: "series",
        title: "สาธุ (2024) The Believers",
        quality: "HD",
        category: "serie",
        poster: "https://s359.kapook.com/pagebuilder/6d1330eb-9399-44df-a445-be3bbb517da5.jpg",
        episodes: [
            { title: "ตอนที่ 1", url: "https://master.steamhls88.com/hlsr2/9d47d931808f3185498af98ec547189a/master.m3u8" },
            { title: "ตอนที่ 2", url: "https://master.steamhls88.com/hlsr2/d38acbf6c807ef95e00c01182378ec4f/master.m3u8" },
            { title: "ตอนที่ 3", url: "https://master.steamhls88.com/hlsr2/10b6fa60daa9ddfc0939a0f7c1e22773/master.m3u8" },
            { title: "ตอนที่ 4", url: "https://master.steamhls88.com/hlsr2/a3c2f89a8ddc688dfa428c74ed6409ab/master.m3u8" },
            { title: "ตอนที่ 5", url: "https://master.steamhls88.com/hlsr2/b17d34c37c59fa6ac8e59e321b715a65/master.m3u8" },
            { title: "ตอนที่ 6", url: "https://master.steamhls88.com/hlsr2/9ac2a03c0877e98703b06940faa9ab68/master.m3u8" },
            { title: "ตอนที่ 7", url: "https://master.steamhls88.com/hlsr2/9b825068c0a0cc4b2f2c90278990a15f/master.m3u8" },
            { title: "ตอนที่ 8", url: "https://master.steamhls88.com/hlsr2/ea8f5ece580595be6ab44e156ee16f32/master.m3u8" },
            { title: "ตอนที่ 9", url: "https://master.steamhls88.com/hlsr2/bb6b8e584abd416fee8edce5b9bccd6b/master.m3u8" }
        ]
    },
    {
        id: "m2",
        type: "movie",
        title: "Primitive War (2025) สงครามโลกล้านปี",
        quality: "HD",
        category: "action",
        poster: "https://m.media-amazon.com/images/M/MV5BZTk4OTlmZDQtYjM2ZC00ZTg3LThlYzItNzk1YjVmYTlkNGUwXkEyXkFqcGc@._V1_.jpg",
        url: "https://master.streamhls.com/hls/3c85cfa386a8a993c94d3953ad7e5e08/master.m3u8"
    },
    {
        id: "m3",
        type: "movie",
        title: "ฝีนาค (2024) Fee Nak",
        quality: "HD",
        category: "horror",
        poster: "https://true4u.com/static/images/04325fd1-b582-44e9-9c62-4979f6b2974b.jpg",
        url: "https://master.streamhls.com/hls/7def8884be5a83291df80511b8b4a7a8/master.m3u8"
    },
    {
        id: "m4",
        type: "movie",
        title: "ท่าแร่ (2025) Tha Rae The Exorcist",
        quality: "HD",
        category: "horror",
        poster: "https://upload.wikimedia.org/wikipedia/th/e/ec/%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B9%81%E0%B8%A3%E0%B9%88.jpg",
        url: "https://master.streamhls.com/hls/c4bf0a56712ffbbc542401eb6482abd1/master.m3u8"
    },
    {
        id: "m5",
        type: "movie",
        title: "Predator Badlands (2025) พรีเดเตอร์ แดนเถื่อน",
        quality: "HD",
        category: "action",
        poster: "https://img.vwassets.com/cineversehastings.co.nz/vertical_9309a97f-2c2e-456b-bbcf-81a4654668ce.jpg",
        url: "https://master.streamhls.com/hls/74a9b3de4eeb6260f5205c6a36181752/master.m3u8"
    },
    {
        id: "m6",
        type: "movie",
        title: "Tron Ares (2025) ทรอน แอรีส",
        quality: "HD",
        category: "action",
        poster: "https://m.media-amazon.com/images/M/MV5BMmJiMWE2NTYtZWMyZC00Yzg0LTg0YjItZDM3ODlkYTRhNWNlXkEyXkFqcGc@._V1_.jpg",
        url: "https://master.streamhls.com/hls/4f6ae357d000b4a2561b77764e01b70f/master.m3u8"
    },
    {
        id: "m7",
        type: "movie",
        title: "The Grey (2011) ฝ่าฝูงเขี้ยวสยองโลก",
        quality: "HD",
        category: "action",
        poster: "https://posterspy.com/wp-content/uploads/2023/08/20230809_095437_0-glazed-intensity10.0-render2-V1.jpg",
        url: "https://master.streamhls.com/hls/27724d151b262194ae39304bb480c998/master.m3u8"
    },
    {
        id: "m8",
        type: "movie",
        title: "The Conjuring (2013) คนเรียกผี",
        quality: "HD",
        category: "horror",
        poster: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_FMjpg_UX1000_.jpg",
        url: "https://master.streamhls.com/hls/22864771f7baa38186380274c683c4d7/master.m3u8"
    },
    {
        id: "m9",
        type: "movie",
        title: "Troll (2022) โทรลล์",
        quality: "HD",
        category: "action",
        poster: "https://m.media-amazon.com/images/M/MV5BMmFmMTJkOGMtZjhkNS00YzE1LWEyZGMtZDMyNjI1ODE0Mzc5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://master.streamhls.com/hls/2332904b192a0fcf0e1c86086df02427/master.m3u8"
    },
    {
        id: "m10",
        type: "movie",
        title: "Troll 2 (2025) โทรลล์ 2",
        quality: "HD",
        category: "action",
        poster: "https://upload.wikimedia.org/wikipedia/en/a/a1/Troll_2_2025_poster.jpeg",
        url: "https://master.streamhls.com/hls/343b0aff2af89688f054633bf1410a15/master.m3u8"
    },
    {
        id: "m11",
        type: "movie",
        title: "Lilo And Stitch (2025) ลิโล่ & สติทช์",
        quality: "HD",
        category: "anime",
        poster: "https://image.tmdb.org/t/p/original/c32TsWLES7kL1uy6fF03V67AIYX.jpg",
        url: "https://master.streamhls.com/hls/4d4a9e124673b56fcb1ab48ae75ec794/master.m3u8"
    },
    {
        id: "m12",
        type: "movie",
        title: "Avatar (2009) อวตาร 4K",
        quality: "HD",
        category: "acttion",
        poster: "https://i.ebayimg.com/00/s/MTYwMFgxMDY2/z/9cAAAOSwy8xir7bm/$_57.JPG?set_id=880000500F",
        url: "https://master.streamhls.com/hls/8412420e8eb07e9dbe8479045d03243a/master.m3u8"
    },
    {
        id: "m13",
        type: "movie",
        title: "Avatar 2: The Way of Water (2022) อวตาร: วิถีแห่งสายน้ำ",
        quality: "HD",
        category: "acttion",
        poster: "https://m.media-amazon.com/images/I/71Lvqoov42L.jpg",
        url: "https://master.streamhls.com/hls/066b49de468e78b54f7ba04d5776f733/master.m3u8"
    },
    {
        id: "m14",
        type: "movie",
        title: "Wake Up Dead Man A Knives Out Mystery (2025) ฆาตกรรมหรรษา ใครฆ่าคนบาป",
        quality: "HD",
        category: "comidy",
        poster: "https://m.media-amazon.com/images/M/MV5BNzcxNjQxYWEtZTRlMy00ZDFmLTk1MGMtZGYwZjUxNjMzM2M2XkEyXkFqcGc@._V1_.jpg",
        url: "https://master.streamhls.com/hls/47d8e4d33652e1af7cd94935e769665c/master.m3u8"
    },
    {
        id: "s2",
        type: "series",
        title: "สาธุ 2 (2025) The Believers 2",
        quality: "HD",
        category: "serie",
        poster: "https://img.pptvhd36.com/thumbor/2025/12/01/news-62ce79a.jpg",
        episodes: [
            { title: "ตอนที่ 1", url: "https://master.steamhls88.com/hlsr2/54f62936a757bb60874ba80adfe08ea9/master.m3u8" },
            { title: "ตอนที่ 2", url: "https://master.steamhls88.com/hlsr2/de1c5385c8620e6cdb71f24fccbf5ddc/master.m3u8" },
            { title: "ตอนที่ 3", url: "https://master.steamhls88.com/hlsr2/9fd99c1f4b1aaf107fd44d375ae947ec/master.m3u8" },
            { title: "ตอนที่ 4", url: "https://master.steamhls88.com/hlsr2/6060d19f9206dd4fa5d2c6b0a5dee3b3/master.m3u8" },
            { title: "ตอนที่ 5", url: "https://master.steamhls88.com/hlsr2/a36993174342bfc6d004fa676f2e75c4/master.m3u8" },
            { title: "ตอนที่ 6", url: "https://master.steamhls88.com/hlsr2/84712eeaa5d9e33412191ada205ac6a5/master.m3u8" },
            { title: "ตอนที่ 7", url: "https://master.steamhls88.com/hlsr2/7b3643cbab4fa99cef892c72d2006d2b/master.m3u8" },
            { title: "ตอนที่ 8", url: "https://master.steamhls88.com/hlsr2/c4f4faaf8f6033c6736dce212bc58ba1/master.m3u8" }
        ]
    },
    {
        id: "m15",
        type: "movie",
        title: "Bring Her Back (2025) เรียกมันกลับมาหลอน",
        quality: "HD",
        category: "horror",
        poster: "https://m.media-amazon.com/images/M/MV5BZTlhYTk1ZTEtOWY3NC00NWQ5LTlkOTctNjQ3ZDYyZGE5ZWNlXkEyXkFqcGc@._V1_.jpg",
        url: "https://master.streamhls.com/hls/07bc9a6ea1dc783f51181b167d376e1f/master.m3u8"
    },
    {
        id: "m16",
        type: "movie",
        title: "Left Handed Girl (2025) เด็กมือซ้าย",
        quality: "HD",
        category: "romantic",
        poster: "https://image.tmdb.org/t/p/original/hfuxIKRCNsecLmoDdO0HJ1YUvv1.jpg",
        url: "https://master.streamhls.com/hls/14ac7e60c627d60415358165ec973d76/master.m3u8"
    },
    {
        id: "m17",
        type: "movie",
        title: "Secret (2009) ซ่อน สืบ ฆ่า",
        quality: "HD",
        category: "horror",
        poster: "https://m.media-amazon.com/images/M/MV5BMTcxMTI5ODg4N15BMl5BanBnXkFtZTgwNTU0MTE0MjE@._V1_.jpg",
        url: "https://master.streamhls.com/hls/553cfe2f58d1293c7440d6b64414e9e2/master.m3u8"
    },
    {
        id: "m18",
        type: "movie",
        title: "The Conjuring Last Rites (2025) คนเรียกผี พิธีกรรมครั้งสุดท้าย",
        quality: "HD",
        category: "horror",
        poster: "https://image.tmdb.org/t/p/original/byWgphT74ClOVa8EOGzYDkl8DVL.jpg",
        url: "https://master.streamhls.com/hls/d1a5f5c7987e17e96ae77d2e3ccc4b94/master.m3u8"
    },
    {
        id: "m19",
        type: "movie",
        title: "Mao Mountain Uncle (2023) คุณลุงเหมาซาน",
        quality: "HD",
        category: "action",
        poster: "https://pic6.iqiyipic.com/image/20230921/50/22/v_173794521_m_601_en_260_360.webp",
        url: "https://master.streamhls.com/hls/c565fb7b19232aed5f29dd20543597ab/master.m3u8"
    },
    {
        id: "m20",
        type: "movie",
        title: "omahawk Action 2 Bloodthirsty (2023) ปฏิบัติการโทมาฮอว์ก 2 นองเลือด",
        quality: "HD",
        category: "action",
        poster: "https://pic3.iqiyipic.com/image/20230726/e2/ed/v_173206106_m_601_en_260_360.webp",
        url: "https://master.streamhls.com/hls/9f584045aaec7a7b91eef44245c0f176/master.m3u8"
    },
    {
        id: "m21",
        type: "movie",
        title: "Dollhouse (2025) ดอลล์เฮ้าส์ หลอนซ่อนหุ่น",
        quality: "HD",
        category: "horror",
        poster: "https://m.media-amazon.com/images/M/MV5BZDFlNjliZmMtNWZjNC00NWY2LTkxZmEtNWRmMTg1ZGI5OWQ4XkEyXkFqcGc@._V1_.jpg",
        url: "https://master.streamhls.com/hls/8ac9f133d07371009a4cb902dfc95665/master.m3u8"
    },
    {
        id: "m22",
        type: "movie",
        title: "เสือ (2025) 4 Tigers",
        quality: "ZOOM",
        category: "action",
        poster: "https://m.media-amazon.com/images/M/MV5BYjgzZjg2YmQtZWI1OC00NjI0LWEyNDItZjA5OTgzMWU0ODY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://master.streamhls.com/hls/f2944f401f5cac66d4e5dd7ae5bffc2d/master.m3u8"
    },
    {
        id: "m23",
        type: "movie",
        title: "Afterburn (2025) ล่าขุมทรัพย์แดนแดดเดือด",
        quality: "HD",
        category: "action",
        poster: "https://m.media-amazon.com/images/M/MV5BMzBkZmQ0NjMtNTZlMy00ZjdlLTg5ODUtYWFlNGM0YzE3MTg0XkEyXkFqcGc@._V1_.jpg",
        url: "https://master.streamhls.com/hls/d4c5dc4d7b1a5acd22279785300f61c8/master.m3u8"
    },
    {
        id: "m24",
        type: "movie",
        title: "One Battle After Another (2025) หนึ่งศึก ครั้งแล้ว ครั้งเล่า",
        quality: "HD",
        category: "action",
        poster: "https://cdn.majorcineplex.com/uploads/movie/4649/thumb_4649.jpg",
        url: "https://master.streamhls.com/hls/fe5ab8d6e1500eac986c49023b4b9811/master.m3u8"
    },
];
