---
layout: home
title: "Prayer Spaces"
titleTemplate: false
---

<script setup>
import { Fancybox } from "/fancybox/index.esm.js";
Fancybox.bind();
</script>

<!-- HERO -->
<main class="container1">

<section class="prayerspaces-hero-wrapper">
<h1 class="h1_default">Find Campus Prayer Rooms</h1>
<p class="p_default">Easily locate prayer spaces across our campuses.</p>
</section>

<!-- CAMPUSES -->
<section class="prayerspaces-campuses-wrapper">
<!-- CAMPUSES 1-->

<article>
<h3 class="h3_default">Altunizade Campus</h3>
<p class="p_default2">Üsküdar University's Main Campus is situated in Altunizade, one of the most central districts of Üsküdar. The prayer space, located on floor -1 at the end of the hall, offers a dedicated area for prayer and includes a wudu facility for ablution.</p>
<div class="prayerspaces-img-wrapper">
<div class="prayerspaces-img-main-wrapper" >
<img class="prayerspaces-img-main" data-fancybox="gallery" src="/campuses/altunizade/1.jpg" >
</div>
<div class="prayerspaces-img-side-wrapper">
<img class="prayerspaces-img-side" data-fancybox="gallery" src="/campuses/altunizade/2.jpg">
<img class="prayerspaces-img-side" data-fancybox="gallery" src="/campuses/altunizade/3.jpeg">
<img class="prayerspaces-img-side" data-fancybox="gallery" src="/campuses/altunizade/4.jpeg">
<img class="prayerspaces-img-side" data-fancybox="gallery" src="/campuses/altunizade/5.jpeg">
</div>
</div>

<div class="map-wrapper">
  <a class="map-container" target="_blank" href="https://maps.app.goo.gl/xtjHQ11aYLGJGNSLA">
    <span class="map-icon"></span>
    <span class="map">Show on map</span>
  </a>
</div>
</article>
<!-- CAMPUSES 2 -->

<article>
<h3 class="h3_default">Çarşı Campus</h3>
<p class="p_default2">At Üsküdar University's Çarşı Campus in Mimar Sinan, you'll find the prayer space conveniently located on floor -1, near the print room. It offers ablution facilities for your convenience.

</p>
<div class="prayerspaces-img-wrapper">

<div class="prayerspaces-img-main-wrapper">
<img class="prayerspaces-img-main" data-fancybox="gallery2" src="/campuses/casi/1.jpg" >
</div>
<div class="prayerspaces-img-side-wrapper">
<img class="prayerspaces-img-side" data-fancybox="gallery2" src="/campuses/casi/2.jpg">
<img class="prayerspaces-img-side" data-fancybox="gallery2" src="/campuses/casi/3.jpg">
<img class="prayerspaces-img-side" data-fancybox="gallery2" src="/campuses/casi/4.jpg">
<img class="prayerspaces-img-side" data-fancybox="gallery2" src="/campuses/casi/5.jpg">
</div>
</div>

<div class="map-wrapper">
  <a class="map-container" target="_blank" href="https://maps.app.goo.gl/T74mkvCpMhJHbrR99">
    <span class="map-icon"></span>
    <span class="map">Show on map</span>
  </a>
</div>
</article>

</section>
</main>

<style scoped>
.prayerspaces-hero-wrapper{
  max-width: 1024px;
  margin:4rem auto 0rem auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.prayerspaces-campuses-wrapper img{
  border-radius: 0.5rem;
  cursor: pointer;
}

/* HERO*/
.h1_default {
  font-family: "Raleway";
  font-weight: 600;
  font-size:  2.827rem;
}
.p_default{
  font-family: "inter";
  font-size: 1rem;
  font-weight: normal;
}

/* CAMPUSES FLEX*/

.prayerspaces-campuses-wrapper{
  margin: 5rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 4rem
}

/* CAMPUSES HEADING*/
.h3_default {
  font-family: "Raleway";
  font-weight: bold;
  font-size:1.75rem;
  color: #07BDB8;
}
.p_default2{
  font-family: "inter";
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;

  max-width:720px
}
/* CAMPUSES*/

.prayerspaces-img-wrapper{
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}
.prayerspaces-img-main-wrapper{

}
.prayerspaces-img-main{
  width: 864px;
  height: auto;


}
.prayerspaces-img-side-wrapper{
  display: flex;
  flex-wrap: wrap;
  gap:0.5rem;
  width: 200px;
  align-content: flex-start;
  
}
.prayerspaces-img-side{
  max-width:96px;
  max-height:96px;
  width: auto;
  height: auto;
  object-fit: cover;
}

.map-wrapper {
  margin-top: 1rem;
}

.map-container {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  text-decoration: none; /* Ensure no underline by default */
  color: var(--vp-c-paragraph);
}

.map-container:hover {
  color: var(--vp-c-text-2); /* Optional: Use a hover color variable if defined */
}

.map-icon {
  font-family: "fa-solid";
}

.map {
  /* Remove underline to ensure it's added only on hover */
  text-decoration: underline;
}
.container1 *{
line-height: calc(1em + 0.5rem);
}
  </style>
