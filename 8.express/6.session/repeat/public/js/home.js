document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login').addEventListener('click', (e) => {
        e.preventDefault();
        login();
    });
});

function checkLoginStatus() {
    fetch('/api/check-login')
        .then(response => response.json())
        .then((data) => {
            if(data.username) {
                document.getElementById('user-info').innerHTML = `
                    ${data.username}님
                    <span class="logout-btn" id="logout">LOGOUT</span>
                `;
                document.getElementById('user-info').style.display = 'block';
                document.getElementById('logout').addEventListener('click', logout)
                showProfile(data.username);
            }
        })
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then((response) => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to Login');
            }
        })
        .then((data) => {
            showProfile(data.username);
        })
        .catch((err) => {
            showLoginForm();
        })
};

function logout() {
    fetch('/api/logout')
        .then(response => {
            if(response.ok) {
                window.location.href = '/';
            } else {
                alert('로그아웃에 실패하였습니다');
            }
        })  
};

function showProfile(data) {
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('usernameSpan').innerText = data;
};

function showLoginForm() {
    document.getElementById('loginFormContainer').style.display = 'block';
    document.getElementById('profile').style.display = 'none';
}