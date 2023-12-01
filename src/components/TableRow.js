import React from 'react'
import TableColumn from './TableColumn'
// import { useSelector } from 'react-redux'

const TableRow = React.memo(({rowIndex, colLength}) => {
    // const matrix = useSelector((state) => state.table.matrix)
    // console.log(matrix, 'matrix from useSelector')
    // console.log(rowIndex, colLength,"Row rendered");
    console.log("Row rendered")
    const Cols = [];
    for (let colIndex = 0; colIndex < colLength; colIndex++) {
        Cols.push(<TableColumn key = {colIndex} rowIndex={rowIndex} colIndex={colIndex} />)
    }
    return (
        <>
            <tr>
                { Cols }
            </tr>
            {/* {matrix.map((rowData, rowIndex) => (
                <tr key={rowIndex}>
                    {rowData.map((value, columnIndex) => {
                      return  <TableColumn columnIndex={columnIndex} rowIndex={rowIndex} value={value} key = {columnIndex} />
                    })}
                </tr>
            ))}  */}
        </>
    )
})

export default TableRow