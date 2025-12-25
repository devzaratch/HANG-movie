import requests
from bs4 import BeautifulSoup
import json

def scrape_movies():
    url = "https://www.037-hddmovie.com/"
    headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'}
    
    try:
        response = requests.get(url, headers=headers, timeout=15)
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # ปรับ Selector ให้ตรงกับโครงสร้างเว็บล่าสุด
        movie_blocks = soup.select('.movie-block, .ml-item')
        new_data = []

        print(f"พบหนังทั้งหมด {len(movie_blocks)} เรื่อง")

        for i, block in enumerate(movie_blocks[:30]): # ดึง 30 เรื่องล่าสุด
            try:
                title_el = block.select_one('.movie-title, h3, h2')
                img_el = block.select_one('img')
                link_el = block.select_one('a')

                if title_el and link_el:
                    # มุดเข้าหน้าย่อยเพื่อเอา iframe
                    detail_res = requests.get(link_el['href'], headers=headers, timeout=10)
                    detail_soup = BeautifulSoup(detail_res.content, 'html.parser')
                    iframe = detail_soup.find('iframe', src=True)
                    
                    video_url = iframe['src'] if iframe else link_el['href']

                    new_data.append({
                        "id": f"m{i+1}",
                        "title": title_el.text.strip(),
                        "poster": img_el['src'] if img_el else "",
                        "url": video_url,
                        "category": "Movie",
                        "quality": "HD",
                        "type": "movie"
                    })
                    print(f"สำเร็จ: {title_el.text.strip()}")
            except:
                continue

        # เขียนทับไฟล์ data.js ในรูปแบบที่ JS อ่านได้เลย
        with open('data.js', 'w', encoding='utf-8') as f:
            f.write(f"const movieDatabase = {json.dumps(new_data, ensure_ascii=False, indent=2)};")
            
    except Exception as e:
        print(f"เกิดข้อผิดพลาด: {e}")

if __name__ == "__main__":
    scrape_movies()
