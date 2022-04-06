import styles from "../styles/Home.module.css"
import HomeHero from "../components/HomeHero"
import Featured from "../components/Featured"

export default function Home() {
  return (
    <div className="home">

      {/* <div className="img">
        <Image src={background} alt="background" layout="fill"></Image>
      </div> */}
      <HomeHero />
      <Featured />
    </div>
  )
}
