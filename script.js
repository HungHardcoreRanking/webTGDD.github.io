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
//--------------------------------footer--------------------------
const click = document.querySelector('.click')
console.log(click)
click.addEventListener('click',function(){
    const dropdown = document.querySelector('.drop-down')
    console.log(dropdown)
    dropdown.classList.toggle('new')
})

