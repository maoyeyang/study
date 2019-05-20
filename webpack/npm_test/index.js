const add =function (x,y) {
    if(typeof x == 'string' && typeof y == 'string'){
        return +x+(+y)
    }
    return x+y
}
module.exports ={
    add
}