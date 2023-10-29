import React from 'react'
import { Content, ContentWrapper, Description, Grid, NameWrapper, Pop, Subtitle, Title, Underline } from './Introduction.styles'

function Introduction() {

  return (
    <Grid>
      <NameWrapper>
        <Title>
          My name is
        </Title>
        <Subtitle>
          Adam Toppmayer
        </Subtitle>
      </NameWrapper>
      <Underline />
      <ContentWrapper>
        <Content>
          If your website needs some polish then I'm your guy! I'm a Front-end engineer focused on making your designs.
          <Pop>
            Pop!
          </Pop>
          Do you want to stand out? Then all you need is a spark of creativity...
        </Content>
        <Description>
          Frontend development is the field that sparks joy in me - thanks to that passion I’m not afraid to face any problem and learn from these challenges.
        </Description>
      </ContentWrapper>
    </Grid>
  )
}

export default Introduction