const headers = {
  'Content-Type': 'application/json'
}

const get = async <T>(url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    headers
  })
  return await response.json() as T
}

const post = async <T>(url: string, body: any) => {
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body
  })
  return await response.json() as T
}

const put = async <T>(url: string, body: any) => {
  const response = await fetch(url, {
    method: 'PUT',
    headers,
    body
  })
  return await response.json() as T
}

const _delete = async <T>(url: string) => {
  const response = await fetch(url, {
    method: 'DELETE',
    headers
  })
  return await response.json() as T
}

export const http = {
  get,
  post,
  put,
  delete: _delete
}
