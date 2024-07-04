
function saturdayFun (activity= 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (parameter='go to the office'){
return `This Monday, I will ${parameter}.`
}

function wrapAdjective (flair = "*"){
   return function(Adjective="a hard worker"){
        return `You are ${flair}${Adjective}${flair}!`
   }
}
const encourageingPromptFunction =wrapAdjective("%")("a dedicated programmer");
    //=> "You are %a dedicated programmer%!"
// code your solution here
