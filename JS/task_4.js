function gcdd(a1,a2) {
   while (a1 !== 0 && a2 !== 0) {
      if (a1 > a2) {
         a1 %= a2;
      } else {
         a2 %= a1;
      }
   }
   return a1 + a2;
}
function lcmm(a1,a2)
{
   return a1*a2/gcdd(a1,a2);
}
let a;
a=prompt("Enter sequence separated by single spaces");
a=" "+a;
let len=a.length;
let mas = [];
let f=0;
let dp=0;
let stp10=1;
let ind=0;
for(let i=len-1;i>=0&&f==0;i--)
{
 if(a[i]<'0'&&a[i]>'9'&&a[i]!=' ')
 {
    console.log("Error");
    f=1;
    break;
 }
 if(a[i]==' '&&i<len-1&&a[i+1]==' ')
 {
   console.log("Incorrect data");
   break;
   f=1;
 }
 if(a[i]==' ')
 {
    mas[ind]=dp;
    if(dp<20||dp>40)
    f=1;
    ind++;
    stp10=1;
    dp=0;
 }
 else
 {
 dp+=Number(a[i])*stp10;
 stp10*=10;
 }
}
if(f==1)
{
   console.log("Incorrect data");
}
else
{
let res=mas[0];
for(let i=1;i<ind;i++)
{
 res=lcmm(res,mas[i]);
}
console.log(res);
}
