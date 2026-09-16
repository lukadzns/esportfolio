"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const projects = [
  {
    title: "VinylVibes",
    category: "Branding",
    summary: "Huisstijl voor een platenzaak in Tilburg.",
    text: "Voor VinylVibes maakte ik een logo, openingsposter, social media posts en een uithangbord. De stijl is warm en nostalgisch, met creme, donkerrood en groen. Zo ontstaat een herkenbare wereld die doorloopt van het logo tot de winkelpui.",
    image: { src: "/work/vinylvibes-poster.jpg", width: 1555, height: 2200, alt: "Openingsposter van VinylVibes" },
    gallery: [
      { src: "/work/vinylvibes-logos.jpg", width: 2200, height: 752, alt: "Logovarianten van VinylVibes" },
      { src: "/work/vinylvibes-social.jpg", width: 1080, height: 1350, alt: "Social media post van VinylVibes" },
      { src: "/work/vinylvibes-uithangbord.jpg", width: 2200, height: 1650, alt: "Uithangbord van VinylVibes aan de gevel" },
    ],
  },
  {
    title: "Het Draaiende Huis",
    category: "Poster",
    summary: "Twee posterstudies voor een opvallend gebouw in Tilburg.",
    text: "Ik ontwikkelde de stijl in twee versies. De eerste werkte met blauw en creme; de tweede werd strakker en bruiner, met het huis groot in beeld en de tekst erboven. Door opnieuw naar kleur en compositie te kijken, kreeg de poster meer karakter.",
    images: [
      { src: "/work/draaiende-huis-1.jpg", width: 1556, height: 2200, label: "Versie 1", alt: "Het Draaiende Huis, blauwe posterversie" },
      { src: "/work/draaiende-huis-2.jpg", width: 1556, height: 2200, label: "Versie 2", alt: "Het Draaiende Huis, bruine posterversie" },
    ],
  },
  {
    title: "Stadsposters",
    category: "Posterserie",
    summary: "New York, Athene en Parijs in beeld en typografie.",
    text: "Voor deze serie combineerde ik bekende steden met typografie en een grafisch beeldeffect. Pixel- en halftone-filters maken de foto grafischer. Het doel was om tekst en beeld samen te laten werken, in plaats van elkaar te laten storen.",
    images: [
      { src: "/work/stadsposters-newyork.jpg", width: 1080, height: 1920, label: "New York", alt: "Posterversie van New York met halftone-effect" },
      { src: "/work/stadsposters-athene.jpg", width: 1080, height: 1920, label: "Athene", alt: "Posterversie van Athene met halftone-effect" },
      { src: "/work/stadsposters-parijs.jpg", width: 1080, height: 1920, label: "Parijs", alt: "Posterversie van Parijs met halftone-effect" },
    ],
  },
  {
    title: "Double Exposure",
    category: "Fotobewerking",
    summary: "Portretten en landschappen samengebracht in zwart-wit.",
    text: "Ik maakte drie zwart-wit versies waarin een persoon en een omgeving tegelijk zichtbaar zijn. Door kleur weg te laten, ligt de aandacht op vorm en contrast. Dit project vroeg veel oefening met Photoshop, maskers en lagen.",
    image: { src: "/work/doubleexposure.jpg", width: 2200, height: 399, alt: "Drie double exposure portretten in zwart-wit" },
  },
  {
    title: "Silence Kills",
    category: "Awareness poster",
    summary: "Een poster over femicide, zonder het onderwerp te versieren.",
    text: "Ik koos paars en roze, kleuren die verbonden zijn met vrouwenrechten. De vrouw is een eenvoudig silhouet. De verticale tekst voelt bewust ongemakkelijk; dat past bij de ernst van het onderwerp.",
    image: { src: "/work/silencekills.jpg", width: 1556, height: 2200, alt: "Awareness poster Silence Kills over femicide" },
  },
  {
    title: "Astroworld",
    category: "Vrijstaand",
    summary: "Een donker posterconcept rond Travis Scott.",
    text: "Voor dit project stelde ik een persoon vrij en bouwde ik zelf een achtergrond. De donkere, grunge-achtige sfeer bestaat uit een brandende bus, kosmische elementen, belichting en textuur.",
    image: { src: "/work/astroworld.jpg", width: 567, height: 709, alt: "Astroworld posterconcept" },
  },
  {
    title: "IT",
    category: "Boekcover",
    summary: "Een volledige cover voor Stephen Kings IT.",
    text: "Ik ontwierp voorzijde, rug en achterzijde. De voorkant is direct: grote letters voor de auteur en Pennywise centraal. Rood zorgt voor spanning, terwijl de achterkant een ballon in een donkere straat gebruikt om dezelfde sfeer door te trekken.",
    image: { src: "/work/itcover.jpg", width: 2200, height: 1395, alt: "Boekcover van Stephen Kings IT, voor- en achterzijde" },
  },
  {
    title: "Ronaldo",
    category: "Sportposter",
    summary: "Een minimalistische sportposter rond Cristiano Ronaldo.",
    text: "De opdracht vroeg om een compositie met maar één duidelijk onderwerp. Ik werkte met een uitgelichte actiefoto op een dieprode gradient-achtergrond met subtiele lijnstructuren, zodat rugnummer en houding alle aandacht krijgen zonder dat het beeld druk wordt.",
    image: { src: "/work/ronaldo.jpg", width: 1556, height: 2200, alt: "Minimalistische sportposter rond Cristiano Ronaldo" },
  },
  {
    title: "Emporio Armani",
    category: "Advertentiebeeld",
    summary: "Een sfeervolle productvisual voor een parfumcampagne.",
    text: "Deze compositie draaide om materiaal: glas, vloeistof en licht moesten samen een luxueuze, ingetogen sfeer oproepen. Ik werkte met donkere tinten, bokeh-licht en bloemmotieven op de achtergrond om het flesje extra te laten spreken.",
    image: { src: "/work/armani.jpg", width: 1556, height: 2200, alt: "Productvisual voor Emporio Armani parfum" },
  },
  {
    title: "Fantasydier",
    category: "Fotobewerking",
    summary: "Een portret dat overloopt in een fantasiewezen.",
    text: "Met laagmaskers en textuurwerk liet ik een dierlijke huidtekening en een gewei geleidelijk overgaan in een menselijk gezicht. De uitdaging zat in de overgangen tussen huid en textuur, zodat het geheel geloofwaardig blijft ogen.",
    image: { src: "/work/fantasydier.jpg", width: 1467, height: 2200, alt: "Portret dat overloopt in een fantasiewezen" },
  },
];

function LinkedInIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1C3.87 1 4.98 2.12 4.98 3.5zM.24 8.5h4.48V24H.24V8.5zM8.5 8.5h4.3v2.1h.06c.6-1.14 2.06-2.34 4.24-2.34 4.53 0 5.37 2.98 5.37 6.86V24h-4.48v-7.06c0-1.68-.03-3.84-2.34-3.84-2.34 0-2.7 1.83-2.7 3.72V24H8.5V8.5z" /></svg>;
}

function MailIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M4 7l8 6 8-6" /></svg>;
}

function Logo({ priority = false }) { return <Image src="/esseling-logo.png" alt="Esseling" width={2171} height={724} priority={priority} />; }

function HeroGrid() {
  return <svg className="hero-mark" viewBox="0 0 120 120" aria-hidden="true"><circle cx="6.67" cy="6.67" r="0.41"/><circle cx="20.00" cy="6.67" r="0.53"/><circle cx="33.33" cy="6.67" r="0.67"/><circle cx="46.67" cy="6.67" r="0.83"/><circle cx="60.00" cy="6.67" r="0.98"/><circle cx="73.33" cy="6.67" r="1.13"/><circle cx="86.67" cy="6.67" r="1.25"/><circle cx="100.00" cy="6.67" r="1.34"/><circle cx="113.33" cy="6.67" r="1.38"/><circle cx="6.67" cy="20.00" r="0.53"/><circle cx="20.00" cy="20.00" r="0.69"/><circle cx="33.33" cy="20.00" r="0.89"/><circle cx="46.67" cy="20.00" r="1.09"/><circle cx="60.00" cy="20.00" r="1.29"/><circle cx="73.33" cy="20.00" r="1.48"/><circle cx="86.67" cy="20.00" r="1.63"/><circle cx="100.00" cy="20.00" r="1.74"/><circle cx="113.33" cy="20.00" r="1.80"/><circle cx="6.67" cy="33.33" r="0.67"/><circle cx="20.00" cy="33.33" r="0.89"/><circle cx="33.33" cy="33.33" r="1.13"/><circle cx="46.67" cy="33.33" r="1.38"/><circle cx="60.00" cy="33.33" r="1.63"/><circle cx="73.33" cy="33.33" r="1.86"/><circle cx="86.67" cy="33.33" r="2.05"/><circle cx="100.00" cy="33.33" r="2.19"/><circle cx="113.33" cy="33.33" r="2.27"/><circle cx="6.67" cy="46.67" r="0.83"/><circle cx="20.00" cy="46.67" r="1.09"/><circle cx="33.33" cy="46.67" r="1.38"/><circle cx="46.67" cy="46.67" r="1.68"/><circle cx="60.00" cy="46.67" r="1.99"/><circle cx="73.33" cy="46.67" r="2.27"/><circle cx="86.67" cy="46.67" r="2.51"/><circle cx="100.00" cy="46.67" r="2.69"/><circle cx="113.33" cy="46.67" r="2.78"/><circle cx="6.67" cy="60.00" r="0.98"/><circle cx="20.00" cy="60.00" r="1.29"/><circle cx="33.33" cy="60.00" r="1.63"/><circle cx="46.67" cy="60.00" r="1.99"/><circle cx="60.00" cy="60.00" r="2.35"/><circle cx="73.33" cy="60.00" r="2.69"/><circle cx="86.67" cy="60.00" r="2.99"/><circle cx="100.00" cy="60.00" r="3.22"/><circle cx="113.33" cy="60.00" r="3.34"/><circle cx="6.67" cy="73.33" r="1.13"/><circle cx="20.00" cy="73.33" r="1.48"/><circle cx="33.33" cy="73.33" r="1.86"/><circle cx="46.67" cy="73.33" r="2.27"/><circle cx="60.00" cy="73.33" r="2.69"/><circle cx="73.33" cy="73.33" r="3.10"/><circle cx="86.67" cy="73.33" r="3.48"/><circle cx="100.00" cy="73.33" r="3.78"/><circle cx="113.33" cy="73.33" r="3.94"/><circle cx="6.67" cy="86.67" r="1.25"/><circle cx="20.00" cy="86.67" r="1.63"/><circle cx="33.33" cy="86.67" r="2.05"/><circle cx="46.67" cy="86.67" r="2.51"/><circle cx="60.00" cy="86.67" r="2.99"/><circle cx="73.33" cy="86.67" r="3.48"/><circle cx="86.67" cy="86.67" r="3.94"/><circle cx="100.00" cy="86.67" r="4.34"/><circle cx="113.33" cy="86.67" r="4.58"/><circle cx="6.67" cy="100.00" r="1.34"/><circle cx="20.00" cy="100.00" r="1.74"/><circle cx="33.33" cy="100.00" r="2.19"/><circle cx="46.67" cy="100.00" r="2.69"/><circle cx="60.00" cy="100.00" r="3.22"/><circle cx="73.33" cy="100.00" r="3.78"/><circle cx="86.67" cy="100.00" r="4.34"/><circle cx="100.00" cy="100.00" r="4.87"/><circle cx="113.33" cy="100.00" r="5.24"/><circle cx="6.67" cy="113.33" r="1.38"/><circle cx="20.00" cy="113.33" r="1.80"/><circle cx="33.33" cy="113.33" r="2.27"/><circle cx="46.67" cy="113.33" r="2.78"/><circle cx="60.00" cy="113.33" r="3.34"/><circle cx="73.33" cy="113.33" r="3.94"/><circle cx="86.67" cy="113.33" r="4.58"/><circle cx="100.00" cy="113.33" r="5.24"/><circle cx="113.33" cy="113.33" r="5.87"/></svg>;
}

