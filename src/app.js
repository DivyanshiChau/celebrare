const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const login_btn = document.getElementById("login-btn"); 
const loader = document.querySelector('.loader'); 
const overlay = document.getElementById('overlay'); 
const done_message = document.querySelector('.done-message'); 



sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

login_btn.addEventListener("click", (event) => {
  event.preventDefault();

  
  loader.style.display = 'block'; 
  login_btn.disabled = true; 

 
  setTimeout(() => {
    
    loader.style.display = 'none'; 
    login_btn.disabled = false; 
  }, 2000); 
});


const signUpForm = document.querySelector('.sign-up-form');
signUpForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

 
  overlay.style.display = 'flex'; 
  done_message.style.opacity = 1; 
  done_message.style.transform = 'scale(0)'; 

 
  setTimeout(() => {
    done_message.style.transform = 'scale(1.2)'; 
  }, 10); 
  
  setTimeout(() => {
    done_message.style.transform = 'scale(0)'; 
  }, 1500); 

  
  setTimeout(() => {
    location.reload(); 
  }, 2000); 
});
