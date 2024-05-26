const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.elements['userName'].value;
    const email = form.elements['userEmail'].value;
    console.log(userName, email);
    const formContainer = document.getElementById('form-container');
    formContainer.style.display = 'none';
    const userDataDiv = document.getElementById('user-data');
    userDataDiv.innerHTML = `
        <div class="card">
            <h2>HELLO!</h2>
            <p><strong>Name:</strong> ${userName}</p>
            <p><strong>Email:</strong> ${email}</p>
        </div>
    `;
    userDataDiv.style.display = 'block';
}
