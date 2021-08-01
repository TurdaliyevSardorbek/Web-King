const counters = document.querySelectorAll('.counter');
const active = document.querySelectorAll('active');

counters.forEach(counter => {
    
    counter.innerText = '0'
     
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c= +counter.innerText

        const increment = target/1000 
        
         if (c < target) {
             counter.innerText = `${Math.ceil(c+increment)}`
             setTimeout(updateCounter,60)
         } else {
             counter.innerText = target
         }
    }
    updateCounter();
});
window.addEventListener("scroll", function(){
    var navscroll= document.getElementById('nav');
    navscroll.classList.toggle("fixed", window.scrollY > 10);});
    function navBack() {
        var nav = document.getElementById('nav').classList.toggle("change");
    };

    const imgBacks = document.querySelectorAll('.imgback');
    imgBacks.forEach(imgback => {
        imgback.addEventListener('click',()=>{
          removeActiveClasses();
            imgback.classList.add('active');
        })
        
    });
   function removeActiveClasses() {
       imgBacks.forEach(imgback=> {
           imgback.classList.remove('active')
       })
       
   }
