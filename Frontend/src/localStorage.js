export default function person2(user,pass){
    let mydata=(JSON.parse(window.localStorage.getItem('username')));
    let mypass=(JSON.parse(window.localStorage.getItem('password')));
    console.log("username",mydata);
    console.log("password",mypass);
    let flag=0;
    for(let i=0;i<mydata.length;i++){
        if(mydata[i]===user && mypass[i]==pass){
                flag=1;
                break;
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