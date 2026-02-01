# Order Service
## Deployment Details
We need to understand the ip address of the machine to be able to use by other machines
```
sudo apt install net-tools
ifconfig
```

This is a NodeJS service that requires NodeJS and npm for the application to run
```
sudo apt install nodejs -y
sudo apt install npm
sudo apt install git
```
Now clone the repo on the machine using the following command
```
git clone https://github.com/krusha27/simple-node-orderservice
```

The service invokes Customer Service and Shipping Service, hence the application will require "axios" and since it hosts an endpoint,t it needs "express"
Now, go to the cloned folder and run the following installations
```
cd simple-node-orderservice
npm install express
npm install axios
node main.js
```
## Hosting Details
The service contains 1 endpoint, which is GET order/:orderId, and it is given out on port 3000 and has been hosted or deployed locally, so whichever machine invokes this endpoint can access by the URL `http://<ip of the machine where this service is hosted>:3000/order/:id`
