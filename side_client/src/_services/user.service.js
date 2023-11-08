import http from "../http-common";


class UserDataService {
  getAll() {
    return http.get("/admin/users/manage");
  }

  get(id) {
    return http.get(`/admin/users/manage/${id}`);
  }

  create(data) {
    return http.post("/admin/users/manage/create", data);
  }

  update(id, data) {
    return http.put(`/admin/users/manage/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/admin/users/manage/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/admin/users/manage/delete`);
  }

  findByIsActive(isActive) {
    return http.get(`/admin/users/manage?isActive=${isActive}`);
  }
}


export default new UserDataService();