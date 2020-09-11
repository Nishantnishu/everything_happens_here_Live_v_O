function find(entity, keyTofind) {
    // console.log("finding", keyTofind, "in", entity);
    var result = Object.keys(entity).filter(function (key, index, self) {
        return !key.indexOf(keyTofind);
    });
    return result;
}

function save(entity, keyTitle) {
    // console.log("saving", keyTitle, JSON.stringify(entity));
    window.localStorage.setItem(keyTitle, JSON.stringify(entity));
}


/**
* Checks that an HTMLelement has a non-empty `name` and `value` property.
* @param  {Element} element  the element to check
* @return {Bool}             true if the element is an input, false if not
*/
const isValidElement = element => {
    return element.name && element.value;
};



//Blob, Image and URL and other detectors to be added
function detectObjectType(input) {

    var result = "";


    if (Array.isArray(input)) {

        result = "Array"//iterateArray(input)

    } else if (input instanceof HTMLElement) {

        result = "HTMLElement"//iterateHTMLElement(input)
        //console.log("IN " + result)
    } else if (input instanceof HTMLCollection) {

        result = "HTMLCollection"//iterateHTMLCollection(input)

    } else if (input instanceof NodeList) {

        result = 'NodeList'//iterateNodeList(input)

    } else {
        var flag = false;
        try {
            JSON.parse(input);
            flag = true;
        } catch (error) {
            flag = false;
        } finally {

        }
        if (flag) {

            result = "JSON"

        } else {
            result = "Other"
        }

    }


    console.log("result " + result)
    return result
}