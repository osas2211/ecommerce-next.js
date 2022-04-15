import "../styles/bootstrap.css"
import '../styles/globals.css'
import '../styles/btn.css'
import Layout from '../components/Layout'
import { CartProvider } from "../context/CartContext"

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}

export default MyApp
