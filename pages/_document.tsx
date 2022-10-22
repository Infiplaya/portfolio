import { Html, Head, Main, NextScript } from 'next/document'
import { motion } from "framer-motion";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className='bg-gray-100 dark:bg-zinc-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}