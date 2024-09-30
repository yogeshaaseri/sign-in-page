const container = document.getElementById('container');
const regibtn = document.getElementById('register');
const loginbtn = document.getElementById('login');

regibtn.addEventListener('click', () =>{
    container.classList.add("active");
})

loginbtn.addEventListener('click', () =>{
    container.classList.remove("active");
})
