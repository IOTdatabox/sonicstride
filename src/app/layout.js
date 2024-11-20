import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: "SonicsTride",
  description: "Experience music that adapts to your physical and mental rhythms with Sonicstride",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative">{children}</body>
    </html>
  );
}
