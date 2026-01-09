function readTimeCalculator(t) {
    const words = t.split(" ").length;
    return Math.round(words / (100 / 0.3));
}

export default readTimeCalculator;