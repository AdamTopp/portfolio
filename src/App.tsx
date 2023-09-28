import Header from './sections/Header/Header'
import Footer from './sections/Footer/footer'
import Content from './sections/Content/Content'
import { createGlobalStyle } from 'styled-components'
import { ParalaxWrapper } from './App.styles';

function App() {
  const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: #84bb79;
  }
  h1, h2, h3, h4 {
    margin: 0;
  }
`;

  return (
    <>
      <GlobalStyles />
        <Header />
        <Content />
        <Footer />
    </>
  )
}

export default App
