import { observable, action } from 'mobx-miniprogram'

const store = observable({
  // token
  token: '',
  setToken: action(function (payload){
    this.token = payload
  }),
  // userData
  userData: '',
  setUserData: action(function(a){
    this.userData = a
  })
})

export default store