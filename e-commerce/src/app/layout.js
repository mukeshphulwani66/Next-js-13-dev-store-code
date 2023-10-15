import './globals.css'

import NavBar from "../components/NavBar";
import { montserrat } from './fonts';
import Provider from '../components/Provider';


export const metadata = {
  title: "Dev Style",
  description: "You can shop coding shirts from this website",
  keywords: ["coding dress", "coding shirts"]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 ${montserrat.className}`}>
        <Provider>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
