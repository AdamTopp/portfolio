import Header from './sections/Header/Header'
import Footer from './sections/Footer/footer'
import Content from './sections/Content/Content'
import { createGlobalStyle } from 'styled-components'

function App() {
  const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: #131111;
    font-family: Inter;
    /* font-family: Cardo; */
  }
  h1, h2, h3, h4 {
    margin: 0;
    font-weight: 400;
  }
`;

  return (
    <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      <GlobalStyles />
        <Header />
        <Content />
        <Footer />
    </div>
  )
}

export default App
