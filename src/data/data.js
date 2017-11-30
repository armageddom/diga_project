
import axios from 'axios';




function getRegion()
{
    return new Promise((resolve, reject) => {
        axios.get("http://melatupa.azurewebsites.net/regionLevels").then(response => {

            const regions = response.data.map(region => {
               
                 console.log(region);
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



export default {
    getRegion
}