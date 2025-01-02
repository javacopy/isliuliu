function handleLogin(event) {
    event.preventDefault(); // 防止表单提交的默认行为

    // 获取用户名和密码
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 在这里可以添加实际的登录验证逻辑
    // 例如，检查用户名和密码是否正确
    if (username === 'admin' && password === 'password') {
        // 登录成功，跳转到欢迎页面
        window.location.href = 'welcome.html'; // 替换为你的目标页面
    } else {
        alert('用户名或密码错误！');
    }
}