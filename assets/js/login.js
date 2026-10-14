function showMessage(msg, isError = true) {

  const box = document.getElementById("message");
  if (!box) {
    console.error("L'élément avec l'ID 'message' n'existe pas dans la page.");
    return;
  }

  box.innerText = msg;
  box.style.display = "block";

  if (isError) {
    box.style.backgroundColor = "#ffe5e5";
    box.style.color = "#d8000c";
  } else {
    box.style.backgroundColor = "#d4edda";
    box.style.color = "#155724";
  }

  box.style.padding = "12px 20px";
  box.style.borderRadius = "8px";
  box.style.textAlign = "center";
  box.style.marginTop = "20px";

  setTimeout(() => {
    box.style.display = "none";
  }, 5000);
}


window.onload = () => {
  const params = new URLSearchParams(window.location.search);
  const expired = params.get("session_expired");

  if (expired === "1") {
    showMessage("Votre session est expirée. Veuillez vous reconnecter.", false);
  }
};

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.name.value;
  const password = this.password.value;
  

  loginUser(name, password);
});


function loginUser(name, password) {

  const validName = "2112476578";
  const validPassword = "709901";

  if (name === validName && password === validPassword) {

    sessionStorage.setItem("user_id", "1001");
    sessionStorage.setItem("user_name", name);
    sessionStorage.setItem("loggedin_time", Date.now());
    window.location.href = "app-index.html";
  } else {

    showMessage("Numéro client ou code secret incorrect !");
  }
}
