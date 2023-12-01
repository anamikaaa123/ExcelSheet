import { useDispatch } from 'react-redux';
import Table from './components/Table';
import { setValue } from './redux/tableSlice';
// import TableRow from './components/TableRow';

const generateRandomData = (rows, cols) => {
  const data = [];
  for (let i = 0; i < rows; i++) {
    const rowData = [];
    for (let j = 0; j < cols; j++) {
      rowData.push(Math.floor(Math.random() * 100));
    }
    data.push(rowData);
  }
  return data;
}
function App() {
  const dispatch = useDispatch()
  const rows = 100;
  const cols = 50;
  const tableData = generateRandomData(rows, cols);
  dispatch(setValue(tableData))
  // const matrix = useSelector((state) => state.table.matrix)
  // const length = matrix.length
  console.log('app rendered')

  return (
    <div className="App">
      <Table />
    </div>
  )
}
export default App;
