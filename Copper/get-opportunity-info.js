// Get Copper Opportunity from Deal ID
async function getCopperOppFromId(coKey, coEmail, dealId){
  console.log('Retrieving Copper Opportunity ("' + dealId + '")...')
  let apiUrl = "https://api.copper.com/developer_api/v1/opportunities/" + dealId
  let oppRecord = await fetch(apiUrl, {
    method: "GET",
    headers: {'X-PW-AccessToken': coKey, 'X-PW-Application': 'developer_api', 'X-PW-UserEmail': coEmail, 'Content-Type': 'application/json'},
  }).then(r => r.json());
  console.log(oppRecord)
  return oppRecord;
}
