const rollup = require('rollup')
    , nodeResolved = require('rollup-plugin-node-resolve')

//minify js
rollup.rollup({
    input: 'src/index.js',
    plugins:[
        nodeResolved()
    ]
})
.then(bundle =>
  bundle.write({
      file: 'dist/app.js',
      format: 'umd'
  })
)
.catch(console.error)

//copy index to dist folder
const fs = require('fs')
const index = fs.readFileSync('scripts/index.htm','utf8')
fs.writeFileSync('dist/index.htm', index)