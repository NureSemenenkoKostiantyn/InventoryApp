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

const removeProduct = async (id) => {
    try {
        const response = await axios.delete(`/api/products:${id}`)
        return
    } catch (error) {
        console.error(error)
    }
    
}

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



export {
    getProducts,
    removeProduct,
    postProduct,
    removeProducts
}