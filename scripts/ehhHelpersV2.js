
function save(entity, keyTitle) {
    // console.log("saving", keyTitle, JSON.stringify(entity));
    window.localStorage.setItem(keyTitle, JSON.stringify(entity));
}

function getEntityType(entity) {
    return Object.getPrototypeOf(entity).constructor.name;//entity.__proto__.constructor.name
}


function processEntity(entity, process, output, outputType) {
    
    if (process === "getCss") { 
       // console.log(process);
        var styleSheet = document.styleSheets;
        var cssRules = document.styleSheets[0].cssRules;
        var rule = conductEntityIteration(cssRules, entity, process, output, outputType);
       // console.log(rule);
        var temp = entity.matches(rule.selectorText);
        //console.log(temp);
    }

    //console.log(entity, process);
  

}

function conductEntityIteration(entity, inputEntity, process, output, outputType) { 

    if (typeof entity == "object") { 
       // console.log(getEntityType(entity), typeof entity);
        console.log(iterateObject(entity, inputEntity, process, output, outputType));
        
        var response = iterateObject(entity, inputEntity, process, output, outputType);
      //  console.log(response);
        return response;
    }

}

// //This iterates any resonse and returns the desired out put, eg , Json, Array, HTML Element,
function iterateObject(object, inputEntity, process, output, outputType) {
    //console.log("recived For Iteration ", object);
    for (const key in object) {
       // console.log("keys", key, object);
        if (object.hasOwnProperty(key)) {
            const element = object[key];
                return element;
              //  buildOutput(element,inputEntity, output, outputType);
          //  iterateConductor(element)
             
        }  
    }
}




function find(entity, keyTofind) {
    console.log("finding", keyTofind, "in", entity);
    var result = Object.keys(entity).filter(function (key, index, self) {
        return !key.indexOf(keyTofind);
    });
    return result;
}

function getKeyByValue(searchvalue, object) {
    for (var key in object) {
        // console.log(key);
        if (object.hasOwnProperty(key)) {
            if (object[key] === searchvalue)
                //        console.log(key);
                return key;
        }

    }

}


function buildOutput(entity, inputEntity, output, outputType) { 
    console.log(getEntityType(entity));
    



}