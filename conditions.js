// first task Free Drinks
// - Burger more than 500tk: free Coke
// - Else Coke: 30tk

const burger =500;
const money = 300;
const coke =30;

if(money>= burger){
    console.log('coke is free');
} else{
    console.log("coke is " + coke+'tk');
}

// second task 
// BMI Calculator and Health Category
// Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

const weightInPounds = 63;
const height= 176.78;
const bmi = (weightInPounds/((height*height)/10000)).toFixed(2);
if(bmi < 18.5){
    console.log('you are underweight');
}else{
    if(bmi >= 18.5 && bmi<= 24.9){
        console.log('you are normal');
    } else if(bmi>=25 && bmi<= 29.9){
        console.log('you are overweight');
    } else{
        console.log('you are obese');
    }
}

console.log(bmi);
// third task a student's score as input and returns their corresponding grade based on the following grading scale:

    // A: 90-100
    // B: 80-89
    // C: 70-79
    // D: 60-69
    // F: 0-59

const score=59;

if(score>=90){
    console.log('Your GPA is A');
}else if(score>=80){
    console.log('Your GPA is B');
}else if(score>=70){
    console.log('Your GPA is C');
}else if(score>=60){
    console.log('Your GPA is D');
}else if(score<=59){
    console.log('Your GPA is F');
}


// fourth task if you get  80 or more than 80 then inside your friend score. 
    // If your friend get more than 80. then go for a lunch. 
    // if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    // if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    // if your friend get less than 40, block your friend
    // if you get less than 80 go to home and sleep and act sad

 const myScore = 80;
 const friendsScore =  69;
 
 if(friendsScore>=myScore){
    console.log('lets go for a lunch');
 } else{
    if(myScore<80){
        console.log('go to home and sleep and act sad');
    }
    else if(friendsScore>=60){
        console.log('good luck next time');
    } else if(friendsScore>=40){
        console.log('keep your friends message unseen');
    } else if(friendsScore<40){
        console.log('block your friend');
    } 
 }

//  task five
// you have two numbers in two variables, called: num1, num2

// now declare a variable called result. 
// if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

// write a simple if-else. 

// also, write it using ternary operator.
let num1=30;
let num2=20;
let result;

if(num1>num2){
    console.log(result=num1*2);
} else{
    console.log(result=num1+num2);
}

num1>num2 ? result=num1*2 : result = num1+num2;
console.log(result);

// task six
// Ticket fare Calculator
//     - Children (age < 10): free
//     - Students get a 50% discount
//     - Senior citizens (age >= 60) gets a 15% Discount
//     - Otherwise Regular ticket fare 800 tk

const age= 22;
const student =false;
const ticketFare=800;

if(age<10){
    console.log('free for children');
} else if(student){
    const discountFare =ticketFare*50/100;
    const fare=ticketFare-discountFare;
    console.log(fare);
} else if(age>=60){
  const discountFare=ticketFare*15/100;
  const fare=ticketFare-discountFare;
 console.log('Senior citizens gets a 15% Discount & price is '+fare);
} else{
    console.log(ticketFare);
}
