import { Provider } from "react-redux";
import ErrorBoundary from "../components/ErrorBoundary.js";
import { store } from "../redux/store.js";

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ErrorBoundary>
  );
}
