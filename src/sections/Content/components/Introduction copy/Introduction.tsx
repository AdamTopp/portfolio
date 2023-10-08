import React from 'react'
import { Content, Description, Grid, Name, Title, Wrapper } from './Introduction.styles'

function Introduction() {

  return (
    <Wrapper>
      <Grid>
        <div>
          <Title>
            Hello, my name is
          </Title>
          <Name>
            Adam Toppmayer
          </Name>
        </div>
        <div />
        <div/>
        <div>
          <Content>
            If your website needs some polish then I'm your guy! I'm a Front-end engineer focused on making your designs.
            Do you want to stand out? Then all you need is a spark of creativity...
          </Content>
          <Description>
            Frontend development is the field that sparks joy in me - thanks to that passion I’m not afraid to face any problem and learn from these challenges.
          </Description>
        </div>
      </Grid>
    </Wrapper>
  )
}

export default Introduction