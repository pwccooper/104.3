
function items(Itemname,Itemimage,Itemcolor,Itemdamage){
    this.Itemname=Itemname;
    this.Itemimage=Itemimage;
    this.Itemcolor= Itemcolor;
    this.Itemdamage=Itemdamage;
}

const Buster = new items('Buster','+','Steel',150);
const Gunblade = new items('Gunblade','-','Steel',125);

console.log(Buster);
console.log(Gunblade);

const squall = {
    image:'Pics/Squall.gif',
    speed:150,
    item:{
        power:125,
        image:'Pics/gunblade.png',
    },
    health:1000,

    die:function(){
        return 'Squall is Dead... \n G A M E  O V E R!'
    }
} 

const cloud = {
    image:'Pics/Cloud.gif',
    speed:100,
    item:{
        power:150,
        image:'Pics/buster.png',
    },  
    health:1000,

    die:function(){
        return 'Cloud is Dead... \n G A M E  O V E R!'
    }
} 

const solbadguy = {
    image:'Pics/Solbadguy.gif',
    speed:125,
    power: 125,
    health:1000,

    die:function(){
        return 'Solbadguy is Dead... \n G A M E  O V E R!'
    }
} 

let cloudAttackPoints= cloud.item.power;
let squallAttackPoints= squall.item.power;

function cloudAttack(){
    squall.health = squall.health-cloudAttackPoints;
   console.log('Cloud attacks Squall: \n' + squall.health);
    
   if(squall.health<=0){
        document.getElementById('message').innerHTML=`${squall.die()} <img src="${squall.image}" alt="Squall">`
        console.log(squall.die());
    }  
}

function squallAttack(){
    cloud.health = cloud.health-squallAttackPoints;
   console.log('Squall attacks Cloud: \n' + cloud.health);
    
   if(cloud.health<=0){
       document.getElementById('message').innerHTML=`${cloud.die()} <img src="${cloud.image}" alt="Cloud">`;
        console.log(cloud.die());
    }  
}



