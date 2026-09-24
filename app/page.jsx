"use client";

import { useState, useEffect, useRef } from "react";
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
    text: "Ik koos paars en roze, kleuren die verbonden zijn met vrouwenrechten. De vrouw is een illustratie. De verticale tekst voelt bewust ongemakkelijk, dat past bij de ernst van het onderwerp.",
    image: { src: "/work/silencekills.jpg", width: 1556, height: 2200, alt: "Awareness poster Silence Kills over femicide" },
  },
  {
    title: "Astroworld",
    category: "Vrijstaand",
    summary: "Een posterconcept rond Travis Scott.",
    text: "Voor dit project stelde ik een persoon vrij en bouwde ik zelf een achtergrond. De donkere, grunge-achtige sfeer bestaat uit een brandende bus, elementen, belichting en textuur.",
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
    text: "De opdracht vroeg om een compositie met maar een duidelijk onderwerp. Ik werkte met een uitgelichte actiefoto op een dieprode gradient-achtergrond met subtiele lijnstructuren, zodat rugnummer en houding alle aandacht krijgen zonder dat het beeld druk wordt.",
    image: { src: "/work/ronaldo.jpg", width: 1556, height: 2200, alt: "Minimalistische sportposter rond Cristiano Ronaldo" },
  },
  {
    title: "Emporio Armani",
    category: "Advertentiebeeld",
    summary: "Een sfeervolle productvisual voor een parfumcampagne.",
    text: "Deze opdracht draaide vooral om materiaal: glas, vloeistof en licht moesten er samen goed uitzien. Ik gebruikte donkere tinten en wat bokeh-licht en bloemen op de achtergrond, zodat het flesje zelf de aandacht houdt.",
    image: { src: "/work/armani.jpg", width: 1556, height: 2200, alt: "Productvisual voor Emporio Armani parfum" },",
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

// Vaste waarden (geen Math.random) zodat server- en client-render identiek zijn.
// Negatieve delays laten elk rondje midden in zijn cyclus starten, zodat ze
// niet gelijk op bewegen.
const bubbles = [
  { x: 4, y: 10, s: 4.5, o: 0.16, dy: 30, dx: 23, d1: -3, d2: -11 },
  { x: 13, y: 62, s: 9, o: 0.1, dy: 41, dx: 33, d1: -17, d2: -4 },
  { x: 21, y: 24, s: 3, o: 0.2, dy: 26, dx: 19, d1: -9, d2: -14 },
  { x: 29, y: 78, s: 5.5, o: 0.13, dy: 36, dx: 28, d1: -22, d2: -7 },
  { x: 35, y: 41, s: 11, o: 0.08, dy: 47, dx: 38, d1: -6, d2: -25 },
  { x: 44, y: 14, s: 6.5, o: 0.14, dy: 33, dx: 25, d1: -28, d2: -18 },
  { x: 52, y: 69, s: 3.5, o: 0.19, dy: 24, dx: 31, d1: -12, d2: -2 },
  { x: 58, y: 34, s: 8, o: 0.12, dy: 44, dx: 21, d1: -35, d2: -16 },
  { x: 66, y: 86, s: 5, o: 0.15, dy: 29, dx: 36, d1: -20, d2: -27 },
  { x: 71, y: 19, s: 12, o: 0.09, dy: 52, dx: 41, d1: -8, d2: -33 },
  { x: 79, y: 55, s: 4, o: 0.18, dy: 27, dx: 22, d1: -25, d2: -10 },
  { x: 84, y: 30, s: 7, o: 0.13, dy: 39, dx: 30, d1: -14, d2: -21 },
  { x: 90, y: 74, s: 9.5, o: 0.1, dy: 46, dx: 35, d1: -31, d2: -5 },
  { x: 94, y: 45, s: 3.5, o: 0.2, dy: 25, dx: 27, d1: -18, d2: -23 },
  { x: 48, y: 92, s: 6, o: 0.12, dy: 37, dx: 24, d1: -2, d2: -29 },
  { x: 8, y: 40, s: 6.5, o: 0.11, dy: 43, dx: 32, d1: -26, d2: -13 },
];

function HeroBubbles() {
  return <div className="hero-bubbles" aria-hidden="true">{bubbles.map((b, i) => <span
    key={i}
    className="bubble"
    style={{
      left: `${b.x}%`,
      top: `${b.y}%`,
      width: `${b.s}vmin`,
      height: `${b.s}vmin`,
      opacity: b.o,
      "--dy": `${b.dy}s`,
      "--dx": `${b.dx}s`,
      "--d1": `${b.d1}s`,
      "--d2": `${b.d2}s`,
    }}
  ><span /></span>)}</div>;
}

function Lightbox({ item, onClose }) {
  if (!item) return null;
  return <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.alt} onClick={onClose}>
    <button type="button" className="lightbox-close" onClick={onClose} aria-label="Sluiten">×</button>
    <img src={item.src} alt={item.alt} onClick={(e) => e.stopPropagation()} />
  </div>;
}

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, className: `reveal${visible ? " is-in" : ""}` };
}

