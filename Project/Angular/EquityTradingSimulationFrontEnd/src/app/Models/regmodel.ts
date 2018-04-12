export class Regmodel {
    
    public Id:number;
    public Type:string;
    public Name:string;
    public Username: string;
    public Userpass: {
        Password: string
        Cpassword: string
    }
    public Empid:number;
    public Approval:boolean;
}