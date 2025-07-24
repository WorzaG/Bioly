import ReduxProvider from "./components/ReduxProvider";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";


// app/layout.jsx
export const metadata = {
  title: {
    default: "Bioly - Linklerini yönet, paylaş, analiz et!",
    template: "%s | Bioly"
  },
  description: "Bioly: Tüm linklerini tek yerden yönet!",
  keywords: ["Bioly", "link yönetimi", "bağlantı kısa", "bio link","link","kısaltma","biyografi","biografi","bio"],
  creator: "WorzaG",
  icons:{
    icon:'/favicon.png'
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SpeedInsights/>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
