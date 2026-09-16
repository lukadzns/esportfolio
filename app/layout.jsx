import "./globals.css";

export const metadata = {
  title: "Luka Esseling",
  description: "Portfolio van Luka Esseling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
