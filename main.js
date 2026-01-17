const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // إغلاق القائمة  عند الضغط على أي رابط
        const collapseElement = document.getElementById('navbarNav');
        const collapseInstance = bootstrap.Collapse.getInstance(collapseElement);
        if (collapseInstance) {
            collapseInstance.hide();  // إخفاء القائمة
        }
    });
});

let nums = document.querySelectorAll(".num");
let content = document.querySelector(".content")

let test = false;


window.onscroll = ()=> {
    if(window.screenY = content.offsetTop){
       if(!test){
        nums.forEach((e) => {
    let start  = 0;
    let end = e.dataset.num;

    let count = setInterval(() =>{
        start++;
        e.textContent = start;
        if(start == end){
            clearInterval(count);
        }
    },2000 / end)

})
       } 
       test = true;

    }
}
