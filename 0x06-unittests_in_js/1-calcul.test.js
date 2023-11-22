const assert = require("assert");
const calculateNumber = require("./1-calcul.js")

describe("calculate", () => {
    it("add", () => {
	assert.equal(calculateNumber('SUM', 1.4, 4.5), 6)
    })

    it("subtract", () => {
	assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
    })

    it("divide", () => {
	assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
    })

    it("add", () => {
	assert.equal(calculateNumber('DIVIDE', 1.4, 0), "Error")
    })
    
})
