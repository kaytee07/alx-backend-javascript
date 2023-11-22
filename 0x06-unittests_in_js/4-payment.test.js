const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils")
const { expect } = require("chai");
const sinon = require("sinon");

describe('test payment api', () => {
  it('stub function', () => {
      const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(120);

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(calculateNumberStub.callCount).to.equal(1);

    calculateNumberStub.restore();
  });
});
