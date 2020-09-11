
var entity = document.getElementsByTagName("html")[0];
//var entity = document.querySelectorAll("li")[0];
//console.log(entity);
//console.log(entity.__proto__.__proto__);
//alert(Object.prototype.__proto__);

var output = {};
//var entity ={};
convertEntity(entity, output);
//htmlToJson(entity, output);
//console.log(output);

function convertEntity(entity, output) {
    nodeOut = {}
    console.log("converting", entity, "from", checkEntity(entity), "to", checkEntity(output));
    var output = iterationConductor(entity, output);
    //getMethods(entity, output);
    console.log("output >>>>>>", output);
    // console.log("has HTML Child", typeof key, entity[key]);
}



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

//Blob, Image and URL and other detectors to be added
function detectObjectType(input) {

    var result = "";


    if (Array.isArray(input)) {

        result = "Array"//iterateArray(input)

    } else if (input instanceof HTMLElement) {

        result = "HTMLElement"//iterateHTMLElement(input)
        console.log("IN " + result)
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




function iterateHTMLElement(element, json) {
    console.log("HTMLELEMENT")
    var treeObject = {};
    function treeHTML(element, object) {
        object["type"] = element.nodeName;
        var nodeList = element.childNodes;
        if (nodeList != null) {
            if (nodeList.length) {
                object["content"] = [];
                for (var i = 0; i < nodeList.length; i++) {
                    if (nodeList[i].nodeType == 3) {
                        object["content"].push(nodeList[i].nodeValue);
                    } else {
                        object["content"].push({});
                        treeHTML(nodeList[i], object["content"][object["content"].length - 1]);
                    }
                }
            }
        }
        if (element.attributes != null) {
            if (element.attributes.length) {
                object["attributes"] = {};
                for (var i = 0; i < element.attributes.length; i++) {
                    object["attributes"][element.attributes[i].nodeName] = element.attributes[i].nodeValue;
                }
            }
        }
    }

    treeHTML(element, treeObject);
    return (json) ? JSON.stringify(treeObject) : treeObject;

}


//Returns and ArrayObject
function iterateHTMLCollection(elementCollect, json) {
    console.log("HTMLCollection")
    var ArrayObject = []
    for (var i = 0; i < elementCollect.length; i++) {
        var element = elementCollect[i]

        var treeObject = {};

        function treeHTML(element, object) {
            object["type"] = element.nodeName;
            var nodeList = element.childNodes;
            if (nodeList != null) {
                if (nodeList.length) {
                    object["content"] = [];
                    for (var i = 0; i < nodeList.length; i++) {
                        if (nodeList[i].nodeType == 3) {
                            object["content"].push(nodeList[i].nodeValue);
                        } else {
                            object["content"].push({});
                            treeHTML(nodeList[i], object["content"][object["content"].length - 1]);
                        }
                    }
                }
            }
            if (element.attributes != null) {
                if (element.attributes.length) {
                    object["attributes"] = {};
                    for (var i = 0; i < element.attributes.length; i++) {
                        object["attributes"][element.attributes[i].nodeName] = element.attributes[i].nodeValue;
                    }
                }
            }
        }

        treeHTML(element, treeObject);

        ArrayObject.push((json) ? JSON.stringify(treeObject) : treeObject);


    }
    console.log(JSON.stringify(ArrayObject));
    return ArrayObject;

}

function iterateHTMNodeList(element, json) {
    console.log("iterateHTMNodeList")

    var treeObject = {};

    function treeHTML(element, object) {
        // object["type"] = element.nodeName;
        var nodeList = element;
        if (nodeList != null) {
            if (nodeList.length) {
                object["content"] = [];
                for (var i = 0; i < nodeList.length; i++) {
                    if (nodeList[i].nodeType == 3) {
                        object["content"].push(nodeList[i].nodeValue);
                    } else {
                        object["content"].push({});
                        treeHTML(nodeList[i], object["content"][object["content"].length - 1]);
                    }
                }
            }
        }
        if (element.attributes != null) {
            if (element.attributes.length) {
                object["attributes"] = {};
                for (var i = 0; i < element.attributes.length; i++) {
                    object["attributes"][element.attributes[i].nodeName] = element.attributes[i].nodeValue;
                }
            }
        }
    }

    treeHTML(element, treeObject);

    return (json) ? JSON.stringify(treeObject) : treeObject;
}


//More like a writer Function
// This is the function that is called on each element of the array.
const reducerFunction = (data, element) => {
    // Add the current field to the object.
    data[element.name] = element.value;
    // For the demo only: show each step in the reducer’s progress.
    console.log(JSON.stringify(data));
    return data;
  };




 