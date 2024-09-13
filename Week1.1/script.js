// //-02. it is a assignment.
// let FavroriteColor = "black";
// var height = 182;
// const isILikePizza = true;

// console.log(FavroriteColor);
// console.log(height);
// console.log(isILikePizza);

// //-01.
// let users  = ["mohit", "raman", 'sachin','kartik'];
// console.log(users);

// // 00.
// let sum = 10 + 5;
// let isEqual = (10 === 10);
// let isTrue = (true && false);

// console.log(isTrue)

// // 01.
//  // function declaration
// function greet(name) {
//     return "Hello, " + name;
// }
// //Function call
// let message = greet("John"); // "Hello, John"
// console.log(message);

// // 02.
// function mohit(name){
//     return "hello, "+ name;
// }
// let messages = mohit("mohit");
// console.log(messages);

// // 03. it is a assignment
// function sum(numbers){
//     return '3' + '2' ;
// }
// let sums = sum();
// console.log(sums);

/* if you pass value in the form of string, then it 
will become like this: "10"+ "39" ; then it return you : 1039*/

// this is a assignment!

// function canVote(age){
//     if(age >= 18){
//         console.log('You Can Vote');
//     } else{
//         console.log("Sorry, You Cannot Vote");
//     }
// }

// let canVoteAge = canVote(30);
// // console.log(canVoteAge);

// let age = 133;
// let canVote = (age >= 18);

// console.log(canVote);


// function product(a, b){
//    let totalproduct = a*b;
//      return totalproduct;
// }
// let massage = product(2, 4);
// let massage1 = product(6, 54);
// let massage2 = product(33, 33);

// console.log(massage);
// console.log(massage2);
// console.log(massage2);

/*function getEven(num){
      if(num%2 === 0)
        return "The number is even.";
    else
    { return "The number is odd.";}
}

let theNum = getEven(5);
 console.log(theNum);
*/

//  let users = ['mohit', 'raman', 'sachin', 'kartik',"sumit", "pankaj"];

//  for(let i = 0; i<users.length; i++){
//     console.log(users[i])
//  }

//  function sum(a,b){
//   return a+b;
//  }
//  let ans =sum(2,3);
//  console.log(ans);

function sum(n){
  let ans = 0;
  for(let i = 0; i<= n; i++){
   ans = ans+i;
  }
  return ans;
}

let ans  = sum(10000);
console.log(ans)