function solve(args){
    let data = args[0].split(' ').map(Number);

    let result = 0;
    let year = args[0];
    let month = args[1];
    let day = args[2];
    let months = ["Jan", "Feb", "Mar", "Apr", "May",
    "Jul", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    if(day !=1){
        let newDay = day-1;
        result = newDay +"-"+months[month-1] + "-"+ year;
    }else if(month !=1)
    {
        let newMonth = month-1;
        let newDay = lastDayOfMonth(newMonth);
        result = newDay +"-"+months[newMonth-1] + "-"+ year;
    }else {
        let newMonth = 12;
        let newDay = lastDayOfMonth(newMonth);
        let newYear = year-1;
        result = newDay +"-"+months[newMonth-1] + "-"+ newYear;
    }



    console.log(result);

    function lastDayOfMonth(month)
    {
        if(month ===1 || month ===3 || month ===5 || month ===7 
        || month ===8 || month ===10 || month ===12 )
            {
                return 31;
            }else if ( month === 4 || month ===6 || month ===9
            || month ===11 )
            {
                return 30;
            }else if(year%4 ===0)
            {
                return 29;
            } else {
                return 28;
            }
    }
}

solve([
    "2000", "3", "1" //високосна 
]);
solve([
    "2005", "4", "1"
]);
solve([
    "1999", "1", "1"
]);
