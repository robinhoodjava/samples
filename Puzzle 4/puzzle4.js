
//make the proteins array

protein = ['peptide', 'amino', 'nitrogen', 'enzyme', 'hemoglobin']

// make the lookup for things

things = {
  array: 'list',
  vector: 'list',
  hash: 'dictionary',
  lookup: 'dictionary',
}


for (p of protein) {
  things[p] = "protein"

}

// prints object lookup
console.log(things)

// prints array list
console.log(protein)

// print example that it worked
console.log(things.peptide)

console.log('**Cont**')

for (key in things) {
  value = things[key];
  console.log(key + " -> " + value)
  document.write(key + ' -->' + value)
}

function printVal(an_object, lookup) {
  console.log("PrintVAL: " + lookup + "  ->>>  " + an_object[lookup]);
}

printVal(things, 'array');
printVal(things, 'amino');
printVal(things, 'hash');

things['nitrogen'] = "protein";

//Testing that it worked
console.log(things);

console.log('**Cont**')




