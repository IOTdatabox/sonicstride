import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Solution from "@/components/Solution";
import MusicApp from "@/components/MusicApp";
import Launching from "@/components/Launching";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className={``}>
      <Header />
      <Experience />
      <Solution />
      <MusicApp />
      <Launching />
      <Footer />
    </div>
  );
}
