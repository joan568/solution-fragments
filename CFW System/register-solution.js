// Register Solution to System CFW
async function registerCfwSolution(kvKey, moduleId, workerId){
    if (!moduleId){console.log('Module ID not detected. CFW Solution will not be registered.'); return};
    if (!workerId){console.log('Worker ID not detected. CFW Solution will not be registered.'); return};
    if (checkCfwSolution(kvKey, moduleId)){console.log('Solution "' + moduleId + '" already registered. Skipping registration...'); return};
    console.log('Registering Module ID "' + moduleId + '" to CFW System...');
    let payload = {"solution_id": moduleId, "cfw": workerId};
    console.log(payload);
    let apiUrl = "https://api.infinityweb.dev/system/" + kvKey + "/solutions";
    let data = await fetch(apiUrl, {method: "POST", headers: {"Accept": "application/json"}, body: JSON.stringify(payload)});
    console.log(data);
    let apiData = await data.json();
    console.log(apiData);
};
