function multiple( num){
    return num*num;

}
multiple.power=2;

console.log(multiple(5));
console.log(multiple.power);
console.log(multiple.prototype);

function creatUser(username,score){
    this.username=username;
    this.score=score;
}

creatUser.prototype.increment=function(){
    this.score++;
}

creatUser.prototype.printMe=function(){
    console.log(`Score is : ${this.score}`);
    
}

const me=new creatUser("Aditya",69) // new key is imp here without this code will not run
const you=new creatUser("yourname","70")

me.printMe()


