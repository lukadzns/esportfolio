import Link from "next/link";

export const metadata = {
  title: "Pagina niet gevonden — Luka Esseling",
  description: "Deze pagina bestaat niet (meer). Ga terug naar het portfolio van Luka Esseling.",
};

export default function NotFound() {
  return <main className="not-found"><div><p className="label">404</p><h1>Deze pagina<br /><span>bestaat niet.</span></h1><p>De link klopt waarschijnlijk niet meer.</p><Link href="/">Terug naar portfolio <span aria-hidden="true">↗</span></Link></div></main>;
}
