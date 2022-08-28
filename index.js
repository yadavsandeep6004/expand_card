const boxs = document.querySelectorAll(".box");
boxs.forEach((box)=>{
     box.addEventListener('click',(e)=>{
         removeclass();
       e.target.classList.add('active');
     })
})

function removeclass(){
    boxs.forEach((box)=>{
        box.classList.remove('active');
    })
}