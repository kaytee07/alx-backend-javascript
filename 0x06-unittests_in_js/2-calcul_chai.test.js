const { expect } = require("chai");
const calculateNumber = require("./1-calcul.js")


describe("calculate", () => {
    it("add", () => {
	expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6)
    })

    it("subtract", () => {
	expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4)
    })

    it("divide", () => {
	expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2)
    })

    it("add", () => {
	expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal("Error")
    })
    
})
