stuff = [];
stuff[0] = "persistance";
stuff[1] = "meditation";
stuff[2] = "lists";


for (item of stuff) {
    document.write(item)
    document.write(" ")
    document.write(item.length)
    document.write("<br>")
    document.write("<br>")
}

for (item of stuff) {
    if (item.length < 6) {
        document.write(item)
        document.write("<br>")
    }
    else {
        document.write(item.substring(0, 6) + '...')
        document.write("<br>")
    }
}

for (item of stuff) {
    console.log(item.length)
    console.log(item);
}


for (item of stuff) {
    if (item.length < 6) {
        console.log(item)
    }
    else {
        console.log(item.substring(0, 6) + '...')
    }
}


