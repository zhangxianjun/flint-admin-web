import { request } from 'ice';

export default {
  // 简单场景
  async getUser() {
    return await request('/api/user');
  },

  // 参数场景
  async getRepo(id) {
    return await request(`/api/repo/${id}`);
  },

  // 登录接口
  async getDetail(data) {
    return await request.post('/login', data);
  }
}