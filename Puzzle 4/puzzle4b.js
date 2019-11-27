for (key in things) {
    value = things[key]


    document.write("<td align=center>")
    document.write(key)
    document.write("<td align=center>")
    document.write(value)
    document.write("<td align=center>")
    document.write('<button onclick="clicked()">Click Me</button>')
    document.write("<tr>")

}
function clicked() {
    alert('clicked button')
}