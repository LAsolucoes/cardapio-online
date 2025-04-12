import { Header } from "@/app/_Components/Header";
import { Main } from "./_Components/Main";
import { Services } from "./_Components/Services";
import { Cardapio } from "./_Components/Cardapio";
export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Services />
      <Cardapio />
    </>
  );
}
