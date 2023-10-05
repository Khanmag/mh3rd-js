const age = prompt("Enter you age")

if (isNaN(age)) {
    alert("Please, enter a number")
}
else if (age < 5) {
    alert("You are too young to use PC, i'm calling your parents!")
}
else if (age < 16) {
    alert("Adults only, no entry")
}
else if (age > 60) {
    alert("Welcome, man of respectable age")
}
else if (age > 130) {
    alert("IMPOSSIBLE! ~if you're ghost, please, don't curse me x_x")
}
else {
    alert("Welcome!")
}