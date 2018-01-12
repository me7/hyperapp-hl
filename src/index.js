import {h, app} from "hyperapp"
//const {h,app} = hyperapp
const state = {}
const actions = {}
const views = (state, actions) =>
  h('div', {}, [
    h('h3', {}, 'HyperApp Hot Reload using Wright'),
    h('button', {onclick:(()=>console.log('click on:' + new Date()))}, 'Click Me')
  ])
app(state, actions, views, document.body)