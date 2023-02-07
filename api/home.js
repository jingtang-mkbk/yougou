import fly from '../utils/request'

// channels
export const getChannels = () => {
  return fly.get('user/channels')
}

// articles
export const getArticle = (data)=> {
  return fly.get('articles', data)
}

// 详情articles
export const getDetailArticle = (id)=> {
  return fly.get(`articles/${id}`)
}