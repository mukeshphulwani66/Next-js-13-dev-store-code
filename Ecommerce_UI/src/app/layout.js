import './globals.css'

import NavBar from "../components/NavBar";

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className='bg-gray-100'>
        <NavBar />
        {children}
        </body>
    </html>
  )
}
