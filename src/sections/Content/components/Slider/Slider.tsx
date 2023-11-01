import React, { useRef, useState } from 'react'
import { Descritpion, Text, ImageSection, Image, ImageGrid, ImageWrapper, SliderInner, SliderItem, SliderWrapper, Title, Wrapper } from './Slider.styles'

interface SliderItemGroupProps {
  n: number;
}

const Slider = () => {
  const sliderItemRef = useRef<HTMLElement>();
  const imageWrapperRef = useRef<HTMLElement>();
  const [sliderItemCount, setSliderItemCount] = useState(0);
  const [imageSize, setImageSize] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(0);

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    const itemWidth = sliderItemRef.current?.offsetWidth;
    const itemHeight = imageWrapperRef.current?.offsetHeight;
    if (itemWidth && itemHeight) {
      setSliderItemCount(Math.ceil(windowWidth / itemWidth));
      setImageSize(itemHeight);
    } else {
      setSliderItemCount(0);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const SliderItemGroup = (props: SliderItemGroupProps) => (
    <>
      {[...Array(props.n >= 0 ? props.n : 0)].map(() => (
        <SliderItem>What can I offer?</SliderItem>
      ))}
    </>
  );

  return (
    <Wrapper>
      <SliderWrapper imageSize={imageSize}>
        <SliderInner>
          <SliderItem ref={sliderItemRef}>What can I offer?</SliderItem>
          <SliderItemGroup n={sliderItemCount - 1}/>
          <SliderItemGroup n={sliderItemCount}/>
        </SliderInner>
      </SliderWrapper>
      <ImageWrapper>
        <ImageGrid>
          <ImageSection ref={imageWrapperRef} onMouseEnter={() => setHoverIndex(0)}>
            <Image active={hoverIndex === 0} angle='-2deg'/>
          </ImageSection>
          <ImageSection onMouseEnter={() => setHoverIndex(1)}>
            <Image active={hoverIndex === 1} angle='3deg'/>
          </ImageSection>
          <ImageSection onMouseEnter={() => setHoverIndex(2)}>
            <Image active={hoverIndex === 2} angle='-1deg'/>
          </ImageSection>
          <Descritpion onMouseEnter={() => setHoverIndex(0)}>
            <Title active={hoverIndex === 0}>Style</Title>
            <Text active={hoverIndex === 0}>
              I bring deep understanding of the React framework where combined with my knowledge of HTML, CSS and impeccable taste no design is out of my reach.
            </Text>
          </Descritpion>
          <Descritpion onMouseEnter={() => setHoverIndex(1)}>
            <Title active={hoverIndex === 1}>Code</Title>
            <Text active={hoverIndex === 1}>
              Throughout the years I gained experience not only in the Frontend side of web development but I had to learn technologies like Java, Node.js, Docker.
            </Text>
          </Descritpion>
          <Descritpion onMouseEnter={() => setHoverIndex(2)}>
            <Title active={hoverIndex === 2}>Communication</Title>
            <Text active={hoverIndex === 2}>
              Apart from my technical responsibilities I consider clarity in communication as important as code itself.
            </Text>
          </Descritpion>
        </ImageGrid>
      </ImageWrapper>
    </Wrapper>
  )
}

export default Slider;