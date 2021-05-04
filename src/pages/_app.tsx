import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>Dashboard-Admin</title>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
