---
title: "KI for lærere – Ressursportefølje"
layout: page
permalink: /portfolio/ki/
summary: "Samleside for foredrag, workshops, guider og ressurser jeg bruker om kunstig intelligens i lærerutdanning."
hero: /assets/img/ki-portfolio/hero.jpg
last_updated: 2025-09-08
# Tags på sidenivå (valgfritt)
tags: ["AI", "lærerutdanning", "AI literacy", "unplugged", "PfDK"]

# ✅ Selve porteføljen – rediger/utvid listen under
portfolio:
  - title: "AI i skolen: Hva, hvorfor, hvordan?"
    type: "Talk"
    url: "/talks/ai-i-skolen-intro/"
    date: "2025-03-14"
    description: "Grunnleggende rammer for bruk av KI i skolen: muligheter, risiko og didaktiske prinsipper."
    tags: ["foredrag", "rammer", "strategi"]
    thumb: "/assets/img/ki-portfolio/thumbs/talk-intro.jpg"

  - title: "Workshop: AI literacy – unplugged"
    type: "Workshop"
    url: "/workshops/ai-literacy-unplugged/"
    date: "2025-04-22"
    description: "Hands-on aktiviteter uten skjerm som forklarer sentrale KI-ideer for elever og lærerstudenter."
    tags: ["workshop", "unplugged", "didaktikk"]
    thumb: "/assets/img/ki-portfolio/thumbs/ws-unplugged.jpg"

  - title: "Lærerveiledning: Kildekritikk i KI-tider"
    type: "Guide"
    url: "/guides/kildekritikk-med-ki/"
    date: "2025-05-10"
    description: "Oppdatert kildekritikk for generativ KI: når kan vi stole på hva – og hvordan kvalitetssikre."
    tags: ["guide", "kildekritikk", "klasseledelse"]
    thumb: "/assets/img/ki-portfolio/thumbs/guide-kildekritikk.jpg"

  - title: "TPACK-/TIM-bot for oppgaveanalyse"
    type: "Bot"
    url: "/projects/bots/tim-tpack-analyse/"
    date: "2025-02-11"
    description: "Bot som vurderer teknologiinkludering i læreroppgaver basert på TPACK/TIM."
    tags: ["bot", "TPACK", "TIM"]
    thumb: "/assets/img/ki-portfolio/thumbs/bot-tpack-tim.jpg"

  - title: "Presentasjon: Mayers multimedieprinsipper"
    type: "Talk"
    url: "/talks/mayer-12-prinsipper/"
    date: "2025-08-05"
    description: "12 designprinsipper – praktiske eksempler for forelesning og emnedesign."
    tags: ["foredrag", "multimedia", "design"]
    thumb: "/assets/img/ki-portfolio/thumbs/talk-mayer.jpg"

  - title: "Oppgavebank: Bias-kort for klasserommet"
    type: "Guide"
    url: "/resources/bias-kort/"
    date: "2025-06-18"
    description: "Utskrivbare kort + lærernotat: forklarer vanlige skjevheter og tiltak i KI-systemer."
    tags: ["klasseaktivitet", "bias", "etikkom"]
    thumb: "/assets/img/ki-portfolio/thumbs/bias-kort.jpg"

  - title: "Blogg: PfDK – systemiske utfordringer"
    type: "Blog"
    url: "/blog/pfdk-systemiske-utfordringer/"
    date: "2025-07-01"
    description: "Hvorfor implementering av PfDK krever systemblikk og organisatoriske grep."
    tags: ["blogg", "PfDK", "organisasjon"]
    thumb: "/assets/img/ki-portfolio/thumbs/blog-pfdk.jpg"

  - title: "Datasett: Bergen bysykkel – undervisningsopplegg"
    type: "Dataset"
    url: "/projects/datasets/bergen-bysykkel-2023/"
    date: "2025-04-28"
    description: "Eksempeldata + oppgave for datafortelling, visualisering og vurdering."
    tags: ["datasett", "visualisering", "tverrfaglig"]
    thumb: "/assets/img/ki-portfolio/thumbs/dataset-bysykkel.jpg"
