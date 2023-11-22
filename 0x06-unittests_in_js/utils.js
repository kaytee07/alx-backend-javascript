const calculateNumber = (type, a, b) => {
    let roundedA = Math.round(a);
    let roundedB = Math.round(b);

    if (type === "SUM") {
	return roundedA + roundedB;
    }

    if (type === "SUBTRACT") {
	return roundedA - roundedB;
    }

    if (type === "DIVIDE") {
	if (!roundedA || !roundedB) {
	    return "Error"
	}
	return roundedA / roundedB;
    }
}

module.exports = { calculateNumber };
