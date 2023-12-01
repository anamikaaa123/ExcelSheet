 import React  from 'react'
import { updateValue } from '../redux/tableSlice';
import { useDispatch, useSelector } from 'react-redux'

const TableColumn = React.memo(({rowIndex, colIndex }) => {
    const value = useSelector((state) => state.table.matrix[rowIndex][colIndex])
    // console.log(rowIndex, colIndex,"hai")
    // console.log(value,rowIndex,columnIndex,'props')
    console.log("Column rendered");
    const dispatch = useDispatch() 
    // const inputRef = useRef(null)


    // FUNCTION TO HANDLE ONCHANGE //

    const handleChange = (e) => {
        const newValue = Number(e.target.value);
        // console.log(newValue,"hoi");
        // const haha = inputRef.current.value;
        // console.log(haha, "hai");
        const tableValues = {
            rowIndex, 
            colIndex,
            newValue,
        }
        dispatch(updateValue(tableValues));
        // inputRef.current = handleChange;
    };

    return (
        <td key={ colIndex }>
            <input
                type="number"
                defaultValue = { value }
                onChange={(e) => handleChange(e)}
                // ref = { inputRef }
                className="hai" /> 
        </td>
    )
})
export default TableColumn