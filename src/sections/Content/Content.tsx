import { ContentLimit, Wrapper } from './Content.styles'
import Experience from './components/Experience/Experience'
import Introduction from './components/Introduction/Introduction'
import PageEnd from './components/PageEnd/PageEnd'
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
      <ContentLimit>
        <Experience />
      </ContentLimit>
      <PageEnd />
    </Wrapper>
  )
}

export default Content