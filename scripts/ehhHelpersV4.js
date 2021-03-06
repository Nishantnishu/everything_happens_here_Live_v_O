
function getEntityType(entity) {
    return Object.getPrototypeOf(entity).constructor.name;//entity.__proto__.constructor.name
}
// atemporary workinProgress variable, used to build output until mutated/created
let wip;

//function to in a way build per process usecase. It gets the processing Entity, and ships it to tranverse

  function processEntity(reqEntity,processingEntity,process, output, outputType) {
   
    if (processingEntity === "CSSRuleList" && process === 'matching') {
      var styleSheet = document.styleSheets;
      var cssRules = document.styleSheets[0].cssRules;
      console.log(cssRules);
      var tmp = traverseEntity(cssRules, reqEntity, process, output, outputType, wip);
      console.log(tmp);   
    }

  }





  //add Entity in motion for a temporary variable. Some issue with Array Itrerate.
  //Add Create and Append.
 
  function traverseEntity(entity, reqEntity, process, output, outputType, wip) {
   
    if (isArray(entity)) {
    
      traverseArray(entity, reqEntity, process, output, outputType, wip);

    } else if ((typeof entity === 'object') && (entity !== null)) {
      // console.log("foundObject", entity);
      var tmp = traverseObject(entity, reqEntity, process, output, outputType, wip);
     // console.log("ininte",tmp);  
      //console.log("res",res);
    } else {
      console.log(entity);
    }
    // console.log("transverseLoop");
  }


function exeProcess(entity, reqEntity, process, output, outputType, wip) {
  if (!entity) { 
    return;
  }
   // console.log("exe",entity);
  if (process === "matching") {// entity has a value selector text to be added.
    // console.log(entity.selectorText,entity);
    if (reqEntity.matches(entity.selectorText) === true && entity.selectorText) {
      console.log(reqEntity.matches(entity.selectorText), entity); 

    } else {
      // console.log("sending to trans",entity);
      // traverseEntity(entity, reqEntity, process, output, outputType, wip)
    }
//this function takes a runtime Input and produces a run time output, while Mutating, Values from one key to another
//eg Taking CSS properties of an element and displaying as dyanamic values on the page.
  } else if (process === "mutateOutput") { 
    
    
    console.log(wip, entity);
    return wip;
    }




  
  }




  function traverseObject(obj, input, process, output, outputType, wip) {
    // console.log(wip);
    for (var key in obj) {
      //  console.log("iterating",key,"in",obj);
      if (obj.hasOwnProperty(key)) {
        // console.log("sending to traverse", obj[key], wip);
        var tmp= exeProcess(obj[key], input, process, output, outputType, wip)
        console.log("after exe", tmp);  
        return tmp;
      } else {
        //console.log(key,obj);
      }
    }
    // console.log("transverseObjectLoop");   
   
  }

function traverseArray(arr, input, process, output, outputType, wip) {
  for (i = 0; i <= arr.length; i++) { 
   //console.log("foundEntity in Array", arr[i]);
    var tmp = exeProcess(arr[i], input, process, output, outputType, wip)
   // traverseEntity(arr[i], input, process, output, outputType,wip);
  }
 }




  function isArray(o) {
    return o.length;
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

