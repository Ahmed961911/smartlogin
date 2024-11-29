let userName = document.getElementById("userName");
let userEmail= document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");
let signUp = document.getElementById("signup")
let signIn=document.getElementById('signin')

let userList = JSON.parse( localStorage.getItem("userContainer"));

function addUser(){
    {
        let user = {
            Name:userName.value,
            email:userEmail.value,
            password:userPassword.value
        };
        
        userList.push(user);
        
        localStorage.setItem("userContainer" , JSON.stringify(userList))
        
     
    
    }
    
    }

signUp.addEventListener('click',function(){
    if (userEmail.value.length===0 || userPassword.value.length===0 || userName.value.lenght===0)
        {
        document.getElementById('msg3').classList.remove('d-none')
        document.getElementById('msg4').classList.add('d-none')
        document.getElementById('msg5').classList.add('d-none')
        }
    else if (checkemail()===false)
        {
            document.getElementById('msg4').classList.remove('d-none')
            document.getElementById('msg3').classList.add('d-none')
            document.getElementById('msg5').classList.add('d-none')
        }    
    else
    {
        document.getElementById('msg3').classList.add('d-none')
        document.getElementById('msg4').classList.add('d-none')
        addUser();
        document.getElementById('msg5').classList.remove('d-none')

    }    
})

signIn.addEventListener('click',function(){
    window.location='./index.html'
})



function checkemail()
{
    for (let i=0;i<userList.length;i++){
        if (userEmail.value === userList[i].email)
         {   return false;
    }
    else{
        return true;
    }
}
}