const { hooks } = require('@adonisjs/ignitor')
const art = require('ascii-art')
const path = require('path')

hooks.before.httpServer(() => {
  art.font('Vuedonara Mix', 'Doom', function (rendered) {
    console.log(rendered)
  });
})

hooks.after.providersBooted(() => {
  const View = use('Adonis/Src/View')
  const Helpers = use('Helpers')

  View.global('mix', text => {
    if (!text) return
    
    const manifest = require(path.join(Helpers.publicPath(), 'mix-manifest.json'))
    return manifest[text]
  })
})