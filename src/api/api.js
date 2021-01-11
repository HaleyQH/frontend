import requiest from '../utils/requiest'


export const getData = (param) => {
  return requiest(
    {
      url: "/query",
      method: 'get',
      params: param
    }
  )
}

export const getAjaxData = (params) => {
  return requiest(
    {
      url:"/hint",
      method: 'get',
      params: params
    }
  )
}

export const save = (headers, param) => {
  return requiest(
    {
      url: '/',
      method: 'post',
      headers: headers,
      data: param
    }
  )
}