function Lightbox({ item, onClose }) {
  if (!item) return null;
  return <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.alt} onClick={onClose}>
    <button type="button" className="lightbox-close" onClick={onClose} aria-label="Sluiten">×</button>
    <img src={item.src} alt={item.alt} onClick={(e) => e.stopPropagation()} />
  </div>;
}

const values = ["Oog voor detail", "Betrouwbaar", "Kwaliteit", "Originaliteit", "Passie"];

export default function Home() {
  const [openProject, setOpenProject] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [lightbox]);

  return <main>
    <header className="header"><a href="#top" className="logo"><Logo priority /></a><nav aria-label="Hoofdnavigatie"><a href="#werk">Werk</a><a href="#over-mij">Over mij</a><a href="#contact">Contact</a></nav></header>
    <section className="hero" id="top"><div className="hero-copy"><p className="label">PORTFOLIO</p><h1>Luka<br /><span>Esseling</span></h1><p className="hero-note">Visuele identiteiten, posters en beeldbewerking. Gemaakt met aandacht voor kleur, compositie en detail.</p></div><HeroGrid /></section>
    <section className="work section" id="werk"><div className="section-intro"><p className="label">GESELECTEERD WERK</p><h2>Werk</h2><p>Een selectie uit mijn opdrachten. Open een project om te lezen wat ik heb gemaakt en waarom.</p></div><div className="project-list">{projects.map((project, index) => {
      const isOpen = openProject === index;
      return <article className={`project-row ${isOpen ? "is-open" : ""}`} key={project.title}>
        <button onClick={() => setOpenProject(isOpen ? null : index)} aria-expanded={isOpen}><span className="project-name">{project.title}</span><span className="project-category">{project.category}</span><span className="project-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span></button>
        <div className="project-detail" hidden={!isOpen}>
          {project.image && <div className="project-image"><button type="button" onClick={() => setLightbox(project.image)}><Image src={project.image.src} alt={project.image.alt} width={project.image.width} height={project.image.height} sizes="(max-width: 760px) 100vw, 38rem" /></button></div>}
          {project.images && <div className="project-image-row">{project.images.map((img) => <figure key={img.src}><button type="button" onClick={() => setLightbox(img)}><Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(max-width: 760px) 50vw, 19rem" /></button><figcaption>{img.label}</figcaption></figure>)}</div>}
          <p className="project-summary">{project.summary}</p>
          <p>{project.text}</p>
          {project.gallery && <div className="project-gallery">{project.gallery.map((img) => <button type="button" className="project-gallery-item" key={img.src} onClick={() => setLightbox(img)}><Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(max-width: 760px) 33vw, 12rem" /></button>)}</div>}
        </div>
      </article>;
    })}</div></section>
    <section className="about section" id="over-mij"><div className="about-photo"><Image src="/luka-esseling.jpg" alt="Luka Esseling op het strand tijdens zonsondergang" width={1200} height={1600} sizes="(max-width: 760px) 100vw, 40vw" /></div><div className="about-copy"><p className="label">OVER MIJ</p><h2>Rustig werken.<br />Goed kijken.<br /><span>Alles uitwerken.</span></h2><p>Ik ben Luka Esseling, mediavormgever in opleiding. Ik werk het liefst aan ontwerpen waar de stijl niet alleen mooi is, maar ook ergens voor staat.</p><p>Mijn kracht zit in huisstijl en visuele keuzes. Ik heb gevoel voor compositie en neem de tijd om een ontwerp goed uit te werken. Ik blijf net zo lang doorwerken tot alles klopt.</p></div></section>
    <section className="values section" aria-labelledby="waarden"><p className="label" id="waarden">WAAR IK OP LET</p><ul>{values.map((value) => <li key={value}>{value}</li>)}</ul></section>
    <section className="contact" id="contact"><p className="label">CONTACT</p><h2>Een goed idee<br />verdient een <span>sterke vorm.</span></h2><p>Voor branding, posters, illustratie of beeldbewerking kun je contact opnemen met Luka Esseling.</p><div className="social-links"><a href="https://www.linkedin.com/in/lukaesseling/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a><a href="mailto:lukaesseling@gmail.com" aria-label="E-mail"><MailIcon /></a></div></section>
    <footer><a href="#top" className="footer-logo"><Logo /></a><span>© {new Date().getFullYear()} Luka Esseling</span><a href="https://www.linkedin.com/in/lukaesseling/" target="_blank" rel="noreferrer">LinkedIn</a><a href="#privacy">Privacy</a></footer><section className="privacy" id="privacy"><p>Deze website gebruikt geen trackingcookies of analyse-tools. Gegevens die later via contact worden gedeeld, worden alleen gebruikt om op een bericht te reageren.</p></section>
    <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
  </main>;
}
