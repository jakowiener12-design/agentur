const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn && nav) menuBtn.addEventListener('click', () => nav.classList.toggle('open'));

function val(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : '';
}

const NOVARA_LANGS = ['de','en','tr','it','es'];
const NOVARA_LANG_LABELS = {de:'Deutsch',en:'English',tr:'Türkçe',it:'Italiano',es:'Español'};
const NOVARA_I18N = {
  'Startseite': ['Home','Ana Sayfa','Home','Inicio'],
  'Leistungen': ['Services','Hizmetler','Servizi','Servicios'],
  'Branchen': ['Industries','Sektörler','Settori','Sectores'],
  'Referenzen': ['Projects','Referanslar','Progetti','Proyectos'],
  'Über uns': ['About us','Hakkımızda','Chi siamo','Sobre nosotros'],
  'Kontakt': ['Contact','İletişim','Contatti','Contacto'],
  'Kostenlose Beratung': ['Free consultation','Ücretsiz danışmanlık','Consulenza gratuita','Consulta gratuita'],
  'Unsere Leistungen': ['Our services','Hizmetlerimiz','I nostri servizi','Nuestros servicios'],
  'Alle Leistungen': ['All services','Tüm hizmetler','Tutti i servizi','Todos los servicios'],
  'Alle Branchen': ['All industries','Tüm sektörler','Tutti i settori','Todos los sectores'],
  'Alle Referenzen': ['All projects','Tüm referanslar','Tutti i progetti','Todos los proyectos'],
  'Mehr erfahren →': ['Learn more →','Daha fazla bilgi →','Scopri di più →','Más información →'],
  'Mehr entdecken': ['Discover more','Daha fazlasını keşfet','Scopri di più','Descubrir más'],
  'Beratung sichern': ['Book consultation','Danışmanlık al','Prenota consulenza','Reservar consulta'],
  'Agentur': ['Agency','Ajans','Agenzia','Agencia'],
  'Support': ['Support','Destek','Supporto','Soporte'],
  'Rechtliches': ['Legal','Yasal','Legale','Legal'],
  'Impressum': ['Legal notice','Yasal bilgiler','Note legali','Aviso legal'],
  'Datenschutz': ['Privacy','Gizlilik','Privacy','Privacidad'],
  'Digitale Lösungen, die Ihr Business': ['Digital solutions that move your business','İşletmenizi ileri taşıyan dijital çözümler','Soluzioni digitali che fanno crescere il tuo business','Soluciones digitales que impulsan tu negocio'],
  'nach vorne bringen.': ['forward.','ileri taşır.','in avanti.','hacia adelante.'],
  'Wir gestalten moderne Websites, automatisieren Prozesse und sorgen dafür, dass Ihr Unternehmen online gefunden, gebucht und ausgewählt wird.': ['We design modern websites, automate processes and make sure your business gets found, booked and chosen online.','Modern web siteleri tasarlıyor, süreçleri otomatikleştiriyor ve işletmenizin internette bulunmasını, rezerve edilmesini ve tercih edilmesini sağlıyoruz.','Progettiamo siti web moderni, automatizziamo i processi e facciamo in modo che la tua azienda venga trovata, prenotata e scelta online.','Diseñamos sitios web modernos, automatizamos procesos y hacemos que tu empresa sea encontrada, reservada y elegida online.'],
  'Projektkonzepte': ['Project concepts','Proje konseptleri','Concept di progetto','Conceptos de proyecto'],
  'Qualitätsanspruch': ['Quality standard','Kalite standardı','Standard qualitativo','Estándar de calidad'],
  'Support-Option': ['Support option','Destek seçeneği','Opzione supporto','Opción de soporte'],
  'Ein Partner für Ihren gesamten digitalen Auftritt.': ['One partner for your entire digital presence.','Tüm dijital varlığınız için tek partner.','Un unico partner per tutta la tua presenza digitale.','Un solo socio para toda tu presencia digital.'],
  'Von der Website bis zur Werbung und laufenden Betreuung.': ['From the website to advertising and ongoing support.','Web sitesinden reklama ve sürekli desteğe kadar.','Dal sito web alla pubblicità e al supporto continuativo.','Desde la web hasta la publicidad y el soporte continuo.'],
  'Webdesign & Entwicklung': ['Web design & development','Web tasarım & geliştirme','Web design & sviluppo','Diseño web & desarrollo'],
  'Moderne, responsive Websites mit klarem Design und hoher Performance.': ['Modern responsive websites with clear design and high performance.','Net tasarıma ve yüksek performansa sahip modern, responsive web siteleri.','Siti web moderni e responsive con design chiaro e alte prestazioni.','Sitios web modernos y responsive con diseño claro y alto rendimiento.'],
  'Online-Terminbuchung': ['Online appointment booking','Online randevu sistemi','Prenotazione online','Reserva de citas online'],
  'Digitale Terminprozesse für weniger Aufwand und schnelle Buchungen.': ['Digital appointment flows for less effort and faster bookings.','Daha az iş yükü ve daha hızlı rezervasyonlar için dijital randevu süreçleri.','Processi digitali per appuntamenti più semplici e prenotazioni rapide.','Procesos digitales de citas para menos trabajo y reservas más rápidas.'],
  'Terminlösung →': ['Booking solution →','Randevu çözümü →','Soluzione prenotazioni →','Solución de reservas →'],
  'Direkter Kundendialog per WhatsApp und mobile Kontaktstrecken.': ['Direct customer communication via WhatsApp and mobile contact flows.','WhatsApp üzerinden doğrudan müşteri iletişimi ve mobil iletişim akışları.','Comunicazione diretta con i clienti via WhatsApp e percorsi di contatto mobile.','Comunicación directa con clientes por WhatsApp y flujos de contacto móvil.'],
  'Besser gefunden werden in lokalen Suchergebnissen und Karten.': ['Get found more easily in local search results and maps.','Yerel arama sonuçlarında ve haritalarda daha kolay bulunma.','Fatti trovare meglio nei risultati locali e sulle mappe.','Mejora tu visibilidad en búsquedas locales y mapas.'],
  'Gezielte Kampagnen für Reichweite, Leads und Verkäufe.': ['Targeted campaigns for reach, leads and sales.','Erişim, potansiyel müşteri ve satış için hedefli kampanyalar.','Campagne mirate per copertura, lead e vendite.','Campañas dirigidas para alcance, leads y ventas.'],
  'Professionelle Inhalte, Reels, Videos, PDFs und Visuals.': ['Professional content, reels, videos, PDFs and visuals.','Profesyonel içerikler, reels, videolar, PDF’ler ve görseller.','Contenuti professionali, reel, video, PDF e visual.','Contenido profesional, reels, vídeos, PDF y recursos visuales.'],
  'Digitale Lösungen für unterschiedliche Geschäftsmodelle.': ['Digital solutions for different business models.','Farklı iş modelleri için dijital çözümler.','Soluzioni digitali per diversi modelli di business.','Soluciones digitales para distintos modelos de negocio.'],
  'Jede Branche bekommt eine passende Bildsprache, Nutzerführung und Kontaktlogik.': ['Every industry gets the right visual language, user journey and contact flow.','Her sektör için uygun görsel dil, kullanıcı deneyimi ve iletişim akışı.','Ogni settore riceve il giusto linguaggio visivo, percorso utente e flusso di contatto.','Cada sector recibe el lenguaje visual, recorrido de usuario y flujo de contacto adecuados.'],
  'Beauty & Kosmetik': ['Beauty & cosmetics','Güzellik & kozmetik','Beauty & cosmetica','Belleza & cosmética'],
  'Salons, Studios und Marken.': ['Salons, studios and brands.','Salonlar, stüdyolar ve markalar.','Saloni, studi e marchi.','Salones, estudios y marcas.'],
  'Gastronomie': ['Hospitality','Gastronomi','Ristorazione','Gastronomía'],
  'Restaurants, Cafés und Delivery.': ['Restaurants, cafés and delivery.','Restoranlar, kafeler ve teslimat.','Ristoranti, caffè e delivery.','Restaurantes, cafeterías y delivery.'],
  'Handwerk & Bau': ['Craft & construction','Zanaat & inşaat','Artigianato & edilizia','Oficios & construcción'],
  'Betriebe und Bauunternehmen.': ['Trades and construction companies.','İşletmeler ve inşaat şirketleri.','Imprese artigiane e aziende edili.','Empresas de oficios y construcción.'],
  'Gesundheit & Medizin': ['Health & medical','Sağlık & tıp','Salute & medicina','Salud & medicina'],
  'Praxen, Therapeuten und Kliniken.': ['Practices, therapists and clinics.','Muayenehaneler, terapistler ve klinikler.','Studi medici, terapisti e cliniche.','Consultas, terapeutas y clínicas.'],
  'Immobilien': ['Real estate','Gayrimenkul','Immobiliare','Inmobiliaria'],
  'Makler und Projektentwickler.': ['Agents and property developers.','Emlak danışmanları ve proje geliştiriciler.','Agenti e sviluppatori immobiliari.','Agentes y promotores inmobiliarios.'],
  'Werkstätten, Händler und Services.': ['Workshops, dealers and services.','Servisler, bayiler ve hizmetler.','Officine, concessionari e servizi.','Talleres, concesionarios y servicios.'],
  'Warum NOVARA STUDIO?': ['Why NOVARA STUDIO?','Neden NOVARA STUDIO?','Perché NOVARA STUDIO?','¿Por qué NOVARA STUDIO?'],
  'Professionell, verständlich und auf Ergebnisse ausgerichtet.': ['Professional, clear and focused on results.','Profesyonel, anlaşılır ve sonuç odaklı.','Professionale, chiaro e orientato ai risultati.','Profesional, claro y orientado a resultados.'],
  'Individuelle Lösungen': ['Custom solutions','Özel çözümler','Soluzioni su misura','Soluciones a medida'],
  'Auf Branche, Zielgruppe und Geschäftsmodell abgestimmt.': ['Tailored to your industry, audience and business model.','Sektöre, hedef kitleye ve iş modeline özel.','Su misura per settore, pubblico e modello di business.','Adaptadas al sector, público y modelo de negocio.'],
  'Ergebnisorientiert': ['Results focused','Sonuç odaklı','Orientato ai risultati','Orientado a resultados'],
  'Fokus auf Sichtbarkeit, Anfragen und Wachstum.': ['Focused on visibility, enquiries and growth.','Görünürlük, talepler ve büyümeye odaklı.','Focus su visibilità, richieste e crescita.','Enfocado en visibilidad, consultas y crecimiento.'],
  'Zukunftssicher': ['Future ready','Geleceğe hazır','Pronto per il futuro','Preparado para el futuro'],
  'Responsive Technik und sauber erweiterbare Struktur.': ['Responsive technology and a clean scalable structure.','Responsive teknoloji ve kolay genişletilebilir temiz yapı.','Tecnologia responsive e struttura facilmente espandibile.','Tecnología responsive y estructura limpia y escalable.'],
  'Alles aus einer Hand': ['Everything from one source','Her şey tek elden','Tutto da un unico partner','Todo en un solo lugar'],
  'Klare Kommunikation': ['Clear communication','Net iletişim','Comunicazione chiara','Comunicación clara'],
  'Direkte Ansprechpartner und transparente Abläufe.': ['Direct contacts and transparent processes.','Doğrudan iletişim ve şeffaf süreçler.','Referenti diretti e processi trasparenti.','Contacto directo y procesos transparentes.'],
  'Für definierte Business- und Premium-Service-Level.': ['For defined Business and Premium service levels.','Tanımlı Business ve Premium hizmet seviyeleri için.','Per livelli di servizio Business e Premium definiti.','Para niveles de servicio Business y Premium definidos.'],
  'Echte Bilder. Sichtbare Referenzen.': ['Real imagery. Visible project quality.','Gerçek görseller. Görünür referans kalitesi.','Immagini reali. Progetti visibili.','Imágenes reales. Proyectos visibles.'],
  'Neue Branchen-Demos und Referenzseiten zeigen sofort, wie Ihre Agentur Projekte professionell präsentieren kann.': ['Industry demos and project pages instantly show how professionally your business can be presented.','Sektör demoları ve referans sayfaları işletmenizin ne kadar profesyonel sunulabileceğini hemen gösterir.','Demo di settore e pagine progetto mostrano subito quanto professionalmente può essere presentata la tua attività.','Las demos sectoriales y páginas de proyecto muestran al instante cómo puede presentarse profesionalmente tu negocio.'],
  'Bereit für mehr Kunden, Anfragen und Sichtbarkeit?': ['Ready for more customers, enquiries and visibility?','Daha fazla müşteri, talep ve görünürlük için hazır mısınız?','Pronto per più clienti, richieste e visibilità?','¿Listo para más clientes, consultas y visibilidad?'],
  'Starten Sie mit einer unverbindlichen Beratung.': ['Start with a no-obligation consultation.','Ücretsiz ve bağlayıcı olmayan bir danışmanlıkla başlayın.','Inizia con una consulenza senza impegno.','Empieza con una consulta sin compromiso.'],
  'Digitalagentur für Webdesign, Online-Marketing, Local Business Solutions und digitale Betreuung.': ['Digital agency for web design, online marketing, local business solutions and digital support.','Web tasarım, online pazarlama, yerel işletme çözümleri ve dijital destek ajansı.','Agenzia digitale per web design, marketing online, soluzioni local business e supporto digitale.','Agencia digital de diseño web, marketing online, soluciones locales y soporte digital.'],
  'Digitale Leistungen, die': ['Digital services that','Birlikte çalışan dijital','Servizi digitali che','Servicios digitales que'],
  'zusammenarbeiten.': ['work together.','hizmetler.','lavorano insieme.','trabajan juntos.'],
  'Webdesign, Marketing, lokale Sichtbarkeit, Automatisierung und Betreuung werden als ein durchgängiges Kundenerlebnis aufgebaut.': ['Web design, marketing, local visibility, automation and support are built into one seamless customer experience.','Web tasarım, pazarlama, yerel görünürlük, otomasyon ve destek tek bir kesintisiz müşteri deneyiminde birleştirilir.','Web design, marketing, visibilità locale, automazione e supporto vengono integrati in un’unica esperienza cliente.','Diseño web, marketing, visibilidad local, automatización y soporte se integran en una experiencia continua.'],
  'Strategie, UX/UI Design, responsive Entwicklung, Landingpages, Galerien, Videos, Kontaktformulare und Performance-Optimierung.': ['Strategy, UX/UI design, responsive development, landing pages, galleries, videos, contact forms and performance optimisation.','Strateji, UX/UI tasarım, responsive geliştirme, landing page, galeriler, videolar, iletişim formları ve performans optimizasyonu.','Strategia, UX/UI design, sviluppo responsive, landing page, gallerie, video, moduli di contatto e ottimizzazione delle prestazioni.','Estrategia, diseño UX/UI, desarrollo responsive, landing pages, galerías, vídeos, formularios y optimización de rendimiento.'],
  'Conversion-orientierte Seitenstruktur': ['Conversion-focused page structure','Dönüşüm odaklı sayfa yapısı','Struttura orientata alla conversione','Estructura orientada a conversión'],
  'SEO-freundliche technische Basis': ['SEO-friendly technical foundation','SEO uyumlu teknik altyapı','Base tecnica SEO-friendly','Base técnica optimizada para SEO'],
  'Galerien, Videos und Downloads': ['Galleries, videos and downloads','Galeriler, videolar ve indirmeler','Gallerie, video e download','Galerías, vídeos y descargas'],
  'Digitale Terminvereinbarung mit Datum, Zeit, Thema und direkter Bestätigung über WhatsApp oder E-Mail.': ['Digital appointment booking with date, time, topic and direct confirmation via WhatsApp or email.','Tarih, saat ve konu seçimiyle dijital randevu ve WhatsApp veya e-posta üzerinden doğrudan onay.','Prenotazione digitale con data, ora, argomento e conferma diretta via WhatsApp o email.','Reserva digital con fecha, hora, tema y confirmación directa por WhatsApp o email.'],
  'Mobil optimiert': ['Mobile optimised','Mobil uyumlu','Ottimizzato mobile','Optimizado para móvil'],
  'Kalenderorientierte Buchung': ['Calendar-based booking','Takvim tabanlı rezervasyon','Prenotazione su calendario','Reserva basada en calendario'],
  'Reminder-Konzept': ['Reminder concept','Hatırlatma sistemi','Sistema promemoria','Sistema de recordatorios'],
  'Verknüpfung mit Kontaktwegen': ['Connected contact channels','İletişim kanalları entegrasyonu','Collegamento ai canali di contatto','Conexión con canales de contacto'],
  'Terminseite öffnen': ['Open booking page','Randevu sayfasını aç','Apri pagina prenotazioni','Abrir página de reservas'],
  'Click-to-Chat, Floating Button, vorausgefüllte Nachrichten und direkte Kontaktpunkte auf allen wichtigen Seiten.': ['Click-to-chat, floating button, prefilled messages and direct contact points on all key pages.','Tıkla-sohbet, sabit buton, hazır mesajlar ve tüm önemli sayfalarda doğrudan iletişim noktaları.','Click-to-chat, pulsante flottante, messaggi precompilati e contatti diretti in tutte le pagine principali.','Click-to-chat, botón flotante, mensajes prellenados y contactos directos en todas las páginas clave.'],
  'Direkter Chat': ['Direct chat','Doğrudan sohbet','Chat diretto','Chat directo'],
  'Mobile Lead-Strecke': ['Mobile lead flow','Mobil lead akışı','Percorso lead mobile','Flujo de leads móvil'],
  'Vorausgefüllte Anfragen': ['Prefilled enquiries','Hazır talepler','Richieste precompilate','Consultas prellenadas'],
  'WhatsApp Call-to-Action': ['WhatsApp call to action','WhatsApp çağrı butonu','Call to action WhatsApp','Llamada a la acción de WhatsApp'],
  'Lokale Auffindbarkeit mit optimierten Unternehmensdaten, Öffnungszeiten, Leistungen, Standort und Local-SEO-Struktur.': ['Local visibility with optimised business data, opening hours, services, location and local SEO structure.','Optimize işletme bilgileri, çalışma saatleri, hizmetler, konum ve Local SEO yapısıyla yerel görünürlük.','Visibilità locale con dati aziendali, orari, servizi, posizione e struttura Local SEO ottimizzati.','Visibilidad local con datos de empresa, horarios, servicios, ubicación y estructura Local SEO optimizados.'],
  'Standort- und Bewertungsstrategie': ['Location & review strategy','Konum ve yorum stratejisi','Strategia località e recensioni','Estrategia de ubicación y reseñas'],
  'Kampagnen für Suchanfragen, lokale Reichweite, Leads und Conversions inklusive Tracking-Konzept.': ['Campaigns for search demand, local reach, leads and conversions including tracking.','Arama talepleri, yerel erişim, lead ve dönüşümler için takip sistemli kampanyalar.','Campagne per ricerche, copertura locale, lead e conversioni con tracking.','Campañas para búsquedas, alcance local, leads y conversiones con seguimiento.'],
  'Inhalte für Website und Social Media sowie professionelle Broschüren, Preislisten, Präsentationen und PDF-Unterlagen.': ['Content for websites and social media plus professional brochures, price lists, presentations and PDF materials.','Web sitesi ve sosyal medya içerikleri ile profesyonel broşürler, fiyat listeleri, sunumlar ve PDF dokümanları.','Contenuti per sito e social, oltre a brochure, listini, presentazioni e PDF professionali.','Contenido para web y redes, además de folletos, listas de precios, presentaciones y PDF profesionales.'],
  'Projektablauf': ['Project process','Proje süreci','Processo di progetto','Proceso del proyecto'],
  'Von der Analyse bis zum laufenden Wachstum.': ['From analysis to ongoing growth.','Analizden sürekli büyümeye.','Dall’analisi alla crescita continua.','Del análisis al crecimiento continuo.'],
  'Analyse': ['Analysis','Analiz','Analisi','Análisis'],
  'Ziele, Zielgruppe, Wettbewerb und Funktionen.': ['Goals, target audience, competition and features.','Hedefler, hedef kitle, rekabet ve fonksiyonlar.','Obiettivi, pubblico, concorrenza e funzionalità.','Objetivos, público, competencia y funciones.'],
  'Konzept': ['Concept','Konsept','Concept','Concepto'],
  'Seitenarchitektur, Inhalte und Customer Journey.': ['Page architecture, content and customer journey.','Sayfa mimarisi, içerik ve müşteri yolculuğu.','Architettura pagine, contenuti e customer journey.','Arquitectura de páginas, contenidos y customer journey.'],
  'Design & Entwicklung': ['Design & development','Tasarım & geliştirme','Design & sviluppo','Diseño & desarrollo'],
  'Visuelles System, responsive Umsetzung und Integrationen.': ['Visual system, responsive implementation and integrations.','Görsel sistem, responsive uygulama ve entegrasyonlar.','Sistema visivo, sviluppo responsive e integrazioni.','Sistema visual, implementación responsive e integraciones.'],
  'Launch & Betreuung': ['Launch & support','Yayın & destek','Lancio & supporto','Lanzamiento & soporte'],
  'SEO, Tracking, Marketing und Support.': ['SEO, tracking, marketing and support.','SEO, takip, pazarlama ve destek.','SEO, tracking, marketing e supporto.','SEO, seguimiento, marketing y soporte.'],
  'Branchenlösungen mit': ['Industry solutions with','Sektörel çözümler ve','Soluzioni di settore con','Soluciones sectoriales con'],
  'echter Fotoqualität.': ['authentic visual quality.','gerçek fotoğraf kalitesi.','qualità fotografica autentica.','calidad fotográfica auténtica.'],
  'Professionelle Demos für unterschiedliche Märkte.': ['Professional demos for different markets.','Farklı pazarlar için profesyonel demolar.','Demo professionali per diversi mercati.','Demos profesionales para distintos mercados.'],
  'Vorteile': ['Benefits','Avantajlar','Vantaggi','Ventajas'],
  'Was Ihre Kunden sofort erkennen.': ['What your customers recognise immediately.','Müşterilerinizin hemen fark ettiği şeyler.','Ciò che i tuoi clienti percepiscono subito.','Lo que tus clientes perciben de inmediato.'],
  'Bereit für eine Website, die wirklich überzeugt?': ['Ready for a website that truly convinces?','Gerçekten etkileyici bir web sitesi için hazır mısınız?','Pronto per un sito web che convince davvero?','¿Listo para una web que realmente convenza?'],
  'Strategisch aufgebaut, visuell stark und perfekt für mobile Endgeräte optimiert.': ['Strategically built, visually strong and perfectly optimised for mobile devices.','Stratejik olarak kurgulanmış, görsel olarak güçlü ve mobil cihazlar için mükemmel optimize edilmiş.','Costruito strategicamente, visivamente forte e perfettamente ottimizzato per mobile.','Construido estratégicamente, visualmente potente y perfectamente optimizado para móvil.'],
  'Referenzprojekte mit': ['Project references with','Referans projeleri ve','Progetti di riferimento con','Proyectos de referencia con'],
  'Case-Study Charakter.': ['case-study character.','case-study yaklaşımı.','stile case study.','enfoque de caso de estudio.'],
  'Vorzeigbare Projekte für die Agenturpräsentation.': ['Showcase projects for a strong agency presentation.','Güçlü ajans sunumu için örnek projeler.','Progetti showcase per una forte presentazione dell’agenzia.','Proyectos showcase para una presentación sólida de la agencia.'],
  'Design, Technik und Marketing': ['Design, technology and marketing','Tasarım, teknoloji ve pazarlama','Design, tecnologia e marketing','Diseño, tecnología y marketing'],
  'in einem System.': ['in one system.','tek sistemde.','in un unico sistema.','en un solo sistema.'],
  'NOVARA STUDIO verbindet visuelle Qualität mit klarer Nutzerführung, lokaler Sichtbarkeit und digitalen Kontaktprozessen.': ['NOVARA STUDIO combines visual quality with clear user journeys, local visibility and digital contact processes.','NOVARA STUDIO görsel kaliteyi net kullanıcı deneyimi, yerel görünürlük ve dijital iletişim süreçleriyle birleştirir.','NOVARA STUDIO unisce qualità visiva, percorsi utente chiari, visibilità locale e processi di contatto digitali.','NOVARA STUDIO combina calidad visual, navegación clara, visibilidad local y procesos de contacto digitales.'],
  'Unser Ansatz': ['Our approach','Yaklaşımımız','Il nostro approccio','Nuestro enfoque'],
  'Keine Standardlösung ohne geschäftlichen Nutzen.': ['No standard solution without business value.','İş değeri yaratmayan standart çözümler yok.','Nessuna soluzione standard senza valore per il business.','Sin soluciones estándar que no aporten valor al negocio.'],
  'Individuelle Strategie': ['Custom strategy','Özel strateji','Strategia su misura','Estrategia personalizada'],
  'Professionelles UX/UI Design': ['Professional UX/UI design','Profesyonel UX/UI tasarım','UX/UI design professionale','Diseño UX/UI profesional'],
  'Technisch saubere Umsetzung': ['Clean technical implementation','Temiz teknik uygulama','Implementazione tecnica pulita','Implementación técnica limpia'],
  'Laufende Erweiterbarkeit': ['Ongoing scalability','Sürekli geliştirilebilir yapı','Scalabilità continua','Escalabilidad continua'],
  'Werte': ['Values','Değerler','Valori','Valores'],
  'Wofür NOVARA STUDIO steht.': ['What NOVARA STUDIO stands for.','NOVARA STUDIO’nun değerleri.','I valori di NOVARA STUDIO.','Lo que representa NOVARA STUDIO.'],
  'Qualität': ['Quality','Kalite','Qualità','Calidad'],
  'Transparenz': ['Transparency','Şeffaflık','Trasparenza','Transparencia'],
  'Wirkung': ['Impact','Etki','Impatto','Impacto'],
  'Digitaler Support für den': ['Digital support for','Dijital destek:','Supporto digitale per','Soporte digital para'],
  'laufenden Betrieb.': ['ongoing operations.','sürekli operasyon.','le attività quotidiane.','la operación continua.'],
  'Technische Betreuung, Monitoring, Domain, Hosting, Business-E-Mail und schnelle Unterstützung für vereinbarte Service-Level.': ['Technical support, monitoring, domain, hosting, business email and fast assistance according to agreed service levels.','Teknik destek, izleme, domain, hosting, kurumsal e-posta ve belirlenen hizmet seviyelerine göre hızlı yardım.','Supporto tecnico, monitoring, dominio, hosting, email business e assistenza rapida secondo i livelli di servizio concordati.','Soporte técnico, monitorización, dominio, hosting, email empresarial y ayuda rápida según los niveles acordados.'],
  'Überwachung wichtiger Funktionen und Unterstützung bei technischen Störungen.': ['Monitoring of key functions and support for technical incidents.','Önemli fonksiyonların izlenmesi ve teknik sorunlarda destek.','Monitoraggio delle funzioni principali e supporto in caso di problemi tecnici.','Monitorización de funciones clave y soporte ante incidencias técnicas.'],
  'Verfügbarkeitskontrolle': ['Availability monitoring','Erişilebilirlik kontrolü','Controllo disponibilità','Control de disponibilidad'],
  'Fehleranalyse': ['Error analysis','Hata analizi','Analisi errori','Análisis de errores'],
  'Wartung & Content': ['Maintenance & content','Bakım & içerik','Manutenzione & contenuti','Mantenimiento & contenido'],
  'Regelmäßige Pflege von Inhalten und technischen Komponenten.': ['Regular maintenance of content and technical components.','İçerik ve teknik bileşenlerin düzenli bakımı.','Manutenzione regolare di contenuti e componenti tecnici.','Mantenimiento regular de contenidos y componentes técnicos.'],
  'Inhaltsänderungen': ['Content updates','İçerik değişiklikleri','Aggiornamenti contenuti','Actualizaciones de contenido'],
  'Erweiterungen': ['Extensions','Geliştirmeler','Estensioni','Ampliaciones'],
  'Unterstützung bei der digitalen Infrastruktur Ihres Unternehmens.': ['Support for your company’s digital infrastructure.','İşletmenizin dijital altyapısı için destek.','Supporto per l’infrastruttura digitale della tua azienda.','Soporte para la infraestructura digital de tu empresa.'],
  'Support nach definiertem Service-Level.': ['Support according to a defined service level.','Tanımlı hizmet seviyesine göre destek.','Supporto secondo un livello di servizio definito.','Soporte según un nivel de servicio definido.'],
  'Priorisierte Bearbeitung': ['Priority handling','Öncelikli işlem','Gestione prioritaria','Atención prioritaria'],
  'Terminbuchung': ['Appointment booking','Randevu','Prenotazione appuntamento','Reserva de cita'],
  'direkt anfragen.': ['request directly.','doğrudan talep edin.','richiedi direttamente.','solicita directamente.'],
  'Wählen Sie Datum, Uhrzeit und Thema. Die Anfrage wird anschließend mit allen Angaben direkt über WhatsApp an NOVARA STUDIO übermittelt.': ['Choose date, time and topic. Your request will then be sent directly to NOVARA STUDIO via WhatsApp.','Tarih, saat ve konu seçin. Talebiniz tüm bilgilerle doğrudan WhatsApp üzerinden NOVARA STUDIO’ya gönderilir.','Scegli data, ora e argomento. La richiesta verrà inviata direttamente a NOVARA STUDIO via WhatsApp.','Elige fecha, hora y tema. La solicitud se enviará directamente a NOVARA STUDIO por WhatsApp.'],
  'Beratung': ['Consultation','Danışmanlık','Consulenza','Consulta'],
  '30 Minuten für Ihr Projekt.': ['30 minutes for your project.','Projeniz için 30 dakika.','30 minuti per il tuo progetto.','30 minutos para tu proyecto.'],
  'Im Erstgespräch klären wir Ziel, Branche, gewünschte Funktionen und den sinnvollsten Projektumfang.': ['In the first call we clarify goals, industry, desired features and the right project scope.','İlk görüşmede hedefleri, sektörü, istenen özellikleri ve en uygun proje kapsamını netleştiriyoruz.','Nel primo incontro definiamo obiettivi, settore, funzionalità desiderate e ambito del progetto.','En la primera conversación definimos objetivos, sector, funciones y alcance adecuado del proyecto.'],
  'Webdesign & Relaunch': ['Web design & relaunch','Web tasarım & yenileme','Web design & restyling','Diseño web & relanzamiento'],
  'Terminbuchung & WhatsApp': ['Booking & WhatsApp','Randevu & WhatsApp','Prenotazioni & WhatsApp','Reservas & WhatsApp'],
  'Werbung & Social Media': ['Advertising & social media','Reklam & sosyal medya','Pubblicità & social media','Publicidad & redes sociales'],
  'Support & Betreuung': ['Support & care','Destek & yönetim','Supporto & gestione','Soporte & gestión'],
  'Direkt WhatsApp': ['WhatsApp directly','Doğrudan WhatsApp','WhatsApp diretto','WhatsApp directo'],
  'Name': ['Name','Ad','Nome','Nombre'],
  'Unternehmen': ['Company','Şirket','Azienda','Empresa'],
  'Telefon': ['Phone','Telefon','Telefono','Teléfono'],
  'Wunschdatum': ['Preferred date','Tercih edilen tarih','Data preferita','Fecha preferida'],
  'Wunschzeit': ['Preferred time','Tercih edilen saat','Ora preferita','Hora preferida'],
  'Thema': ['Topic','Konu','Argomento','Tema'],
  'Neue Website': ['New website','Yeni web sitesi','Nuovo sito web','Nueva web'],
  'Website-Relaunch': ['Website relaunch','Web sitesi yenileme','Restyling sito web','Relanzamiento web'],
  'Terminanfrage über WhatsApp senden': ['Send appointment request via WhatsApp','Randevu talebini WhatsApp ile gönder','Invia richiesta appuntamento via WhatsApp','Enviar solicitud de cita por WhatsApp'],
  'Lassen Sie uns über': ['Let’s talk about','Hadi konuşalım:','Parliamo del','Hablemos de'],
  'Ihr Projekt sprechen.': ['your project.','projeniz.','tuo progetto.','tu proyecto.'],
  'Kontaktieren Sie NOVARA STUDIO per WhatsApp, Telefon, E-Mail oder über das vorbereitete Projektformular.': ['Contact NOVARA STUDIO via WhatsApp, phone, email or the project form.','NOVARA STUDIO ile WhatsApp, telefon, e-posta veya proje formu üzerinden iletişime geçin.','Contatta NOVARA STUDIO via WhatsApp, telefono, email o modulo progetto.','Contacta con NOVARA STUDIO por WhatsApp, teléfono, email o formulario de proyecto.'],
  'Direkter Kontakt': ['Direct contact','Doğrudan iletişim','Contatto diretto','Contacto directo'],
  'Schnell erreichbar.': ['Easy to reach.','Hızlı ulaşılabilir.','Facile da contattare.','Fácil de contactar.'],
  'Chat starten →': ['Start chat →','Sohbet başlat →','Avvia chat →','Iniciar chat →'],
  'Termin': ['Appointment','Randevu','Appuntamento','Cita'],
  'Kostenlose Beratung buchen →': ['Book free consultation →','Ücretsiz danışmanlık rezervasyonu →','Prenota consulenza gratuita →','Reservar consulta gratuita →'],
  'Interesse': ['Interest','İlgi alanı','Interesse','Interés'],
  'Nachricht': ['Message','Mesaj','Messaggio','Mensaje'],
  'Per WhatsApp senden': ['Send via WhatsApp','WhatsApp ile gönder','Invia via WhatsApp','Enviar por WhatsApp'],
  'E-Mail erstellen': ['Create email','E-posta oluştur','Crea email','Crear email'],
  'Unternehmensangaben und gesetzlich erforderliche Informationen.': ['Company details and legally required information.','Şirket bilgileri ve yasal olarak gerekli bilgiler.','Dati aziendali e informazioni richieste per legge.','Datos de empresa e información legal obligatoria.'],
  'Die folgenden Unternehmensdaten sind Platzhalter und müssen vor Veröffentlichung durch die tatsächlichen Firmendaten ersetzt und rechtlich geprüft werden.': ['The following company details are placeholders and must be replaced with the actual company information and legally reviewed before publication.','Aşağıdaki şirket bilgileri örnektir; yayın öncesinde gerçek bilgilerle değiştirilmeli ve hukuki olarak kontrol edilmelidir.','I seguenti dati aziendali sono segnaposto e devono essere sostituiti con i dati reali e verificati legalmente prima della pubblicazione.','Los siguientes datos son provisionales y deben sustituirse por los datos reales y revisarse legalmente antes de publicar.'],
  'Unternehmensangaben': ['Company details','Şirket bilgileri','Dati aziendali','Datos de empresa'],
  'Haftung & Urheberrecht': ['Liability & copyright','Sorumluluk & telif hakkı','Responsabilità & copyright','Responsabilidad & derechos de autor'],
  'Datenschutzerklärung': ['Privacy policy','Gizlilik politikası','Informativa privacy','Política de privacidad'],
  'Informationen zur Verarbeitung personenbezogener Daten.': ['Information about the processing of personal data.','Kişisel verilerin işlenmesine ilişkin bilgiler.','Informazioni sul trattamento dei dati personali.','Información sobre el tratamiento de datos personales.'],
  '1. Verantwortlicher': ['1. Controller','1. Veri sorumlusu','1. Titolare del trattamento','1. Responsable del tratamiento'],
  'Verarbeitete Daten': ['Data processed','İşlenen veriler','Dati trattati','Datos tratados'],
  'Name und Unternehmensdaten': ['Name and company data','Ad ve şirket bilgileri','Nome e dati aziendali','Nombre y datos de empresa'],
  'E-Mail-Adresse und Telefonnummer': ['Email address and phone number','E-posta adresi ve telefon numarası','Indirizzo email e numero di telefono','Correo electrónico y teléfono'],
  'Inhalte aus Kontakt- und Terminanfragen': ['Content from contact and appointment requests','İletişim ve randevu taleplerinin içeriği','Contenuti delle richieste di contatto e appuntamento','Contenido de solicitudes de contacto y citas'],
  'Technische Zugriffsdaten des Webservers': ['Technical web server access data','Web sunucusunun teknik erişim verileri','Dati tecnici di accesso al server web','Datos técnicos de acceso del servidor web'],
  '2. Zwecke und Rechtsgrundlagen': ['2. Purposes and legal bases','2. Amaçlar ve hukuki dayanaklar','2. Finalità e basi giuridiche','2. Finalidades y bases legales'],
  'Kontakt über WhatsApp': ['Contact via WhatsApp','WhatsApp üzerinden iletişim','Contatto via WhatsApp','Contacto por WhatsApp'],
  '3. Rechte betroffener Personen': ['3. Data subject rights','3. İlgili kişilerin hakları','3. Diritti degli interessati','3. Derechos de las personas interesadas'],
  'Allgemeine Geschäftsbedingungen': ['General terms and conditions','Genel şartlar ve koşullar','Termini e condizioni generali','Términos y condiciones generales'],
  'Musterbedingungen für Webdesign-, Marketing- und Supportleistungen.': ['Template terms for web design, marketing and support services.','Web tasarım, pazarlama ve destek hizmetleri için örnek şartlar.','Condizioni modello per servizi di web design, marketing e supporto.','Condiciones modelo para servicios de diseño web, marketing y soporte.'],
  '1. Geltungsbereich': ['1. Scope','1. Kapsam','1. Ambito di applicazione','1. Ámbito de aplicación'],
  'Leistungsumfang': ['Scope of services','Hizmet kapsamı','Ambito dei servizi','Alcance de servicios'],
  '2. Mitwirkung und Vergütung': ['2. Cooperation and payment','2. İş birliği ve ücretlendirme','2. Collaborazione e compenso','2. Colaboración y remuneración'],
  'Nutzungsrechte': ['Usage rights','Kullanım hakları','Diritti di utilizzo','Derechos de uso'],
  '3. Support, Haftung und Schlussbestimmungen': ['3. Support, liability and final provisions','3. Destek, sorumluluk ve son hükümler','3. Supporto, responsabilità e disposizioni finali','3. Soporte, responsabilidad y disposiciones finales'],
  'Diese Seite wurde': ['This page was','Bu sayfa','Questa pagina','Esta página'],
  'nicht gefunden.': ['not found.','bulunamadı.','non è stata trovata.','no se encontró.'],
  'Zurück zur Startseite oder direkt Kontakt aufnehmen.': ['Return to the homepage or contact us directly.','Ana sayfaya dönün veya doğrudan iletişime geçin.','Torna alla home o contattaci direttamente.','Vuelve al inicio o contacta directamente.'],
  'Menü öffnen': ['Open menu','Menüyü aç','Apri menu','Abrir menú'],
  'Beschreiben Sie kurz Ihr Projekt...': ['Briefly describe your project...','Projenizi kısaca açıklayın...','Descrivi brevemente il tuo progetto...','Describe brevemente tu proyecto...'],
  'Beschreiben Sie kurz, was Sie für Ihr Unternehmen benötigen.': ['Briefly describe what your company needs.','İşletmeniz için neye ihtiyaç duyduğunuzu kısaca açıklayın.','Descrivi brevemente di cosa ha bisogno la tua azienda.','Describe brevemente qué necesita tu empresa.']
};

