import { ContentLimit, Wrapper } from './Content.styles'
import Introduction from './components/Introduction/Introduction'
import Slider from './components/Slider/Slider'

function Content() {
  return (
    <Wrapper>
      <ContentLimit>
        <Introduction />
      </ContentLimit>
      <Slider />
    </Wrapper>
  )
}

export default Content