import styled, { withTheme } from 'styled-components'


const Cell = styled.td`
  border: 2px solid ${props => props.theme.error2 + '33'};
  padding: 10px 18px ${({ country }) => country ? '10px 0' : '10px 18px'};
  font-size: ${props => props.country ? '12px' : '14px'};
  max-width: 200px;
  font-family: 'Rubik';
  font-weight: ${props => props.color === 'active2' && 'bold' || props.color === 'successDefault' && 'bold' || 500};
  background: ${props => props.theme.primaryDark };
  color: ${props => props.theme[props.color] || props.theme.onPrimary};
  font-weight: 500;
  span {
    padding-right: 4px;
    margin-right: 4px;
  }
  > * {
    padding: 2px;
  }
`

const CellHeader = styled.th`
  font-size: 14px;
  font-weight: bold;
  border-color: 1px solid ${props => props.theme.text.primary};
  box-shadow: ${props => props.theme.shadows[1]};
  padding: 8px;
  position: sticky;
  top: 0;
  background: ${props => props.theme.primaryLight};
  color: ${props => props.theme.onPrimary};
`



export default ({ content, header, cellColor, country }) => {

  const cellMarkup = header ? (
    <CellHeader>
      {content}
    </CellHeader>
  ) : (
    <Cell color={cellColor} country={country}>
      {content}
    </Cell>
  );

  return (cellMarkup);
}
