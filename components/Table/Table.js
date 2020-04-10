import styled, { withTheme } from 'styled-components'
import Cell from './Cell'
import { FadeIn } from '../S'

const ScrollTable = styled.div`
  overflow-x: auto;
`

const DataTable = styled.div`
  max-width: 100%;
`

const Table = styled.table`
  position: relative;
  clear: both;
  border-collapse: separate;
  margin: 0 auto;
  border-spacing: 0px;
  background: #fff;
  box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);
  width: auto;
`

const colors = {
  0: 'onPrimary',
  1: 'successDefault',
  2: 'error2',
  3: 'active2',
  4: 'purpleComp',
  5: 'error',
  6: 'menuHover',
  7: 'menuColor'
}

export default ({ headings, theme, isHeb, rows }) => {

  const renderHeadingRow = (_cell, cellIndex) => (
    <Cell
      key={`heading-${cellIndex}`}
      content={ headings[cellIndex] }
      header={true}
    />
  )

  const renderRow = (_row, rowIndex) => {

      return (
        <tr key={`row-${rowIndex}`}>
          {rows[rowIndex].map((_cell, cellIndex) => {
            return (
              <Cell
                key={`${rowIndex}-${cellIndex}`}
                cellColor={colors[cellIndex] || 'onPrimary'}
                content={
                  cellIndex === 0 
                    ? (
                        <>
                          <img width='24' height='24' src={rows[rowIndex][cellIndex]['flag']} />
                          <span>{rows[rowIndex][cellIndex]['country']}</span>
                        </>
                      )
                    : rows[rowIndex][cellIndex]
                }
                // content={rows[rowIndex][cellIndex]}
              />
            )
          })}
        </tr>
      )
    };


    const theadMarkup = (
      <tr
        role='row'
        key="heading">
        {headings.map(renderHeadingRow)}
      </tr>
    );

    const tbodyMarkup = rows.map(renderRow);

    return (
      <DataTable>
      <FadeIn duration="0.5s" delay="0.1s">
        <ScrollTable>
          <Table>
            <thead>{theadMarkup}</thead>
            <tbody>{tbodyMarkup}</tbody>
          </Table>
        </ScrollTable>
      </FadeIn>
      </DataTable>
    );


}
