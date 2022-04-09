import styles from "../styles/Home.module.css"
import HomeHero from "../components/HomeHero"
import Featured from "../components/Featured"
import ChooseUs from "../components/ChooseUs"
import BestSellers from "../components/BestSellers"

export default function Home() {
  return (
    <div className="home">
      <HomeHero />
      <ChooseUs />
      <Featured />
      <BestSellers />
    </div>
  )
}
