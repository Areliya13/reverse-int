module.exports = function reverse (n) {
    if (n < 0) {
        n = -n;
    }

    let result = 0;
    while (n > 0) {
        result = result * 10 + n % 10;
        n = (n - n % 10) / 10;
    }
    return result;
}
