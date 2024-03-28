import apiClient from "./api-client";

interface Entity {
  id: number;
  name: string;
}

class HTTPService {
  constructor(private resource: string) {}

  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>("/" + this.resource, {
      signal: controller.signal,
    });

    const handleCancel = () => controller.abort();

    return { request, handleCancel };
  }

  add<T>(entity: T) {
    return apiClient.post("/" + this.resource, entity);
  }

  update<T extends Entity>(entity: T) {
    return apiClient.patch("/" + this.resource + "/" + entity.id, entity);
  }

  delete(id: number) {
    return apiClient.delete("/" + this.resource + "/" + id);
  }
}
const create = (resource: string) => new HTTPService(resource);
export default create;
