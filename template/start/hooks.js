const { hooks } = require('@adonisjs/ignitor')
const art = require('ascii-art')
const path = require('path')

hooks.before.httpServer(() => {
  art.font('Vuedonara Mix', 'Doom', function (rendered) {
    console.log(rendered)
  });
})