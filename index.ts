#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessnumber",
        type: "nuumber",
        message: "please guess a number between 1-6:",
    },
]);
if (answers.userguessnumber === randomNumber) {
    console.log("congratulations you guessed correct number");
}
else {
    console.log("guessed wrong number please try again");
}
