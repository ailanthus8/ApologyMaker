//Apology Machine

//Defining variables
let theirName = prompt("Enter their first name: ");
let sayTransgress = prompt("Explain what you did wrong in one line starting with a lower-case letter and using -ing words, like eating all the cookies was wrong or killing the cook was a mistake: ");
let badAction = prompt("Enter what was wrong about what you did:   " + " ");
let badActionToo = prompt("Enter a second thing that was wrong about what you did, also using -ing words: ");
let improveSelf = prompt("Enter something you are doing to improve yourself, such as seeking therapy, reflecting, praying on it, talking to your minister, attending AA meetings, or turning yourself in to the police ");
let season = prompt("Enter a situation that you hope they are enjoying, such as the summer, the new school year, their new job: ");
let myName = prompt("Enter your first name: ");

//function 
document.write("Dear " + theirName+ ", " + "I am writing you to apologize for " + 
sayTransgress+ ". " +
"I was wrong to do it and I realize that now. " + " I will be working on myself and " + improveSelf + ".  "
+ "I hope you are well and enjoying " + season+ "." +

" Sincerely, " +
myName);