const NOVARA_MESSAGE_UI = {
  de:{hello:'Hallo NOVARA STUDIO',consult:'ich möchte einen Beratungstermin anfragen.',company:'Unternehmen',email:'E-Mail',phone:'Telefon',interest:'Interesse',message:'Nachricht',date:'Datum',time:'Zeit',topic:'Thema',subject:'Projektanfrage an NOVARA STUDIO'},
  en:{hello:'Hello NOVARA STUDIO',consult:'I would like to request a consultation appointment.',company:'Company',email:'Email',phone:'Phone',interest:'Interest',message:'Message',date:'Date',time:'Time',topic:'Topic',subject:'Project enquiry to NOVARA STUDIO'},
  tr:{hello:'Merhaba NOVARA STUDIO',consult:'Bir danışmanlık randevusu talep etmek istiyorum.',company:'Şirket',email:'E-posta',phone:'Telefon',interest:'İlgi alanı',message:'Mesaj',date:'Tarih',time:'Saat',topic:'Konu',subject:'NOVARA STUDIO proje talebi'},
  it:{hello:'Ciao NOVARA STUDIO',consult:'Vorrei richiedere un appuntamento di consulenza.',company:'Azienda',email:'E-mail',phone:'Telefono',interest:'Interesse',message:'Messaggio',date:'Data',time:'Ora',topic:'Argomento',subject:'Richiesta progetto a NOVARA STUDIO'},
  es:{hello:'Hola NOVARA STUDIO',consult:'Quisiera solicitar una cita de consulta.',company:'Empresa',email:'Email',phone:'Teléfono',interest:'Interés',message:'Mensaje',date:'Fecha',time:'Hora',topic:'Tema',subject:'Consulta de proyecto a NOVARA STUDIO'}
};

