import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./../store/index";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
        <Toaster position="top-center" />
      </ThemeProvider>
    </Provider>
  );
}
