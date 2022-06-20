const btnxemdt=document.querySelector(".btn_xemthem2")
const imgNumdt=document.querySelectorAll(".hihihi")

console.log(imgNumdt)
let index=0
btnxemdt.addEventListener("click",function()
 {  btnxemdt.disabled =true
    index=index+1
    if(index>imgNumdt.length-1)
    {
        index=0;
    }
    document.querySelector(".product-gallery-one-content-product").style.height=845+index*845+"px"
    
    btnxemdt.parentNode.removeChild(btnxemdt);

 })