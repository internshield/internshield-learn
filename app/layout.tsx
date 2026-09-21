import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
export const metadata={title:"InternShield Learn",description:"Interactive Linux and Proglearn learning computer"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}