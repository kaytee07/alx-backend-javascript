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

     it("correct status code", (done) => {
        request.get("http://localhost:7865", (error, response) => {
            expect(response.statusCode).to.equal(200);
            done();
        })
    })

    it("response with correct message", (done) => {
        request.get("http://localhost:7865", (error, response, body) => {
            expect(body).to.equal('Welcome to the payment system');
            done();
        })
    })

    it("correct status code when id is a number", (done) => {
        request.get("http://localhost:7865/cart/9", (error, response) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    })

    it("correct status code when id is not a number", (done) => {
        request.get("http://localhost:7865/card/hello", (error, response, body) => {
            expect(response.statusCode).to.equal(404);
            done();
        })
    })

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
