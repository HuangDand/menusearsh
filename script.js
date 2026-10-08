// 等页面DOM全部加载完成后再执行JS
document.addEventListener('DOMContentLoaded', function(){
    const searchInput = document.getElementById('searchInput');
    const menuItems = document.querySelectorAll('.menu-item');
    const contentBlocks = document.querySelectorAll('.content-block');
    const otherTitle = document.getElementById('otherTitle');

    menuItems[0].classList.add('active');

    // 搜索过滤
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

    // 菜单点击切换内容
    menuItems.forEach(item=>{
        item.addEventListener('click',()=>{
            menuItems.forEach(li=>li.classList.remove('active'));
            item.classList.add('active');
            const menuName = item.innerText;
            contentBlocks.forEach(block=>block.classList.remove('show'));
            let targetBlock = null;
            contentBlocks.forEach(block=>{
                if(block.dataset.target === menuName){
                    targetBlock = block;
                }
            })
            if(targetBlock){
                targetBlock.classList.add('show');
            }else{
                contentBlocks.forEach(block=>{
                    if(block.dataset.target === "其他"){
                        block.classList.add('show');
                    }
                })
                otherTitle.innerText = menuName;
            }
        })
    })
})
