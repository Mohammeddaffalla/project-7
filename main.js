const faqs = document.querySelectorAll('.Faq');
faqs.forEach(Faq => {
    Faq.addEventListener("click", () => {
        Faq.classList.toggle("active");
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
       tes = true;

    }
}





