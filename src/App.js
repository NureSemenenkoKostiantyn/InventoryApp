import { useState, useEffect } from 'react';
import axios from 'axios';
import { getProducts } from './requests';
import { Tabel } from './components/Table/Table';

 

const columns = [
  { field: 'id', headerName: 'ID', width: 20 },
  { field: 'ProductName', headerName: 'Name', width: 200 },
  { field: 'PartNumber', headerName: 'PartNumber', width: 150 },
  { field: 'ProductLabel', headerName: 'Label', width: 150 },
  { field: 'StartingInventory', headerName: 'Starting Inventory', width: 150 },
  { field: 'InventoryReceived', headerName: 'Inventory Received', width: 150 },
  { field: 'InventoryShipped', headerName: 'Inventory Shipped', width: 150 },
  { field: 'InventoryOnHand', headerName: 'Inventory On hand', width: 150 },
  { field: 'MinimumRequired', headerName: 'Minimum Required', width: 150 },
  {field: 'toShipColumn', headerName: 'To Ship', width: 150, editable: true}
]

function App() {

  const [data, setData] = useState({rows:[]});
  useEffect(() => 
    {
      getProducts()
      .then(res => setData({rows: res.data}))
      .catch(err => console.log(err));
    }, []
  )



  return (
    <>
      <Tabel data = {data} columns = {columns}>Products</Tabel>
    </>

  );
}

export default App;
