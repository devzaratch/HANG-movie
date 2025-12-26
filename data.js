const movieDatabase = [
    {
        id: "m1",
        type: "movie",
        title: "Merv (2025) เมิร์ฟ สี่ขาสื่อหัวใจ",
        quality: "HD",
        category: "drama",
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
        category: "action",
        poster: "https://i.ebayimg.com/00/s/MTYwMFgxMDY2/z/9cAAAOSwy8xir7bm/$_57.JPG?set_id=880000500F",
        url: "https://master.streamhls.com/hls/8412420e8eb07e9dbe8479045d03243a/master.m3u8"
    },
    {
        id: "m13",
        type: "movie",
        title: "Avatar 2: The Way of Water (2022) อวตาร: วิถีแห่งสายน้ำ",
        quality: "HD",
        category: "action",
        poster: "https://m.media-amazon.com/images/I/71Lvqoov42L.jpg",
        url: "https://master.streamhls.com/hls/066b49de468e78b54f7ba04d5776f733/master.m3u8"
    },
    {
        id: "m14",
        type: "movie",
        title: "Wake Up Dead Man A Knives Out Mystery (2025) ฆาตกรรมหรรษา ใครฆ่าคนบาป",
        quality: "HD",
        category: "drama",
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
        title: "Tomahawk Action 2 Bloodthirsty (2023) ปฏิบัติการโทมาฮอว์ก 2 นองเลือด",
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
    {
        id: "m25",
        type: "movie",
        title: "ธี่หยด 3 (2025) Death Whisperer 3",
        quality: "ZOOM",
        category: "horror",
        poster: "https://static.thairath.co.th/media/Dtbezn3nNUxytg04avgw8jteSq1H0aDkdqtjOCgVdH9Q67.jpg",
        url: "https://master.streamhls.com/hls/272d52fc1b400c3918e7ac93aa1a76b9/master.m3u8"
    },
    {
        id: "m26",
        type: "movie",
        title: "Home Sweet Home Rebirth (2025) โฮมสวีทโฮม กำเนิดใหม่",
        quality: "HD",
        category: "horror",
        poster: "https://cdn.majorcineplex.com/uploads/movie/4575/thumb_4575.jpg",
        url: "https://master.streamhls.com/hls/ad4c79696fd3a9a9ee5294dfc3ff903b/master.m3u8"
    },
    {
        id: "m27",
        type: "movie",
        title: "The Bad Guys 2 (2025) วายร้ายพันธุ์ดี 2",
        quality: "HD",
        category: "anime",
        poster: "https://cdn.majorcineplex.com/uploads/movie/4303/thumb_4303.jpg",
        url: "https://master.streamhls.com/hls/62ac5d5057f6caf59a569d0cb963745f/master.m3u8"
    },
    {
        id: "m28",
        type: "movie",
        title: "Elio (2025) เอลิโอ",
        quality: "HD",
        category: "anime",
        poster: "https://cdn.majorcineplex.com/uploads/movie/3677/thumb_3677.jpg",
        url: "https://master.streamhls.com/hls/7d6f65e9b183d9c315d1731189306f08/master.m3u8"
    },
    {
        id: "m29",
        type: "movie",
        title: "Noise (2025) เสียงซ่อนผี",
        quality: "HD",
        category: "horror",
        poster: "https://d2dogsd00e27qz.cloudfront.net/eyJidWNrZXQiOiJzdXBlcmFwcC1wcm9kLWltYWdlIiwia2V5IjoiaW1hZ2VzLzIwMjUvNy84L2ltZ18xNzUxOTUxMDY0NTI2XzJuMnZqNWlydy5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjEwMDAsImZpdCI6Imluc2lkZSJ9fX0=",
        url: "https://master.streamhls.com/hls/5024d2ccbb0dde41b37c44c4b163077b/master.m3u8"
    },
    {
        id: "m30",
        type: "movie",
        title: "Demon Slayer Infinity Castle Movie (2025) ดาบพิฆาตอสูร ภาคปราสาทไร้ขอบเขต",
        quality: "ZOOM",
        category: "anime",
        poster: "https://image.tmdb.org/t/p/original/w2KyCngXW106bSyrfauoe1G4GuC.jpg",
        url: "https://master.streamhls.com/hls/590e8e5c50f20796d1d5d25ec25322b0/master.m3u8"
    },
    {
        id: "m31",
        type: "movie",
        title: "How to Train Your Dragon (2025) อภินิหารไวกิ้งพิชิตมังกร",
        quality: "HD",
        category: "anime",
        poster: "https://files.thaiware.site/movie/2024-12/images-poster/241216120411490.jpg",
        url: "https://master.streamhls.com/hls/6736289a8fc6e724450f60053142cc51/master.m3u8"
    },
    {
        id: "m32",
        type: "movie",
        title: "Superman (2025) ซูเปอร์แมน",
        quality: "HD",
        category: "action",
        poster: "https://cdn.majorcineplex.com/uploads/movie/4246/thumb_4246.jpg?1234",
        url: "https://master.streamhls.com/hls/03126e933e84a91686d60c80f6d5b706/master.m3u8"
    },
    {
        id: "m33",
        type: "movie",
        title: "Barbie (2023) บาร์บี้",
        quality: "HD",
        category: "drama",
        poster: "https://f.ptcdn.info/198/081/000/ry7jqjiq5q6kw7wzxQe5-o.jpg",
        url: "https://master.streamhls.com/hls/5e6fd0dd6283f89f90000ccafdc63d15/master.m3u8"
    },
    {
        id: "m34",
        type: "movie",
        title: "Godzilla x Kong: The New Empire (2024) ก๊อตซิล่าปะทะคอง 2 อาณาจักรใหม่",
        quality: "HD",
        category: "action",
        poster: "https://cdn.majorcineplex.com/uploads/movie/3680/thumb_3680.jpg?140220250435",
        url: "https://master.streamhls.com/hls/5e0fef31dca4b2eb90ee083f3c21bfb1/master.m3u8"
    },
    {
        id: "m35",
        type: "movie",
        title: "The Shadow’s Edge (2025) แผนระห่ำ ใหญ่ฟัดเดือด",
        quality: "HD",
        category: "action",
        poster: "https://cdn.majorcineplex.com/uploads/movie/4685/thumb_4685.jpg?1234",
        url: "https://master.streamhls.com/hls/e9618ce32d30104a741021ebca224814/master.m3u8"
    },
    {
        id: "m36",
        type: "movie",
        title: "Joker Folie a Deux (2024) โจ๊กเกอร์ โฟลีย์ อา เดอ",
        quality: "HD",
        category: "drama",
        poster: "https://cdn.posteritati.com/posters/000/000/072/700/joker-folie-a-deux-md-web.jpg",
        url: "https://master.streamhls.com/hls/b7da95c83f0b8e1f35ed50c83010c673/master.m3u8"
    },
    {
        id: "m37",
        type: "movie",
        title: "F1 The Movie (2025) F1 เดอะ มูฟวี่",
        quality: "HD",
        category: "action",
        poster: "https://cdn.majorcineplex.com/uploads/content/images/20250627120143_MV5BNGI0MDI4NjEtOWU3ZS00ODQyLWFhYTgtNGYxM2ZkM2Q2YjE3XkEyXkFqcGc@._V1_.jpg",
        url: "https://master.streamhls.com/hls/f34ee734d838c63d51315e30110ee6b1/master.m3u8"
    },
    {
        id: "m38",
        type: "movie",
        title: "Elevation (2024) อสุรกายขย้ำ 8000 ฟุต",
        quality: "HD",
        category: "action",
        poster: "https://cdn.majorcineplex.com/uploads/movie/4296/thumb_4296.jpg",
        url: "https://master.streamhls.com/hls/bc460f0a2e10f3b1da087026ed2cced2/master.m3u8"
    },
    {
        id: "m39",
        type: "movie",
        title: "Until Dawn (2025) ต้องรอดก่อนย่ำรุ่ง",
        quality: "HD",
        category: "horror",
        poster: "https://files.thaiware.site/movie/2025-03/images-poster/2503121204119q1.jpg",
        url: "https://master.streamhls.com/hls/3fc29b45bcf864c0e5e68c1d1de3785f/master.m3u8"
    },
    {
        id: "m40",
        type: "movie",
        title: "Mission: Impossible The Final Reckoning (2025) มิชชั่น:อิมพอสซิเบิ้ล ปิดปฏิบัติการล่าพิกัดมรณะ",
        quality: "HD",
        category: "action",
        poster: "https://cdn.majorcineplex.com/uploads/content/images/20241112141529_466362626_1003564018467341_7282186515952770490_n.jpg",
        url: "https://master.streamhls.com/hls/26381db55e5b77dfc15bd8f55ddfd507/master.m3u8"
    },
    {
        id: "s3",
        type: "series",
        title: "The Witcher Season 4 (2025) เดอะ วิทเชอร์ นักล่าจอมอสูร ซีซั่น 4",
        quality: "HD",
        category: "serie",
        poster: "https://kahirihome.com/wp-content/uploads/2025/11/The-Witcher-Season-4-2025-%E0%B9%80%E0%B8%94%E0%B8%AD%E0%B8%B0-%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B9%80%E0%B8%8A%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B8%88%E0%B8%AD%E0%B8%A1%E0%B8%AD%E0%B8%AA%E0%B8%B9%E0%B8%A3-%E0%B8%8B%E0%B8%B5%E0%B8%8B%E0%B8%B1%E0%B9%88%E0%B8%99-4-187x269-300x450-1.webp",
        episodes: [
            { title: "ตอนที่ 1", url: "https://master.steamhls88.com/hlsr2/fdc98818864161d438c48dec0418a6f1/master.m3u8" },
            { title: "ตอนที่ 2", url: "https://master.steamhls88.com/hlsr2/135f8dacf1abad39b0746a7a7fa1e599/master.m3u8" },
            { title: "ตอนที่ 3", url: "https://master.steamhls88.com/hlsr2/bb09b9535d38492144e7fc962c360bd8/master.m3u8" },
            { title: "ตอนที่ 4", url: "https://master.steamhls88.com/hlsr2/db28e116c3aa82869031d64509415620/master.m3u8" },
            { title: "ตอนที่ 5", url: "https://master.steamhls88.com/hlsr2/8680a5d3c0bdbfba80672aa9d3740a3d/master.m3u8" },
            { title: "ตอนที่ 6", url: "https://master.steamhls88.com/hlsr2/9d8aae204c771bb61f645550ede8f576/master.m3u8" },
            { title: "ตอนที่ 7", url: "https://master.steamhls88.com/hlsr2/a67967e67ca421c35dd71e134b1c3380/master.m3u8" },
            { title: "ตอนที่ 8", url: "https://master.steamhls88.com/hlsr2/d6919a1a46671e1ab24c13dd7daf6a22/master.m3u8" }
        ]
    },
    {
        id: "m41",
        type: "movie",
        title: "Jurassic World Rebirth (2025) จูราสสิค เวิลด์ กำเนิดชีวิตใหม่",
        quality: "HD",
        category: "action",
        poster: "https://lh3.googleusercontent.com/uyPGB4EyffcHy_TcPnh9n6srVo6pOOKiSZTETeZcjb4v3Z-wF_e0ADk8zcY3eYsNeZ-zF10DqJs3GNrLL2P8RdmhrRAgP7W6=s0",
        url: "https://master.streamhls.com/hls/7d23649797b2c72397915d7881e42524/master.m3u8"
    },
    {
        id: "m42",
        type: "movie",
        title: "Star Wars: The Rise of Skywalker (2019) สตาร์ วอร์ส: กำเนิดใหม่สกายวอล์คเกอร์",
        quality: "HD",
        category: "action",
        poster: "https://f.ptcdn.info/657/065/000/pwrvo4cex1qi8y70hIF-o.jpg",
        url: "https://master.streamhls.com/hls/4f06af980d77012e1de27cf2301cc4b6/master.m3u8"
    },
    {
        id: "m43",
        type: "movie",
        title: "Holy Night Demon Hunters (2025) ฅนต่อยผี",
        quality: "HD",
        category: "action",
        poster: "https://m.media-amazon.com/images/M/MV5BZDZhYjUwMTUtNTcyZS00MWNkLWI3NGItMDZlZGNmMjQxYTQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://master.streamhls.com/hls/fd3c45d647cfc4a55ce96f943cc72775/master.m3u8"
    },
    {
        id: "m44",
        type: "movie",
        title: "Kung Fu Panda 4 (2024) กังฟูแพนด้า 4",
        quality: "HD",
        category: "anime",
        poster: "https://image.tmdb.org/t/p/original/iSqi0vag3gtqFVJdWutIEj6IYNg.jpg",
        url: "https://master.streamhls.com/hls/7962ea7c4c693d3d06f3031f911d51c2/master.m3u8"
    },
    {
        id: "m45",
        type: "movie",
        title: "Top Gun: Maverick (2022) ท็อปกัน มาเวอริค",
        quality: "HD",
        category: "action",
        poster: "https://upload.wikimedia.org/wikipedia/th/0/03/%E0%B9%83%E0%B8%9A%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%A2%E0%B8%99%E0%B8%95%E0%B8%A3%E0%B9%8C_%E0%B8%97%E0%B9%87%E0%B8%AD%E0%B8%9B%E0%B8%81%E0%B8%B1%E0%B8%99_%E0%B8%A1%E0%B8%B2%E0%B9%80%E0%B8%A7%E0%B8%AD%E0%B8%A3%E0%B8%B4%E0%B8%84.jpg",
        url: "https://master.streamhls.com/hls/fcde2096c914fcbb1290da00fac065ad/master.m3u8"
    },
    {
        id: "s4",
        type: "series",
        title: "Stranger Things (2016) สเตรนเจอร์ ธิงส์",
        quality: "HD",
        category: "serie",
        poster: "https://f.ptcdn.info/759/054/000/ozpywdsopIWpXH339Jn-o.jpg",
        episodes: [
            { title: "ตอนที่ 1", url: "https://master.steamhls88.com/hlsr2/254888e387c65dc7813a8932d3369a0f/master.m3u8" },
            { title: "ตอนที่ 2", url: "https://master.steamhls88.com/hlsr2/0dcebf7082f44b9c19c78b905f67d885/master.m3u8" },
            { title: "ตอนที่ 3", url: "https://master.steamhls88.com/hlsr2/a55023954fa605bf8bba5971922aa963/master.m3u8" },
            { title: "ตอนที่ 4", url: "https://master.steamhls88.com/hlsr2/6ae1fb63296240c5951e03f6b7d20867/master.m3u8" },
            { title: "ตอนที่ 5", url: "https://master.steamhls88.com/hlsr2/17626a2a4917f09f1336cfcc54846a78/master.m3u8" },
            { title: "ตอนที่ 6", url: "https://master.steamhls88.com/hlsr2/56f76497785b6a61507567dfae776eaa/master.m3u8" },
            { title: "ตอนที่ 7", url: "https://master.steamhls88.com/hlsr2/171f6731ba245e613d6dd561127517b8/master.m3u8" },
            { title: "ตอนที่ 8", url: "https://master.steamhls88.com/hlsr2/54a85f72e711177c7ccd44884d96355e/master.m3u8" }
        ]
    },
    {
        id: "s5",
        type: "series",
        title: "Stranger Things 2 (2017) สเตรนเจอร์ ธิงส์ 2",
        quality: "HD",
        category: "serie",
        poster: "https://media.themoviedb.org/t/p/w500/74nFJmiapxKuUBXRbSu6VqGGcuo.jpg",
        episodes: [
            { title: "ตอนที่ 1", url: "https://master.steamhls88.com/hlsr2/688500cd09c24859d0ce2f80be4a48c9/master.m3u8" },
            { title: "ตอนที่ 2", url: "https://master.steamhls88.com/hlsr2/50df805ef85abc85aa140d47ef16513d/master.m3u8" },
            { title: "ตอนที่ 3", url: "https://master.steamhls88.com/hlsr2/2c6a96814279802f65acb4e26cc3a3b0/master.m3u8" },
            { title: "ตอนที่ 4", url: "https://master.steamhls88.com/hlsr2/399e8d12e08df2801bdef0b52f6d7a80/master.m3u8" },
            { title: "ตอนที่ 5", url: "https://master.steamhls88.com/hlsr2/6d51b997405e5710c1bcf10dc4d6908c/master.m3u8" },
            { title: "ตอนที่ 6", url: "https://master.steamhls88.com/hlsr2/8cbdcacece3198742c66c7bab0bcfbd5/master.m3u8" },
            { title: "ตอนที่ 7", url: "https://master.steamhls88.com/hlsr2/ea66fc4bc755f278f46e53ea7300147b/master.m3u8" },
            { title: "ตอนที่ 8", url: "https://master.steamhls88.com/hlsr2/43c3027dd04132a52946b0fbf4759f30/master.m3u8" },
            { title: "ตอนที่ 9", url: "https://master.steamhls88.com/hlsr2/5078d1262e6ebf75c6e3cb45043529f7/master.m3u8" }
        ]
    },
    {
        id: "s6",
        type: "series",
        title: "Stranger Things 3 (2019) สเตรนเจอร์ ธิงส์ 3",
        quality: "HD",
        category: "serie",
        poster: "https://f.ptcdn.info/861/064/000/pu7srinkqxM1nqy45R7-o.jpg",
        episodes: [
            { title: "ตอนที่ 1", url: "https://master.steamhls88.com/hlsr2/b28854ab8a3c186bc7be0bc11514ec38/master.m3u8" },
            { title: "ตอนที่ 2", url: "https://master.steamhls88.com/hlsr2/e83de16233038d8a5b770fa54cb22709/master.m3u8" },
            { title: "ตอนที่ 3", url: "https://master.steamhls88.com/hlsr2/2d8cb84fdf08ab79932915949cc225b6/master.m3u8" },
            { title: "ตอนที่ 4", url: "https://master.steamhls88.com/hlsr2/857b72213d6fc8ad700d1665b0f186b2/master.m3u8" },
            { title: "ตอนที่ 5", url: "https://master.steamhls88.com/hlsr2/39e69c5f676247780d2457a71adb0d14/master.m3u8" },
            { title: "ตอนที่ 6", url: "https://master.steamhls88.com/hlsr2/1289b42f3e4164da0201f01d07f2b4e6/master.m3u8" },
            { title: "ตอนที่ 7", url: "https://master.steamhls88.com/hlsr2/ae9e5030d286abedbff2d9a1732a88cd/master.m3u8" },
            { title: "ตอนที่ 8", url: "https://master.steamhls88.com/hlsr2/49fc9e3f35a344167c9cc5432b6e5b96/master.m3u8" }
        ]
    },
    {
        id: "s7",
        type: "series",
        title: "Stranger Things 4 (2022) สเตรนเจอร์ ธิงส์ 4",
        quality: "HD",
        category: "serie",
        poster: "https://image.tmdb.org/t/p/original/npUcqNNaZlLyIyFcymlLXPEZr57.jpg",
        episodes: [
            { title: "ตอนที่ 1", url: "https://master.steamhls88.com/hlsr2/5b6d72ec561f6db12feb3a87ce727107/master.m3u8" },
            { title: "ตอนที่ 2", url: "https://master.steamhls88.com/hlsr2/f7a05b7e666e61ad0754810b86b7adc6/master.m3u8" },
            { title: "ตอนที่ 3", url: "https://master.steamhls88.com/hlsr2/ac6201336cd3bb84be9d79fa23e73c5f/master.m3u8" },
            { title: "ตอนที่ 4", url: "https://master.steamhls88.com/hlsr2/d3b18453dc3250323b95e59a2f2f436e/master.m3u8" },
            { title: "ตอนที่ 5", url: "https://master.steamhls88.com/hlsr2/e969718c693ec4f7f13226c81be37c6f/master.m3u8" },
            { title: "ตอนที่ 6", url: "https://master.steamhls88.com/hlsr2/bd7f0ce3bf6e53cd31de2835ffd09b0c/master.m3u8" },
            { title: "ตอนที่ 7", url: "https://master.steamhls88.com/hlsr2/af110471ed3839a9b6da06e05f54a6ab/master.m3u8" },
            { title: "ตอนที่ 8", url: "https://master.steamhls88.com/hlsr2/a0a2c13ab913bbf62fd63750dd78abb3/master.m3u8" },
            { title: "ตอนที่ 9", url: "https://master.steamhls88.com/hlsr2/eb749d0d67a2b2ec10beca66740093de/master.m3u8" }
        ]
    },
    {
        id: "s8",
        type: "series",
        title: "Stranger Things 5 (2025) สเตรนเจอร์ ธิงส์ 5",
        quality: "HD",
        category: "serie",
        poster: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQeHSBosv8l2X9RZuaT3ygZYs0XLLqa8vrpyBf1dTH8cjYR6sQsL26uyTNujyLkzvZKz3OyFvkd0u6PS-ZGcpyuRHnDLuYXucxhVMJxQXmZLlz88mnJ_jX5UymYsghaBfcEGD2RbIifQR7j4N5gGkvBDQ.jpg?r=473",
        episodes: [
            { title: "ตอนที่ 1", url: "https://master.steamhls88.com/hlsr2/17e74e65ed237a6913d74d8048396ed7/master.m3u8" },
            { title: "ตอนที่ 2", url: "https://master.steamhls88.com/hlsr2/aa936ac03e97878cfa7a8090ab7a8e01/master.m3u8" },
            { title: "ตอนที่ 3", url: "https://master.steamhls88.com/hlsr2/55affc0210155bc576b3b02ce0efb49c/master.m3u8" },
            { title: "ตอนที่ 4", url: "https://master.steamhls88.com/hlsr2/a0d3d354016072cb9567261e27d320d7/master.m3u8" }
        ]
    },
    {
        id: "s9",
        type: "series",
        title: "Reacher (2022) รีชเชอร์ ยอดคนสืบระห่ำ",
        quality: "HD",
        category: "serie",
        poster: "https://image.tmdb.org/t/p/original/oIAMQ42lzSd6ksvGe4WFMKqT0ja.jpg",
        episodes: [
            { title: "ตอนที่ 1", url: "https://master.steamhls88.com/hlsr2/a83efab08a5cbfac0db55f81b9b4d6b8/master.m3u8" },
            { title: "ตอนที่ 2", url: "https://master.steamhls88.com/hlsr2/ff910d38568fc28b55a1ec14ea825df7/master.m3u8" },
            { title: "ตอนที่ 3", url: "https://master.steamhls88.com/hlsr2/ab10b3a5bf37178a8d5f5e463ac59b6b/master.m3u8" },
            { title: "ตอนที่ 4", url: "https://master.steamhls88.com/hlsr2/d77c6b875cde70ad2c06b0c9e1fa3443/master.m3u8" },
            { title: "ตอนที่ 5", url: "https://master.steamhls88.com/hlsr2/af6931281e4b4bbb4a58e1acadfe7024/master.m3u8" },
            { title: "ตอนที่ 6", url: "https://master.steamhls88.com/hlsr2/593a05af85a351a157d488289db41341/master.m3u8" },
            { title: "ตอนที่ 7", url: "https://master.steamhls88.com/hlsr2/f7fa88654a326632c76884a73f484496/master.m3u8" },
            { title: "ตอนที่ 8", url: "https://master.steamhls88.com/hlsr2/7949fd7015b6ce6d47817b8aebef1c3d/master.m3u8" }
        ]
    },
    {
        id: "s9",
        type: "series",
        title: "Reacher (2023) แจ็ค รีชเชอร์ ยอดคนสืบระห่ำ Season 2",
        quality: "HD",
        category: "serie",
        poster: "https://media.themoviedb.org/t/p/w500/jFuH0md41x5mB4qj5344mSmtHrO.jpg",
        episodes: [
            { title: "ตอนที่ 1", url: "https://master.steamhls88.com/hlsr2/444a5d5e4b51e8899a157ec9387701fd/master.m3u8" },
            { title: "ตอนที่ 2", url: "https://master.steamhls88.com/hlsr2/9958e608a21263435ae32db77f3e463c/master.m3u8" },
            { title: "ตอนที่ 3", url: "https://master.steamhls88.com/hlsr2/01269f962849fd86f82bcd4df403498c/master.m3u8" },
            { title: "ตอนที่ 4", url: "https://master.steamhls88.com/hlsr2/c59e7cd49b5021a84de9198b0066b7ac/master.m3u8" },
            { title: "ตอนที่ 5", url: "https://master.steamhls88.com/hlsr2/abf56e93fbb9282fb373311c914a5af8/master.m3u8" },
            { title: "ตอนที่ 6", url: "https://master.steamhls88.com/hlsr2/a512349b850773dc31c00e441a367cf6/master.m3u8" },
            { title: "ตอนที่ 7", url: "https://master.steamhls88.com/hlsr2/1171353b52ffbc906d80313aade502e5/master.m3u8" },
            { title: "ตอนที่ 8", url: "https://master.steamhls88.com/hlsr2/8a768d450c4bc95c870533eb8c82399e/master.m3u8" }
        ]
    },
    {
        id: "s10",
        type: "series",
        title: "Reacher (2025) แจ็ค รีชเชอร์ ยอดคนสืบระห่ำ Season 3",
        quality: "HD",
        category: "serie",
        poster: "https://cms.dmpcdn.com/ugcarticle/2025/03/01/936db8e0-f69b-11ef-981c-6985119be05f_webp_original.webp",
        episodes: [
            { title: "ตอนที่ 1", url: "https://master.steamhls88.com/hlsr2/c08ed208eaa11aafd2e89c7e732bb52e/master.m3u8" },
            { title: "ตอนที่ 2", url: "https://master.steamhls88.com/hlsr2/f68a25d6ac2bb00da8e5bbe93d4fa7b6/master.m3u8" },
            { title: "ตอนที่ 3", url: "https://master.steamhls88.com/hlsr2/cf5fdb73ee305665d9d0ce19a54071d0/master.m3u8" },
            { title: "ตอนที่ 4", url: "https://master.steamhls88.com/hlsr2/9cceb6d8c7eab8b0b70638bde5297d9e/master.m3u8" },
            { title: "ตอนที่ 5", url: "https://master.steamhls88.com/hlsr2/c70e9a21ebb36ba255f32dbc04e8f358/master.m3u8" },
            { title: "ตอนที่ 6", url: "https://master.steamhls88.com/hlsr2/a845f8b03ceb74ddc0b118aca3c635e5/master.m3u8" },
            { title: "ตอนที่ 7", url: "https://master.steamhls88.com/hlsr2/113f2f198dccb0ba9275fa1df9136ea9/master.m3u8" },
            { title: "ตอนที่ 8", url: "https://master.steamhls88.com/hlsr2/a686f980e34634788ce44240b8bb9926/master.m3u8" }
        ]
    },
    {
        id: "m46",
        type: "movie",
        title: "Kraven the Hunter (2024) เครเว่น เดอะ ฮันเตอร์",
        quality: "HD",
        category: "action",
        poster: "https://cdn.majorcineplex.com/uploads/movie/3518/thumb_3518.jpg",
        url: "https://master.steamhls88.com/hlsr2/93707159920ef181f1269bd05f23469a/master.m3u8"
    },
    {
        id: "m47",
        type: "movie",
        title: "Shang-Chi and the Legend of the Ten Rings (2021) ชาง-ชี กับตำนานลับเท็นริงส์",
        quality: "HD",
        category: "action",
        poster: "https://files.thaiware.site/movie/2021-09/images-poster/210923120021304.jpg",
        url: "https://master.streamhls.com/hls/af440910a95ea7585832b7c7390a53bc/master.m3u8"
    },
    {
        id: "m48",
        type: "movie",
        title: "Doraemon the Movie Nobita’s Earth Symphony (2024) โดราเอมอน เดอะ มูฟวี่ ตอน โลกแห่งซิมโฟนี่ของโนบิตะ",
        quality: "HD",
        category: "anime",
        poster: "https://files.thaiware.site/movie/2024-09/images-poster/2409161204125DS.jpg",
        url: "https://master.streamhls.com/hls/a2fc04bd41275711ddc9180ac1cafb99/master.m3u8"
    },
    {
        id: "m49",
        type: "movie",
        title: "Moana 2 (2024) โมอาน่า 2",
        quality: "HD",
        category: "anime", 
        poster: "https://lumiere-a.akamaihd.net/v1/images/mo2_payoff_clam_1s_s_8a7c0acc.jpeg",
        url: "https://master.streamhls.com/hls/b5d1a66d2393a15c2730b90cfd7e973e/master.m3u8"
    },
    {
        id: "m50",
        type: "movie",
        title: "คนเดือด​ ซัดนรก Striking Rescue (2024)",
        quality: "HD",
        category: "action",
        poster: "https://files.thaiware.site/movie/2024-11/images-poster/241112120447l6X.jpg",
        url: "https://master.streamhls.com/hls/d81fa54fa38daa9fa5e089fc2266f333/master.m3u8"
    },
    {
        id: "m51",
        type: "movie",
        title: "Weekend in Taipei (2025) เร็ว..แรง ทะลุไทเป",
        quality: "HD",
        category: "action",
        poster: "https://m.media-amazon.com/images/M/MV5BY2JiNDJiN2EtNGRlNC00ODE2LTgwNmQtOGFiZTk0NjZlMmFhXkEyXkFqcGc@._V1_.jpg",
        url: "https://master.streamhls.com/hls/80e1a5ebcff9d7d4fd6fa06e049446d1/master.m3u8"
    },
    {
        id: "m52",
        type: "movie",
        title: "Escape (2024) หนีให้พ้นนรก",
        quality: "HD",
        category: "action",
        poster: "https://m.media-amazon.com/images/M/MV5BYzFjNjYyYTMtOTI4MS00YjE1LTllZDYtZjk0NzI5ZjUxZjYxXkEyXkFqcGc@._V1_.jpg",
        url: "https://master.streamhls.com/hls/7fc2f22831aadad32a3ec8b56ebb608f/master.m3u8"
    },
    {
        id: "m53",
        type: "movie",
        title: "Red One (2024) เรด วัน",
        quality: "HD",
        category: "action",
        poster: "https://cdn.majorcineplex.com/uploads/movie/4107/thumb_4107.jpg",
        url: "https://master.streamhls.com/hls/1a90a0fce56ba6bd80d625a824a53eb9/master.m3u8"
    },
    {
        id: "m54",
        type: "movie",
        title: "Taklee Genesis (2024) ตาคลี เจเนซิส",
        quality: "HD",
        category: "action",
        poster: "https://neramitnungfilm.com/wp-content/uploads/2024/09/AW_TKG_POSTER_IMAX_W27.5H39.5inch.jpg",
        url: "https://master.streamhls.com/hls/94a97af14e6adf5e3dfa1a75a2a9da7d/master.m3u8"
    },
    {
        id: "m55",
        type: "movie",
        title: "Venom: The Last Dance (2024) เวน่อม: มหาศึกอสูรอหังการ",
        quality: "HD",
        category: "action",
        poster: "https://cms.dmpcdn.com/dara/2024/09/06/b8301290-6c26-11ef-8329-997e78247c41_webp_original.webp",
        url: "https://master.streamhls.com/hls/c5602ad132fd32a1d92cac5c7c835914/master.m3u8"
    },
    {
        id: "m56",
        type: "movie",
        title: "The Roundup: Punishment (2024) บู๊ระห่ำล่าล้างนรก นรกลงทัณฑ์",
        quality: "HD",
        category: "action",
        poster: "https://files.thaiware.site/movie/2024-05/images-poster/240504120414nl1.jpg",
        url: "https://master.streamhls.com/hls/2a869ad167ffeb39a65d3f3a91e972ee/master.m3u8"
    },
    {
        id: "m57",
        type: "movie",
        title: "Haikyu!! The Dumpster Battle (2024) ไฮคิว คู่ตบฟ้าประทาน ตอน ศึกที่กองขยะ",
        quality: "HD",
        category: "anime",
        poster: "https://kahirihome.com/wp-content/uploads/2025/12/Haikyuu-The-Dumpster-Battle-2024-%E0%B9%84%E0%B8%AE%E0%B8%84%E0%B8%B4%E0%B8%A7-%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%95%E0%B8%9A%E0%B8%9F%E0%B9%89%E0%B8%B2%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%B2%E0%B8%99-%E0%B8%95%E0%B8%AD%E0%B8%99-%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%81%E0%B8%AD%E0%B8%87%E0%B8%82%E0%B8%A2%E0%B8%B0-300x450-1.webp",
        url: "https://master.streamhls.com/hls/ffd345f9b5f5e2ae0898ea1ea7c7caee/master.m3u8"
    },
    {
        id: "m58",
        type: "movie",
        title: "Deadpool & Wolverine (2024) เดดพูล & วูล์ฟเวอรีน",
        quality: "HD",
        category: "action",
        poster: "https://upload.wikimedia.org/wikipedia/th/e/eb/Deadpool_%26_Wolverine_poster.png",
        url: "https://master.streamhls.com/hls/11de0eb5b60903ebb5ea96e752bc1c57/master.m3u8"
    },
    {
        id: "m59",
        type: "movie",
        title: "My Hero Academia You’re Next (2024) มาย ฮีโร่ อคาเดเมีย",
        quality: "ZOOM",
        category: "anime",
        poster: "https://m.media-amazon.com/images/M/MV5BNGVmZDJhNjItYzdlOC00ODA2LWFkYjctY2NmMzNiZTQ2NTVjXkEyXkFqcGc@._V1_.jpg",
        url: "https://master.streamhls.com/hls/2e50a8dc741c42d59a8016db35d4a40d/master.m3u8"
    },
    {
        id: "m60",
        type: "movie",
        title: "Detective Conan: The Million-Dollar Pentagram (2024) ยอดนักสืบจิ๋วโคนัน เดอะมูฟวี่ 27: ปริศนาปราการ 5 แฉก",
        quality: "ZOOM",
        category: "anime",
        poster: "https://files.thaiware.site/movie/2024-08/images-poster/240808120412Ns5.jpg",
        url: "https://master.streamhls.com/hls/4dffc3de912a685eb7e1ecc7b8ea5cca/master.m3u8"
    },
    {
        id: "m61",
        type: "movie",
        title: "Blue Lock Episode Nagi (2024) บลูล็อก เดอะมูฟวี่ ตอนนากิ",
        quality: "HD",
        category: "anime",
        poster: "https://kahirihome.com/wp-content/uploads/2025/09/Blue-Lock-Episode-Nagi-%E0%B8%9A%E0%B8%A5%E0%B8%B9%E0%B8%A5%E0%B9%87%E0%B8%AD%E0%B8%81-%E0%B9%80%E0%B8%94%E0%B8%AD%E0%B8%B0%E0%B8%A1%E0%B8%B9%E0%B8%9F%E0%B8%A7%E0%B8%B5%E0%B9%88-%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%99%E0%B8%B2%E0%B8%81%E0%B8%B4-2024-187x269-1.jpg",
        url: "https://master.streamhls.com/hls/3de3b196a0acd5d27d4fd408b336b1fb/master.m3u8"
    },
    {
        id: "m62",
        type: "movie",
        title: "Twisters (2024) ทวิสเตอร์ส",
        quality: "HD",
        category: "drama",
        poster: "https://m.media-amazon.com/images/I/71sDLtiIL5L.jpg",
        url: "https://master.streamhls.com/hls/225490fb08d4b6a4287f2f4c3e528db4/master.m3u8"
    },
    {
        id: "m63",
        type: "movie",
        title: "Avatar Fire and Ash (2025) อวตาร: อัคนีและธุลีดิน",
        quality: "ZOOM",
        category: "action",
        poster: "https://d2dogsd00e27qz.cloudfront.net/eyJidWNrZXQiOiJzdXBlcmFwcC1wcm9kLWltYWdlIiwia2V5IjoiaW1hZ2VzLzIwMjUvNy8yOS9pbWdfMTc1Mzc2MDY3MTUyMF94emNyNmlkcjMuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwLCJmaXQiOiJpbnNpZGUifX19",
        url: "https://master.streamhls.com/hls/fd7d12247b53bc5b93b8a1e21ae6ceb6/master.m3u8"
    },
    {
        id: "m64",
        type: "movie",
        title: "Blink Twice (2024) บลิงก์ ทไวซ์ ซิกอันตราย",
        quality: "HD",
        category: "drama",
        poster: "https://www.posterman2000.com/wp-content/uploads/2024/08/Blink-Twice-2024.jpg",
        url: "https://master.streamhls.com/hls/d273e7349ae91d2c44af29a6f6dbf69a/master.m3u8"
    },
    {
        id: "m65",
        type: "movie",
        title: "Beetlejuice Beetlejuice (2024) บีเทิลจู๊ดส์ บีเทิลจู๊ดส์",
        quality: "HD",
        category: "drama",
        poster: "https://cms.dmpcdn.com/ugcarticle/2025/03/31/be931060-0e10-11f0-8e8e-cbbb713c3b59_webp_original.webp",
        url: "https://master.streamhls.com/hls/96311a3b777ce46aff24ce1ff3a1d3ad/master.m3u8"
    },
    {
        id: "m66",
        type: "movie",
        title: "The Boy and the Heron (2023) เด็กชายกับนกกระสา",
        quality: "HD",
        category: "anime",
        poster: "https://f.ptcdn.info/927/082/000/s78nq11hsbjMvG3H3GgLc-o.jpg",
        url: "https://master.streamhls.com/hls/5a2df8496bb2d9fe6b246e6ff13a6899/master.m3u8"
    },
    {
        id: "m66",
        type: "movie",
        title: "Despicable Me 4 (2024) มิสเตอร์แสบ ร้ายเกินพิกัด 4",
        quality: "HD",
        category: "anime",
        poster: "https://d2dogsd00e27qz.cloudfront.net/eyJidWNrZXQiOiJzdXBlcmFwcC1wcm9kLWltYWdlIiwia2V5IjoiYnVnYWJvby1tb3ZpZS1jb250ZW50L25ld3MvMjAyNS8wMi8yMi8xNzQwMTk3NjgwNTM3LWRtNF9pbnRsX2plcnJ5X21vdXRoX3ByaW50XzFfc2hlZXRzX292XzE3MjAwOTAxODNfNDY2Ny5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0OCwiaGVpZ2h0Ijo5NjAsImZpdCI6Imluc2lkZSJ9fX0=",
        url: "https://master.streamhls.com/hls/aaf053b692e4c25d138ae169a30fa1ef/master.m3u8"
    },
    {
        id: "m67",
        type: "movie",
        title: "Trolls Band Together (2023) โทรลล์ส 3",
        quality: "HD",
        category: "anime",
        poster: "https://files.thaiware.site/movie/2023-03/images-poster/230331120423G80.jpg",
        url: "https://master.streamhls.com/hls/177c7c1718c8bd39a3a17781ffa9d084/master.m3u8"
    },
    {
        id: "m68",
        type: "movie",
        title: "Insidious The Red Door (2023) วิญญาณตามติด ประตูผีผ่าน",
        quality: "HD",
        category: "horror",
        poster: "https://cdn.majorcineplex.com/uploads/movie/3549/thumb_3549.jpg?140220250435",
        url: "https://master.streamhls.com/hls/52c237c3749e73b416c8536fdfe8ef31/master.m3u8"
    },
    {
        id: "m69",
        type: "movie",
        title: "Bad Boys Ride or Die (2024) คู่หูขวางนรก ลุยต่อให้โลกจำ",
        quality: "HD",
        category: "action",
        poster: "https://files.thaiware.site/movie/2024-05/images-poster/240516120416qzW.jpg",
        url: "https://master.streamhls.com/hls/6afa8135cc4fab11edd514c1bffece29/master.m3u8"
    },
    {
        id: "m70",
        type: "movie",
        title: "Inside Out 2 (2024) มหัศจรรย์อารมณ์อลเวง 2",
        quality: "HD",
        category: "anime",
        poster: "https://lumiere-a.akamaihd.net/v1/images/io2_payoff_squish_poster-s_29270ace.jpeg?region=0%2C0%2C1440%2C2160",
        url: "https://master.streamhls.com/hls/f627481a10dd9811f3b4f8b5f18c2f06/master.m3u8"
    },
    {
        id: "m71",
        type: "movie",
        title: "Sonic the Hedgehog (2020) โซนิค เดอะ เฮดจ์ฮ็อก",
        quality: "HD",
        category: "anime",
        poster: "https://img.monomax.me/bT2SYl-wQyVcT1v-FO0V4gkiGrs=/monomax-obj.obs.ap-southeast-2.myhuaweicloud.com/assets/products/103942_pAKGGVgurH8Q3LA6GByg.jpg",
        url: "https://master.streamhls.com/hls/fad387a5a25b7bb63fe3fad5af0bda05/master.m3u8"
    },
    {
        id: "m72",
        type: "movie",
        title: "The Addams Family (2019) ตระกูลนี้ผียังหลบ",
        quality: "HD",
        category: "anime",
        poster: "https://cdni-hw.ch7.com/dm/sz-md/i/images/2024/07/01/6682397d23bec7.71108033.jpg",
        url: "https://master.streamhls.com/hls/1f8766f754aa153d3a43a48e47c488bd/master.m3u8"
    },
    {
        id: "m73",
        type: "movie",
        title: "The Garfield Movie (2024) เดอะ การ์ฟิลด์ มูฟวี่",
        quality: "HD",
        category: "anime",
        poster: "https://i.pinimg.com/736x/26/08/3b/26083be4d75955ba8a4dece3509d2ee5.jpg",
        url: "https://master.streamhls.com/hls/b005c0b71468aca506e151fc3e3e61e3/master.m3u8"
    },
    {
        id: "m74",
        type: "movie",
        title: "PAW Patrol The Mighty Movie (2023) ขบวนการเจ้าตูบสี่ขา เดอะ ไมตี้ มูฟวี",
        quality: "HD",
        category: "anime",
        poster: "https://files.thaiware.site/movie/2023-09/images-poster/230922120408Jd9.jpg",
        url: "https://master.streamhls.com/hls/e43a28609f8144f4c76e7ba51960647c/master.m3u8"
    },
    {
        id: "m75",
        type: "movie",
        title: "Detective Conan vs Kid the Phantom Thief (2024) ยอดนักสืบจิ๋วโคนัน vs จอมโจรคิด",
        quality: "HD",
        category: "anime",
        poster: "https://lh3.googleusercontent.com/IoErbupsoVF_5wFkY6xW3BN9sQBL8XQBOrbE01_sXLB1A5DoAJwm1Hyz6Ojy-OcCE8eARj_vRe9QooWfuxlMl958h0U61smUnSU=s0",
        url: "https://master.streamhls.com/hls/404b7af1f986af3d010003955d37c397/master.m3u8"
    },
    {
        id: "m76",
        type: "movie",
        title: "Space Jam: A New Legacy (2021) สเปซแจม ทะลุมิติมหัศจรรย์ 2 อะนิวเลกาซี่",
        quality: "HD",
        category: "anime",
        poster: "https://lh3.googleusercontent.com/xBNTJNJpEczaFADxQvxyOyMrgOY89XwQBiVfbBqg2aiKTm3XEAeIpsEVvUFprQRSOjfSFw_XscDWA6DNR4VuwCvqz1mUdejGhlw=s0",
        url: "https://master.streamhls.com/hls/158ed26f87d067b916bd1104eb6f8b3c/master.m3u8"
    },
    {
        id: "m77",
        type: "movie",
        title: "John Wick: Chapter 4 (2023) จอห์น วิค แรงกว่านรก 4",
        quality: "HD",
        category: "action",
        poster: "https://sahamongkolfilm.com/wp-content/uploads/2023/02/John-Wick-4-Character-Poster-Thai01-2.jpg",
        url: "https://master.streamhls.com/hls/573b370155442e19785485783db3784d/master.m3u8"
    },
    {
        id: "m78",
        type: "movie",
        title: "Civil War (2024) วิบัติสมรภูมิเมืองเดือด",
        quality: "HD",
        category: "action",
        poster: "https://image.tmdb.org/t/p/original/cw8lVmbnmLSr2v4d4EdLw8K7JWF.jpg",
        url: "https://master.streamhls.com/hls/91a290ab60b4e355d977d65f78ce50ce/master.m3u8"
    },
    {
        id: "m79",
        type: "movie",
        title: "Hunt (2022) ล่าคน ปลอมคน",
        quality: "HD",
        category: "action",
        poster: "https://sahamongkolfilm.com/wp-content/uploads/2022/08/Hunt-Kor-Poster-Thai02.jpg",
        url: "https://master.streamhls.com/hls/66ac358c0596fd565f4a29f3e409b244/master.m3u8"
    },
    {
        id: "m80",
        type: "movie",
        title: "Mission Impossible 7 Dead Reckoning Part One (2023) มิชชั่น อิมพอสซิเบิ้ล 7 ล่าพิกัดมรณะ",
        quality: "HD",
        category: "action",
        poster: "https://upload.wikimedia.org/wikipedia/th/7/7a/%E0%B9%83%E0%B8%9A%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%A2%E0%B8%99%E0%B8%95%E0%B8%A3%E0%B9%8C_%E0%B8%A1%E0%B8%B4%E0%B8%8A%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99-%E0%B8%AD%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B8%AD%E0%B8%AA%E0%B8%8B%E0%B8%B4%E0%B9%80%E0%B8%9A%E0%B8%B4%E0%B9%89%E0%B8%A5_%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B8%9E%E0%B8%B4%E0%B8%81%E0%B8%B1%E0%B8%94%E0%B8%A1%E0%B8%A3%E0%B8%93%E0%B8%B0_%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AB%E0%B8%99%E0%B8%B6%E0%B9%88%E0%B8%87.jpg",
        url: "https://master.streamhls.com/hls/2e203c2d1f5397522e59732feb387293/master.m3u8"
    },
    {
        id: "m81",
        type: "movie",
        title: "4 KINGS 2 (2023) 4 คิงส์ 2",
        quality: "HD",
        category: "action",
        poster: "https://img.pptvhd36.com/thumbor/2023/11/29/news-1fcab11.jpg",
        url: "https://master.streamhls.com/hls/632bbf982de1d7088152048c5f72755f/master.m3u8"
    },
    {
        id: "m82",
        type: "movie",
        title: "The Fall Guy (2024) สตันท์แมนคนจริง",
        quality: "HD",
        category: "action",
        poster: "https://cdn.majorcineplex.com/uploads/movie/3962/thumb_3962.jpg",
        url: "https://master.streamhls.com/hls/12e700a007aea605757444a816d6e29f/master.m3u8"
    },
    {
        id: "m83",
        type: "movie",
        title: "Argylle (2024) อาร์ไกล์ ยอดสายลับ",
        quality: "HD",
        category: "action",
        poster: "https://image.tmdb.org/t/p/original/rsk1I49HCiS1T6oemVLRJ8ZhFr4.jpg",
        url: "https://master.streamhls.com/hls/b2389aee46a340f867ee0fe67e6f06d5/master.m3u8"
    },
    {
        id: "m84",
        type: "movie",
        title: "The Strangers: Chapter 1 (2024) เดอะ สเตรนเจอร์ส อำมหิตฆ่าไม่สน",
        quality: "HD",
        category: "horror",
        poster: "https://www.dailynews.co.th/wp-content/uploads/2024/05/The-Strangers-Chapter-1-Poster-TH.jpg",
        url: "https://master.streamhls.com/hls/cd5a1f3f37e60f0813cb682a9b4b8247/master.m3u8"
    },
    {
        id: "m85",
        type: "movie",
        title: "Ghostbusters Frozen Empire (2024) โกสต์บัสเตอร์ส มหันตภัยเมืองเยือกแข็ง",
        quality: "HD",
        category: "action",
        poster: "https://cdn.majorcineplex.com/uploads/movie/3535/thumb_3535.jpg",
        url: "https://master.streamhls.com/hls/f58fb261d4316d8df5ea92bd193c577a/master.m3u8"
    },
    {
        id: "m86",
        type: "movie",
        title: "The Marvels (2023) เดอะ มาร์เวลส์",
        quality: "HD",
        category: "action",
        poster: "https://kahirihome.com/wp-content/uploads/2024/03/The-Marvels-%E0%B9%80%E0%B8%94%E0%B8%AD%E0%B8%B0-%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%AA%E0%B9%8C-scaled.jpg",
        url: "https://master.streamhls.com/hls/a42cc3ab08e3009453eb193b444ab3e9/master.m3u8"
    },
    {
        id: "m87",
        type: "movie",
        title: "Meg 2 The Trench (2023) เม็ก 2 อภิมหาโคตรหลามร่องนรก",
        quality: "HD",
        category: "action",
        poster: "https://lh3.googleusercontent.com/pLpCGLd2pDZWLBTwEgLSECDUr6nNRv9aALPln75K3jH9eEWcHZoXQVwi1ThrjPIdWWuWH_jkPF7G7mAiWFUCUpImaHR8yWfd3qo=s0",
        url: "https://master.streamhls.com/hls/218866a7e5d803399b0c108099d8ea3c/master.m3u8"
    },
    {
        id: "m88",
        type: "movie",
        title: "สัปเหร่อ (2023) The Undertaker",
        quality: "HD",
        category: "horror",
        poster: "https://m.media-amazon.com/images/M/MV5BMjc1ZjExMmQtYWFiYS00YTdhLThlZjEtOGFiMWNkZTJjZTQzXkEyXkFqcGc@._V1_.jpg",
        url: "https://master.streamhls.com/hls/d4ba073646e6f07ebf796aeb239020b1/master.m3u8"
    },
    {
        id: "m102",
        type: "movie",
        title: "พี่นาค 3 Pee Nak 3 (2022)",
        quality: "HD",
        category: "horror",
        poster: "https://cdni-hw.ch7.com/dm/sz-md/i/images/2023/08/31/64f03bb18941f3.31743102.jpg",
        url: "https://master.streamhls.com/hls/a64af3a9a3b017f7c71482784233e7c1/master.m3u8"
    },
    {
        id: "m89",
        type: "movie",
        title: "Gran Turismo (2023) GT แกร่งทะลุไมล์",
        quality: "HD",
        category: "action",
        poster: "https://image.tmdb.org/t/p/original/8nBPRgDwxi7hBmvukup8pf6M7zz.jpg",
        url: "https://master.streamhls.com/hls/6296b585ea84e5c14096848ac7f15f79/master.m3u8"
    },
    {
        id: "m90",
        type: "movie",
        title: "The Bridge Curse (2020) คำสาปสะพานเฮี้ยน",
        quality: "HD",
        category: "horror",
        poster: "https://files.thaiware.site/movie/2020-07/images-poster/2007101800500q9.jpg",
        url: "https://master.streamhls.com/hls/2d02f6b53ada19e9367e3766a6919653/master.m3u8"
    },
    {
        id: "m91",
        type: "movie",
        title: "Thanksgiving (2023) คืนเดือดเชือดขาช็อป",
        quality: "HD",
        category: "horror",
        poster: "https://lh3.googleusercontent.com/3NsquT44EMzNjnOxZym8g4vnTZ9A6qInGfiWC9tOuD9JabSvyX81vSxfY86aqPYCd_1-WWa8yIWVZtD5B67mo_iokaR35BCdXA=w280",
        url: "https://master.streamhls.com/hls/64016cc564929a1f3a91f0dab9ff4b67/master.m3u8"
    },
    {
        id: "m92",
        type: "movie",
        title: "Detective Dee: The Four Heavenly Kings (2018) ตี๋เหรินเจี๋ย ปริศนาพลิกฟ้า 4 จตุรเทพ",
        quality: "HD",
        category: "action",
        poster: "https://files.thaiware.site/movie/2018-08/images-poster/1808210730076aD.jpg",
        url: "https://master.streamhls.com/hls/0f209586b7e5ac673434679bf1d58221/master.m3u8"
    },
    {
        id: "m93",
        type: "movie",
        title: "Guns Akimbo (2019) โทษที..มือพี่ไม่ว่าง",
        quality: "HD",
        category: "action",
        poster: "https://i0.wp.com/www.patsonic.com/images/2020/06/guns-akimbo-poster.jpg?w=700&ssl=1",
        url: "https://master.streamhls.com/hls/44fbef34df5f11baf0d1cbb3a7ca15bb/master.m3u8"
    },
    {
        id: "m94",
        type: "movie",
        title: "The Witch: Part 2 – The Other One (2022) แม่มดมือสังหาร 2",
        quality: "HD",
        category: "action",
        poster: "https://th-live-01.slatic.net/p/0532f08c098218e835a8970b71cd1e14.jpg",
        url: "https://master.streamhls.com/hls/25014bb39fcdc1aa7c3dc93d33831110/master.m3u8"
    },
    {
        id: "m95",
        type: "movie",
        title: "The Grinch (2018) เดอะ กริ๊นช์",
        quality: "HD",
        category: "anime",
        poster: "https://lh3.googleusercontent.com/P9FJCRVQXWKFXwa5bao1ljfBMnDnS5s9QvrYCWf-i9_U2_4MHrAUwj-5yt_z850HN8qLtRvwkUAXWVOjoug=s0",
        url: "https://master.streamhls.com/hls/9208cda5c428714e13e898b272b30028/master.m3u8"
    },
    {
        id: "m96",
        type: "movie",
        title: "หลวงพี่กะอีปอบ (2020) The Ghoul Horror At The Howling Field",
        quality: "HD",
        category: "horror",
        poster: "https://contentthailand.com/wp-content/uploads/2020/12/The-Ghoul-Poster-scaled.jpg",
        url: "https://master.streamhls.com/hls/6972eb03f754fccb8d8e4e65b222b164/master.m3u8"
    },
    {
        id: "m97",
        type: "movie",
        title: "Ant-Man and the Wasp: Quantumania (2023) แอนท์-แมน และ เดอะ วอสพ์: ตะลุยมิติควอนตัม",
        quality: "HD",
        category: "action",
        poster: "https://kahirihome.com/wp-content/uploads/2025/10/Ant-Man-and-the-Wasp-Quantumania-2023-%E0%B9%81%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B9%8C%E2%80%91%E0%B9%81%E0%B8%A1%E0%B8%99-%E0%B9%81%E0%B8%A5%E0%B8%B0-%E0%B9%80%E0%B8%94%E0%B8%AD%E0%B8%B0-%E0%B8%A7%E0%B8%AD%E0%B8%AA%E0%B8%9E%E0%B9%8C-%E0%B8%95%E0%B8%B0%E0%B8%A5%E0%B8%B8%E0%B8%A2%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%B4%E0%B8%84%E0%B8%A7%E0%B8%AD%E0%B8%99%E0%B8%95%E0%B8%B1%E0%B8%A1-300x450-1.png",
        url: "https://master.streamhls.com/hls/f12c512d86786ccf1a933e5b4e71a956/master.m3u8"
    },
    {
        id: "m98",
        type: "movie",
        title: "Paws of Fury: The Legend of Hank (2022) อุ้งเท้าพิโรธ: ตำนานของแฮงค์",
        quality: "HD",
        category: "anime",
        poster: "https://m.media-amazon.com/images/M/MV5BOTMxNmZhNzAtMDRiYy00Y2ExLWE0NDctOGM0YjUwMGU1YzU2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        url: "https://master.streamhls.com/hls/ff59d0e14e38998281178128ae7444fc/master.m3u8"
    },
    {
        id: "m99",
        type: "movie",
        title: "Teenage Mutant Ninja Turtles Mutant Mayhem (2023) เต่านินจา โกลาหลกลายพันธุ์",
        quality: "HD",
        category: "anime",
        poster: "https://s.isanook.com/mv/0/ui/30/150099/gal-150099-20230803064559-9ef7c29.jpeg",
        url: "https://master.streamhls.com/hls/d708a0be52ac54f3e09c3f8b0fa57d63/master.m3u8"
    },
    {
        id: "m100",
        type: "movie",
        title: "One Piece Film: Red (2022) วันพีซ ฟิล์ม เรด",
        quality: "HD",
        category: "anime",
        poster: "https://inwfile.com/s-fw/pmx84d.jpg",
        url: "https://master.streamhls.com/hls/c9ed777258684578cb4b2c1b7305366c/master.m3u8"
    },
    {
        id: "m101",
        type: "movie",
        title: "Fall (2022) ฟอล",
        quality: "HD",
        category: "drama",
        poster: "https://m.media-amazon.com/images/M/MV5BYmZjYjAxMDEtOTE2My00MmM5LTkyYjctOWRjMjgyM2JhMDI0XkEyXkFqcGc@._V1_.jpg",
        url: "https://master.streamhls.com/hls/c72ec4868c4377c430bb048f5602199d/master.m3u8"
    },
    {
        id: "m103",
        type: "movie",
        title: "Train to Busan 2 (2020) ฝ่านรกซอมบี้คลั่ง 2",
        quality: "HD",
        category: "action",
        poster: "https://i0.wp.com/www.patsonic.com/images/2020/07/train-to-busan-peninsula-thai-poster.jpg?ssl=1",
        url: "https://master.streamhls.com/hls/da609c852988f575a59aea5b36cba6b9/master.m3u8"
    },
    {
        id: "m104",
        type: "movie",
        title: "Midway (2019) อเมริกา ถล่ม ญี่ปุ่น",
        quality: "HD",
        category: "action",
        poster: "https://sahamongkolfilm.com/wp-content/uploads/2019/10/Midway-Poster-Thai.jpg",
        url: "https://master.streamhls.com/hls/217ab0b0d63f85f7d1608cd3f1e42e1a/master.m3u8"
    },
    {
        id: "m105",
        type: "movie",
        title: "Monkey King fights Lion Camel (2025) ซุนหงอคง ราชาวานร",
        quality: "HD",
        category: "action",
        poster: "https://a.ltrbxd.com/resized/film-poster/1/2/4/4/3/8/9/1244389-monkey-king-fight-lion-camel-0-230-0-345-crop.jpg?v=845a7a4253",
        url: "https://master.streamhls.com/hls/a96c16a9be56995ee16bc26a749e92ea/master.m3u8"
    },
    {
        id: "s11",
        type: "series",
        title: "Big Mouth พากย์ไทย (2022)",
        quality: "HD",
        category: "serie",
        poster: "https://ptcdn.info/korea/2022/poster/8ulYf51Cmi-1658310106_o.jpg",
        episodes: [
            { title: "ตอนที่ 1", url: "https://online225.com/cdn/hls/6173e27f69d1a59a9c33c664b1e548d1/master.txt?s=1&d=.m3u8" },
            { title: "ตอนที่ 2", url: "https://online225.com/cdn/hls/962c6f39e7255afbac3d07e80dff1b57/master.txt?s=1&d=.m3u8" },
            { title: "ตอนที่ 3", url: "https://online225.com/cdn/hls/e118b5b6347dcbd3d5172bada56990e0/master.txt?s=1&d=.m3u8" },
            { title: "ตอนที่ 4", url: "https://online225.com/cdn/hls/cdba43a46c924bfdb078089135850a1a/master.txt?s=1&d=.m3u8" },
            { title: "ตอนที่ 5", url: "https://online225.com/cdn/hls/94230a9ad96f2e35a9ac2329e32585dc/master.txt?s=1&d=.m3u8" },
            { title: "ตอนที่ 6", url: "https://online225.com/cdn/hls/57ba452d3b9db5d37f0ef9246955efca/master.txt?s=1&d=.m3u8" },
            { title: "ตอนที่ 7", url: "https://online225.com/cdn/hls/925025ae34ec9f35d0825eac463c1c04/master.txt?s=1&d=.m3u8" },
            { title: "ตอนที่ 8", url: "https://online225.com/cdn/hls/5965c0f11e6150bc877b1376f26d444a/master.txt?s=1&d=.m3u8" },
            { title: "ตอนที่ 9", url: "https://online225.com/cdn/hls/98416d84e106d6c94cc63bee2a5303c6/master.txt?s=1&d=.m3u8" },
            { title: "ตอนที่ 10", url: "https://online225.com/cdn/hls/d29cc1fceb77a6f68ecf70f87dc914a7/master.txt?s=1&d=.m3u8" },
            { title: "ตอนที่ 11", url: "https://online225.com/cdn/hls/b9df3e14b708c93397377789c9c3481d/master.txt?s=1&d=.m3u8" },
            { title: "ตอนที่ 12", url: "https://online225.com/cdn/hls/675f8b40546f0466f866f9fc1acca302/master.txt?s=1&d=.m3u8" },
            { title: "ตอนที่ 13", url: "https://online225.com/cdn/hls/7efe8ec16f1bb3f0b5186d07135989ce/master.txt?s=1&d=.m3u8" },
            { title: "ตอนที่ 14", url: "https://online225.com/cdn/hls/93d22281d6d8fa999599d1ce25487d29/master.txt?s=1&d=.m3u8" },
            { title: "ตอนที่ 15", url: "https://online225.com/cdn/hls/9835011fd22076f81793d964d7b2fef0/master.txt?s=1&d=.m3u8" },
            { title: "ตอนที่ 16", url: "https://online225.com/cdn/hls/9dffa1efc075be4a0b3b6776671ae028/master.txt?s=1&d=.m3u8" }
        ]
    },
    {
        id: "s12",
        type: "series",
        title: "The Manipulated (2025) พากย์ไทย",
        quality: "HD",
        category: "serie",
        poster: "https://m.media-amazon.com/images/M/MV5BMzkwODU4MGEtOTNkMy00YjhmLTg5NWUtZjlhODJjOGYwNDdhXkEyXkFqcGc@._V1_.jpg",
        episodes: [
            { title: "ตอนที่ 1", url: "https://online225.com/cdn/hls/a32bea4fb7077b1de91a836b9670057c/master.txt?s=2&d=.m3u8" },
            { title: "ตอนที่ 2", url: "https://online225.com/cdn/hls/39271e35c953b1c55486a87a7c9577cb/master.txt?s=2&d=.m3u8" },
            { title: "ตอนที่ 3", url: "https://online225.com/cdn/hls/07a89762c9a3f5cacf2d7d602a47e987/master.txt?s=2&d=.m3u8" },
            { title: "ตอนที่ 4", url: "https://online225.com/cdn/hls/f73a519191dad5eb71b4d7e7975ccfc2/master.txt?s=2&d=.m3u8" },
            { title: "ตอนที่ 5", url: "https://online225.com/cdn/hls/9dda3398373a5b6f6f9a9e18b2370dce/master.txt?s=2&d=.m3u8" },
            { title: "ตอนที่ 6", url: "https://online225.com/cdn/hls/6a67f9bb98572aa7e8113234d2531c1e/master.txt?s=2&d=.m3u8" },
            { title: "ตอนที่ 7", url: "https://online225.com/cdn/hls/066d394cdd7579b64f63a493de2c2ef9/master.txt?s=2&d=.m3u8" },
            { title: "ตอนที่ 8", url: "https://online225.com/cdn/hls/ef419027a6a056d5929eec429c1e4297/master.txt?s=2&d=.m3u8" },
            { title: "ตอนที่ 9", url: "https://online225.com/cdn/hls/5bad1d8c3de8fb0326e1a10e2253d4af/master.txt?s=2&d=.m3u8" },
            { title: "ตอนที่ 10", url: "https://online225.com/cdn/hls/e6dedd99c5c2d79c02fb7e103c951a59/master.txt?s=2&d=.m3u8" },
            { title: "ตอนที่ 11", url: "https://top-cdn.com/hls/229a15cc19ce23a0609b3cb0fe493200/master.m3u8" },
            { title: "ตอนที่ 12", url: "https://top-cdn.com/hls/5eb74b98119656aa9a333628540bb487/master.m3u8" }
        ]
    },
    {
        id: "m106",
        type: "movie",
        title: "World War Z (2013) มหาวิบัติสงคราม Z",
        quality: "HD",
        category: "action",
        poster: "https://upload.wikimedia.org/wikipedia/th/thumb/d/dc/World_War_Z_poster.jpg/250px-World_War_Z_poster.jpg",
        url: "https://master.streamhls.com/hls/db174277ffe0ef7f6f0d182041e5510d/master.m3u8"
    },
    {
        id: "m107",
        type: "movie",
        title: "Transformers Rise of the Beasts (2023) ทรานส์ฟอร์เมอร์ส กำเนิดจักรกลอสูร",
        quality: "HD",
        category: "action",
        poster: "https://files.thaiware.site/movie/2023-05/images-poster/230512120411211.jpg",
        url: "https://master.streamhls.com/hls/9edbf4a0a5c175c82f9cbbcd373872ce/master.m3u8"
    },
    {
        id: "m108",
        type: "movie",
        title: "The Creator (2023) เดอะ ครีเอเตอร์",
        quality: "HD",
        category: "action",
        poster: "https://upload.wikimedia.org/wikipedia/th/thumb/9/94/The_Creator_2023_poster.jpg/250px-The_Creator_2023_poster.jpg",
        url: "https://master.streamhls.com/hls/eb742cbcc610220dd4af878e10ea8321/master.m3u8"
    },
    {
        id: "m109",
        type: "movie",
        title: "The Covenant (2023) เดอะ โคเวแนนท์",
        quality: "HD",
        category: "action",
        poster: "https://files.thaiware.site/movie/2023-04/images-poster/230405120416991.jpg",
        url: "https://master.streamhls.com/hls/6a94d77064b5047d7a18cba87daf12c4/master.m3u8"
    },
    {
        id: "m110",
        type: "movie",
        title: "Khun pan 3 (2023) ขุนพันธ์ 3",
        quality: "HD",
        category: "action",
        poster: "https://sahamongkolfilm.com/wp-content/uploads/2023/01/Khun-Pan-3-Theme-Poster02-2-New-Date.jpg",
        url: "https://master.streamhls.com/hls/c7c1e1b7118265d5d03f9c7c2d76831c/master.m3u8"
    },
    {
        id: "m111",
        type: "movie",
        title: "Shin Ultraman (2022) ชิน อุลตร้าแมน",
        quality: "HD",
        category: "action",
        poster: "https://inwfile.com/s-fw/xexz4a.jpg",
        url: "https://master.streamhls.com/hls/07e709ae6530bec559514cf2a2d60711/master.m3u8"
    },
    {
        id: "m112",
        type: "movie",
        title: "Gangnam Zombie (2023) คังนัมซอมบี้",
        quality: "HD",
        category: "action",
        poster: "https://files.thaiware.site/movie/2023-01/images-poster/230107120408b91.jpg",
        url: "https://master.streamhls.com/hls/942dc85466433855354b5121ae87f83c/master.m3u8"
    },
    {
        id: "m113",
        type: "movie",
        title: "Spider-Man (2002) ไอ้แมงมุม",
        quality: "HD",
        category: "action",
        poster: "https://upload.wikimedia.org/wikipedia/th/thumb/6/6c/Spider-Man_%282002_film%29_poster.jpg/250px-Spider-Man_%282002_film%29_poster.jpg",
        url: "https://master.streamhls.com/hls/ceca35a703e82f65769a025459288740/master.m3u8"
    },
    {
        id: "m114",
        type: "movie",
        title: "Spider-Man 2 (2004) ไอ้แมงมุม 2",
        quality: "HD",
        category: "action",
        poster: "https://upload.wikimedia.org/wikipedia/th/4/4e/Spider-Man_2_poster.jpg",
        url: "https://master.streamhls.com/hls/fc3ed6f32fb0f2fa8a0243b787480bff/master.m3u8"
    },
    {
        id: "m115",
        type: "movie",
        title: "Spider-Man 3 (2007) ไอ้แมงมุม 3",
        quality: "HD",
        category: "action",
        poster: "https://image.tmdb.org/t/p/original/589rUff9Ai272uMudb9Dn7k88Oa.jpg",
        url: "https://master.streamhls.com/hls/19b861e107c607d60786cad800e1a5c3/master.m3u8"
    },
    {
        id: "m116",
        type: "movie",
        title: "The Amazing Spider-Man (2012) ดิ อะเมซิ่ง สไปเดอร์แมน",
        quality: "HD",
        category: "action",
        poster: "https://upload.wikimedia.org/wikipedia/th/e/e0/The_Amazing_Spider-Man_%28film%29_poster.jpg",
        url: "https://master.streamhls.com/hls/b12f383191fc9607614411d0ae56c002/master.m3u8"
    },
    {
        id: "m117",
        type: "movie",
        title: "The Amazing Spider-Man 2 (2014) ดิ อะเมซิ่ง สไปเดอร์แมน 2",
        quality: "HD",
        category: "action",
        poster: "https://cdni-hw.ch7.com/dm/sz-md/i/images/2025/02/27/67c04b8934a560.58412241.jpg",
        url: "https://master.streamhls.com/hls/c0a61e921d966806e04f27b96033e641/master.m3u8"
    },
    {
        id: "m118",
        type: "movie",
        title: "Spider-Man: Far from Home (2019) สไปเดอร์-แมน ฟาร์ ฟรอม โฮม",
        quality: "HD",
        category: "action",
        poster: "https://files.thaiware.site/movie/2019-06/images-poster/190626100016Ah8.jpg",
        url: "https://master.streamhls.com/hls/2bb13b36633e980cfa55a7f4859ba573/master.m3u8"
    },
    {
        id: "m119",
        type: "movie",
        title: "Spider-Man: No Way Home (2021) สไปเดอร์แมน: โน เวย์ โฮม",
        quality: "HD",
        category: "action",
        poster: "https://files.thaiware.site/movie/2022-08/images-poster/220831120038R7e.jpg",
        url: "https://master.streamhls.com/hls/15eba23308c4bfe85bf43d6b7b978837/master.m3u8"
    },
    {
        id: "m120",
        type: "movie",
        title: "Spider Man Across the Spider Verse (2023) สไปเดอร์ แมน ผงาดข้ามจักรวาลแมงมุม",
        quality: "HD",
        category: "action",
        poster: "https://files.thaiware.site/movie/2023-05/images-poster/230504120409T79.jpg",
        url: "https://master.streamhls.com/hls/e142c37ad41e9952ab1a7d706b1a4e12/master.m3u8"
    },
    {
        id: "m121",
        type: "movie",
        title: "Vjeran Tomic The Spider-Man of Paris (2023) เวรัน โทมิช สไปเดอร์แมน แห่งปารีส",
        quality: "HD",
        category: "action",
        poster: "https://m.media-amazon.com/images/M/MV5BNmFiMjZmYWYtZTQ4NC00ODA1LWEwMTYtZGY3YTk0ZmYxOWY5XkEyXkFqcGc@._V1_.jpg",
        url: "https://master.streamhls.com/hls/f6b70d627488917f5e5a9d5956e012bd/master.m3u8"
    },
];
