function withStoreConfig(nextConfig = {}) {
  const features = nextConfig.features || {}
  delete nextConfig.features

  nextConfig.env = nextConfig.env || {}

  Object.entries(features).forEach(([key, value]) => {
    if (value) {
      nextConfig.env[`FEATURE_${key.toUpperCase()}_ENABLED`] = true
    }
  })

  return nextConfig
}

module.exports = { withStoreConfig }

// import path from "path"
// import { fileURLToPath } from "url"

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// export function withStoreConfig(nextConfig = {}) {
//   return {
//     ...nextConfig,
//     env: {
//       ...nextConfig.env,
//       STORE_NAME: "Hisense Plus",
//     },
//     webpack: (config, options) => {
//       config.resolve.alias = {
//         ...config.resolve.alias,
//         "@lib": path.resolve(__dirname, "lib"),
//         "@modules": path.resolve(__dirname, "modules"),
//         "@pages": path.resolve(__dirname, "pages"),
//       }

//       return config
//     },
//   }
// }
