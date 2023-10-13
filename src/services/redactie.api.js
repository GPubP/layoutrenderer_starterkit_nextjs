import { titleReducer } from '@/reducers/block.reducers';
const { RESTDataSource } = require('@apollo/datasource-rest');

const { API_GW_URL, WCM_BASE_PATH, WCM_API_KEY, WCM_SITE_ID } = process.env;

class RedactieAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = API_GW_URL;
  }

  willSendRequest(_path, request) {
    request.headers['apikey'] = WCM_API_KEY;
  }

  async getSiteTitle() {
    try {
      const result = await this.get(`${WCM_BASE_PATH}/sites/v1/sites/${WCM_SITE_ID}`);
      return titleReducer(`Jouw WCM website naam: ${result.data.name}`);
    } catch (e) {
      return titleReducer('Fout bij ophalen uit de redactie');
    }
  }
}

export default RedactieAPI;
