import GlobalStyle from "@styles/global";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { StepProvider } from "@context/stepContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <StepProvider>
        <Component {...pageProps} />
      </StepProvider>
    </>
  );
}

export default MyApp;
