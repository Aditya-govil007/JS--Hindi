class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username is :${this.username}`);
    }

    createId(){
         
        return `123`
    }


}

const aditya= new User("aditya")
// console.log(aditya.createId());


class teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const badmos=new teacher("badmos","badmos@gang")

badmos.logMe()
