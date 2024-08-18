document.getElementById('uploadBtn').addEventListener('click', function () {
    // Check if user is logged in
    showLoginSignupModal(); // Show login/signup modal if not logged in
});

document.getElementById('addItem').addEventListener('click', function () {
    // Check if user is logged in
    showLoginSignupModal(); // Show login/signup modal if not logged in
});

document.querySelectorAll('.claimBtn').forEach(button => {
    button.addEventListener('click', function () {
        // Check if user is logged in
        showLoginSignupModal(); // Show login/signup modal if not logged in
    });
});

function showLoginSignupModal() {
    $('#loginSignupModal').modal('show');
}
// Existing modal script here
// Existing modal scripts
function showModalSignin() {
    // Hide the current modal
    $('#loginSignupModal').modal('hide');
    // Show the target modal
    $('#modalSignin').modal('show');
}
// Trigger modal on navbar and green button clicks
document.querySelectorAll('.login-btn, .signup-btn, .green-login, .green-signup').forEach((button) => {
    button.addEventListener('click', () => {
        const modal = new bootstrap.Modal(document.getElementById('modalSignin'));
        modal.show();
    });
});
