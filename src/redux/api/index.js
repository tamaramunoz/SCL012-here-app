import axios from 'axios';

//const baseURL = 'https://pde.api.here.com/1/tile.json?app_id={EseX7GEBrMUT4G2oGO0I}&app_code={qISHf7_vWevIZTcWctGJRA}&layer=LINK_ATTRIBUTE_FC1&level=9&tilex=537&tiley=399';
const  baseURL  = "https://vector.hereapi.com/v2/vectortiles/base/mc/11/1100/673/omv?apikey=06Xbckql-JVdM5xLN3eJia30CBj-IxRqHmj8kJxxyLQ"
export const apiCall = (url, data, headers, method)=> axios({

    method,
    url: baseURL,
    data, 
    headers
});
