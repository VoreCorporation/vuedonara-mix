const { hooks } = require('@adonisjs/ignitor')
const path = require('path')

hooks.after.providersBooted(() => {
  const View = use('Adonis/Src/View')
  const Helpers = use('Helpers')

  View.global('mix', text => {
    if (!text) return
    
    const manifest = require(path.join(Helpers.publicPath(), 'mix-manifest.json'))
    return manifest[text]
  })
})