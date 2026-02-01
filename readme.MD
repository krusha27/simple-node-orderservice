# Order Service
## Introduction
This service communicates with Shipping Service to fetch the shipping cost for a given order and also communicates with Customer Service to fetch customer information

## Deployment Details

The service invokes Customer Service and Shipping Service hence the application will require "axios" and since it hosts an endpoint it needs "express"
```
sudo apt install nodejs -y
sudo apt install npm
sudo apt install git
```
Now clone the repo on the machine using the following command
```
git clone https://github.com/krusha27/simple-node-orderservice
```

Now go to the cloned folder and run the following installations
```
cd simple-node-orderservice
npm install express
npm install axios
```
## Hosting Details
The service contains 1 endpoint which is GET order/:orderId and it is given out on port 3000 and has been hosted or deployed locally, so whichever machine invokes this endpoint can access by the URL `http://<ip of the machine where this service is hosted>:3000/order/:id`
