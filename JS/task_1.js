let x=1,y=8,f=0;
x=prompt("Enter the first coordinate as a whole number or a decimal with a period");
y=prompt("Enter the second coordinate as a whole number or a decimal with a period");
if(x>0&&y>0)
{
    console.log("First quarter");
}
else
if(x<0&&y>0)
{
    console.log("Second quarter");
}
else
if(x<0&&y<0)
{
    console.log("Third quarter");
}
else
if(x>0&&y<0)
{
    console.log("Fourth quarter");
}
else
if(x==0&&(y>0||y<=0)||y==0&&(x>0||x<=0))
{
    console.log("Impossible to determine");
}
else
console.log("Incorrect input");

