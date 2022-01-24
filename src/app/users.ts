export class Users {

    userId: string;
    photoId: string;
    userName: string;
    password: string;
    emailId: string;
    contactNumber: number;
    address: string;
    dob: string
    isAdmin: string;
    freeze: string;
    freezeDate: string;
    effectiveDate: string;
    expirationDate: string;
    payments: string[];
    userWorkout: string[];
        
    constructor(){
        this.userId="";
        this.photoId="";
        this.userName="";
        this.password="";
        this.emailId="";
        this.contactNumber=0;
        this.address="";
        this.dob="";
        this.isAdmin="";
        this.freeze="";
        this.freezeDate="";
        this.effectiveDate="";
        this.expirationDate="";
        this.payments=[];
        this.userWorkout=[];
    
    }
}
