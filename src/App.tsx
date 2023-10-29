import Header from './sections/Header/Header'
import Footer from './sections/Footer/footer'
import Content from './sections/Content/Content'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

function App() {
  const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
      margin: 0;
      padding: 0;
      font: inherit;
      box-sizing: border-box;
      font-family: 'Playfair Display' 'Alike';
    }
  `;

  const theme = {
    fonts: {
      family: {
        Playfair: 'Playfair Display',
        Anton: 'Anton',
        PathwayGothic: 'Pathway Gothic One',
        Alike: 'Alike',
      },
    },
    colors: {
      red: '#4d171a',
      // red: '#CF1723',
      white: {
        100: '#fff',
        80: '#dadada',
        60: '#9a9a9a',
        40: '#8b8b8b',
        20: '#434343',
        0: '#120F14',
      }
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
  )
}

export default App
