---
layout: home
title: "Namaz Vakti"
titleTemplate: false
---

<!-- HERO -->
<main class="container1">

<section class="prayertime-hero-wrapper">
<h1 class="h1_default_time">Aylık Namaz Vakitleri Programı</h1>
<p class="p_default_time">Bu ayın namaz vakitleri için en güncel PDF'i alın.</p>
<img class="hero-img-rounded_time" src="/pages/time/1.webp" alt="2 people contemplating in a mosque">

<div class="btn-wrapper_time"><a class="btn1_time hover" href="/pages/time/May 2024 Prayer Times Schedule - ÜSÜ University Mescit.pdf">Programı İndir</a></div>
</section>

<!-- TIME -->

</main>

<style scoped>
.prayertime-hero-wrapper{
  max-width: 1024px;
  margin:4rem auto -4rem auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* HERO*/
.h1_default_time {
  font-family: "Raleway";
  font-weight: 600;
  font-size:  2.827rem;
}
.p_default_time{
  font-family: "inter";
  font-size: 1rem;
  font-weight: normal;
}

.hero-img-rounded_time{
  border-radius: 1rem;
  width: 80%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.5rem;

}
.btn-wrapper_time{
  margin-top: 1rem;

}
.btn1_time{
  padding: 0.5em 1.5em;
  border-radius: 0.5em;
  background-color: #07BDB8;
  color: var(--vp-c-white);
/* hover */
transition: all 0.3s ease-out 0s

}

.btn1_time:hover{
  background-color: #1C9894;
  color: var(--vp-c-white);


}

/* CAMPUSES FLEX*/

.prayerspaces-campuses-wrapper{
  display: flex;
  flex-direction: column;
  gap: 4em
}

/* CAMPUSES HEADING*/
.h3_default {
  font-family: "Raleway";
  font-weight: bold;
  font-size:1.75rem;
  color: #07BDB8;
}
.p_default_time2{
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
