---
layout: home
title: "Üsküdar University Mescit"
titleTemplate: false
---

<script setup>
import { Sparkles, Smile, ShieldCheck, LibraryBig, Droplets, PersonStanding, School, SquareArrowOutUpRight } from 'lucide-vue-next';
</script>
<!-- HERO -->
<main class="container-home">

<section class="prayerhome-hero-wrapper">
<h1 class="h1_default_home">Üniversite Namaz Alanımıza Hoş Geldiniz!</h1>
<p class="p_default_home">Akademik büyüme ve manevi gelişim yolculuğunuzda bize katılın.</p>
<img class="prayerhome-hero-img" src="/pages/home/home1.webp">
<div class="btn-wrapper_home"><a class="btn1_home hover" href="/prayerspaces">Başlayın</a></div>
</section>

<!-- FEATURES-->
<section class="prayerhome-features-wrapper">
<h3 class="h3_default_home">Ana Özellikler</h3>
<p class="p_default2_home">Namaz alanlarımızın özelliklerini öğrenin</p>
<!-- FEATURES >>> BOXES -->

<div class="boxes-wrapper">
<!-- BOXES 1 -->
<div class="boxes-container">
<div class="boxes-heading-container">
<Sparkles :size="22"/>
<h4 class="boxes-heading">Temiz</h4>
</div>
<p class="boxes-paragraph">Namaz alanları ve tesisleri temiz tutulur, tüm kullanıcılar için hijyenik bir ortam sağlanır.</p>
</div>

<!-- BOXES 2 -->
<div class="boxes-container">
<div class="boxes-heading-container">
<Smile :size="22" />
<h4 class="boxes-heading">Rahat</h4>
</div>
<p class="boxes-paragraph">Namaz alanları, huzur anı arayan herkes için rahat ve huzurlu bir ortam sunar.</p>
</div>

<!-- BOXES 3 -->
<div class="boxes-container">
<div class="boxes-heading-container">
<ShieldCheck :size="22" />
<h4 class="boxes-heading">Ayrılmış</h4>
</div>
<p class="boxes-paragraph">Namaz alanları, İslami ilkeler olan mütevazılık ve mahremiyete uygun olarak erkekler ve kadınlar için ayrı mekanlar sunar.</p>
</div>

<!-- BOXES 4 -->
<div class="boxes-container">
<div class="boxes-heading-container">
<LibraryBig :size="22" />
<h4 class="boxes-heading">Learning resources</h4>
</div>
<p class="boxes-paragraph">Kişisel gelişimi ve merakı teşvik eden çeşitli ilgi alanlarını keşfetmek için eğitim materyallerine erişin.</p>
</div>

<!-- BOXES 5 -->
<div class="boxes-container">
<div class="boxes-heading-container">
<Droplets :size="22"/>
<h4 class="boxes-heading">Abdest Tesisi</h4>
</div>
<p class="boxes-paragraph">Abdest almak için uygun kaynaklar sağlanmakta, arınma ve namaza hazırlık sağlanmaktadır</p>
</div>

<!-- BOXES 6 -->
<div class="boxes-container">
<div class="boxes-heading-container">
<PersonStanding :size="22" />
<h4 class="boxes-heading">WC</h4>
</div>
<p class="boxes-paragraph">Yakındaki tuvalet tesisleri ek konfor sunar, ziyaretçilerin kişisel ihtiyaçlarını rahatça karşılamalarını sağlar.</p>
</div>
</div>
<img class="arrow-down" src="/pages/home/features arrow.svg">
</section>

<!-- QURAN-->

<section class="prayerhome-quran-wrapper">
<h3 class="h3_default_home">Kur'an-ı Kerim'i Çevirilerle Okuyun</h3>
<p class="p_default2_home">Kur'an-ı Kerim'i Türkçe ve İngilizce tercümesiyle keşfedin. Ayetlerinde rehberlik, rahat ve ilham bulun.</p>
<div class="ball"></div>
<img class="quran-img" src="/pages/home/quran2.webp">
<a class="btn2_home hover" href="/quran/index">Bügün Başla</a>
</section>

<!-- DOWNLOAD -->

<section class="prayerhome-download-wrapper">
<h3 class="h3_default_home">Kuran Çalışması Uygulaması Tanışın</h3>
<p class="p_default2_home">Kuran Çalışması uygulamamızla Kuran'ı derinlemesine keşfedin. Kapsamlı çalışma ve derinlemesine düşünme için özel olarak tasarlanmış bir dizi özelliğin keyfini çıkarın. Şimdi indirilebilir</p>
<img class="download-img" src="/pages/home/phone.png">
<a class="btn3_home hover" href="/download">Şimdi İndirin</a>
</section>

