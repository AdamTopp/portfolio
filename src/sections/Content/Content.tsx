import { Wrapper } from './Content.styles'
import Introduction from './components/Introduction/Introduction'
// import Experience from './components/Experience/Experience'
import Slider from './components/Slider/Slider'
// import Technologies from './components/Technologies/Technologies'

function Content() {
  return (
    <Wrapper>
      <Introduction />
      <Slider />
      {/* <Technologies />
      <Experience /> */}
    </Wrapper>
  )
}

export default Content