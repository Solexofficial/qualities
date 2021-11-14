import httpService from './http.service';

const qualityEndPoint = `quality/`;

const qualityService = {
  update: async (id, content) => {
    const { data } = await httpService.put(qualityEndPoint + id, content);
    return data;
  },
  get: async id => {
    const { data } = await httpService.get(qualityEndPoint + id);
    return data;
  },
  fetchAll: async () => {
    const { data } = await httpService.get(qualityEndPoint);
    return data;
  },
  create: async content => {
    const { data } = await httpService.post(qualityEndPoint, content);
    return data;
  },
  delete: async id => {
    const { data } = await httpService.delete(qualityEndPoint + id);
    return data;
  },
};

export default qualityService;
