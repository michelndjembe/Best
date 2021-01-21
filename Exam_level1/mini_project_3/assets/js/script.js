let submitBtn = document.getElementById('btn');

submitBtn.addEventListener('click', ()=>{
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const user = {username, password, email};
   console.log(user);
    localStorage.setItem(username, JSON.stringify(user));
});
