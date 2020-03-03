const age = 4; //0 false

if(age>0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}















//                        Truthy values:
//
/* All values are truthy unless they are defined as falsy */
// 1.'0' -string with length or '  ' string with white space.
// 2.any number except 0.
// 3.[] -empty arry.
// 4.{} -empty object.
// 5.true - the keyword true.
// 6.'false'
// 7.'-1'
// 8.1n
// .......ETC
//******************************************************************//
//                      Falsy values:
//
// 1.false-The keyword false.
// 2.0  The number zero.
// 3.0n .
// 4."", '', `` This is an empty string (the length of the string is zero).
// 5. null - the absence of any value.
// 6.undefined - the primitive value.
// 7.NaN - not a number.