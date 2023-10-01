import React, { useState } from 'react'
import { Description, Grid, GridItem, MarqueeItem, PhotoWrapper, Row, SliderWrapper } from './Slider.styles'

function Slider() {
  const [activeIndex, setactiveIndex] = useState(0)

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
        <PhotoWrapper cardActive={activeIndex === 0} onMouseOver={() => setactiveIndex(0)}>
        </PhotoWrapper>
        <PhotoWrapper cardActive={activeIndex === 1} onMouseOver={() => setactiveIndex(1)}>
        </PhotoWrapper>
        <PhotoWrapper cardActive={activeIndex === 2} onMouseOver={() => setactiveIndex(2)}>
        </PhotoWrapper>
      </Grid>
      <Grid>
        <GridItem cardActive={activeIndex === 0} onMouseOver={() => setactiveIndex(0)}>
          <Description>
            I bring deep understanding of the React framework where combined with my knowledge of HTML, CSS and impeccable taste no design is out of reach.
          </Description>
        </GridItem>
        <GridItem cardActive={activeIndex === 1} onMouseOver={() => setactiveIndex(1)}>
          <Description>
            Throughout the years I gained experience not only in the Frontend side of web development but I had to learn technologies like Java, Node.js, Docker.
          </Description>
        </GridItem>
        <GridItem cardActive={activeIndex === 2} onMouseOver={() => setactiveIndex(2)}>
          <Description>
            Apart from my technical responsibilities I consider clarity in communication as important as code itself.
          </Description>
        </GridItem>
      </Grid>
    </Row>
  )
}

export default Slider;