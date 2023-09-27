import React, { useEffect, useState } from 'react'
import { ContentWrapper, SubTitle, TEMPTitle, Wrapper } from './Header.styles'

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
          Test1
        </SubTitle>
        <TEMPTitle>
          Hi Im Adam
        </TEMPTitle>
        <SubTitle>
          Test1
        </SubTitle>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Header