// Retrieve List of Custom Fields
async function getCustomFieldsList(coKey, coEmail){
    console.log('Retrieving Custom Fields list from Copper...');
    let apiUrl= "https://api.prosperworks.com/developer_api/v1/custom_field_definitions";
    let data = await fetch(apiUrl, {method: "GET", headers: {'X-PW-AccessToken': coKey, 'X-PW-Application': 'developer_api', 'X-PW-UserEmail': coEmail, 'Content-Type': 'application/json'}});
    //console.log(data);
    let apiData = await data.json();
    console.log(apiData);
    return apiData
}
