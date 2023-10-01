import React from 'react'
import { Description, GridRow, MarqueeItem, PhotoCard, Row, SliderWrapper, TextBox, Title } from './Slider.styles'

function Slider() {

  return (
    <>
      {/* <Row>
        <SliderWrapper />
        <GridRow>
          <PhotoCard />
          <PhotoCard />
        </GridRow>
      </Row> */}
      <Row>
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
        <GridRow>
          <TextBox>
            <PhotoCard />
            <Title>
              Style
            </Title>
            <Description>
              I bring deep understanding of the React framework where combined with my knowledge of HTML, CSS and impeccable taste no design is out of reach.
            </Description>
          </TextBox>
          <TextBox>
            <PhotoCard />
            <Title>
              Code
            </Title>
            <Description>
              Throughout the years I gained experience not only in the Frontend side of web development but I had to learn technologies like Java, Node.js, Docker.
            </Description>
          </TextBox>
          <TextBox>
            <PhotoCard />
            <Title>
              Communication
            </Title>
            <Description>
              Apart from my technical responsibilities I consider clarity in communication as important as code itself.
            </Description>
          </TextBox>
        </GridRow>
      </Row>
    </>
  )
}

export default Slider;