for (let k=0;k<5;k++)
{
    console.log(k)
}
console.log("---------------------------------")

for (let k=0;k<5;k++)
{
   if(k==2) 
   {
    break
   }
   console.log(k)
}
//console.log(k)


console.log("--------------------------------")

for (let k=0;k<5;k++)
{
   if(k==2) 
   {
    continue
   }
   console.log(k)
}

console.log("-----------------------------------")
for(let j=8;j>=0;j--)
{
    if(j==5)
    {
        break
    }
    console.log(j)
}

console.log("-----------------------------------")



let j=0
while(j<=5)
{
    console.log(j)
    j++
}
console.log("-------------------------------")


let p= 0
while(p<=6)
{
    if(p==4)
    {
        break

    }
    console.log(p)
    p++
}
console.log("------------------------------")


let q= 5
while(q>=0)
{
    if(q==2)
    {
        continue

    }
    console.log(q)
    q--

}