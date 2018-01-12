import {h, app} from "hyperapp"
//const {h,app} = hyperapp
const state = {}
const actions = {}
const views = (state, actions) =>
  h('h1', {}, 'HyperApp Hot Reload')
app(state, actions, views, document.body)