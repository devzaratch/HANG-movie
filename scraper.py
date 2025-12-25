import requests
from bs4 import BeautifulSoup
import json

def scrape_movies():
    # เปลี่ยน URL เป็นหมวดหมู่หนังใหม่โดยตรงเพื่อให้ดึงง่ายขึ้น
    url = "https://www.037-hddmovie.com/category/%e0%b8%94%e0%b8%b9%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88%e0%b8%8a%e0%b8%99%e0%b9%82%e0%b8%a3%e0%b8%87/"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
    }
    
    try:
        response = requests.get(url, headers=headers, timeout=15)
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # ค้นหาบล็อกหนังโดยใช้ Selector ที่ครอบคลุมมากขึ้น
        movie_blocks = soup.select('.movie-block, .ml-item, .item')
        new_data = []

        print(f"กำลังตรวจสอบข้อมูล... พบตำแหน่งที่น่าจะเป็นหนัง {len(movie_blocks)} จุด")

        for i, block in enumerate(movie_blocks[:24]): # ดึง 24 เรื่องล่าสุด
            title_el = block.select_one('.movie-title, h3, h2, .title')
            img_el = block.select_one('img')
            link_el = block.select_one('a')

            if title_el and link_el:
                title = title_el.get_text(strip=True)
                poster = img_el.get('src', '') if img_el else ""
                detail_url = link_el.get('href', '')

                # เพิ่มข้อมูลเบื้องต้นลงในลิสต์
                new_data.append({
                    "id": f"m{i+1}",
                    "title": title,
                    "poster": poster,
                    "url": detail_url, # ใช้ลิงก์หน้าดูหนังไปก่อนเพื่อความเสถียร
                    "category": "หนังใหม่",
                    "quality": "HD",
                    "type": "movie"
                })
                print(f"ดึงสำเร็จ: {title}")

        # บันทึกไฟล์ data.js
        with open('data.js', 'w', encoding='utf-8') as f:
            # ใช้รูปแบบที่ไฟล์ index.html ของคุณจะเรียกใช้ได้ทันที
            json_content = json.dumps(new_data, ensure_ascii=False, indent=2)
            f.write(f"const movieDatabase = {json_content};")
        
        print(f"บันทึกข้อมูลเรียบร้อย! รวมทั้งหมด {len(new_data)} เรื่อง")

    except Exception as e:
        print(f"เกิดข้อผิดพลาด: {e}")

if __name__ == "__main__":
    scrape_movies()
