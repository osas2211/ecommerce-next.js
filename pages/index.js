import HomeHero from "../components/HomeHero"
import Featured from "../components/Featured_"
import ChooseUs from "../components/ChooseUs"
import BestSellers from "../components/BestSellers"
import Hero from "../components/Hero"
import { app } from "../firebase/firebase"

export default function Home() {
  console.log(app)
  return (
    <div className="home">
      <HomeHero />
      <Hero />
      <ChooseUs />
      <BestSellers />
      <Featured />
    </div>
  )
}
