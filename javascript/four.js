let age=14;
if(age>=18){
    console.log("You are eligible to vote");    
}
else if(age>=14 && age<18){
    console.log("You are not eligible to vote but you can apply for a learner's license");
}
else if(age<14){
    console.log("You are not eligible to vote or apply for a learner's license");
}  
else{
    console.log("Invalid age");
}