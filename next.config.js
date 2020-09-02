// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/
// })

// module.exports = withMDX({
  //   pageExtensions: ['js', 'jsx', 'md', 'mdx']
  // })
  
const withPlugins = require('next-compose-plugins')

const withPWA = require('next-pwa')
const optimizedImages = require('next-optimized-images')
const { resolve } = require('path')

const nextConfig = {
  webpack: (config) => {
    // next-optimized-images
    config.resolve.alias['@public'] = resolve(__dirname, 'public')
    return config
  }
}

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          disable: process.env.MODE_ENV === 'development',
          dest: 'public'
        }
      }
    ],
    [optimizedImages, {
      // these are the default values so you don't have to provide them if they are good enough for your use-case.
      // but you can overwrite them here with any valid value you want.
      inlineImageLimit: 8192,
      imagesFolder: 'images',
      imagesName: '[name]-[hash].[ext]',
      handleImages: ['jpeg', 'png', 'webp'],
      removeOriginalExtension: true,
      optimizeImages: true,
      optimizeImagesInDev: false,
      mozjpeg: {
        quality: 85,
      },
      optipng: {
        optimizationLevel: 3,
      },
      responsive: {
        adapter: require('responsive-loader/sharp'),
        sizes: [640, 960, 1200, 1800],
      },
      webp: {
        preset: 'default',
        quality: 85,
      },
    }],
  ],
  nextConfig
)