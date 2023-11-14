import { Wrapper, ContentWrapper, TextSection, Text, Subtitle, Title, Content, SubContent, Photo, Header, HeaderSlider, HeaderTitle } from './Experience.styles'
import Table from '../../../../common/Table/Table';
import Slider from './Slider/Slider';

function Experience() {

  return (
    <Wrapper>
      <Header>
        <Slider duration={50} text='Experience'/>
        <Slider duration={30} text='Experience'/>
        <Slider duration={60} text='Experience'/>
        <Slider duration={40} text='Experience'/>
        <Slider duration={50} text='Experience'/>
        <HeaderTitle>Experience</HeaderTitle>
      </Header>
      <ContentWrapper>
        <TextSection>
          <Text>
            <Subtitle>My story as a</Subtitle>
            <Title>Front-end dev</Title>
            <Content>
              Currently I’m  working as a Front-end Developer where I breathe new life into our old pages to bring them  up to the newest standards. I was  also responsible for working on topics that required delving deeper into the back-end.
            </Content>
            <SubContent>
              My current company is focused on developing and maintaining an  internal website that consists of many applications that provide useful  functionalities when working with SAP systems.
            </SubContent>
          </Text>
          <Photo />
        </TextSection>
        <Table data={[
            { columns: ['2018', 'Started university', 'Adam Mickiewicz University'] },
            { columns: ['2021', 'Started internship at SNP Poland sp. z.o.o.', 'SNP Poland sp. z.o.o.'] },
            { columns: ['2022', 'Finished my Engineering degree', 'Adam Mickiewicz University'] },
            { columns: ['2022', 'Fully employed by All for One sp. z.o.o.', 'All for One Poland sp. z.o.o.'] },
            { columns: ['????', '(Your place here)', 'An awesome company'] },
          ]}
          darkTheme
        />
      </ContentWrapper>
      <Slider duration={30} text='Work with me'/>
    </Wrapper>
  )
}

export default Experience;