//1021.删除最外层的括号
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let list =[];
    let res ='';
    
    for(let i =0;i<S.length;i++){
        if(S[i]==')'){
            if(list.length>1)
                res +=S[i];
            list.pop();
        }else{
            list.push(S[i])
            if(list.length>1) 
                res+=S[i];
        }
    }
    return res;
};