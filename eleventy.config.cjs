const path = require("node:path").posix;

module.exports = function (config) {
  const includeDrafts = process.env.ELEVENTY_RUN_MODE === "serve";

  config.addPassthroughCopy("public/styles.css");
  config.addCollection("notes", (collection) =>
    collection.getFilteredByGlob("public/notes/*.md")
      .filter((note) => includeDrafts || !note.data.draft)
      .reverse()
  );
  config.addGlobalData("includeDrafts", includeDrafts);
  config.addFilter("siteLink", (target, currentPage) => {
    currentPage ||= "/";
    const from = currentPage.endsWith("/") ? currentPage : path.dirname(currentPage);
    const [destination, fragment] = target.split("#");
    const relative = path.relative(from, path.resolve("/", destination)) || ".";
    return relative + (destination.endsWith("/") ? "/" : "") + (fragment ? "#" + fragment : "");
  });
  config.addFilter("noteDate", (date) =>
    new Intl.DateTimeFormat("en", { dateStyle: "medium", timeZone: "UTC" }).format(date)
  );

  return {
    dir: { input: "public", output: "_site" },
    htmlTemplateEngine: "njk",
  };
};