---

<!-- Introseksjon -->
<section class="max-w-3xl">
  <p>Her samler jeg foredrag, workshops, guider, bots og andre ressurser jeg bruker når jeg arbeider med <em>KI i lærerutdanning</em> og <em>AI literacy</em>. Alt er laget for å være praktisk, trygt å ta i bruk og enkelt å tilpasse lokale behov.</p>
  <p><strong>Tips:</strong> Bruk filterknappene for å finne riktig format, eller bla deg gjennom alt i kortoversikten under.</p>
</section>

<!-- Filterknapper (enkelt, basert på 'type') -->
<div class="filters" style="margin: 1rem 0;">
  {% assign types = "Talk,Workshop,Guide,Bot,Blog,Dataset" | split: "," %}
  <div class="btn-row" style="display:flex;flex-wrap:wrap;gap:.5rem;">
    <a href="#alt" class="btn">Alt</a>
    {% for t in types %}
      {% assign t_id = t | downcase %}
      <a href="#{{ t_id }}" class="btn">{{ t }}</a>
    {% endfor %}
  </div>
</div>

<!-- Litt enkel, lokal CSS -->
<style>
  .btn {
    border: 1px solid var(--border, #ddd);
    padding: .4rem .7rem;
    border-radius: .6rem;
    text-decoration: none;
    font-size: .95rem;
  }
  .card-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    margin: 1rem 0 2rem;
  }
  .card {
    border: 1px solid #e8e8e8;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: #fff;
  }
  .card img { width: 100%; aspect-ratio: 16/9; object-fit: cover; }
  .card-body { padding: .9rem 1rem; }
  .card-type { font-size: .75rem; opacity:.8; text-transform: uppercase; letter-spacing:.04em; }
  .card-title { margin: .2rem 0 .3rem; font-weight: 600; }
  .card-desc { font-size: .95rem; line-height: 1.35; margin: 0 0 .6rem; }
  .card-meta { font-size: .8rem; opacity: .75; }
  .tag { display:inline-block; font-size:.75rem; padding:.15rem .45rem; border:1px solid #ddd; border-radius:.5rem; margin:.2rem .2rem 0 0;}
</style>

<!-- Kortsekjoner, gruppert på type -->
<div id="alt"></div>
{% assign groups = "Talk,Workshop,Guide,Bot,Blog,Dataset" | split: "," %}
{% for group in groups %}
  {% assign items = page.portfolio | where: "type", group %}
  {% if items and items.size > 0 %}
  <section id="{{ group | downcase }}">
    <h2 style="margin-top:2rem;">{{ group }}</h2>
    <div class="card-grid">
      {% for item in items %}
      <article class="card">
        {% if item.thumb %}<a href="{{ item.url }}"><img src="{{ item.thumb }}" alt="{{ item.title }}"></a>{% endif %}
        <div class="card-body">
          <div class="card-type">{{ item.type }}</div>
          <h3 class="card-title"><a href="{{ item.url }}">{{ item.title }}</a></h3>
          <p class="card-desc">{{ item.description }}</p>
          <div class="card-meta">
            {% if item.date %}Publisert/oppdatert: {{ item.date }}{% endif %}
          </div>
          <div>
            {% if item.tags %}
              {% for tag in item.tags %}
                <span class="tag">{{ tag }}</span>
              {% endfor %}
            {% endif %}
          </div>
        </div>
      </article>
      {% endfor %}
    </div>
  </section>
  {% endif %}
{% endfor %}

<!-- Bunntekst: kontakt/rammer -->
<section class="max-w-3xl" style="margin-top:2rem;">
  <h2>Bruk & kontekst</h2>
  <p>Ressursene er laget for lærerutdanning og skole. Foredrag og workshops tilpasses målgruppe, tid og lokale rammer. Ta kontakt om du ønsker et opplegg hos dere.</p>
  <p><strong>Oppdatert:</strong> {{ page.last_updated }}</p>
</section>
