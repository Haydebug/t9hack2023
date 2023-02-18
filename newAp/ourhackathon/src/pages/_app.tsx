import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import {useEffect} from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    require ("bootstrap/dist/css/bootstrap.css");
  },);
  return <Component {...pageProps} />
}
