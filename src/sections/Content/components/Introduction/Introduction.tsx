import React from 'react'
import { ContentWrapper, Grid, Content, NameWrapper, Hello, Footer, Surname, NameContainer } from './Introduction.styles'

function Introduction() {

  return (
    <Grid>
      <NameWrapper>
        <Hello>
          Hello, my name is
        </Hello>
        <NameContainer>
          <span>
            Adam
          </span>
          <Surname>
            Toppmayer
          </Surname>
        </NameContainer>
      </NameWrapper>
      <ContentWrapper>
        <Content>
          If your website needs some polish then I'm your guy! I'm a Front-end developer focused on making your designs - Pop! Do you want to stand out? Then all you need is my spark of creativity...
        </Content>
        <Footer>
          Frontend development is the field that sparks joy in me - thanks to that passion I’m not afraid to face any problem and learn from these challenges.
        </Footer>
      </ContentWrapper>
    </Grid>
  )
}

export default Introduction