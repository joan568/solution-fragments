// Get Custom Field Item in Custom Fields Array
//  custFieldsList: output from "getCustomFieldsList" function
//  input: "Business Type"  // return Custom Field object or ID
//  input: {"name": "Business Type", "option": "Electrician"]  // returns option object or ID
//  returnType: 'id' (default), 'type' or 'object'
function getCfInfo(custFieldsList, input, returnType){
  let name = input; let option = "";
  if (typeof input == 'object'){name = input.name; option = input.option};
  var index = custFieldsList.findIndex(field => field.name == name);
  let custFieldObj = {};
  if (index != -1){custFieldObj = custFieldsList[index]} else {return custFieldObj};
  if (typeof input == 'string'){
    if (returnType == 'object'){return custFieldObj
    } else if (returnType == 'type'){return custFieldObj.data_type} else {return custFieldObj.id}};
  index = custFieldObj["options"].findIndex(opt => opt.name == option);
  let cfOptsObj = {};
  if (index != -1){cfOptsObj = custFieldObj["options"][index]} else {return cfOptsObj};
  console.log(cfOptsObj);
  if (returnType == 'object'){return cfOptsObj;
  } else if (returnType == 'type'){return cfOptsObj.data_type} else {return cfOptsObj.id};
}
