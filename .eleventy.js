module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/_data");
  
  // Set directories
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};