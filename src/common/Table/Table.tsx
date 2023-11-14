import React from 'react'
import { Row, Column, Wrapper } from './Table.styles';

interface Row {
    columns: string[],
}

interface Props {
    data: Row[],
    darkTheme?: boolean,
}

const Table = (props: Props) => {

  return (
    <Wrapper>
        <tbody>
        {props.data.map((row) => (
            <Row dark={props.darkTheme || false}>
                {row.columns.map((col) => (
                    <Column dark={props.darkTheme || false}>
                        {col}
                    </Column>
                ))}
            </Row>
        ))}
        </tbody>
    </Wrapper>
  )
}

export default Table;