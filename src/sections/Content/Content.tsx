import { ContentLimit, Wrapper } from './Content.styles'
import Experience from './components/Experience/Experience'
import Introduction from './components/Introduction/Introduction'
import Slider from './components/Slider/Slider'
import Technologies from './components/Technologies/Technologies'

function Content() {
  return (
    <Wrapper>
      <ContentLimit>
        <Introduction />
      </ContentLimit>
      <Slider />
      <Technologies />
      <Experience />
    </Wrapper>
  )
}

export default Content