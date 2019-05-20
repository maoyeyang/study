function Flower(type,count){
    this.type=type;
    this.count=count;
}
const weichao = {
    name:'魏超',
    hometown:'南昌',
    single:'true',
    room:'604',
    yz:75,
    sendFlower:function(target){
        //一个功能
        const flowers =new Flower('红玫瑰',11);
        target.receiveFlower(this,flowers);
        //返回值
    }
}
//talk in js  属性和方法
const xm ={
    name:'小美',
    beauty:95,
    happy:55,
    listenGoodMood:function(cb){
        setTimeout(()=>{
            this.happy=85
            cb();
        },5000)
    },
    receiveFlower:function(sender,flower){
        if(this.happy >= 85){
            console.log(`万达走一波`);
        }else{
            console.log(`你是个好人`);
        }
        //console.log(`收到了${sender.name}送的${flower.count}支${flower.type}花`);
    }
}
const xh={
    name:'小红',
    hometown:'南昌',
    receiveFlower:function(sender,flower){
        // if(sender.name==='魏超'){
        //     console.log('走吧');
        // }else{
        //     xm.receiveFlower(sender,flower);
        // }
        xm.listenGoodMood(function(){
            xm.receiveFlower(sender,flower);
        });
    }
}
//weichao.sendFlower(xm);
weichao.sendFlower(xh,new Flower('红玫瑰',11))