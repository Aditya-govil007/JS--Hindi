class User{
    constructor(username){
        this.username=username
    }
    logME(){
        console.log(`Username is : ${this.username}`);
    }

}
class Teacher extends User{
    constructor(username, id , password){
        super(username)
        this.id=id
        this.password=password
    }

    addcoursese(){
        console.log(`new course is added by : ${this.username}`);
    }

}

const babu=new Teacher("aditya","badmos@badmosi.com","123")

babu.addcoursese()

const badmos= new Teacher("bulla","badmos@gang.com","rakhtahaikhulaa")

badmos.logME()