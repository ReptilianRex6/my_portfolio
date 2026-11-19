module.exports = {
  layout: "note.njk",
  eleventyComputed: {
    permalink: ({ draft, includeDrafts, page }) =>
      draft && !includeDrafts ? false : `/notes/${page.fileSlug}/index.html`,
  },
};
