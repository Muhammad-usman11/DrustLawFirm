

import "@/styles/globals.css";
import localFont from "next/font/local";

const calluna = localFont({
  src: "../../public/fonts/Calluna-Regular.woff2",
  variable: "--calluna",
});
export default function App({ Component, pageProps }) {
  console.log(calluna);
  return (
    <main className={calluna.variable}>
      <Component {...pageProps} />

     
    </main>
  );
}
