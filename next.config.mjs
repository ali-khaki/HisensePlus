import { withStoreConfig } from "./store-config.js"
import store from "./store.config.json" assert { type: "json" }

const config = withStoreConfig({
  experimental: {
    serverActions: true,
  },
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: [
      "backend-public-images.s3.eu-west-1.amazonaws.com",
      "localhost",
      "backend-server-testing.s3.amazonaws.com",
      "hisenseplus.s3.ap-south-1.amazonaws.com",
    ],
  },
})

console.log("next.config.js", JSON.stringify(config, null, 2))

export default config
