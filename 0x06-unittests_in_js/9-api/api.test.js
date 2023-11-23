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
    
})
