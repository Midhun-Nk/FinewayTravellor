import { Contacts } from "@/components/Contact";
import DestinationsFlow from "@/components/DestinationsFlow";
import { Fleet } from "@/components/Fleet";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { LayeredHero } from "@/components/LayeredHero";
import Locations from "@/components/Locations";
import { Services } from "@/components/Services";

export default function App() {
  const backgroundImage = "./background.jpeg";
  const foregroundImage = "./person.png";

  return (
    <div className="font-inter antialiased text-gray-800">
      <Header/>
      <main className="[&>section]:m-0 [&>section]:p-0">
        <LayeredHero
          backgroundImage={backgroundImage}
          foregroundImage={foregroundImage}
        />
        <Services />
        <DestinationsFlow />
        <Fleet />
        <Locations />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
