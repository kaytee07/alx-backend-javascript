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
        });
    });

/**    it("response with correct message", (done) => {
        request.get("http://localhost:7865", (error, response, body) => {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });**/

});
