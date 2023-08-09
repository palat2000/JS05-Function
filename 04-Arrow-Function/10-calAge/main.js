const ageDays = year => {
    if(year>2020) return "Invalid year";
    let age = 2020 - year;
    return age * 365 + 365 + parseInt(age/4);
}