const removeFromArray = function(theArray, ...selector) {
    let newArray = [];    
    theArray.forEach((item) => {
        if(!selector.includes(item)) {newArray.push(item)};        
    });
    return newArray;
}
// Do not edit below this line
module.exports = removeFromArray;
