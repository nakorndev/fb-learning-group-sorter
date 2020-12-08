# How to sort

1. เปิด F12 -> Network
2. เปิด Preserve log
3. เตรียม Re-order posts ให้กับ Unit
4. เมื่อ Save แล้วรีบกด Stop recording network log
5. Copy `/graphql` แบบ cURL (Bash)
6. กรองเอาส่วน `--data-raw <data>` มารันที่ `npm start -- <data>`
7. นำผลลัพธ์ที่ได้แทนที่กับ `--data-raw` อีกครั้ง และรันด้วย bash
