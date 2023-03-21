// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(drivers, drivers2) {
    return drivers.filter(driver=>driver.toLowerCase() === drivers2.toLowerCase());
}

function fuzzyMatch(drivers, drivers3){
    return drivers.filter(naming=>naming.startsWith(drivers3));
}
function matchName(drivers, name) {
    return drivers.filter(check=>check.name === name);
}