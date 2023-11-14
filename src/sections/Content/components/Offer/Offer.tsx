import { useRef, useState } from 'react'
import { Descritpion, Text, ImageSection, Image, ImageGrid, ImageWrapper, Title, Wrapper } from './Offer.styles'
import Slider from '../../../../common/Slider/Slider';

const Offer = () => {
  const imageWrapperRef = useRef<HTMLElement>();
  const [imageSize, setImageSize] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(0);

  const handleResize = () => {
    const itemHeight = imageWrapperRef.current?.offsetHeight;
    if (itemHeight) {
      setImageSize(itemHeight);
    } else {
      setImageSize(0);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Wrapper>
      <Slider imageSize={imageSize}/>
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

export default Offer;