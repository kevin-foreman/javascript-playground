function addPropertiesToObject(obj1, obj2) {
    // Your psuedocode here
    // create a function that adds all properties of the first object to the second object
    // First iterate over obj1 to determine all of its properties
    // If a property already exists in the second object, ignore it
    // return the second object

    // Your code here
    for (var property in obj1) {

        if (obj2[property]) {

            obj2[property]
        } else {
            obj2[property] = obj1[property]
        }
    }

    return obj2;

};

var output = addPropertiesToObject({ key: 'string', name: "Frank" }, { keys: 'strings', name: "Stacy" });
console.log(output); // ==> { keys: 'strings', name: 'Stacy', key: 'string'}