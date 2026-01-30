const express = require('express');
const axios = require('axios');

const shippingServiceUrl = 'http://192.168.31.xx:4000/shipping/cost';
const customerServiceUrl = 'http://192.168.31.xx:5000/customer/info';

const app = express();
const port = 3000;

app.get('/order/:id', async (req, res) => {
    const orderId = req.params.id;

    try {
    const basicPrice = 20;
    const shippingCostResponse = await axios.get(`${shippingServiceUrl}/${orderId}`);
    const customerInfoResponse = await axios.get(`${customerServiceUrl}/${orderId}`);
    
    res.json({
       orderId: orderId,
       product: "Sample Product",
       quantity: 1,
       price: basicPrice + shippingCostResponse.data,
       shippingAddress: "123 Blue Street, Manhattan, NY",
       customerInfo: customerInfoResponse.data  
    });
} catch (error) {
    console.error('Error processing order:', error);
    res.status(500).json({ error: 'Internal Server Error' });   
}
});

app.listen(port, () => {
    console.log(`OrderService running at ${port}`);
});