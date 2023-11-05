import React from 'react'
import { Wrapper } from './Experience.styles'
import Table from '../../../../common/Table/Table';

function Experience() {

  return (
    <Wrapper>
      <Table data={[
          { columns: ['2018', 'Started university', 'Adam Mickiewicz University'] },
          { columns: ['2021', 'Started internship at SNP Poland sp. z.o.o.', 'SNP Poland sp. z.o.o.'] },
          { columns: ['2022', 'Finished my Engineering degree', 'Adam Mickiewicz University'] },
          { columns: ['2022', 'Fully employed by All for One sp. z.o.o.', 'All for One Poland sp. z.o.o.'] },
          { columns: ['????'] },
        ]}
      />
    </Wrapper>
  )
}

export default Experience;