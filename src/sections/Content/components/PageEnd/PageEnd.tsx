import React, { useState } from 'react'
import { Logos, LogosSlider, Text } from './PageEnd.styles';

function PageEnd() {

  return (
    <Logos>
        <LogosSlider >
          {[...Array(5)].map((e, i) => (
              <Text>Work with me</Text>
          ))}
        </LogosSlider>
        <LogosSlider >
          {[...Array(5)].map((e, i) => (
              <Text>Work with me</Text>
          ))}
        </LogosSlider>
        <LogosSlider >
          {[...Array(5)].map((e, i) => (
              <Text>Work with me</Text>
          ))}
        </LogosSlider>
        <LogosSlider >
          {[...Array(5)].map((e, i) => (
              <Text>Work with me</Text>
          ))}
        </LogosSlider>
    </Logos>
  )
}

export default PageEnd;