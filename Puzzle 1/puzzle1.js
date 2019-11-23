stuff = [];
stuff[0] = "persistance";
stuff[1] = "meditation";
stuff[2] = "lists";

index = 0
while (index < stuff.length) {
    document.write(index)
    document.write(" ")
    document.write(stuff[index])
    document.write("<br>")
    index = index + 1
}

index = 0
while (index < stuff.length) {
    console.log(index)
    console.log(stuff[index])
    index = index + 1
}

index = 2
while (index > -1) {
    console.log(index)
    console.log(stuff[index])
    index = index - 1
}