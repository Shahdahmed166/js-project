function loadProfile() {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        
        document.getElementById('firstDisplay').textContent = userData.firstName;
        document.getElementById('lastDisplay').textContent = userData.lastName;
        document.getElementById('userDisplay').textContent = userData.username;
        document.getElementById('emailDisplay').textContent = userData.emaill;
    } else {
        alert('No user is logged in.');
        window.location.href = 'index.html';  
    }
}
window.onload = loadProfile;

function logout() {
    localStorage.removeItem('userData');
    alert('You have been logged out!');
    window.location.href = 'login.html'; 
}