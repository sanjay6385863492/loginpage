// registration page
function validateForm() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();
  var mobile = document.getElementById("mobile").value.trim();
  let msg = document.getElementById("msg");
  if (!name || !email || !password || !mobile) {
    msg.style.color = "red";
    msg.innerHTML = "All fields are required";
    return;
  } else {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("mobile", mobile);
    window.location.href = "login.html";
  }
}
// login page
function login() {
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let msg = document.getElementById("msg");
  if (!email || !password) {
    msg.style.color = "red";
    msg.innerHTML = "All fields are required";
    return;
  }
  let storedEmail = localStorage.getItem("email");
  let storedPassword = localStorage.getItem("password");
  if (email === storedEmail && password === storedPassword) {
    window.location.href = "welcome.html";
  } else {
    msg.style.color = "red";
    msg.innerHTML = "Invalid email or password";
  }
}
