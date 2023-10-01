import React from 'react'
import { Description, Grid, GridItem, MarqueeItem, PhotoWrapper, Row, SliderWrapper } from './Slider.styles'

function Slider() {

  return (
    <Row>
      <Grid>
        <SliderWrapper>
          <MarqueeItem>
            What can I offer? -
          </MarqueeItem>
          <MarqueeItem>
            What can I offer? -
          </MarqueeItem>
          <MarqueeItem>
            What can I offer? -
          </MarqueeItem>
          <MarqueeItem>
            What can I offer? -
          </MarqueeItem>
          <MarqueeItem>
            What can I offer? -
          </MarqueeItem>
          <MarqueeItem>
            What can I offer? -
          </MarqueeItem>
        </SliderWrapper>
        <PhotoWrapper>
        </PhotoWrapper>
        <PhotoWrapper>
        </PhotoWrapper>
        <PhotoWrapper>
        </PhotoWrapper>
      </Grid>
      <Grid>
        <GridItem>
          <Description>
            I bring deep understanding of the React framework where combined with my knowledge of HTML, CSS and impeccable taste no design is out of reach.
          </Description>
        </GridItem>
        <GridItem>
          <Description>
            Throughout the years I gained experience not only in the Frontend side of web development but I had to learn technologies like Java, Node.js, Docker.
          </Description>
        </GridItem>
        <GridItem>
          <Description>
            Apart from my technical responsibilities I consider clarity in communication as important as code itself.
          </Description>
        </GridItem>
      </Grid>
    </Row>
  )
}

export default Slider;