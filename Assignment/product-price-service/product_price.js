module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductPrice', productPrice);

    //To DO: add the pattern functions and describe the logic inside the function
    function productPrice(msg, respond){
        for(const key in mockData){
            if(mockData[key].product_id == msg.productId){
                var res = mockData[key].product_price;
                respond(null, { result: res });
                break;
            }
        }
    }
}




