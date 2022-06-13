import { useState, useEffect } from 'react';
import axios from 'axios';
import { getProducts } from './requests';
import { Table } from './components/Export';

 

const columns = [
  { field: 'id', headerName: 'ID', width: 20},
  { field: 'ProductName', headerName: 'Name', width: 250, editable: false },
  { field: 'PartNumber', headerName: 'PartNumber', width: 250, editable: false },
  { field: 'ProductLabel', headerName: 'Label', width: 150, editable: false },
  { field: 'StartingInventory', headerName: 'Starting Inventory', width: 120, editable: false },
  { field: 'InventoryReceived', headerName: 'Inventory Received', width: 120, editable: false },
  { field: 'InventoryShipped', headerName: 'Inventory Shipped', width: 120, editable: false },
  { field: 'InventoryOnHand', headerName: 'Inventory On hand', width: 120, editable: false },
  { field: 'MinimumRequired', headerName: 'Minimum Required', width: 120, editable: false },
  {field: 'toShipColumn', headerName: 'To Ship', width: 120, editable: true}
]

function App() {

  const [data, setData] = useState({rows:[]});
  const [refresh, setRefresh] = useState(false);
  const Refresh = () => {setRefresh(!refresh)}
  useEffect(() => 
    {
      getProducts()
      .then(res => setData({rows: res.data}))
      .catch(err => console.log(err));
    }, [refresh]
  )



  return (
    <>
      <Table data = {data} columns = {columns} Refresh = {Refresh}>Products</Table>
    </>

  );
}

export default App;
