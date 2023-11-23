const request = require('request');
const { expect } = require('chai');

describe("integration test", () => {
    let server;

    before(() => {
	server = require('./api');
    });

    after(() => {
	server.close;
    });

    it("test user login", (done) => {
	user = {userName: 'Winful'}
	request.post({
	    url: 'http://localhost:7865/login',
	    body: user,
	    json: true
	}, (error, response, body) => {
	    expect(body).to.deep.equal(`Welcome ${user.userName}`)
	    done();
	});
    })

    it("check payment response", (done) => {
	request.get("http://localhost:7865/available_payments", (error, response, body) => {
	    expect(JSON.parse(body)).to.deep.equal({
		payment_methods: {
		    credit_cards: true,
		    paypal: false
		}
	    });
	    done();
	})
    })
    
})
