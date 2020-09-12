
function getEntityType(entity) {
    return Object.getPrototypeOf(entity).constructor.name;//entity.__proto__.constructor.name
}
// atemporary workinProgress variable, used to build output until mutated/created
let wip;




function ehhEntityProcess(reqEntity, processingEntity, process, output, outputType, wip) {

  if (!reqEntity || !processingEntity) { return; };
  if (getEntityType(processingEntity) === "CSSStyleRule" && process === "save") {

    console.log("mutating", processingEntity);

  }else if (processingEntity === "CSSRuleList" && process === 'matching') {
    
    //console.log("findingMatchingEntity");
    var processingEntity = document.styleSheets[0].cssRules;
    
    iterateEntity(reqEntity, processingEntity, process, output, outputType, wip);

  } else if (getEntityType(processingEntity) === "CSSStyleRule" && process === 'matching') {
    
    if (reqEntity.matches(processingEntity.selectorText) === true && processingEntity.selectorText) {
      iterateEntity(reqEntity, processingEntity, "mutateOutput", output, outputType, wip);
    }


  } else if (getEntityType(processingEntity) === "CSSStyleRule" && process === 'matching') {

    if (reqEntity.matches(processingEntity.selectorText) === true && processingEntity.selectorText) {
      iterateEntity(reqEntity, processingEntity, "mutateOutput", output, outputType, wip);
    }


  } 





}

//function to in a way build per process usecase. It gets the processing Entity, and ships it to tranverse








function iterateEntity(reqEntity, processingEntity, process, output, outputType, wip){ 

  if (!reqEntity) {
    return;
  } else if (isArray(processingEntity)) {

    iterateArray(reqEntity, processingEntity, process, output, outputType, wip);
  
  } else if ((typeof processingEntity === 'object') && (processingEntity !== null)) {
    //console.log("foundObject", processingEntity);
    iterateObject(reqEntity, processingEntity, process, output, outputType, wip);
      } else {
   // console.log(processingEntity);
  }



}

function iterateArray(input, arr, process, output, outputType, wip) {
  for (i = 0; i <= arr.length; i++) {
    //console.log("foundEntity in Array", arr[i]);
  //  var tmp = exeProcess(arr[i], input, process, output, outputType, wip)
    ehhEntityProcess(input,arr[i], process, output, outputType,wip);
  }
}



function iterateObject(input, obj, process, output, outputType, wip) {
 
 // if (!obj) { return; }
  
  for (var key in obj) {
   // console.log(key);
    if (!obj.hasOwnProperty(key) && obj[key]) {
      if (key === 'style') { 
        console.log("style",obj.style);
      }
     
      ehhEntityProcess(input, obj[key], "style", output, outputType, wip);
    }
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

