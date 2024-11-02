let globalVar = 'I am global';

function myFunction() {
    // Local variable
    let localVar = 'I am local';
    console.log('Inside the function:');
    console.log('Local variable:', localVar);  
    console.log('Global variable:', globalVar); 
}

myFunction();

console.log('Outside the function:');


console.log('Global variable:', globalVar); 
