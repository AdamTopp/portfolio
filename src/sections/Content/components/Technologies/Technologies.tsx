import React from 'react'
import { Section, SectionDescription, SectionEnd, SectionTitle, SectionWrapper, Subtitle, Title, Wrapper } from './Technologies.styles';
import Table from '../../../../common/Table/Table';

const Technologies = () => {

  return (
    <>
      <Wrapper>
        <Title>
          Technologies
          <Subtitle>(I use everyday)</Subtitle>
        </Title>
        <SectionWrapper>
          <Section>
            <SectionTitle>
              Frontend
            </SectionTitle>
            <SectionDescription>
              Throughout my life I was never afraid to gain new experiences by experimenting with various technologies.
            </SectionDescription>
            <SectionDescription>
              Thanks to that I now have a multitude of tools in my web developer tool set:
            </SectionDescription>
          </Section>
          <Section>
            <Table data={[
              { columns: ['React'] },
              { columns: ['Typescript'] },
              { columns: ['Styled Components'] },
              { columns: ['React Testing Library'] },
              { columns: ['Material UI'] },
              ]}
            />
          </Section>
        </SectionWrapper>
        <SectionWrapper>
          <Section>
            <SectionTitle>
              Other
            </SectionTitle>
            <SectionDescription>
              Throughout my life I was never afraid to gain new experiences by experimenting with various technologies.
            </SectionDescription>
            <SectionDescription>
              Thanks to that I now have a multitude of tools in my web developer tool set:
            </SectionDescription>
          </Section>
          <Section>
            <Table data={[
              { columns: ['React'] },
              { columns: ['Typescript'] },
              { columns: ['Styled Components'] },
              { columns: ['React Testing Library'] },
              { columns: ['Material UI'] },
              ]}
            />
          </Section>
        </SectionWrapper>
      </Wrapper>
      <SectionEnd />
    </>
  )
}

export default Technologies;