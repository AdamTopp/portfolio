import React from 'react'
import { Arrows, Content, Description, DescriptionSection, DescriptionWrapper, Pill, SubTitle, Title, Wrapper } from './footer.styles'
import Arrow from './Arrow'

function Footer() {
  return (
    <Wrapper>
      <Content>
        <Title>
          Talk with me here
          <Arrows>
            <Arrow />
            <Arrow />
            <Arrow />
          </Arrows>
        </Title>
        <SubTitle>Don't be shy</SubTitle>
      </Content>
      <DescriptionSection>
        <DescriptionWrapper>
          <Description>Did I catch your interest? Or maybe you just want to get to know me better? Either way you can find something here!</Description>
        </DescriptionWrapper>
        <Pill>+48 794 690 194</Pill>
        <Pill>adamtoppmayer@gmail.com</Pill>
      </DescriptionSection>
    </Wrapper>
  )
}

export default Footer