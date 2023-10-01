import { ContentLimit, Wrapper } from './Content.styles'
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
    </Wrapper>
  )
}

export default Content