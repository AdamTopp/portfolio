import { OutlineWrapper, OutlineTitle, SubTitle, Title, Wrapper } from './Header.styles'

const Header = () => {
  return (
    <Wrapper>
      <OutlineWrapper>
        <OutlineTitle>
          Hi I'm Adam
        </OutlineTitle>
        <SubTitle top>
          Do you need a website?
        </SubTitle>
      </OutlineWrapper>
      <Title>Hi I'm Adam</Title>
      <OutlineWrapper>
        <OutlineTitle>
          Hi I'm Adam
        </OutlineTitle>
        <SubTitle>
          Let me help!
        </SubTitle>
      </OutlineWrapper>
    </Wrapper>
  )
}

export default Header