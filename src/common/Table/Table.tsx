import React from 'react'
import { Row, Column, Wrapper } from './Table.styles';

interface Row {
    columns: string[],
}

interface Props {
    data: Row[],
}

const Table = (props: Props) => {

  return (
    <Wrapper>
        {props.data.map((row) => (
            <Row>
                {row.columns.map((col) => (
                    <Column>
                        {col}
                    </Column>
                ))}
            </Row>
        ))}
    </Wrapper>
  )
}

export default Table;