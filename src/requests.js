import axios from 'axios';


const getProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      console.log(response)
      return response.data;
    } catch (error) {
      console.error(error);
    }
};


const removeProducts = async (id) => {
    try {
        const response = await axios.delete(`/api/products`, {data: {id: id}})
        console.log(response)
    } catch (error) {
        console.error(error)
    }
    
}

const postProduct = async (product) => {
    try {
        await axios.post('/api/products', {
            ProductName: product.ProductName, 
            PartNumber: product.PartNumber, 
            ProductLabel: product.ProductLabel, 
            StartingInventory: product.StartingInventory, 
            InventoryReceived: product.InventoryReceived, 
            InventoryShipped: product.InventoryShipped, 
            InventoryOnHand: product.InventoryOnHand, 
            MinimumRequired: product.MinimumRequired
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    } catch (error) {
        console.error(error)
    }
}

const updateProducts = async (products) => {
    try {
        await axios.put('/api/products', {products: products})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    } catch(error){
        console.error(error)
    }
}

const receiveProducts = async (products) => {
    try {
        await axios.put('/api/shipping/in', {data: products})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    } catch(error){
        console.error(error)
    }
}

const shipProducts = async (products) => {
    try {
        await axios.put('/api/shipping/out', {data: products})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    } catch(error){
        console.error(error)
    }
}



export {
    getProducts,
    postProduct,
    removeProducts,
    updateProducts,
    receiveProducts, 
    shipProducts
}