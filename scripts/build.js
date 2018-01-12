const rollup = require('rollup')
    , node = require('rollup-plugin-node-resolve')
    , ugly = require('rollup-plugin-uglify')
    , babel = require('rollup-plugin-buble')

//minify js
rollup.rollup({
    input: 'src/index.js',
    plugins:[
        node(),
        babel(),
        ugly({compress: true}),
    ]
})
.then(bundle =>
  bundle.write({
      file: 'dist/app.js',
      format: 'umd',
  })
)
.catch(console.error)

//copy index to dist folder
const fs = require('fs')
const index = fs.readFileSync('scripts/index.htm','utf8')
fs.writeFileSync('dist/index.htm', index)