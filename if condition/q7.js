
let a = parseInt(prompt("chose a number 1:"));
let b = parseInt(prompt("chose a number 2:"));
let calc = prompt("+, - , / , * ");
switch (calc) {
    case "+": {
        console.log(a + b);
        break;
    }
    case "-":
        {
            console.log(a - b);
            break;
        }
    case "*":
        {
            console.log(a * b)
            break;
        }
    case "/":
        {
        console.log(a/b)
        break;
        }
        default:
            {
                console.log("invalid")
                break;
            }
}
