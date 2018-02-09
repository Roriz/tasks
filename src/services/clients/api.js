const call = async (_url, params) => {
  await setTimeout(2000);
  return params;
};

export default class API {
  post(url, params) {
    return this.call(url, params, 'post');
  }

  get(url, params) {
    return this.call(url, params, 'get');
  }

  delete(url, params) {
    return this.call(url, params, 'delete');
  }

  update(url, params) {
    return this.call(url, params, 'patch');
  }

  // eslint-disable-next-line
  call(url, params, type) {
    return call(url, params, type);
  }
}
