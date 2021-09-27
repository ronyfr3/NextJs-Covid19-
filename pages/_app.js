import Footer from "../component/Footer";
import Header from "../component/Header";
import StateProvider from "../redux/store";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* HEADER */}
      <Header />
      {/* COMPONENTS */}
      <StateProvider>
        <Component {...pageProps} />
      </StateProvider>
      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default MyApp;
