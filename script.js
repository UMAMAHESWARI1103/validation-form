function validateForm() 
{
    // get form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    // reset error messages
    document.getElementById("nameerror").innerHTML = '';
    document.getElementById("emailError").innerHTML = '';

    // validate name
    if (name === '') {
        document.getElementById("nameerror").innerHTML = 'Name is required';
        return false;
    }
    // validate email
    var emailRegex = /^[^\s]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerHTML = "Email is required";
        return false;
    }
    alert('Form Submitted Successfully!');
    return true;
}