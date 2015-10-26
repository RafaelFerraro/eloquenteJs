/* Write a loop that makes seven calls toconsole.logto output the following triangle:

#
##
###
####
#####
######
#######

*/

function triangle() {
    var result = "", array = [], value = "#";
    
  for(var x = 0; x < 7; x++) {
      array.push(value);
        console.log(array.join(''));
    };
};

triangle();