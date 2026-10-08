const searchInput = document.getElementById('searchInput');
const menuItems = document.querySelectorAll('.menu-item');

// 输入框监听
searchInput.addEventListener('input', function () {
    const keyword = this.value.trim().toLowerCase();
    menuItems.forEach(item => {
        const text = item.innerText.toLowerCase();
        if (text.includes(keyword)) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    })
})
