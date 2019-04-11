const vueModal = {
  // 1. add global method or property
  install(Vue, options){
  Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })
}
}
