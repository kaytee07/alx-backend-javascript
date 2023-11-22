const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils")
const { expect } = require("chai");
const sinon = require("sinon");

describe('test payment api', () => {
  it('spy function', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(calculateNumberSpy.callCount).to.equal(1);

    calculateNumberSpy.restore();
  });
});
