import requiest from '../utils/requiest'


export const getAll = () => {
  return requiest(
    {
      url: "/",
      method: 'get'
    }
  )
}

export const save = (param) => {
  return requiest(
    {
      url: '/',
      method: 'post',
      data:param
    }
  )
}
