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
        category: "drama",
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
        category: "hornor",
        poster: "https://true4u.com/static/images/04325fd1-b582-44e9-9c62-4979f6b2974b.jpg",
        url: "https://master.streamhls.com/hls/7def8884be5a83291df80511b8b4a7a8/master.m3u8"
    },
    {
        id: "m4",
        type: "movie",
        title: "ท่าแร่ (2025) Tha Rae The Exorcist",
        quality: "HD",
        category: "hornor",
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
        category: "hornor",
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
];
