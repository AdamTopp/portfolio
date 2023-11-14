import { Wrapper } from './Content.styles'
import Introduction from './components/Introduction/Introduction'
import Experience from './components/Experience/Experience'
import Offer from './components/Offer/Offer'
import Technologies from './components/Technologies/Technologies'

function Content() {
  return (
    <Wrapper>
      <Introduction />
      <Offer />
      <Technologies />
      <Experience />
    </Wrapper>
  )
}

export default Content