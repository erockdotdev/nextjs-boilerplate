import Head from "next/head";
import { APP_NAME, VIEW_PORT } from "src/constants/literals";

export default function App({ Component, pageProps }) {
  const { name, content } = VIEW_PORT;
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name={name} content={content}></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
