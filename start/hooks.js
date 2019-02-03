const { hooks } = require('@adonisjs/ignitor')
const art = require('ascii-art')
const path = require('path')
const gradient = require('gradient-string')

hooks.before.httpServer(() => {
  if (process.env.NODE_ENV == 'production') {
    art.font('Vuedonara Mix', 'Doom', function (rendered) {
      console.log(gradient.rainbow(rendered))
    })
  }
})