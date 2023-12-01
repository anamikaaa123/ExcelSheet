import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    matrix: null,  
}
export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setValue: (state, action) => {  
            state.matrix = action.payload;
        },
        updateValue: (state, action) => {     
            const { rowIndex, colIndex, newValue } = action.payload;
            const updatedMatrix = [...state.matrix];
            updatedMatrix[rowIndex] = [...updatedMatrix[rowIndex]];
            updatedMatrix[rowIndex][colIndex] = newValue;
            state.matrix = updatedMatrix;
            // console.log(action,'payload from store')
            // state.matrix[action.payload.rowIndex][action.payload.columnIndex] = action.payload.newValue;
        },
    },
})

export const { setValue, updateValue } = tableSlice.actions;
export default tableSlice.reducer