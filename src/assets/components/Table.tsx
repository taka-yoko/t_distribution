import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Cell from './Cell';
import '../styles/Table.css';

const Table: React.FC = () => {
  const [data, setData] = useState<string[][]>([]);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [selectedCol, setSelectedCol] = useState<number | null>(null);

  useEffect(() => {
    Papa.parse('data/t_distribution.csv', {
      download: true,
      delimiter: ',',
      complete: (result) => {
        console.log(result);
        setData(result.data as string[][]);
      },
      error: (error) => {
        console.error("CSV parsing error:", error.message);
      }
    });
  }, []);

  const handleRowSelect = (rowIndex: number) => {
    setSelectedRow(rowIndex);
  }

  const handleColSelect = (colIndex: number) => {
    setSelectedCol(colIndex);
  }


  return (
    <div className='h-screen overflow-x-auto'>
      <table className='mt-5 border-collapse border border-gray-300'>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={selectedRow === rowIndex ? 'selected-row' : ''}
            >
              {row.map((cell, colIndex) => (
                <Cell
                  key={`${rowIndex}-${colIndex}`}
                  value={cell}
                  row={rowIndex}
                  col={colIndex}
                  selectedRow={selectedRow}
                  selectedCol={selectedCol}
                  onRowSelect={handleRowSelect}
                  onColSelect={handleColSelect}
                  />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table