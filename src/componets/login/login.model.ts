export class Users {
    public firstName : string;
    public lastName : string;
    public email : any;
    public password : any;
    public phoneNumber : any

    constructor(firstName:string, lastName:string, email:any, password:any, phoneNumber : any){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }
}