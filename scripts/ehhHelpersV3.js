
function getEntityType(entity) {
    return Object.getPrototypeOf(entity).constructor.name;//entity.__proto__.constructor.name
}

function processEntity(entity, process, output, outputType) {
   
    if (process === "getCss") {
        var styleSheet = document.styleSheets;
        var cssRules = document.styleSheets[0].cssRules;
        wip = {};
        var tmp = iterateEntity(cssRules, entity, process, output, outputType,wip);
      // console.log(tmp);
        
    }
}

//add Entity in motion for a temporary variable. Some issue with Array Itrerate.
//Add Create and Append.

function iterateEntity(entity, input, process, output, outputType, wip) { 
   console.log(wip);
   //console.log(entity, input, process, output, outputType);
   // console.log(entity, inputEntity, process, output, outputType);
  // console.log(Array.isArray(entity))

    if (isArray(entity)) {
        traverseArray(entity, input, process, output, outputType, wip);
    } else if ((getEntityType(entity) === 'object') && (entity !== null)) {
        traverseObject(entity, input, process, output, outputType, wip);
    } else if ((getEntityType(entity) === 'CSSRuleList') && (entity !== null)) {
        //console.log(entity);
        traverseObject(entity, input, process, output, outputType, wip);
    } else if ((getEntityType(entity) === 'CSSStyleRule' || getEntityType(entity) === 'CSSMediaRule') && (entity !== null)) {
        //console.log(process);
       // console.log("wip", wip);
        var response = exeProcess(entity, input, process, wip);
       // console.log(response);
        if (response != null || response != undefined) { 
         
            console.log("wip", wip);
         //   return response;
            
           var wip = buildOutput(response, output, outputType,wip);
            console.log("uo",wip);
        }
        
    
    } 
    
}

function buildOutput(response, output, outputType,wip) { 
   console.log("build",wip);
   // console.log(response, output, outputType);
    if (output === null || output === undefined) {
        //console.log("out put will be ");
         output = response;
       
      //  return output;
       
    } else { 
    //  console.log("output has entry");

    }
 //console.log(output);
  return output;
    
}

function exeProcess(entity, input, process,wip) {
   // console.log(process);
    if (process === "getCss") {
        if (input.matches(entity.selectorText) === true) {
            // console.log(input.matches(entity.selectorText), entity);
            return entity;
        } ;
    }
}

function isArray(o) {
  return Object.prototype.toString.call(o) === '[object Array]';
}

function traverseArray(arr, input, process, output, outputType,wip) {

    arr.forEach(function (x) {
      console.log("foundEntity in Array",x);
        iterateEntity(x, input, process, output, outputType);
  });
}

function traverseObject(obj, input, process, output, outputType, wip) {
// console.log(wip);
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
       // console.log("foundEntity in Object", obj[key],wip);
        iterateEntity(obj[key], input, process, output, outputType, wip);
    }
  }
}


function save(entity, keyTitle) {
    // console.log("saving", keyTitle, JSON.stringify(entity));
    window.localStorage.setItem(keyTitle, JSON.stringify(entity));
}

function find(entity, keyTofind) {
    //console.log("finding", keyTofind, "in", entity);
    var result = Object.keys(entity).filter(function (key, index, self) {
        return !key.indexOf(keyTofind);
    });
    return result;
}

