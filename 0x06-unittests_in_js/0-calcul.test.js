const assert = require('assert')

describe("rounding numbers", () => {
    it("round number", function() {
	assert.equal(Math.round(3), 3)
    })

    it("round number", function() {
	assert.equal(Math.round(1.7), 2)
    })

    it("round number", function() {
	assert.equal(Math.round(1.2), 1)
    })

    it("round number", function() {
	assert.equal(Math.round(3.7), 4)
    })

    it("round number", function() {
	assert.equal(Math.round(4.1), 4)
    })

})
