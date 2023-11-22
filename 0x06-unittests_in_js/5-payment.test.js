const sendPaymentRequestToAPI = require("./5-payment");
const { expect } = require("chai");
const sinon = require("sinon");


describe("hooks", () => {
    let stubConsole;

    beforeEach(() => {
        stubConsole = sinon.stub(console, 'log');
    })

    afterEach(() => {
        stubConsole.restore()
    })

    it("sendPaymentRequestToAPI should log correct total for 100 and 20", () => {
        sendPaymentRequestToAPI(100, 20);

        expect(stubConsole.calledOnce).to.be.true;
        expect(stubConsole.calledWithExactly('The total is: 120')).to.be.true;
    })

    it("sendPaymentRequestToAPI should log correct total for 10 and 10", () => {
        sendPaymentRequestToAPI(10, 10);

        expect(stubConsole.calledOnce).to.be.true;
        expect(stubConsole.calledWithExactly('The total is: 20')).to.be.true;
    })
})
