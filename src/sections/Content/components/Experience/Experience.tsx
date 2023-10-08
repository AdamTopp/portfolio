import React from 'react'
import { Grid, Column, Wrapper, Row, Year, LeftGroup, Position, Company, Content, Description, Title, Subtitle } from './Experience.styles'

function Experience() {

  return (
    <>
      <Grid>
        <Column>
          <Content>
            Currently I’m  working as a Front-end Developer where I breathe new life into our old pages to bring them  up to the newest standards. I was  also responsible for working on topics that required delving deeper into the back-end.
          </Content>
          <Description>
            My current company is focused on developing and maintaining an  internal website that consists of many applications that provide useful  functionalities when working with SAP systems.
          </Description>
        </Column>
        <Column>
          <Title>
            MY STORY AS A
          </Title>
          <Subtitle>
            FRONT-END DEV
          </Subtitle>
        </Column>
      </Grid>
      <Wrapper>
        <Row>
          <LeftGroup>
            <Year>
              2023
            </Year>
            <Position>
              Start of Engineering university
            </Position>
          </LeftGroup>
          <Company>
            Adam Mickiewicz University in Poznan
          </Company>
        </Row>
        <Row>
          <LeftGroup>
            <Year>
              2023
            </Year>
            <Position>
              Start of Engineering university
            </Position>
          </LeftGroup>
          <Company>
            Adam Mickiewicz University in Poznan
          </Company>
        </Row>
        <Row>
          <LeftGroup>
            <Year>
              2023
            </Year>
            <Position>
              Start of Engineering university
            </Position>
          </LeftGroup>
          <Company>
            Adam Mickiewicz University in Poznan
          </Company>
        </Row>
        <Row>
          <LeftGroup>
            <Year>
              2023
            </Year>
            <Position>
              Start of Engineering university
            </Position>
          </LeftGroup>
          <Company>
            Adam Mickiewicz University in Poznan
          </Company>
        </Row>
        <Row>
          <LeftGroup>
            <Year>
              2023
            </Year>
            <Position>
              Start of Engineering university
            </Position>
          </LeftGroup>
          <Company>
            Adam Mickiewicz University in Poznan
          </Company>
        </Row>
      </Wrapper>
    </>
  )
}

export default Experience;