
# TASKFLOW - Görev Yönetim API

## Proje Hakkında

TASKFLOW, Node.js ve Express.js kullanılarak geliştirilmiş REST API tabanlı bir görev yönetimi uygulamasıdır.

Proje, TNC Group Backend Geliştirme eğitimi kapsamında hazırlanmıştır.

Uygulama; görev oluşturma, listeleme, detay görüntüleme, güncelleme ve silme işlemlerini desteklemektedir.

## Kullanılan Teknolojiler

- Node.js
- Express.js
- JavaScript
- Postman

## Özellikler

- Yeni görev oluşturma
- Bütün görevleri listeleme
- ID'ye göre görev detaylarını görüntüleme
- Mevcut görevleri güncelleme
- Görev silme
- Logger Middleware ile HTTP isteklerini kaydetme
- Modüler Router ve Controller mimarisi
- JSON formatında API yanıtları

## Kurulum

Bilgisayarda Node.js kurulu olmalıdır.

Proje, GitHub üzerindeki proje deposundan indirilebilir.

GitHub sayfasında Code > Download ZIP seçeneği
kullanılarak proje indirilir ve ZIP dosyası
bir klasöre çıkarılır.

Proje klasöründe terminal açılarak aşağıdaki komutlar çalıştırılır:

```bash
npm install
node app.js
```

Sunucu varsayılan olarak aşağıdaki adreste çalışır:

http://localhost:3000

## API Endpointleri

| Metot | Endpoint | Açıklama |
|---|---|---|
| GET | /tasks | Bütün görevleri listeler |
| GET | /tasks/:id | ID'ye göre görev detayını getirir |
| POST | /tasks | Yeni görev oluşturur |
| PUT | /tasks/:id | Mevcut görevi günceller |
| DELETE | /tasks/:id | Görevi siler |

## Örnek JSON

POST /tasks isteğinde kullanılabilecek örnek görev verisi:

```json
{
  "title": "Backend API geliştir",
  "description": "Express.js ile görev yönetimi oluştur",
  "status": "pending",
  "priority": "high",
  "assignee": "Ahmet"
}
```

## HTTP Durum Kodları

- 200 OK: İşlem başarıyla tamamlandı.
- 201 Created: Yeni görev oluşturuldu.
- 404 Not Found: İstenen görev bulunamadı.

## Proje Mimarisi

Proje, modüler bir yapıda geliştirilmiştir.

- app.js: Express sunucusunu ve middleware bağlantılarını yönetir.
- src/routes/taskRoutes.js: API endpointlerini tanımlar.
- src/controllers/taskController.js: CRUD işlemlerini gerçekleştirir.
- src/data/tasks.js: Görev verilerini tutar.
- src/middleware/logger.js: HTTP isteklerini terminale kaydeder.

## Veri Saklama

Görevler JavaScript dizisinde, uygulama belleğinde tutulmaktadır.

Bu sürümde veritabanı kullanılmamaktadır.

Sunucu yeniden başlatıldığında görevler başlangıç verilerine döner.

## API Testleri

API endpointleri Postman aracılığıyla test edilmiştir.

Test ekran görüntüleri screenshots klasöründe bulunmaktadır.

## Geliştirici

Ahmet Taş

TNC Group - Backend Geliştirme Projesi
