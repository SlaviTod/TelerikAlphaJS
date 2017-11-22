function solve(args) {
    let N = parseInt(args[0]);

    let result = "";

    for (let i = 1; i <= N; i++) {
        if (isPrime(i)) {
            result += "1";
            console.log(result);
        } else {
            result += "0";
        }
    }

    function isPrime(number) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
}

solve(["10"]);
solve(["27"]);