//retrieve value
var getVal = [1, 2, 3, 4, 5];
console.log(getVal[1]);
//length
var arrLength = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
arrLength.length()
;
//push
var missingSomething = ['This', 'array', 'is', 'missing'];
missingSomething.push();

//pop
var tooMuch = ['This', 'array', 'has', 'an', 'extra', 'word', 'word'];
tooMuch.pop();

//shift
var tooMuchAtStart = ['extra', 'This', 'array', 'also', 'has', 'an', 'extra', 'word'];
tooMuchAtStart.shift(); //adds something at the beginning of the array

//unshift
var missingAtStart = [2, 3, 4, 5];
missingAtStart.unshift(); //adds something to the end of the array

//split does not modify the original array
var toSplit = 'DevMountain is Awesome.';
var split = toSplit.split(' '); //cut's the space between ' ' and inserts each separate element into an array
console.log(split);

//args what to split on.
var split = toSplit.split('');
console.log(split);

//join
split = split.join(' '); //opposite of split
//args what to join with, replaces commas, basically concatinates array into a string, including what you tell it to replace the commas with

//splice (index to start cutting,  how many to remove, what items to add in that place...)
var doesntBelong = [1, 2, 3, 4, 5, 'hello', 7, 8, 9];
//args

//slice does not modify the original array
var copyMe = [4, 5, 7, 9, 12];
copyMe.slice(1,2);
//args (index to start at, index to end)

//reverse
var backwards = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
backwards.reverse(); // flips it in place, modifies the original array

//indexOf
var findTheOnes = [3, 4, 5, 1, 2, 1];
findTheOnes.indexOf(1); //spits out the first index of said number. You may have to do a loop to find the 2nd and 4rd instance of
//lastIndexOf
// same as indexOf, but snags the last index of said array value.

var removeMyName = ['joe', 'Casey', 'Ryan'];
for (var i = 0;i< removeMyName.length;i++){
  if (removeMyName[i] === 'Ryan') {
    removeMyName.splice(i,1);
  }
}
if (removeMyName.indexOf('Ryan') !== -1){
  removeMyName .splice(removeMyName.indexOf('Ryan'),1);
}
removeMyName[removeMyName.indexOf('Ryan')];

for(var i = array.length -1 ; i >= 0; i--){

}

// splices aut and returns even nums fron an array
for (var i = nums.length -1;i>=0;i--) {
  if (nums[i] % 2===1) {
    nums.splice(i,1);
  }
}
console.log(nums);
