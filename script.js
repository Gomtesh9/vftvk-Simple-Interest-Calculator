function compute()
{
    p = document.getElementById("principal").value;
    r=document.getElementById("rate").value;
y=document.getElementById("years").value;
a=Number(p)+(p*y*r/100);
b=new Date().getFullYear();
b=Number(b)+Number(y);
if(p==""){
alert("please enter amount:");
}
if(r==""){
alert("please enter rate:");
}
if(y==""){
alert("please enter number of years:")
}
if(p<=0){
alert("please enter a positive number:");
}
document.write("If you deposit <mark>"+p+"</mark> <br> at an interest rate of <mark>"+r+"%</mark>. </br> You will receive an amount of <mark>"+a+"</mark>. <br> In the year <mark>"+b+"</mark>");
}

        
