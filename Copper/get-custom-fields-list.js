// Retrieve List of Custom Fields
async function getCustomFieldsList(coKey, keyOwner){
    console.log('Retrieving Custom Fields list from Copper...');
    let apiUrl= "https://api.prosperworks.com/developer_api/v1/custom_field_definitions";
    let data = await fetch(apiUrl, {method: "GET", headers: {'X-PW-AccessToken': coKey, 'X-PW-Application': 'developer_api', 'X-PW-UserEmail': keyOwner, 'Content-Type': 'application/json'}});
    //console.log(data);
    let apiData = await data.json();
    console.log(apiData);
    return apiData; 
};
