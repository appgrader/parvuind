class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || []
  }
}

module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.js'),
    require('cssnano')({ preset:'default' }),
    process.env.NODE_ENV === 'production'
      ? require('@fullhuman/postcss-purgecss')({
          content: ['./dist/index.html'],
          extractors: [
            { extractor: TailwindExtractor, extensions: ['html', 'js'] }
          ]
        })
      : function() { return [] },
    require('autoprefixer')
  ]
}
