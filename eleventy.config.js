module.exports = function(eleventyConfig) {
  // Copy CSS files to output (path is relative to input directory)
  eleventyConfig.addPassthroughCopy("src/css");
  
  // Copy any static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Copy Cloudflare Pages configuration files
  eleventyConfig.addPassthroughCopy("_headers");
  eleventyConfig.addPassthroughCopy("_redirects");

  // Add date filter
  eleventyConfig.addFilter("date", function(date, format) {
    // Handle "now" as a special case
    const d = date === "now" || date === null || date === undefined ? new Date() : new Date(date);
    
    if (format === "%Y") {
      return d.getFullYear();
    }
    const months = ["January", "February", "March", "April", "May", "June", 
                    "July", "August", "September", "October", "November", "December"];
    if (format === "%B %d, %Y") {
      return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    }
    return d.toLocaleDateString();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};

