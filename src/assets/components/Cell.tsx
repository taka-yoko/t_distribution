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
    if(row === 0 && onColSelect) {
      onColSelect(col);
    } else if(col === 0 && onRowSelect) {
      onRowSelect(row);
    }
  }

  const className = [
    'cell',
    `r${row}`,
    `c${col}`,
    col === 0 ? 'sticky left-0' : '',
    row === 0 ? 'sticky top-0' : '',
    col === 0 && row === 0 ? 'z-10' : '',
    selectedRow === row ? 'selected-row' : '',
    selectedCol === col && col !== 0 ? 'selected-col' : '',
    selectedRow === row && selectedCol === col && col !== 0 ? 'highlighted-intersection' : '',
  ].join(' ');

  return (
    <td className={className} onClick={handleClick}>
      {value}
    </td>
  );
}

export default Cell;