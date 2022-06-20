//--------------Iphone13-------/////
let index2=0
 const leftbtn1 = document.querySelector(".btn-ip-left2")
 const rightbtn1 = document.querySelector(".btn-ip-right2")
 const imgNumber1=document.querySelectorAll('.box-left img')
 console.log(imgNumber1)
 rightbtn1.addEventListener("click",function()
 {
    index2=index2+1
    if(index2>imgNumber1.length-1)
    {
        index2=0;
    }
    document.querySelector(".box-left").style.right= index2*100+"%"
 }
 )
 leftbtn1.addEventListener("click",function()
 {
    index2=index2-1
    if(index2<=0)
    {
        index2=imgNumber1.length-1;
    }
    document.querySelector(".box-left").style.right=index2*100+"%"
 }
 )
 //---Focus--///
 const imgNumberitem=document.querySelectorAll('.noibat .item-active')
 const imgNumberitem2=document.querySelectorAll('.box-info2 .info-devi')

 console.log(imgNumberitem)
 imgNumberitem.forEach(function(image,index2){
image.addEventListener("click",function()
{
    document.querySelector(".box-left").style.right=index2*100+"%"

}
 )
}
 )
 imgNumberitem2.forEach(function(image2,index2){
    image2.addEventListener("click",function()
    {
        document.querySelector(".box-left").style.right=200+index2*100+"%"
    
    }
     )
    }
     )
