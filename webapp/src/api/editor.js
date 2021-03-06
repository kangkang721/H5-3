import * as http from '../util/http'

const getUserThemeList = (type) => {
	
  return http.get('/api/pages?type=' + type)
}
const getPageByThemeId = (id) => {
  return http.get('/api/pages/' + id)
}
const saveTheme = (theme) => {
  return http.post('/api/pages', theme)
}
const delTheme = (theme) => {
  return http.del('/api/pages', theme)
}
const updateTheme = (theme) => {
  return http.put('/api/pages/' + theme._id, theme)
}

const uploadPic = (data) => {
  return http.post('/api/upload', data)
}

const getPicListByThemeId = (_id) => {
  return http.get('/api/upload/theme/' + _id)
}
module.exports = {
  getUserThemeList, saveTheme, updateTheme, uploadPic, getPageByThemeId, getPicListByThemeId, delTheme
}
