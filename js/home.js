let logOut = document.getElementById("logout")


// logOut.addEventListener('click',function(){
//     localStorage.setItem("userName" , null)      
// })

let user = JSON.parse( localStorage.getItem("userName"));

let cartona = `<h1>Welcome ${user}</h1>`;

document.getElementById('welcomeMsg').innerHTML=cartona;