<!-- ABOUT -->

<section class="prayerhome-about-wrapper">
<School :size="32"/>
<h3 class="h3_default_home">Bizi Tanıyın!</h3>
<p class="p_default2_home">Kim olduğumuzu keşfedin ve üniversite üyeleri için destekleyici bir ortam oluşturma konusunda bize katılın.</p>
<a class="btn1_home hover" href="/about">Daha Fazla Bilgi Edin</a>
</section>

<!-- FOOTER -->

<footer class="footer-wrapper">
<!-- FOOTER >>> PART 1 -->

<section class="footer-links-wrapper">
<!-- LOGO -->
<img class="footer-links-img" src="/logos/logo-white.svg" alt="Üskudar University Logo">
<!-- GATE OF LINKS -->
<div class="footer-links-container">

<!-- LINKS COLUMN 1 -->
<div class="footer-links-inner-container">
<h3 class="footer-links-heading">GEZİN</h3>
<div class="footer-links-tree">
<a class="footer-link" href="/tr/">Ana Sayfa</a>
<a class="footer-link" href="/tr/prayer-spaces">Namaz Alanları</a>
<a class="footer-link" href="/tr/prayer-time">Namaz Vakti</a>
<a class="footer-link" href="/tr/quran/">Kuran</a>
<a class="footer-link" href="/tr/download">İndir</a>
<a class="footer-link" href="/tr/about">Hakkında</a>
<a class="footer-link" href="/tr/contact">İletişim</a>
</div>
</div>

<!-- LINKS COLUMN 2 -->
<div class="footer-links-inner-container">
<h3 class="footer-links-heading">POPÜLER BAĞLANTILAR</h3>
<div class="footer-links-tree">
<a class="footer-link" href="/tr/quran/2#_255">Ayetel Kürsi</a>
<a class="footer-link" href="/tr/quran/18">Kehf</a>
<a class="footer-link" href="/tr/quran/67">Mülk</a>
<a class="footer-link" href="/tr/quran/56">Müddesir</a>
<a class="footer-link" href="/tr/quran/71">Nuh</a>
</div>
</div>

<!-- LINKS COLUMN 3 -->
<div class="footer-links-inner-container">
<h3 class="footer-links-heading">ÜNİVERSİTE BAĞLANTILARI</h3>
<div class="footer-links-tree">
<a class="footer-link" href="https://uskudar.edu.tr/" target="_blank"><div class="footer-link-logo-wrapper">Ana Sayfa<SquareArrowOutUpRight :size="16"/></div></a>
<a class="footer-link" href="https://uskudar.edu.tr/tr/akademik-takvim" target="_blank"><div class="footer-link-logo-wrapper">Akademik Takvim<SquareArrowOutUpRight :size="16"/></div></a>
<a class="footer-link" href="https://uskudar.edu.tr/tr/sikca-sorulan-sorular" target="_blank"><div class="footer-link-logo-wrapper">Sıkça Sorulan Sorular<SquareArrowOutUpRight :size="16"/></div></a>

</div>
</div>

</div>
</section>

<!-- FOOTER >>> PART 2 -->

<section class="footer-copyright-wrapper">
<!-- LOGOS -->
<div class="footer-copyright-logo-container">
<img class="footer-copyright-logo-1" src="/logos/logo-white.svg" alt="Üsküdar University Logo">
<img class="footer-copyright-logo-2" src="/logos/university-logo.svg" alt="Üsküdar University Logo">
</div>

<!-- TEXTS -->
<div class="footer-copyright-text-container">
<p class="footer-copyright-text">&copy; 2024 Üsküdar University Mescit. Tüm hakları saklıdır.</p>
<p class="footer-copyright-text">Brahim Boussada tarafından tasarlanmış ve geliştirilmiştir.</p>

</div>
</section>
</footer>

</main>

