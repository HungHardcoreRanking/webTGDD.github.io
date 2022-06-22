const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')
//console.log (adressbtn)
adressbtn.addEventListener("click",function(){
    document.querySelector('.adress-form').style.display="flex"
})
adressclose.addEventListener("click",function(){
    document.querySelector('.adress-form').style.display="none"
})
//slider----
const rightbtn =document.querySelector('.ti-angle-right')
const leftbtn =document.querySelector('.ti-angle-left')
const imgNumber = document.querySelectorAll('.slider-left-top img')
const imgtitle = document.querySelectorAll('.slider-left-bottom li')
console.log(imgNumber.length)
let index =0
console.log(rightbtn)
rightbtn.addEventListener ( "click", function()  {
    index = index+1
    if(index>imgNumber.length-1){
        index=0
    }
    removeactive()
    document.querySelector(".slider-left-top").style.right = index * 100 +"%" 
    imgtitle[index].classList.add("active")
})
leftbtn.addEventListener("click",function()
{
    index = index -1
    if(index=0)
    {
        index=imgNumber.length-1
    }
    removeactive()
    document.querySelector(".slider-left-top").style.right = index*100+"%"
    imgtitle[index].classList.add("active")
})
//sub-slider

console.log(imgtitle)
imgtitle.forEach(function(image,index) {
    image.addEventListener("click",function(){
        removeactive()
    document.querySelector(".slider-left-top").style.right = index * 100 +"%" 
        image.classList.add("active")
    })
});
function removeactive(){
    let imgactive =document.querySelector('.active')
    imgactive.classList.remove("active")
}
function imgAuto()
{
    index = index +1
    if(index>imgNumber.length-1)
    {
        index=0
    }
    removeactive()
    document.querySelector(".slider-left-top").style.right = index * 100 +"%" 
    imgtitle[index].classList.add("active")
    
}
setInterval(imgAuto,5000)
const leftbtn_2=document.querySelector(".leftbtn_2")
const rightbtn_2=document.querySelector(".rightbtn_2")
const imgNumber1=document.querySelectorAll(".slider-product-one-content-items")
console.log(imgNumber1)

leftbtn_2.addEventListener("click",function()
{
   index=index+1
   if(index>imgNumber1.length-1)
   {
       index=0;
   }
   document.querySelector(".slider-product-content-items-contents").style.right=index*100+"%"
})
rightbtn_2.addEventListener("click",function()
{
   index=index+1
   if(index>imgNumber1.length-1)
   {
       index=0;
   }
   document.querySelector(".slider-product-content-items-contents").style.right=index*100+"%"
})
///discount-payout---------------------------------------

const  rightbtn_3 = document.querySelector(".arrow-right1")
const  leftbtn_3 = document.querySelector(".arrow-left1")
const imgdiscount = document.querySelectorAll(".slider-banner .content-slider-discount")
let index1 =0
console.log(imgdiscount)

rightbtn_3.addEventListener("click",function(){
    console.log(index1)
    index1=index1+1
    if(index1>imgdiscount.length-1)
    {
        index1=0
    }
    document.querySelector(".slider-banner").style.right=index1*100+"%"
})
leftbtn_3.addEventListener("click",function(){
    console.log(leftbtn_3)
    index1=index1-1
    if(index1<=0)
    {
        index1=imgdiscount.length-2
    }
    document.querySelector(".slider-banner").style.right=index1*100+"%"
})
function Auto(){
    index1=index1+1
    if(index1>imgdiscount.length-1)
    {
        index1=0
    }
    document.querySelector(".slider-banner").style.right=index1*100+"%"
}
setInterval(Auto,5000)
//-------------------------list-dien thoai----------------------------------------
const btnxemdt=document.querySelector(".btn_xemthem2")
const imgNumdt=document.querySelectorAll(".hihihi")
let heighthehehe = document.querySelector(".hihihi").clientHeight;

console.log(imgNumdt)
let index3=0
btnxemdt.addEventListener("click",function()
 {  btnxemdt.disabled =true
    index3=index3+1
    if(index3>imgNumdt.length-1)
    {
        index3=0;
    }
    document.querySelector(".product-gallery-one-content-product").style.height= heighthehehe+heighthehehe*index3+"px"   
    
    btnxemdt.parentNode.removeChild(btnxemdt);

 })

 $(".bg-ctv").height($(".tech-new").height());
 $("slider-slider").height($(".deal-slider").height());


 //------------------------chuoi moi deal khung -------------------------------------
const  rightbtn_4 = document.querySelector(".arrow-right2")
const  leftbtn_4 = document.querySelector(".arrow-left2")
const imgdiscount1 = document.querySelectorAll(".slider-slider .deal-slider")
let index2 =0
console.log(imgdiscount1)
rightbtn_4.addEventListener("click",function(){
    index2=index2+1
    if(index2>imgdiscount1.length-1)
    {
        index2=0
    }
    document.querySelector(".slider-slider").style.right=index2*100+"%"
})
leftbtn_4.addEventListener("click",function(){

    index2=index2-1
    if(index1<=0)
    {
        index2=imgdiscount1.length-2
    }
    document.querySelector(".slider-slider").style.right=index2*100+"%"
})
function Auto(){
    index2=index2+1
    if(index2>imgdiscount1.length-1)
    {
        index2=0
    }
    document.querySelector(".slider-slider").style.right=index2*100+"%"
}
setInterval(Auto,5000)
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
    const li = item.parentElement;

    item.addEventListener('click', function () {
        allSideMenu.forEach(i=> {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active')
    })
});

//--------------------------------footer--------------------------
const click = document.querySelector('.click')
console.log(click)
click.addEventListener('click',function(){
    const dropdown = document.querySelector('.drop-down')
    console.log(dropdown)
    dropdown.classList.toggle('new')
})

