let x=1,y=8,f=0;
x=prompt("Enter the first coordinate separated by a period");
y=prompt("Enter the second coordinate separated by a period");
if(x>0&&y>0)
{
    console.log("first quarter");
}
else
if(x<0&&y>0)
{
    console.log("second quarter");
}
else
if(x<0&&y<0)
{
    console.log("third quarter");
}
else
if(x>0&&y<0)
{
    console.log("fourth quarter");
}
else
if(x==0&&y>0&&y<=0||y==0&&x>0&&x<=0)
{
    console.log("impossible to determine");
}
else
console.log("Incorrect data");

