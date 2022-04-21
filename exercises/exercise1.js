function validatePassword()
{
    var initPassword = document.getElementById("initPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (initPassword.length >= 8)
    {
        if (initPassword == confirmPassword)
        {
            let successMessage = document.createElement("p");
            successMessage.textContent = "Password validated.";
            document.getElementById("mainForm").appendChild(successMessage);
        }
        else
        {
            let errorMessage = document.createElement("p");
            errorMessage.textContent = "Passwords do not match.";
            document.getElementById("mainForm").appendChild(errorMessage);
        }
    }
    else
    {
        let errorMessage = document.createElement("p");
        errorMessage.textContent = "Please input a password that is 8 or more characters.";
        document.getElementById("mainForm").appendChild(errorMessage);
    }
}