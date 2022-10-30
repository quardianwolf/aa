import '../styles/globals.css'
import { Layout, Navbar, Footer } from '../component';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar/>
        <Component {...pageProps} />
      <Footer/>
    </Layout>
  )
}

export default MyApp
