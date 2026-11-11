# TASKFLOW — Proje Tanıtım Dokümanı

## 1. Proje Hakkında

TASKFLOW, Node.js ve Express.js kullanarak geliştirdiğim bir görev yönetim API'sidir. Bu projeyi TNC Group'un Backend Geliştirme eğitimi kapsamında hazırladım.

Projede temel olarak kullanıcıların görev oluşturabileceği, mevcut görevleri listeleyebileceği, görev bilgilerini güncelleyebileceği ve ihtiyaç duymadıkları görevleri silebileceği bir backend sistemi geliştirdim.

## 2. Projenin Amacı

Bu projedeki amacım, eğitimde öğrendiğim backend geliştirme konularını gerçek bir uygulama üzerinde pekiştirmekti.

Özellikle REST API mantığını, HTTP metotlarının nasıl çalıştığını ve istemci ile sunucu arasında JSON formatında nasıl veri alışverişi yapıldığını uygulamalı olarak öğrenmeye odaklandım.

Aynı zamanda kodların tamamını tek bir dosyada tutmak yerine Controller, Router ve Middleware gibi bölümlere ayırarak daha düzenli bir proje yapısı oluşturmaya çalıştım.

## 3. Görev Yapısı

Sistemde oluşturulan her görev için belirli bilgiler tutuluyor.

| Alan | Açıklama |
|---|---|
| id | Her göreve verilen benzersiz numara |
| title | Görevin başlığı |
| description | Görevin açıklaması |
| status | Görevin mevcut durumu |
| priority | Görevin öncelik seviyesi |
| assignee | Görevin atandığı kişi |

Her görev oluşturulduğunda sistem yeni bir ID atıyor. Böylece görevler birbirinden ayırt edilebiliyor.

## 4. API İşlemleri

Projede beş temel API endpoint'i geliştirdim.

- **GET /tasks:** Sistemdeki bütün görevleri listeler.
- **GET /tasks/:id:** Belirtilen ID'ye sahip görevin detaylarını getirir.
- **POST /tasks:** Gönderilen bilgilerle yeni bir görev oluşturur.
- **PUT /tasks/:id:** Daha önce oluşturulan bir görevin bilgilerini günceller.
- **DELETE /tasks/:id:** Belirtilen görevi sistemden siler.

Bu işlemleri Postman üzerinden ayrı ayrı test ettim.

## 5. Proje Mimarisi

Başlangıçta API işlemlerini `app.js` dosyasında geliştirdim. Daha sonra projeyi daha düzenli hâle getirmek için kodları farklı dosyalara ayırdım.

Projede kullandığım temel dosyalar şunlardır:

- **app.js:** Express sunucusunun başlatılması ve middleware bağlantıları
- **taskRoutes.js:** API isteklerinin ilgili fonksiyonlara yönlendirilmesi
- **taskController.js:** Görevlerle ilgili CRUD işlemleri
- **tasks.js:** Görev verilerinin tutulması
- **logger.js:** Gelen HTTP isteklerinin terminalde görüntülenmesi

Logger Middleware sayesinde API'ye gelen isteklerin hangi HTTP metoduyla, hangi adrese ve ne zaman gönderildiğini takip edebiliyorum.

## 6. Veri Saklama

Bu projede verileri JavaScript dizisi içerisinde, uygulama belleğinde tutuyorum. Kalıcı bir veritabanı bağlantısı kullanmadım.

Bu nedenle uygulama çalışırken oluşturulan veya güncellenen görevler, sunucu yeniden başlatıldığında başlangıç verilerine dönüyor.

## 7. Test Süreci

Geliştirdiğim API'yi Postman kullanarak test ettim.

Testlerde görev oluşturma, görevleri listeleme, ID ile görev getirme, güncelleme ve silme işlemlerinin doğru çalışıp çalışmadığını kontrol ettim.

Ayrıca bir görev silindikten sonra yeni görev oluşturulduğunda ID'lerin çakışmaması için ayrı bir test gerçekleştirdim.

Başarılı testlerin ekran görüntülerini `screenshots` klasörüne kaydettim.

## 8. Sonuç

TASKFLOW projesiyle Node.js ve Express.js kullanarak temel CRUD işlemlerini gerçekleştiren bir REST API geliştirdim.

Bu süreçte yalnızca endpoint oluşturmayı değil, karşılaştığım hataları incelemeyi, Postman ile API testleri yapmayı ve kodları daha düzenli bir mimariye taşımayı da deneyimledim.

Proje sayesinde backend geliştirme konusunda öğrendiğim temel bilgileri uygulama fırsatı buldum.

**Geliştirici:** Ahmet Taş

**Eğitim Programı:** TNC Group — Backend Geliştirme