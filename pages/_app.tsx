import "../styles/globals.css";
import type { AppProps } from "next/app";
import createEmotionCache from "../utility/createEmotionCache";
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ThemeDark } from "../styles/themes/theme.dark";
import { ThemeLight } from "../styles/themes/theme.light";
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import "../styles/globals.css";
import '../i18n/i18n';
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={ThemeDark}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

const AppWrapper = (props:MyAppProps) => (
  <Provider store={store}>
    <App {...props}/>
  </Provider>
)
export default AppWrapper;
