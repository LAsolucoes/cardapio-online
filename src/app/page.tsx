import { Header } from "@/app/_Components/( LandPage )/Header";   
import { Main } from "./_Components/( LandPage )/Main";
import { Services } from "./_Components/( LandPage )/Services";
import { Depoimentos } from "./_Components/( LandPage )/Depoimentos";
import { Reservas } from "./_Components/( LandPage )/Reservas";
import { Footer } from "./_Components/( LandPage )/Footer";

export default function Home() {
  return (
    <>
     
      <Header />
      <Main />
      <Services />
      <Depoimentos />
      <Reservas />
      <Footer />
    </>
  );
}