let novaraCurrentLang = 'de';
const novaraOriginalNodes = new WeakMap();
const novaraOriginalAttrs = new WeakMap();

function novaraTranslateString(text, lang) {
  const item = NOVARA_I18N[text];
  if (!item || lang === 'de') return text;
  const index = {en:0,tr:1,it:2,es:3}[lang];
  return item[index] || text;
}

function novaraApplyLanguage(lang) {
  if (!NOVARA_LANGS.includes(lang)) lang = 'de';
  novaraCurrentLang = lang;
  document.documentElement.lang = lang;
  try { localStorage.setItem('novaraLanguage', lang); } catch(e) {}

  const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    const parent = node.parentElement;
    if (!parent || ['SCRIPT','STYLE','NOSCRIPT','CODE','PRE'].includes(parent.tagName)) continue;
    if (!novaraOriginalNodes.has(node)) novaraOriginalNodes.set(node, node.nodeValue);
    const original = novaraOriginalNodes.get(node);
    const trimmed = original.trim();
    if (!trimmed) continue;
    const translated = novaraTranslateString(trimmed, lang);
    const start = original.indexOf(trimmed);
    node.nodeValue = original.slice(0,start) + translated + original.slice(start + trimmed.length);
  }

  document.querySelectorAll('[placeholder],[aria-label],[title]').forEach(el => {
    if (!novaraOriginalAttrs.has(el)) novaraOriginalAttrs.set(el, {});
    const store = novaraOriginalAttrs.get(el);
    ['placeholder','aria-label','title'].forEach(attr => {
      if (!el.hasAttribute(attr)) return;
      if (!(attr in store)) store[attr] = el.getAttribute(attr);
      el.setAttribute(attr, novaraTranslateString(store[attr], lang));
    });
  });

  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    if (!meta.dataset.originalDescription) meta.dataset.originalDescription = meta.getAttribute('content') || '';
    meta.setAttribute('content', novaraTranslateString(meta.dataset.originalDescription, lang));
  }

  document.querySelectorAll('.novara-language-select').forEach(select => select.value = lang);
  const url = new URL(window.location.href);
  if (lang === 'de') url.searchParams.delete('lang'); else url.searchParams.set('lang', lang);
  history.replaceState(null, '', url.pathname + url.search + url.hash);
}

