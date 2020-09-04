import '../css/styles.css';

import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps): any => (
  <Component {...pageProps} />
);
export default App;
