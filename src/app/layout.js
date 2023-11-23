import { Inter } from 'next/font/google'

import './globals.css'
import Navbar from './navbar/Navbar';
import Footer from './footer/page';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the styles
import { config } from '@fortawesome/fontawesome-svg-core';
import './fontawesome'; // Import the configuration file you created

config.autoAddCss = false; // Disable the automatic addition of styles




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Galaxy Packers & Movers || Packers & Movers In India',
  description: 'Galaxy Packers and Movers Delhi NCR - We offers best services like packers and movers in delhi, best packers and movers in delhi, home shifting services in delhi, best home packers and movers delhi, international packers and movers delhi, delhi movers packers, relocation services in delhi, movers n packers in delhi.',
  keywords: ['packers and movers in metro city','packers and movers in all over india','galaxy packers and movers in all over india','galaxy packers and movers in delhi', 'packers movers delhi', 'corporate relocation services','india Top 10 Packers & Movers', 'home shifting services', 'car relocation services', 'car transportation service', 'bike transportation service', 'ghar shifting'],
  authors: [{ name: 'Gajendra Pratap Singh' }],
  creator: 'Gajendra Pratap Singh',
  publisher: 'Gajendra Pratap Singh',
   

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link
  rel="icon"
  href="/icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/>


    </head>
          
      <body className={inter.className}>
      <Navbar/>

        {children}

        <Footer/>
        </body>
    </html>
  )
}
