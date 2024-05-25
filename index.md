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
<h1 class="h1_default_home">Welcome to Our University Prayer Space!</h1>
<p class="p_default_home">Join us on your journey towards academic growth and spiritual development.</p>
<img class="prayerhome-hero-img" src="/pages/home/home1.webp">
<div class="btn-wrapper_home"><a class="btn1_home hover" href="/prayerspaces">Get Started </a></div>
</section>

<!-- FEATURES-->
<section class="prayerhome-features-wrapper">
<h3 class="h3_default_home">Key Features</h3>
<p class="p_default2_home">Learn about the attributes of our prayer spaces</p>
<!-- FEATURES >>> BOXES -->

<div class="boxes-wrapper">
<!-- BOXES 1 -->
<div class="boxes-container">
<div class="boxes-heading-container">
<Sparkles :size="22"/>
<h4 class="boxes-heading">Clean</h4>
</div>
<p class="boxes-paragraph">The prayer spaces and its facilities are kept clean, providing a hygienic environment for all users.</p>
</div>

<!-- BOXES 2 -->
<div class="boxes-container">
<div class="boxes-heading-container">
<Smile :size="22" />
<h4 class="boxes-heading">Comfortable</h4>
</div>
<p class="boxes-paragraph">The prayer areas offers a comfortable and peaceful atmosphere for anyone seeking a moment of tranquility.</p>
</div>

<!-- BOXES 3 -->
<div class="boxes-container">
<div class="boxes-heading-container">
<ShieldCheck :size="22" />
<h4 class="boxes-heading">Segregated</h4>
</div>
<p class="boxes-paragraph">The prayer areas offer separate spaces for men and women, adhering to Islamic principles of modesty and privacy.</p>
</div>

<!-- BOXES 4 -->
<div class="boxes-container">
<div class="boxes-heading-container">
<LibraryBig :size="22" />
<h4 class="boxes-heading">Learning resources</h4>
</div>
<p class="boxes-paragraph">Access educational materials to explore various topics of interest, promoting personal growth and curiosity.</p>
</div>

<!-- BOXES 5 -->
<div class="boxes-container">
<div class="boxes-heading-container">
<Droplets :size="22"/>
<h4 class="boxes-heading">Wudu Facility</h4>
</div>
<p class="boxes-paragraph">Convenient facilities for ritual ablution are provided, ensuring purification and preparation for prayer</p>
</div>

<!-- BOXES 6 -->
<div class="boxes-container">
<div class="boxes-heading-container">
<PersonStanding :size="22" />
<h4 class="boxes-heading">Restrooms</h4>
</div>
<p class="boxes-paragraph">Nearby restroom facilities offer added convenience, ensuring visitors can attend to personal needs comfortably.</p>
</div>
</div>
<img class="arrow-down" src="/pages/home/features arrow.svg">
</section>

<!-- QURAN-->

<section class="prayerhome-quran-wrapper">
<h3 class="h3_default_home">Read the Quran with Translation</h3>
<p class="p_default2_home">Discover the sacred Quran in Turkish and English translation. Find guidance, solace, and inspiration within its verses.</p>
<div class="ball"></div>
<img class="quran-img" src="/pages/home/quran.webp">
<a class="btn2_home hover" href="/quran/index">Read Today</a>
</section>

<!-- DOWNLOAD -->

<section class="prayerhome-download-wrapper">
<h3 class="h3_default_home">Introducing The Study Quran App</h3>
<p class="p_default2_home">Explore the Quran in depth with our Study Quran app. Enjoy a range of features tailored for comprehensive study and reflection. Available for download now.</p>
<img class="download-img" src="/pages/home/phone.png">
<a class="btn3_home hover" href="/download">Download Now</a>
</section>

<!-- ABOUT -->

<section class="prayerhome-about-wrapper">
<School :size="32"/>
<h3 class="h3_default_home">Get to Know Us!</h3>
<p class="p_default2_home">Discover who we are and join us in fostering a supportive environment for university members.</p>
<a class="btn1_home hover" href="/about">Learn More</a>
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
<h3 class="footer-links-heading">NAVIGATE</h3>
<div class="footer-links-tree">
<a class="footer-link" href="#">Home</a>
<a class="footer-link" href="#">Prayer Spaces</a>
<a class="footer-link" href="#">Prayer Time</a>
<a class="footer-link" href="#">Quran</a>
<a class="footer-link" href="#">Download</a>
<a class="footer-link" href="#">About</a>
<a class="footer-link" href="#">Contact</a>
</div>
</div>

<!-- LINKS COLUMN 2 -->
<div class="footer-links-inner-container">
<h3 class="footer-links-heading">POPULAR LINKS</h3>
<div class="footer-links-tree">
<a class="footer-link" href="/quran/2#_255">Ayatul Kursi</a>
<a class="footer-link" href="/quran/18">Al Kahf</a>
<a class="footer-link" href="/quran/67">Al Mulk</a>
<a class="footer-link" href="/quran/56">Al Waqi'ah</a>
<a class="footer-link" href="/quran/71">Nuh</a>
</div>
</div>

<!-- LINKS COLUMN 3 -->
<div class="footer-links-inner-container">
<h3 class="footer-links-heading">UNIVERSITY LINKS</h3>
<div class="footer-links-tree">
<a class="footer-link" href="https://uskudar.edu.tr/en" target="_blank"><div class="footer-link-logo-wrapper">Home<SquareArrowOutUpRight :size="16"/></div></a>
<a class="footer-link" href="https://uskudar.edu.tr/en/academic-calendar" target="_blank"><div class="footer-link-logo-wrapper">Academic Calendar<SquareArrowOutUpRight :size="16"/></div></a>
<a class="footer-link" href="https://uskudar.edu.tr/en/faq" target="_blank"><div class="footer-link-logo-wrapper">FAQ<SquareArrowOutUpRight :size="16"/></div></a>

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
<p class="footer-copyright-text">&copy; 2024 Üsküdar University Mescit. All rights reserved.</p>
<p class="footer-copyright-text">Designed & Developed by Brahim Boussada.</p>

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
