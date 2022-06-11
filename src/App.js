import './App.css';

import { Tabel } from './components/Table/Table';

const data = {
  rows: [
    { id: 1, 
      nameColumn: 'Helllllllllllllllllllllllllllllllllllo', 
      partNumberColumn: 'World', 
      labelColumn: 'Hellllo', 
      startInvColumn: 'World', 
      invReceivedColumn: 'Hellllo', 
      invShippedColumn: 'World', 
      invOnHandColumn: 'Hellllo', 
      minRequiredColumn: 'World' },
    { id: 2, 
      nameColumn: 'Hellllo', 
      partNumberColumn: 'World', 
      labelColumn: 'Hellllo', 
      startInvColumn: 'World', 
      invReceivedColumn: 'Hellllo', 
      invShippedColumn: 'World', 
      invOnHandColumn: 'Hellllo', 
      minRequiredColumn: 'World' },
    { id: 3, 
      nameColumn: 'Hellllo', 
      partNumberColumn: 'World', 
      labelColumn: 'Hellllo', 
      startInvColumn: 'World', 
      invReceivedColumn: 'Hellllo', 
      invShippedColumn: 'World', 
      invOnHandColumn: 'Hellllo', 
      minRequiredColumn: 'World' }
  ]
}

const columns = [
  { field: 'nameColumn', headerName: 'Name', width: 200 },
  { field: 'partNumberColumn', headerName: 'PartNumber', width: 150 },
  { field: 'labelColumn', headerName: 'Label', width: 150 },
  { field: 'startInvColumn', headerName: 'Starting Inventory', width: 150 },
  { field: 'invReceivedColumn', headerName: 'Inventory Received', width: 150 },
  { field: 'invShippedColumn', headerName: 'Inventory Shipped', width: 150 },
  { field: 'invOnHandColumn', headerName: 'Inventory On hand', width: 150 },
  { field: 'minRequiredColumn', headerName: 'Minimum Required', width: 150 },
  { field: 'minRequiredColumn', headerName: 'Minimum Required', width: 150 },
  {field: 'toShipColumn', headerName: 'To Ship', width: 150, editable: true}
]

function App() {
  return (
    <Tabel data = {data} columns = {columns}>Products</Tabel>
  );
}

export default App;
