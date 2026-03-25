class User{
    constructor(username , email, password){
        this.username=username;
        this.email=email;
        this.password=password
    }
    
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password=value
    }
}

const user=new User("badmos","badmos@gang","badmosi ni rukni chahiye")

console.log(user.password);
