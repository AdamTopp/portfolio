import { ContentLimit, Wrapper } from './Content.styles'
import Introduction from './components/Introduction/Introduction'

function Content() {
  return (
    <Wrapper>
      <ContentLimit>
        <Introduction />
      </ContentLimit>
    </Wrapper>
  )
}

export default Content