
import axios from 'axios';


var receivedID = 2;


   



function getRegionLevel()
{
    return new Promise((resolve, reject) => {
        axios.get("https://melatupa.azurewebsites.net/regionLevels").then(response => {

            const regions = response.data.map(region => {
               
                
                return region;
            });
            resolve(regions);
        })
        .catch(error => {
            console.log(error);
            reject(error);
        });
    });
}

function getRegion(luku)
{
   
    

    return new Promise((resolve, reject) => {
        axios.get("https://melatupa.azurewebsites.net/regionLevels/" + luku +"/regions").then(response => {

            const deeps = response.data.map(deep => {
               
                //console.log(deep); 
                return deep;
            });
            resolve(deeps);
        })
        .catch(error => {
            console.log(error);
            reject(error);
        });
    });
}


function getScenario(regionID,ScrenarioID)
{
   
    //console.log(regionID);
    //console.log(ScrenarioID);
    

    return new Promise((resolve, reject) => {
        axios.get("http://melatupa.azurewebsites.net/scenarioCollection/"+ ScrenarioID + "/region/" + regionID).then(response => {

            const deeps = response.data.map(deep => {
               
                //console.log(deep); 
                return deep;
            });
            resolve(deeps);
        })
        .catch(error => {
            console.log(error);
            reject(error);
        });
    });
}







export default {
    getRegionLevel,
    getRegion,
    receivedID,
    getScenario
}