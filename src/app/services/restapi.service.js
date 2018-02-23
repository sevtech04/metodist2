let api;

export class restapi {
  constructor(Restangular) {
    'ngInject';
    api = Restangular;
  }

  apiGetList(url, params) {
    if (params) {
      return api.all(url).customGET('', params);
    } else {
      return api.all(url).customGET('');
    }
  }

  apiGet(url, params) {
    let prms = params ? params : {};
    return api.all(url).customGET('', prms);
  }

  apiPost(url, data) {
    return api.all(url).customPOST(data);
  }

  apiUpdate(url, data) {
    return api.all(url).customPUT(data);
  }

  apiDelete(url) {
    return api.all(url).remove();
  }

}
