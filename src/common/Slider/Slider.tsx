// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useRef, useState, useEffect } from 'react'
import { SliderInner, SliderItem, SliderWrapper } from './Slider.styles'

interface SliderItemGroupProps {
  n: number;
}

interface Props {
  imageSize: number;
}

const Slider = (props: Props) => {
  const sliderItemRef = useRef<HTMLElement>();
  const [sliderItemCount, setSliderItemCount] = useState(0);

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    const itemWidth = sliderItemRef.current?.offsetWidth;
    if (itemWidth) {
      setSliderItemCount(Math.ceil(windowWidth / itemWidth));
    } else {
      setSliderItemCount(0);
    }
  };

  useEffect(() => {
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
      <SliderWrapper imageSize={props.imageSize}>
        <SliderInner>
          <SliderItem ref={sliderItemRef}>What can I offer?</SliderItem>
          <SliderItemGroup n={sliderItemCount - 1}/>
          <SliderItemGroup n={sliderItemCount}/>
        </SliderInner>
      </SliderWrapper>
  )
}

export default Slider;