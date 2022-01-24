export default function person1(user,pass){
let person = {
    username:["vipin","atif","avinash","ashish","samik"],
    password:["1111","2222","3333","4444","5555"]
};
let flag=0;
for(let i=0;i<person.username.length;i++){
    if(person.username[i]===user){
        if(person.password[i]==pass){
            flag=1;
            break;
        }
    }
    else{
        flag=0;
    }
}
if (flag==1){
    return true;
}
else{
    return false;
}
}