<style scoped>
.prayerhome-hero-wrapper{
  max-width: 1024px;
  margin:4rem auto 4rem auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* HERO*/
.h1_default_home {
  font-family: "Raleway";
  font-weight: 600;
  font-size:  2.827rem;
}
.p_default_home{
  font-family: "inter";
  font-size: 1.125rem;
  font-weight: normal;
  margin-bottom: 1rem
}
.prayerhome-hero-img{
  border-radius: 2rem;
  width: 952px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}

.btn-wrapper_home{
  margin-top: 1.5rem;

}
.btn1_home{
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: #07BDB8;
  color: var(--vp-c-white);
  transition: all 0.3s ease-out 0s
}

.btn1_home:hover{
  background-color: #1C9894;
  color: var(--vp-c-white);
}



/* FEATURES */

.prayerhome-features-wrapper{
  padding: 4rem 2rem 0rem 2rem ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: solid 1px #07BDB8;
  border-radius: 18rem;
  width:100%;
  margin-top: 2rem

}
.h3_default_home {
  font-family: "Raleway";
  font-weight: bold;
  font-size:1.75rem;
}
.p_default2_home{
  font-family: "inter";
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
    max-width: 720px

}
/* FEATURES >>> BOXES */

.boxes-wrapper{
justify-content: center;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr) );
grid-gap: 1rem;
width: 100%;
padding: 1rem 3rem;

}

.boxes-container{
  display:flex;
  flex-direction:column;
  text-align: left;
  padding: 1.5rem 2rem;
  border: 1px solid #07BDB8;
  border-radius:1.5rem;
  gap: 0.25rem;
  transition: all 0.3s ease-out 0s
}

html.dark .boxes-container:hover{
  background-color: #014745;
}


.boxes-heading-container{
    display:flex;
    align-items: center;
    justify-content: left;
    gap: 0.5rem
}
.boxes-icon{
  font-family: "fa-solid";
  font-size: 1.25rem;
}
.boxes-heading{
  font-size: 1.125rem;
  font-family: "inter";
}
.boxes-paragraph{
  font-family: "inter";
  font-size: 1rem;
  margin-top: 0.25rem 
}

.arrow-down{
  padding: 2rem 0rem 2rem 0rem;}

/* QURAN */

.prayerhome-quran-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.25rem;
}

.quran-img{ 
  margin-top: 1rem;
  border-radius: 1rem;
  width: 800px;
  height: auto;
  border: 1px solid #26DFD9
}

.btn2_home{
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #07BDB8;
  color: var(--vp-c-text-1);
  transition: all 0.3s ease-out 0s
}

.btn2_home:hover{
  color: #07BDB8;
}

/* DOWNLOAD */

.prayerhome-download-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 6rem;
  gap: 0.25rem;
}

.download-img{ 
  margin-top: 1rem;
  width: 560px;
  height: auto;
  margin-top: 2rem;

}
.btn3_home{
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #419846;
  color: var(--vp-c-text-1);
  transition: all 0.3s ease-out 0s
}
.btn3_home:hover{
  color: #419846;;
}

/* ABOUT */

.prayerhome-about-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 8rem 0rem;
  padding: 3rem;
  border: 1px solid #07BDB8;
  border-radius: 2rem;
}


.h3_default_home{
  margin-top: 0.5rem;
  
}
.p_default2_home{

}



/* FOOTER*/

.footer-wrapper{
background-color: #07BDB8;
padding: 5rem 13rem 2.5rem 13rem;
width: 100vw;
border-top-left-radius: 10rem;
border-top-right-radius: 10rem;



}


/* FOOTER >>> LINKS*/

.footer-links-wrapper{
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 4rem;
}

/* LOGO*/

.footer-links-img{
    width: 10.5rem;
    height: auto;

}

/* GATE OF LINKS */
.footer-links-container{
    display: flex;
    justify-content: space-between;
    gap: 5rem;
    flex-wrap: wrap;
}

/* LINKS COLUMNS */

.footer-links-inner-container{
}

.footer-links-heading{
    color: #fafafa;
    font-weight: bold;
    margin-bottom: 1rem;
    font-size: 1.125rem;
}

.footer-links-tree{
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.footer-link{
    color: #fafafa
}

.footer-link:hover{
    color: #B7E9E8
}

.footer-link-logo-wrapper{
    display: flex;
    align-items: center;
    gap: 0.25rem;

}
/* FOOTER >>> COPYRIGHT*/

.footer-copyright-wrapper{
    margin-top: 6rem;
    user-select: none;

}
/* LOGOS */
.footer-copyright-logo-container{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}


.footer-copyright-logo-1{
    height: 1.75rem;
    width: auto ;
}

.footer-copyright-logo-2{
    height: 3.5rem;
    width: auto ;
}

/* COPYRIGHT TEXTS */
.footer-copyright-text-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    margin-top: 1rem;
    text-align: center;
}

.footer-copyright-text{
    color: #fafafa;
    font-family: "inter";
    font-weight: normal;
    font-size: 0.75rem

}




/* CONTAINER*/


.container-home *{
line-height: calc(1em + 0.5rem);
}

.container-home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
  </style>
