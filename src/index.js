import {h, app} from "hyperapp"
//const {h,app} = hyperapp
state = {}
actions = {}
views = (state, actions) =>
  h('h1', {}, 'HyperApp')
app(state, actions, views, document.body)