import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

const Mondwest = localFont({ 
    src: '../fonts/mondwest-regular.otf',
    variable: '--font-mondwest', 
    display: 'swap' 
})
const NeueBitBold = localFont({ 
    src: '../fonts/neuebit-bold.otf',
    variable: '--font-neuebit',
    display: 'swap' 
})

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export { Mondwest, NeueBitBold, poppins }