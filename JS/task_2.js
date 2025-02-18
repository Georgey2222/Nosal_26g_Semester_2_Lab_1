let a;
a=prompt("Enter sequence separated by single spaces");
a=" "+a;
console.log(a);
let len=a.length;
let st=0;
let dp=0;
let f=0;
let stp10=1;
for(let i=len-1;i>=0&&f==0;i--)
{
 if((a[i]<'0'||a[i]>'9') && a[i]!=' ')
 {
    console.log("Incorrect data");
    f=1;
 }
 if(a[i]==' '&&i<len-1&&a[i-1]==' ')
 {
   console.log("Incorrect data");
   f=1;
 }
 if(a[i]==' ')
 {
    if(dp>=10&&dp<=99)
    {
        st++;
    }
    stp10=1;
    dp=0;
 }
 else
 {
 dp+=Number(a[i])*stp10;
 stp10*=10;
 }
}
if(!f)
console.log(`Number of two-digit numbers: ${st}`);