import requests
from bs4 import BeautifulSoup
import json

def scrape_movies():
    # ใช้ URL หมวดหนังใหม่โดยตรงเพื่อให้ดึงได้แม่นยำ
    url = "https://www.037-hddmovie.com/category/%e0%b8%94%e0%b8%b9%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88%e0%b8%8a%e0%b8%99%e0%b9%82%e0%b8%a3%e0%b8%87/"
    
    # ปรับ Headers ให้เหมือนคนเข้าใช้งานจริงๆ
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'th-TH,th;q=0.9,en-US;q=0.8,en;q=0.7'
    }
    
    try:
        response = requests.get(url, headers=headers, timeout=20)
        response.encoding = 'utf-8' # ป้องกันภาษาต่างดาว
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # ค้นหาบล็อกหนัง (ใช้ Selector ที่กว้างขึ้นครอบคลุมหลายชื่อ Class)
        movie_blocks = soup.select('.movie-block, .ml-item, .item')
        new_data = []

        print(f"กำลังสแกน... เจอเป้าหมาย {len(movie_blocks)} จุด")

        for i, block in enumerate(movie_blocks[:24]): # ดึง 24 เรื่องล่าสุด
            # พยายามหาชื่อหนังจากหลายจุด
            title_el = block.select_one('.movie-title, h3, h2, .title')
            img_el = block.select_one('img')
            link_el = block.select_one('a')

            if title_el and link_el:
                title = title_el.get_text(strip=True)
                poster = img_el.get('src', '') if img_el else ""
                # ปรับแต่ง URL รูปภาพถ้าเป็นลิงก์แบบย่อ
                if poster.startswith('//'):
                    poster = 'https:' + poster
                
                detail_url = link_el.get('href', '')

                new_data.append({
                    "id": f"m{i+1}",
                    "title": title,
                    "poster": poster,
                    "url": detail_url, # ใช้ลิงก์หน้าดูของเขาเพื่อความเสถียร
                    "category": "หนังใหม่",
                    "quality": "HD",
                    "type": "movie"
                })
                print(f"ดึงสำเร็จ [{i+1}]: {title}")

        # บันทึกเป็นไฟล์ data.js
        with open('data.js', 'w', encoding='utf-8') as f:
            json_data = json.dumps(new_data, ensure_ascii=False, indent=2)
            f.write(f"const movieDatabase = {json_data};")
        
        print(f"เสร็จสิ้น! บันทึกข้อมูลหนัง {len(new_data)} เรื่องลงใน data.js")

    except Exception as e:
        print(f"เกิดข้อผิดพลาด: {e}")

if __name__ == "__main__":
    scrape_movies()
