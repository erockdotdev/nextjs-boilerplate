import Head from "next/head";
import ContextCompose from "src/components/hocs/ContextCompose";
import { ModalProvider } from "src/components/modules/Modals/Base/modalContext";
import { ViewportProvider } from "src/contexts/ViewportContext";
import { APP_NAME, VIEW_PORT } from "src/constants/literals/meta-data";


export default function App({ Component, pageProps }) {
  const { name, content } = VIEW_PORT;
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name={name} content={content}></meta>
      </Head>
      <ContextCompose contexts={[ModalProvider, ViewportProvider]}>
        <Component {...pageProps} />
      </ContextCompose>
    </>
  );
}
