
let school = {
    name: "DPS",
    established: 2008,
    classes: []
};

//  node learn-javascript/dps_school/script.js

console.log("school name is", school.name);
console.log("school established is", school.established)

// classes add

for(let i = 1; i<= 12; i++){
   
    let classObj = {
        classNum: i,
        sections: []
    }
        // sections add
        
     for(j = 1; j <= 4; j++){
        classObj.sections.push({
            name: "section " + j
        });
    } 

    school.classes.push(classObj)
   
}

console.log("first class is", school.classes[0].classNum);
console.log("last class is", school.classes[11].classNum);

console.log("first class of first section: ", school.classes[0].sections[0].name);
console.log("fourth class of fourth section: ", school.classes[3].sections[3].name);









