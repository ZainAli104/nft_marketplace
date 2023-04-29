import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';
import { Navbar, Footer } from '../components';

const App = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <Navbar />
      <div className="pt-65">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>

    <Script src="https://kit.fontawesome.com/d45b25ceeb.js" crossorigin="anonymous" />
  </ThemeProvider>
);

export default App;
