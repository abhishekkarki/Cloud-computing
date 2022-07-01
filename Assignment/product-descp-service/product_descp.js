const mockData = require("./MOCK_DATA.json");
module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);


    //To DO: add the pattern functions and describe the logic inside the function
    function productURL(msg, respond){
        for(const key1 in mockData){
            if(mockData[key1].product_id === parseInt(msg.productId)){
                var res1 = mockData[key1].product_url;
                respond(null, { result: res1 });
                break;

            }
        }
    }

    function productName(msg, respond){
        for(const key2 in mockData){
            if(mockData[key2].product_id === parseInt(msg.productId)){
                var res2 = mockData[key2].product_name;
                respond(null, { result: res2 });
                break;
            }
        }
    }
}