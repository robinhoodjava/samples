protein = ['peptide', 'amino', 'nitrogen', 'enzyme', 'hemoglobin']

things = {
    array: 'list',
    vector: 'list',
    hash: 'dictionary',
    lookup: 'dictionary',
    Robin: 'robinhoodjava'
}

for (p of protein) {
    things[p] = "protein"

}

for (key in things) {
    value = things[key];
    document.write(key + ' --> ' + value + "<br>")
    document.write("<br>")
}