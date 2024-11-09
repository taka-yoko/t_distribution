import React from 'react';
import '../styles/Cell.css';

interface CellProps {
  value: string;
  row: number;
  col: number;
  selectedRow: number | null;
  selectedCol: number | null;
  onRowSelect?: (rowIndex: number) => void;
  onColSelect?: (colIndex: number) => void;
}

const Cell: React.FC<CellProps> = ({ value, row, col, selectedRow, selectedCol, onRowSelect, onColSelect }) => {
  const handleClick = () => {
    if(row === 1 && onColSelect) {
      onColSelect(col - 1);
    } else if(col === 1 && onRowSelect) {
      onRowSelect(row - 1);
    }
  }

  const className = [
    'cell',
    `r${row}`,
    `c${col}`,
    selectedRow === row - 1 ? 'selected-row' : '',
    selectedCol === col - 1 && col !== 1 ? 'selected-col' : '',
    selectedRow === row - 1 && selectedCol === col - 1 && col !== 1 ? 'highlighted-intersection' : '',
  ].join(' ');

  return (
    <td className={className} onClick={handleClick}>
      {value}
    </td>
  );
}

export default Cell;