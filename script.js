let name = prompt("Hello, welcome to GC mini golf! What is your name");
let pars = 0;
let holes = prompt(`Hi ${name}! Would you like to play 3 or 6 holes today?` );
if (holes == 3)
{
    var totalPutt=0;
    for(let i = 1; i<=3; i++)
    {
        let putts = parseInt(prompt("How many putts for hole "+ i + " (par is 3)"));
        totalPutt += putts;
    }
    
    if (totalPutt >9)
    {
        totalPutt -= 9;
        console.log("Nice try, " + name + "! Your total par was: +" + totalPutt);
    } else if(totalPutt==9){
        totalPutt -=9;
        console.log("Good game, " + name + "! Your total par was: " + totalPutt);
    } else {
        totalPutt -=9;
        console.log("Great game, " + name + "! Your total par was: " + totalPutt);
    }
    
    
} else if(holes == 6) 
    {
        var totalPutt=0;
        for(let i = 1; i<=6; i++)
        {
            let putts = parseInt(prompt("How many putts for hole "+ i + " (par is 3)"));
            totalPutt += putts;
        }
    
    if(totalPutt > 18)
    {
        totalPutt -=18;
        console.log("Nice try, " + name + "! Your total par was: +" + totalPutt);
    } else if(totalPutt ==18) {
        totalPutt -= 18;
        console.log("Good game, " + name + "! Your total par was: " + totalPutt);
    }
    else {
        totalPutt -=18;
        console.log("Great game, " + name + "! Your total par was: " + totalPutt);
    }
    
} else {
    console.log("Sorry, please pick between 3 or 6.");
}
