import xhr from './xhr/vueResource'

/**
 * 对应后端涉及到用户认证的 API
 */
class BaseService {
  find (className) {
    return xhr({
      url: `/api/${className}`
    })
  }

  findByPage (className, page) {
    return xhr({
      url: `/api/${className}?page=${page}&limit=10`
    })
  }

  findBy (className, key, value) {
    return xhr({
      url: `/api/${className}/findBy/${key}/${value}`
    })
  }

  get (className, id) {
    return xhr({
      url: `/api/${className}/${id}`
    })
  }

  post (className, body) {
    return xhr({
      method: 'post',
      url: `/api/${className}`,
      body: body
    })
  }

  delete (className, id) {
    return xhr({
      method: 'delete',
      url: `/api/${className}/${id}`
    })
  }

  put (className, id, body) {
    return xhr({
      method: 'put',
      url: `/api/${className}/${id}`,
      body: body
    })
  }

}

// 实例化后再导出
export default new BaseService()
