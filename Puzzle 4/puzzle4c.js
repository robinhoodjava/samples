
alternate = false;
for (key in things) {
    value = things[key]
    if (alternate === true) {
        document.write("<div style='background-color:#888; height:20px;padding:2px;border:2px;margin:2px'>");
        alternate = false;
    }
    else {
        document.write("<div style='background-color:#FFF; height:20px;padding:2px;border:2px solid black;margin:2px'>");
        alternate = true;
    }

    document.write("<div style='float:left; width:80px;'>")
    document.write(key)
    document.write("</div>")

    document.write("<div style='float:left; width:80px;'>")
    document.write(value)
    document.write("</div>");

    document.write("<div style='float:left; width:80px;'>")
    document.write("<button onclick='clicked()'> Lookup </button>")
    document.write("</div>");



    document.write("</div>")

    document.write("<div style='clear:both;'></div>");

}