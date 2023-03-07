const day = prompt("Write today's date")

switch (day) {
    case "monday": document.getElementById("answer").innerHTML = "Today is monday";
    break;
    case "tuesday": document.getElementById("answer").innerHTML = "Today is tuesday"
    break;
    case "wednesday": document.getElementById("answer").innerHTML = "Today is wednesday"
    break;
    case "thursday": document.getElementById("answer").innerHTML = "Today is thursday"
    break;
    case "friday": document.getElementById("answer").innerHTML = "Today is friday" 
        break;
        case "saturday" : document.getElementById("answer").innerHTML = "Today is a weekend"
        break;
        case "sunday" : document.getElementById("answer").innerHTML = "Today is a weekend"
        break;

    default: document.getElementById("answer").innerHTML = "invalid input"
        break;
}

