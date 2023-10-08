import React, { useEffect, useState } from 'react'
import { ContentWrapper, SubTitle, Title, Wrapper } from './Header.styles'

function Header() {
  const [speed, setSpeed] = useState('0px');

  const handleScroll = () => {
    const speed = `${window.scrollY * 0.4}px`;
    setSpeed(speed)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <Wrapper>
      <ContentWrapper paralaxSpeed={speed}>
        <SubTitle>
          Do you need a website?
        </SubTitle>
        <Title>
          Hi I'm Adam
        </Title>
        <SubTitle>
          Let me help!
        </SubTitle>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Header