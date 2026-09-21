(function () {
  const items = [
    {
      id: "tesim",
      title: "TESİM - Türk Eğitim-Sen Bolu Şubesi İrfan Merkezi",
      slogan: "Öğrenmek, Üretmek ve Birlikte Çoğalmak İçin: \"Burası Benim TES'im.\"",
      about: "Sendikal mücadelemizi yalnızca hak arayışıyla sınırlamıyor, insana dokunan yeni bir boyuta taşıyoruz. TESİM; öğretmenlerimizin yorgunluğunu atabileceği, yeni fikirler üretebileceği, kendini ait hissedebileceği ve \"Burası benim de yerim\" diyebileceği ortak yuvamızdır.",
      listTitle: "Merkezimizde Neler Var?",
      list: [
        "Atölye çalışmaları ve eğitimler",
        "Sosyal, kültürel ve sanatsal faaliyetler",
        "Mesleki dayanışma ve tecrübe paylaşımı çemberleri"
      ],
      src: "img/kapak.webp",
      fallback: "img/kapak.jpg",
      alt: "TESİM - Türk Eğitim-Sen Bolu Şubesi İrfan Merkezi kapak görseli"
    },
    {
      id: "okuma",
      title: "Okuma Atölyesi",
      slogan: "Sayfalardan Hayata, Fikirden Eyleme...",
      about: "Kitapları yalnızca okuyup rafa kaldırmıyoruz. Edebiyatın, felsefenin ve düşüncenin etrafında toplanarak, okuduklarımız üzerine tartışıyor ve farklı bakış açılarıyla zihnimizi yeniliyoruz.",
      listTitle: "Neler Yapıyoruz?",
      list: [
        "Tematik kitap tahlili buluşmaları",
        "Yazar-okur söyleşileri",
        "Edebi metin ve makale incelemeleri"
      ],
      src: "img/1.webp",
      fallback: "img/1.jpg",
      alt: "Okuma Atölyesi görseli"
    },
    {
      id: "kesif",
      title: "Keşif Atölyesi",
      slogan: "Anadolu'yu Tanımak, Kendini Bulmaktır.",
      about: "Yaşadığımız coğrafyayı, Bolu'yu ve ülkemizin saklı kalmış tarihi zenginliklerini yalnızca turistik bir gözle değil; görerek, araştırarak ve anlamlandırarak yerinde keşfediyoruz.",
      listTitle: "Neler Yapıyoruz?",
      list: [
        "Bolu içi tarihi ve kültürel miras gezileri",
        "Tematik Anadolu kültür turları",
        "Saha araştırmaları ve tarih okumaları"
      ],
      src: "img/2.webp",
      fallback: "img/2.jpg",
      alt: "Keşif Atölyesi görseli"
    },
    {
      id: "hareket",
      title: "Hareket Atölyesi",
      slogan: "Sağlık, Enerji ve Dayanışma.",
      about: "Sporu salt bir rekabet alanı olarak görmüyor; hareketi, sağlıklı yaşamı ve bir arada olmanın coşkusunu hayatımızın ayrılmaz bir parçası hâline getiriyoruz.",
      listTitle: "Neler Yapıyoruz?",
      list: [
        "Hafta sonu bisiklet turları ve doğa yürüyüşleri",
        "Dostluk odaklı branş turnuvaları (Voleybol, Masa Tenisi vb.)",
        "Sağlıklı yaşam ve beslenme söyleşileri"
      ],
      src: "img/3.webp",
      fallback: "img/3.jpg",
      alt: "Hareket Atölyesi görseli"
    },
    {
      id: "tabiat",
      title: "Tabiat Atölyesi",
      slogan: "Doğaya Vefa, Çevremize Sorumluluk.",
      about: "Dört duvarın ötesine geçerek Bolu'nun eşsiz doğasıyla buluşuyor; toprağa dokunuyor ve yaşadığımız dünyaya karşı ekolojik sorumluluğumuzu güçlendiriyoruz.",
      listTitle: "Neler Yapıyoruz?",
      list: [
        "Doğa yürüyüşleri (Trekking) ve oryantiring",
        "Sıfır atık ve ekolojik farkındalık eğitimleri",
        "Ağaç dikme ve temel kampçılık faaliyetleri"
      ],
      src: "img/4.webp",
      fallback: "img/4.jpg",
      alt: "Tabiat Atölyesi görseli"
    },
    {
      id: "bilisim",
      title: "Bilişim ve Teknoloji Atölyesi",
      slogan: "Dijital Çağın Üreten Eğitimcileri.",
      about: "Teknolojinin yalnızca pasif tüketicisi olmuyor; dijital dünyayı anlayan, sorgulayan ve eğitim için yeni araçlar üreten yenilikçi eğitimciler olarak kendimizi geliştiriyoruz.",
      listTitle: "Neler Yapıyoruz?",
      list: [
        "Eğitimde yapay zeka entegrasyonu",
        "Dijital materyal ve içerik geliştirme",
        "Temel kodlama ve teknoloji trendleri incelemeleri"
      ],
      src: "img/5.webp",
      fallback: "img/5.jpg",
      alt: "Bilişim ve Teknoloji Atölyesi görseli"
    },
    {
      id: "egitim",
      title: "Eğitim ve Öğrenme Atölyesi",
      slogan: "Öğretirken Öğrenenlerin Buluşması.",
      about: "Sınıf içi hikâyelerimizi, mesleki tecrübelerimizi ve modern eğitim yaklaşımlarını bir araya getiriyor; deneyimlerimizi akademik bilgiyle harmanlayarak birbirimizden güç alıyoruz.",
      listTitle: "Neler Yapıyoruz?",
      list: [
        "Alternatif eğitim modelleri sunumları",
        "Sınıf içi vaka analizleri ve iletişim atölyeleri",
        "Deneyimli eğitimcilerle tecrübe aktarım oturumları"
      ],
      src: "img/6.webp",
      fallback: "img/6.jpg",
      alt: "Eğitim ve Öğrenme Atölyesi görseli"
    },
    {
      id: "iyilik",
      title: "İyilik ve Gönüllülük Atölyesi",
      slogan: "Emeğimizi Umuda Dönüştürüyoruz.",
      about: "Sendikal gücümüzü toplumsal faydaya dönüştürüyor; sahip olduğumuz zamanı ve bilgiyi ihtiyacı olanlara sunarak iyiliği ve karşılıksız gönüllülüğü birlikte çoğaltıyoruz.",
      listTitle: "Neler Yapıyoruz?",
      list: [
        "Köy okullarına kütüphane ve materyal destek projeleri",
        "Kan ve kök hücre bağışı organizasyonları",
        "Dezavantajlı gruplar için sosyal sorumluluk kampanyaları"
      ],
      src: "img/7.webp",
      fallback: "img/7.jpg",
      alt: "İyilik ve Gönüllülük Atölyesi görseli"
    },
    {
      id: "sanat",
      title: "Sanat Atölyesi",
      slogan: "İçimizdeki Renkleri Sahneye Taşıyoruz.",
      about: "Kelimelerin, renklerin ve seslerin gücüyle kendimizi ifade ediyor; estetiği, sanatı ve üretmenin getirdiği ruhsal dinlenmeyi meslektaşlarımızla paylaşıyoruz.",
      listTitle: "Neler Yapıyoruz?",
      list: [
        "Yaratıcı drama ve tiyatro çalışmaları",
        "Fotoğrafçılık atölyeleri ve sergiler",
        "Müzik dinletileri ve el sanatları uygulamaları"
      ],
      src: "img/8.webp",
      fallback: "img/8.jpg",
      alt: "Sanat Atölyesi görseli"
    },
    {
      id: "kultur",
      title: "Kültür ve Medeniyet Atölyesi",
      slogan: "Köklerden Geleceğe Büyük Hikâyemiz.",
      about: "Düşünce dünyamızı şekillendiren köklerimizi arıyor; dünden bugüne insanlık mirasını, medeniyet birikimimizi ve geleceğe uzanan hikâyemizi birlikte okuyoruz.",
      listTitle: "Neler Yapıyoruz?",
      list: [
        "Medeniyet, felsefe ve tarih okumaları",
        "Kültürel miras temalı belgesel ve film analizleri",
        "Alanında uzman konuklarla ufuk turu sohbetleri"
      ],
      src: "img/9.webp",
      fallback: "img/9.jpg",
      alt: "Kültür ve Medeniyet Atölyesi görseli"
    }
  ];

  const stage = document.getElementById("stage");
  const caption = document.getElementById("caption");
  const dotsWrap = document.getElementById("dots");
  const footerAteliers = document.getElementById("footerAteliers");
  const popup = document.getElementById("popup");
  const popupImage = document.getElementById("popupImage");
  const popupTitle = document.getElementById("popupTitle");
  const popupSlogan = document.getElementById("popupSlogan");
  const popupAbout = document.getElementById("popupAbout");
  const popupListTitle = document.getElementById("popupListTitle");
  const popupList = document.getElementById("popupList");
  const closeBtn = document.getElementById("popupClose");
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");
  const n = items.length;
  let current = 0;
  const cards = [];

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {
      const open = mobileNav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (!stage || !dotsWrap || !caption || !popup || !popupImage || !popupTitle || !popupSlogan || !popupAbout || !popupListTitle || !popupList || !closeBtn) return;

  items.forEach(function (item, index) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "coverflow-card";
    card.dataset.index = String(index);
    card.setAttribute("aria-label", item.title);
    card.innerHTML =
      '<img src="' + item.src + '" alt="' + item.alt + '" width="1055" height="1491" decoding="async" onerror="this.onerror=null;this.src=\'' + item.fallback + '\'">';
    stage.appendChild(card);
    cards.push(card);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "coverflow-dot";
    dot.setAttribute("aria-label", item.title + " göster");
    dot.addEventListener("click", function () { goTo(index); });
    dotsWrap.appendChild(dot);

    if (index > 0 && footerAteliers) {
      const li = document.createElement("li");
      li.textContent = item.title;
      footerAteliers.appendChild(li);
    }
  });

  function wrapIndex(index) {
    return (index + n) % n;
  }

  function goTo(index) {
    current = wrapIndex(index);
    const left = wrapIndex(current - 1);
    const right = wrapIndex(current + 1);
    cards.forEach(function (card, i) {
      card.classList.remove("is-center", "is-left", "is-right", "is-hidden");
      if (i === current) card.classList.add("is-center");
      else if (i === left) card.classList.add("is-left");
      else if (i === right) card.classList.add("is-right");
      else card.classList.add("is-hidden");
    });
    Array.from(dotsWrap.children).forEach(function (dot, i) {
      dot.classList.toggle("is-active", i === current);
    });
    const item = items[current];
    const titleEl = caption.querySelector("strong");
    const sloganEl = caption.querySelector("span");
    if (titleEl) titleEl.textContent = item.title;
    if (sloganEl) sloganEl.textContent = item.slogan;
  }

  function openPopup() {
    const item = items[current];
    popupImage.src = item.src;
    popupImage.alt = item.alt;
    popupImage.onerror = function () {
      popupImage.onerror = null;
      popupImage.src = item.fallback;
    };
    popupTitle.textContent = item.title;
    popupSlogan.textContent = item.slogan;
    popupAbout.textContent = item.about;
    popupListTitle.textContent = item.listTitle;
    popupList.innerHTML = item.list.map(function (line) {
      return "<li>" + line + "</li>";
    }).join("");
    popup.classList.add("is-open");
    popup.setAttribute("aria-hidden", "false");
    document.body.classList.add("popup-open");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closePopup() {
    if (!popup.classList.contains("is-open")) return;
    popup.classList.remove("is-open");
    popup.setAttribute("aria-hidden", "true");
    document.body.classList.remove("popup-open");
    document.body.style.overflow = "";
  }

  let startX = 0;
  let tracking = false;
  let skipClick = false;

  function cardFromEvent(event) {
    const node = event.target && event.target.closest ? event.target.closest(".coverflow-card") : null;
    if (!node) return null;
    const index = Number(node.dataset.index);
    if (Number.isNaN(index)) return null;
    return { card: node, index: index };
  }

  function activateCard(index) {
    if (index === current) openPopup();
    else goTo(index);
  }

  stage.addEventListener("pointerdown", function (event) {
    tracking = true;
    skipClick = false;
    startX = event.clientX;
  });

  stage.addEventListener("pointerup", function (event) {
    if (!tracking) return;
    tracking = false;
    const dx = event.clientX - startX;
    if (Math.abs(dx) > 50) {
      skipClick = true;
      if (dx > 0) goTo(current - 1);
      else goTo(current + 1);
      return;
    }
    const hit = cardFromEvent(event);
    if (hit) {
      skipClick = true;
      activateCard(hit.index);
    }
  });

  stage.addEventListener("pointercancel", function () { tracking = false; });

  cards.forEach(function (card, index) {
    card.addEventListener("click", function (event) {
      event.preventDefault();
      if (skipClick) {
        skipClick = false;
        return;
      }
      activateCard(index);
    });
  });

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  if (prevBtn) prevBtn.addEventListener("click", function () { goTo(current - 1); });
  if (nextBtn) nextBtn.addEventListener("click", function () { goTo(current + 1); });
  closeBtn.addEventListener("click", closePopup);
  popup.addEventListener("click", function (event) {
    if (event.target === popup) closePopup();
  });

  document.addEventListener("keydown", function (event) {
    if (popup.classList.contains("is-open")) {
      if (event.key === "Escape") closePopup();
      return;
    }
    if (event.key === "ArrowLeft") goTo(current - 1);
    if (event.key === "ArrowRight") goTo(current + 1);
  });

  goTo(0);
})();
