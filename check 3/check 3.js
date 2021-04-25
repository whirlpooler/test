function binarySearch(items, value){

    var startIndex  = 0,
        stopIndex   = items.length - 1,
        middle      = Math.floor((stopIndex + startIndex)/2);
        
    while(items[middle] != value && startIndex < stopIndex){
    
        //adjust search area
        if (value < items[middle]){
            stopIndex = middle - 1;            
        } else if (value > items[middle]){
            startIndex = middle + 1;
        }
        
        //recalculate middle
        middle = Math.floor((stopIndex + startIndex)/2);    
    }

    //make sure it's the right value
    return (items[middle] != value) ? -1 : middle;
}
const reverse = integer =>
  parseInt(
    integer
      .toString()
      .split("")
      .reverse()
      .join("")
  ) * Math.sign(integer);

mocha.setup("bdd");
const { assert } = chai;

describe("Integer Reversal", () => {
  it("Should reverse integer", () => {
    assert.equal(reverse(1234), 4321);
    assert.equal(reverse(-1200), -21);
  });
});

mocha.run();