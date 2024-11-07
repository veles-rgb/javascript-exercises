// fibonacci sequence
// 1  2  3  4  5  6  7   8   9   10  11  12   13   14   15
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610

const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    } else if (typeof n === "string") {
        n = +n;
        if (n <= 1) {
            return n
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        };
    } else {
        if (n <= 1) {
            return n
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        };
    };
};

// Do not edit below this line
module.exports = fibonacci;
