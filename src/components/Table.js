import React, { useRef } from 'react'
import TableRow from './TableRow'
import { useSelector } from 'react-redux';

const Table = React.memo(() => {
  const rowLength = useSelector((state) => state.table.matrix.length)
  const colLength = useSelector((state) => state.table.matrix[0].length)
  console.log("Table rendered");
  const Rows = []
  for(let rowIndex = 0; rowIndex < rowLength; rowIndex++){
      Rows.push(<TableRow key = {rowIndex} rowIndex = {rowIndex} colLength = {colLength} />)
  }
  const matrixRef = useRef(null)
  const handleClick = () => {
    const inputRows = matrixRef.current.querySelectorAll('tr');
    const matrix = [];
    inputRows.forEach((row) => {
      const inputCells = row.querySelectorAll('input');
      const rowValues = [];
      inputCells.forEach((inputElement) => {
        rowValues.push(inputElement.value);
      });
      matrix.push(rowValues);
    });
  
    console.log(matrix, 'updated matrix');
  };
  
  return (
    <>
      <button onClick = { handleClick } >Update</button>
      <table className = "table table-bordered" ref = {matrixRef}>
        <tbody>
          { Rows }
        </tbody>
      </table>
    </>
  )
})

export default Table