const wright = require('wright')
    , rollup = require('rollup')
    , node = require('rollup-plugin-node-resolve')
    , babel = require('rollup-plugin-buble')
 
wright({
    main: 'scripts/index.html',
    serve: 'dist',
    //run: 'app',
    debug: 2,
    fps: true,
    js: {
        watch: 'src/**/*.js',
        path: 'app.js',
        compile: roll 
    }
})

let cache = null
function roll(dev) {
    return rollup.rollup({
        input: 'src/index.js',
        cache: cache,
        plugins: [
            node(),
            babel(),
            //ugly({compress: true}),
        ]
    })
    .then(bundle => {
        cache = bundle
        return bundle.generate({
            name: 'app',
            format: 'umd'
        })
    })
    .then(result => result.code)
}
