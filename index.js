

// var plan1= {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
//     discountMonth: [7, 8]
// };

// var thisMo = parseInt(prompt("Whats your Hosting Plan"));


// function calcAnnual() {

//     // var currDate = new Date();
//     // var thisMo = currDate.getMonth();

//     for(var i =0; i <= plan1.discountMonth.length; i++){
//         if(plan1.discountMonth[i] === thisMo){
//            var discountedPrice = (plan1.price/100) * 20;
//            alert("After 20 Percent discount, Your New price is:" + discountedPrice);
//            break;
//         }
//         else{
//             alert("Discount not avalaible");
//         }
   
//     }

// }
// calcAnnual();

// var a = prompt("whats your name");
// var b = prompt("whats your product");
// var c = prompt("whats your quantity");

// document.write(a + " " + "ordered a" + " " + " " + b + " " + "in the quantity of" + " " + c);

// var a = 2;
// for(var i=1; i<=10; i++){
//  var b = a + "*" + i + "=" + a * i + "<br>";
//  document.write(b);
// }

// var F =  prompt("Enter a temperature");
// var C = (F-32) * 5/9;

// document.write( "The Celsius Temperature is" + C);

// var US = 10;
// var SR = 25;
// var Total = (US*104.80) + (SR*28);
// document.write(Total);

// var currYear = prompt("The current year is:");
// var BirthYear = prompt("The Birth Year is:");

// var age = (currYear-BirthYear);
// document.write("Your age is:" + age);

var c = document.getElementsByTagName("button");

function calage()
{
    var a = document.getElementById("firstText").value;
var b = document.getElementById("secondText").value;

   var d = (parseInt(a)-parseInt(b));
    alert(d);
    
}

c[0].addEventListener("click", calage);








