

/**
* Checks that an HTMLelement has a non-empty `name` and `value` property.
* @param  {Element} element  the element to check
* @return {Bool}             true if the element is an input, false if not
*/
const isValidElement = element => {
    return element.name && element.value;
};




























function iterationConductor(input, json) {
    var result;
    var type = detectObjectType(input)
    console.log("type " + type)
    if (type == "Array") {

        result = iterateArray(input, json)

    } else if (type == 'HTMLElement') {

        result = iterateHTMLElement(input, json)

    } else if (type == 'HTMLCollection') {

        result = iterateHTMLCollection(input, json)

    } else if (type == 'NodeList') {

        result = iterateNodeList(input)

    } else if (type == 'JSON') {

        result = iterateJSON(input)

    } else {
        result = "Type Not Found"

    }
    return result
}


// //This iterates any resonse and returns the desired out put, eg , Json, Array, HTML Element,
function iterateObject(object) {
    //console.log("recived For Iteration ", object);
    for (const key in object) {
        console.log("keys", key, object);
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            iterateConductor(element)
            console.log(element);
        }
    }
}
