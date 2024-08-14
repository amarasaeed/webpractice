
let name = "12345";

for(let a=0;a< name.length;a++){
    console.log(name[a])
}
/* This code snippet is attempting to calculate the sum of the digits in the string "1234". Here is a
breakdown of the code: */
let abs=1234
let summ=0
abs=Array.from(String(abs))
for(i=0;i<abs.length;i++){
   summ=Number(abs[i])+summ 
}
console.log(abs)

console.log(summ)
// let no11=prompt("enter first no")
// no11=Number(no11)
// let opr=prompt("enter operator")
// let no2=prompt("enter 2nd no")
// no2=Number(no2)
// switch(opr){
//         case"+":
//         console.log(no11+no2)
//         break;
//         case"_":
//         console.log(no11_no2)
//         break;
//         case"*":
//         console.log(no11*no2)
//         break;
// }
let amara = () => {
    console.log("hello my name is amara");
    return "hi";
};
console.log(amara());


