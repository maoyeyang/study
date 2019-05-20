//771.宝石与石头
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let res = 0;
    let jLength=J.length;
    let sLength=S.length;
    let temp=0;
    while(temp !=jLength ){
        for(let i=0;i<sLength;i++){
            if(J[temp]==S[i]){
                res++;
            }
        }
        temp++
    }
    return res
};