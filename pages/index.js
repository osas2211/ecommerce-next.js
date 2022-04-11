import styles from "../styles/Home.module.css"
import HomeHero from "../components/HomeHero"
import Featured from "../components/Featured_"
import ChooseUs from "../components/ChooseUs"
import BestSellers from "../components/BestSellers"
import Hero from "../components/Hero"

export default function Home() {
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
