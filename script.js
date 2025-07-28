let username = "Admin";
let password = "Admin";

document.getElementById("loginError").style.display = "none";

function loginEvent() {
  let enteredUsername = document.getElementById("uname").value;
  let enteredPassword = document.getElementById("pswd").value;

  if (enteredUsername === username && enteredPassword === password) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("loginError").style.display = "block";
    
    setTimeout(() => {
      document.getElementById("loginError").style.display = "none";
    }, 4000);
  }
}

document.getElementById("loginBtn").addEventListener("click", loginEvent);
