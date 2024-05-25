---
layout: home
title: "İletişim"
titleTemplate: false
---

<!-- HERO -->
<main class="container1">

<section class="prayercontact-hero-wrapper">
<div class="prayercontact-heading-wrapper">
<h1 class="h1_default_contact">Iletişime geçin</h1>
<p class="p_default_contact">Bir sorunuz, geri bildiriminiz veya desteğe mi ihtiyacınız var? Buradayız. Bize ulaşmaktan çekinmeyin.</p>
</div>
<div class="hardline"></div>

<div class="contact-info-wrapper">
<div class="contact-info">
<p class="contact-info-icon"></p>
<p class="contact-info-text">E-posta:</p>
<a class="contact-info-link" href="mailto:salam@uskudarmescit.com">salam@uskudarmescit.com</a>
</div>

<div class="contact-info">
<p class="contact-info-icon"></p>
<p class="contact-info-text">Telefon:</p>
<a class="contact-info-link" href="https://wa.me/901122233344?text=Welcome to Üsküdar University Mescit. Message us with your questions or feedback!">+90 552 554 22 86</a>
</div>
</div>

</section>
</main>

<style scoped>
.prayercontact-hero-wrapper{
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  }

.prayercontact-heading-wrapper{
max-width: 1024px;
  margin:16rem auto 0rem auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

/* HERO*/
.h1_default_contact {
  font-family: "Raleway";
  font-weight: 600;
  font-size:  2.827rem;
}
.p_default_contact{
  font-family: "inter";
  font-size: 1rem;
  font-weight: normal;
}

.hardline{
  width: 32rem;
  height: 0.125rem;
  background-color: var(--vp-c-divider);
  margin-left: auto;
  margin-right: auto;
}

.contact-info-wrapper{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}

.contact-info{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
}

.contact-info-icon{
  font-family: "fa-solid"
}

.contact-info-text{
  font-family: "inter";
  font-size: 1rem;
  font-weight: normal;
}
.contact-info-link{
  color: var(--vp-c-paragraph);
  text-decoration: underline;
  
}
.contact-info-link:hover{
 color: var(--vp-c-text-2)  
}



.container1 *{
line-height: calc(1em + 0.5rem);
}
  </style>