function novaraInjectLanguageSwitcher() {
  if (document.querySelector('.novara-language')) return;
  const target = document.querySelector('.header-actions') || document.querySelector('.nav');
  if (!target) return;
  const wrap = document.createElement('label');
  wrap.className = 'novara-language';
  wrap.setAttribute('aria-label','Sprache');
  const select = document.createElement('select');
  select.className = 'novara-language-select';
  NOVARA_LANGS.forEach(code => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = code.toUpperCase();
    option.title = NOVARA_LANG_LABELS[code];
    select.appendChild(option);
  });
  select.addEventListener('change', () => novaraApplyLanguage(select.value));
  wrap.appendChild(select);
  const wa = target.querySelector('.wa-small');
  if (wa) target.insertBefore(wrap, wa); else target.appendChild(wrap);

  if (!document.getElementById('novara-language-style')) {
    const style = document.createElement('style');
    style.id = 'novara-language-style';
    style.textContent = `.novara-language{display:inline-flex;align-items:center;margin-left:2px}.novara-language-select{appearance:none;-webkit-appearance:none;background:#0b2932;color:#fff;border:1px solid rgba(214,160,60,.55);border-radius:999px;padding:9px 27px 9px 11px;font-size:10px;font-weight:900;letter-spacing:.08em;cursor:pointer;outline:none;background-image:linear-gradient(45deg,transparent 50%,#d6a03c 50%),linear-gradient(135deg,#d6a03c 50%,transparent 50%);background-position:calc(100% - 12px) 50%,calc(100% - 8px) 50%;background-size:4px 4px,4px 4px;background-repeat:no-repeat}.novara-language-select:hover,.novara-language-select:focus{border-color:#d6a03c}.novara-language-select option{background:#071a21;color:#fff}@media(max-width:880px){.novara-language-select{padding:8px 24px 8px 9px}.header-actions{gap:8px}}`;
    document.head.appendChild(style);
  }
}

function novaraInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get('lang');
  if (NOVARA_LANGS.includes(requested)) return requested;
  try {
    const saved = localStorage.getItem('novaraLanguage');
    if (NOVARA_LANGS.includes(saved)) return saved;
  } catch(e) {}
  return 'de';
}

function openWhatsAppFromContact(e) {
  e.preventDefault();
  const t = NOVARA_MESSAGE_UI[novaraCurrentLang] || NOVARA_MESSAGE_UI.de;
  const raw = `${t.hello}\n\nName: ${val('name')}\n${t.company}: ${val('company')}\n${t.email}: ${val('email')}\n${t.phone}: ${val('phone')}\n${t.interest}: ${val('interest')}\n\n${t.message}:\n${val('message')}`;
  window.open('https://wa.me/436601234567?text=' + encodeURIComponent(raw), '_blank');
}
function openMailFromContact() {
  const t = NOVARA_MESSAGE_UI[novaraCurrentLang] || NOVARA_MESSAGE_UI.de;
  const subject = encodeURIComponent(t.subject);
  const body = encodeURIComponent(`Name: ${val('name')}\n${t.company}: ${val('company')}\n${t.email}: ${val('email')}\n${t.phone}: ${val('phone')}\n${t.interest}: ${val('interest')}\n\n${t.message}:\n${val('message')}`);
  window.location.href = 'mailto:office@novara-studio.at?subject=' + subject + '&body=' + body;
}
function bookingWhatsApp(e) {
  e.preventDefault();
  const t = NOVARA_MESSAGE_UI[novaraCurrentLang] || NOVARA_MESSAGE_UI.de;
  const raw = `${t.hello}\n${t.consult}\n\nName: ${val('bname')}\n${t.company}: ${val('bcompany')}\n${t.email}: ${val('bemail')}\n${t.phone}: ${val('bphone')}\n${t.date}: ${val('bdate')}\n${t.time}: ${val('btime')}\n${t.topic}: ${val('btopic')}`;
  window.open('https://wa.me/436601234567?text=' + encodeURIComponent(raw), '_blank');
}

const dateInput = document.getElementById('bdate');
if (dateInput) {
  const d = new Date();
  d.setDate(d.getDate()+1);
  dateInput.min = d.toISOString().split('T')[0];
}

novaraInjectLanguageSwitcher();
novaraApplyLanguage(novaraInitialLanguage());

const revealTargets = document.querySelectorAll('.section-head, .card, .service-card, .industry-card, .project-card, .step, .benefit, .split-copy, .split-image, .info-item, .footer-grid > div, .metric, .showcase-card, .case-cover, .case-panel, .list-card, .dual-gallery .preview-image, .cta-row > div');
revealTargets.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.setProperty('--delay', `${Math.min(i % 8, 7) * 70}ms`);
});
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});
  revealTargets.forEach(el => observer.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('is-visible'));
}
