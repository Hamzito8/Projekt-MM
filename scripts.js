function validateForm() {
    var name = document.getElementById("name").value;
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name == "" || tel == "" || email == "") {
        alert("Bitte füllen Sie alle erforderlichen Felder aus.");
        return false;
    }
    alert("Vielen Dank für Ihre Nachricht!");
    return true;
}
