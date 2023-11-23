const getPaymentTokenFromAPI = require('./6-payment_token')
const { expected } = require('chai')


describe("resolve with correct data", () => {
    it('resolve with correct data', () => {
	getPaymentTokenFromAPI(true).then((result) => {
	    expect(result).to.equal({data: 'Successful response from the API'});
	    done();
	})
    })
    
});
