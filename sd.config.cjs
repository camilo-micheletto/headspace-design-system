module.exports = {
  source: ["src/styles/tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "src/styles/base/colors/",
      files: [{
        destination: "_colors.scss",
        format: "scss/variables"
      }]
    },
    js: {
      transformGroup: "json",
      buildPath: "src/styles/base/colors/",
      transforms: ["name/cti/kebab"],
      files: [{
        destination: "colors.json",
        format: "json"
      }]
    }
  }
}
