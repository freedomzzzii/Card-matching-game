import { Provider, useSelector } from 'react-redux';

import '../styles/globals.css';

import store from '../redux';
import Loading from '../components/loading/loading';

function GlobalLoading() {
  const { loading } = useSelector(state => state);

  return (loading.count > 0 ? <Loading /> : null);
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store()}>
      <GlobalLoading />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
