window.addEventListener('DOMContentLoaded', () =>{
    document.querySelector('.open-rule').addEventListener('click', () =>{
        document.querySelector('.rules-auksion').classList.add('active')
        document.querySelector('.close-rule').classList.add('active')
        document.querySelector('.open-rule').classList.remove('active')
    })
    document.querySelector('.close-rule').addEventListener('click', () =>{
        document.querySelector('.rules-auksion').classList.remove('active')
        document.querySelector('.close-rule').classList.remove('active')
        document.querySelector('.open-rule').classList.add('active')
       
   }) 
    document.querySelector('.close-rules').addEventListener('click', () =>{
        document.querySelector('.rules-auksion').classList.remove('active')
        document.querySelector('.close-rule').classList.remove('active')
        document.querySelector('.open-rule').classList.add('active')
    })

    document.getElementById('menu-1').addEventListener('click' , () =>{
    document.getElementById('dropdown-1').classList.toggle('active')
    document.getElementById('dropdown-2').classList.remove('active')
    document.getElementById('dropdown-3').classList.remove('active')
})
document.getElementById('menu-2').addEventListener('click' , () =>{
    document.getElementById('dropdown-2').classList.toggle('active')
    document.getElementById('dropdown-1').classList.remove('active')
    document.getElementById('dropdown-3').classList.remove('active')
})

document.getElementById('menu-3').addEventListener('click' , () =>{
    document.getElementById('dropdown-3').classList.toggle('active')
    document.getElementById('dropdown-2').classList.remove('active')
    document.getElementById('dropdown-1').classList.remove('active')
})

// clock js for nav
function time(){
    var date=new Date();
  
    var hours=date.getHours(); //0-24
    var min=date.getMinutes();
    var sec=date.getSeconds();
   
    if(hours=="12"){
        hr=12;
    }else if(hours=="24")
    {
         hr=0;
    }else{
        hr=hours%12;
    }
    
    
    var ampm=hours<12?"AM":"PM";

    
    if(hours<10){
        hr="0"+hours;
    }
    if(min<10){
        min="0"+min;
    }
    if(sec<10){
        sec="0"+sec;
    }
    var cat=hr+":"+min+":"+sec+""+ampm;
    document.getElementById("clock").innerText=cat;
}

setInterval(time,1000)
// bar menu active or remove
 let openBtn = document.querySelector('.open'),
    closeBtn = document.querySelector('.close'),
    lNav = document.querySelector('.left-menu')

    openBtn.addEventListener('click', () =>{
        closeBtn.classList.toggle('active')
        lNav.classList.toggle('active')
      
    })
    closeBtn.addEventListener('click', () =>{
        closeBtn.classList.remove('active')
        lNav.classList.remove('active')
    })



    
    
//    let openRule = document.queryCommandIndeterm('.open-rule'),
//          closeRule = document.querySelector('.close-rule'),
//          closeRules = document.querySelector('.close-rules'); 

// nav uzlan js start
    document.querySelector('.uz-lan').addEventListener('click' , () =>{
        document.querySelector('.uz-lan-select').classList.toggle('active')
        document.querySelector('.for-up').classList.toggle('active')
    })
         

})
// scrool js
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
if (window.pageYOffset > 100) {
    toTop.classList.add("active");
} else {
    toTop.classList.remove("active");
}
})