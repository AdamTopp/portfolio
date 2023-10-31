import React, { useRef, useState } from 'react'
import { SliderInner, SliderItem, SliderWrapper, Wrapper } from './Slider.styles'

interface SliderItemGroupProps {
  n: number;
}

const Slider = () => {
  const sliderItemRef = useRef<HTMLElement>();
  const [sliderItemCount, setSliderItemCount] = useState(0);

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    const itemWidth = sliderItemRef.current?.offsetWidth;
    if (itemWidth) {
      console.log(Math.ceil(windowWidth / itemWidth))
      setSliderItemCount(Math.ceil(windowWidth / itemWidth));
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
      <SliderWrapper>
        <SliderInner>
          <SliderItem ref={sliderItemRef}>What can I offer?</SliderItem>
          <SliderItemGroup n={sliderItemCount - 1}/>
          <SliderItemGroup n={sliderItemCount}/>
        </SliderInner>
      </SliderWrapper>
    </Wrapper>
  )
}

export default Slider;