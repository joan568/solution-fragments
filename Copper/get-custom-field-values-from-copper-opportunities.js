// Get Custom Field Value from Copper Opportunity
//  coOppRecords: single or multiple Copper Oppportunity records
function getCfValueFromCopperOpps(coOppRecords, custFieldsList, custFieldName){
    let custFieldId = getCfInfo(custFieldsList, custFieldName, "id")
    console.log('Retrieving Custom Field "' + custFieldName + '" [' + custFieldId + '] value from ' + coOppRecords.length + ' records...')
    let custFieldValues = []
    for (var i=0; i<coOppRecords.length; i++){
        var index = coOppRecords[i].custom_fields.findIndex(memb => memb["custom_field_definition_id"] == custFieldId);
        let value = coOppRecords[i].custom_fields[index].value
        custFieldValues.push(value)
    };
    console.log(custFieldValues)
    return custFieldValues
}

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
