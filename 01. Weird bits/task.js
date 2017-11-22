function solve(args){
    let data = args[0].split(' ').map(Number);

    let result = 0;
    let year = args[0];
    let month = args[1];
    let day = args[2];
    let months = ["Jan", "Feb", "Mar", "Apr", "May",
    "Jul", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    if(day !=1){
        result = day+"-"+months[month-1] + "-"+ year
    } 

    console.log(result);
}

solve([
    "2017", "10", "11"
]);
solve([
    "2005", "4", "24"
]);
solve([
    "1999", "12", "31"
]);
