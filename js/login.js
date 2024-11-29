let logIn = document.getElementById("login")
let userEmail = document.getElementById("email")
let userPassword = document.getElementById("password")
let signUp = document.getElementById("signup")
let userList = JSON.parse( localStorage.getItem("userContainer"));


logIn.addEventListener('click', function(){
    if (userEmail.value.length===0 || userPassword.value.length===0)
    {
        document.getElementById('msg').classList.remove('d-none')
    }

   else  if(localStorage.getItem("userContainer") !== null)
        {
          let userList = JSON.parse( localStorage.getItem("userContainer"));

        
            for(let i=0;i<userList.length;i++){
                if(userEmail.value===userList[i].email&& userPassword.value==userList[i].password){
                    window.location = './home.html'
                    localStorage.setItem("userName" , JSON.stringify(userList[i].Name))      
                 document.getElementById('msg2').classList.add('d-none')
                 document.getElementById('msg').classList.add('d-none')

                }
            else
            {  
                 document.getElementById('msg2').classList.remove('d-none')
                document.getElementById('msg').classList.add('d-none')
            }
        }
}})


signUp.addEventListener('click',function(){
    window.location='./signup.html'
})
