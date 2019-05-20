//709.转换成小写字母
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let res='';
    for(let i=0;i<str.length;i++){
    	
        if(65 <= str.codePointAt(i) && str.codePointAt(i)<=90){
            res+=String.fromCharCode(str.codePointAt(i)+32);
        }else{
        	res+=str[i];
        }
    }
    return res;
};