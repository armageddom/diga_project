
import axios from 'axios';






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

function getRegion()
{
    return new Promise((resolve, reject) => {
        axios.get("https://melatupa.azurewebsites.net/regionLevels/2/regions").then(response => {

            const deeps = response.data.map(deep => {
               
                 
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
    getRegion  
}