function ProjectRow({ project, isOpen, onToggle, onHoverOpen, onHoverClose, onImageClick }) {
  const reveal = useReveal();
  return <article
    ref={reveal.ref}
    className={`${reveal.className} project-row ${isOpen ? "is-open" : ""}`}
    onMouseEnter={onHoverOpen}
    onMouseLeave={onHoverClose}
  >
    <button onClick={onToggle} onFocus={onHoverOpen} aria-expanded={isOpen}><span className="project-name">{project.title}</span><span className="project-category">{project.category}</span><span className="project-toggle" aria-hidden="true">+</span></button>
    <div className="project-detail">
      <div className="project-detail-inner">
        {project.image && <div className="project-image"><button type="button" onClick={() => onImageClick(project.image)}><Image src={project.image.src} alt={project.image.alt} width={project.image.width} height={project.image.height} sizes="(max-width: 760px) 100vw, 38rem" /></button></div>}
        {project.images && <div className="project-image-row">{project.images.map((img) => <figure key={img.src}><button type="button" onClick={() => onImageClick(img)}><Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(max-width: 760px) 50vw, 19rem" /></button><figcaption>{img.label}</figcaption></figure>)}</div>}
        <p className="project-summary">{project.summary}</p>
        <p>{project.text}</p>
        {project.gallery && <div className="project-gallery">{project.gallery.map((img) => <button type="button" className="project-gallery-item" key={img.src} onClick={() => onImageClick(img)}><Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(max-width: 760px) 33vw, 12rem" /></button>)}</div>}
      </div>
    </div>
  </article>;
}

const values = ["Oog voor detail", "Huisstijl", "Kwaliteit", "Orginaliteit", "Passie"];

export default function Home() {
  const [openProject, setOpenProject] = useState(null);
  const [lightbox, setLightbox] = useState(null);
  const pinned = useRef(null);
  const hoverTimer = useRef(null);
  const canHover = useRef(false);
  const heroReveal = useReveal();
  const workIntroReveal = useReveal();
  const aboutPhotoReveal = useReveal();
  const aboutCopyReveal = useReveal();
  const valuesReveal = useReveal();
  const contactReveal = useReveal();

  // Alleen op apparaten met een echte muisaanwijzer openen op hover.
  // Op touch blijft tikken werken, zoals eerst.
  useEffect(() => {
    canHover.current = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    return () => clearTimeout(hoverTimer.current);
  }, []);

  const hoverOpen = (index) => {
    if (!canHover.current) return;
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setOpenProject(index), 110);
  };

  const hoverClose = (index) => {
    if (!canHover.current) return;
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      setOpenProject((current) => {
        if (current !== index || pinned.current === index) return current;
        return pinned.current;
      });
    }, 220);
  };

  const toggleProject = (index) => {
    clearTimeout(hoverTimer.current);
    const isPinned = pinned.current === index;
    pinned.current = isPinned ? null : index;
    setOpenProject(isPinned ? null : index);
  };

  useEffect(() => {
    if (!lightbox) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [lightbox]);

  return <main>
    <header className="header"><a href="#top" className="logo"><Logo priority /></a><nav aria-label="Hoofdnavigatie"><a href="#werk">Werk</a><a href="#over-mij">Over mij</a><a href="#contact">Contact</a></nav></header>
    <section className="hero" id="top"><HeroBubbles /><div ref={heroReveal.ref} className={`${heroReveal.className} hero-copy`}><h1>Luka<br /><span>Esseling</span></h1><p className="hero-note">Grafisch vormgever met een passie voor sterke visuals, branding en creatieve ideeën.</p></div></section>
    <section className="work section" id="werk"><div ref={workIntroReveal.ref} className={`${workIntroReveal.className} section-intro`}><h2>Werk</h2><p>Een selectie uit mijn opdrachten.</p></div><div className="project-list">{projects.map((project, index) => <ProjectRow
      key={project.title}
      project={project}
      isOpen={openProject === index}
      onToggle={() => toggleProject(index)}
      onHoverOpen={() => hoverOpen(index)}
      onHoverClose={() => hoverClose(index)}
      onImageClick={setLightbox}
    />)}</div></section>
    <section className="about section" id="over-mij"><div ref={aboutPhotoReveal.ref} className={`${aboutPhotoReveal.className} about-photo`}><Image src="/luka-esseling.jpg" alt="Luka Esseling op het strand tijdens zonsondergang" width={1200} height={1600} sizes="(max-width: 760px) 100vw, 40vw" /></div><div ref={aboutCopyReveal.ref} className={`${aboutCopyReveal.className} about-copy`}><p className="label">OVER MIJ</p><h2>Rustig werken.<br />Goed kijken.<br /><span>Alles uitwerken.</span></h2><p>Ik ben Luka Esseling, mediavormgever in opleiding. Ik werk het liefst aan ontwerpen waar de stijl niet alleen mooi is, maar ook ergens voor staat.</p><p>Mijn kracht zit in huisstijl en visuele keuzes. Ik heb gevoel voor compositie en neem de tijd om een ontwerp goed uit te werken. Ik blijf net zo lang doorwerken tot alles klopt.</p></div></section>
    <section ref={valuesReveal.ref} className={`${valuesReveal.className} values section`} aria-labelledby="waarden"><p className="label" id="waarden">WAAR IK OP LET</p><ul>{values.map((value) => <li key={value}>{value}</li>)}</ul></section>
    <section ref={contactReveal.ref} className={`${contactReveal.className} contact`} id="contact"><p className="label">CONTACT</p><h2>Een goed idee<br />verdient een <span>sterke vorm.</span></h2><p>Voor branding, posters, illustratie of beeldbewerking kun je contact opnemen met Luka Esseling.</p><div className="social-links"><a href="https://www.linkedin.com/in/lukaesseling/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a><a href="mailto:lukaesseling@gmail.com" aria-label="E-mail"><MailIcon /></a></div></section>
    <footer><a href="#top" className="footer-logo"><Logo /></a><span>© {new Date().getFullYear()} Luka Esseling</span><a href="https://www.linkedin.com/in/lukaesseling/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="#privacy">Privacy</a></footer><section className="privacy" id="privacy"><p>Deze website gebruikt geen trackingcookies of analyse-tools. Gegevens die later via contact worden gedeeld, worden alleen gebruikt om op een bericht te reageren.</p></section>
    <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
  </main>;
}
