import { useRef, useState } from 'react'
import { SliderInner, SliderItem, SliderWrapper } from './Slider.styles'

interface SliderItemGroupProps {
  n: number;
  text: string;
}

interface Props {
  text: string;
  reverse?: boolean;
  duration?: number;
}

const Slider = (props: Props) => {
  const sliderItemRef = useRef<HTMLElement>();
  const [sliderItemCount, setSliderItemCount] = useState(0);

  const handleResize = () => {
    console.log('Resize!')

    const windowWidth = window.innerWidth;
    const itemWidth = sliderItemRef.current?.offsetWidth;
    if (itemWidth) {
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
      {[...Array(props.n >= 0 ? props.n : 0)].map((_, i) => (
        <SliderItem>{props.text}</SliderItem>
      ))}
    </>
  );

  return (
      <SliderWrapper>
        <SliderInner reverse={props.reverse} duration={props.duration}>
          <SliderItem ref={sliderItemRef}>{props.text}</SliderItem>
          <SliderItemGroup n={sliderItemCount - 1} text={props.text}/>
          <SliderItemGroup n={sliderItemCount} text={props.text}/>
        </SliderInner>
      </SliderWrapper>
  )
}

export default Slider;