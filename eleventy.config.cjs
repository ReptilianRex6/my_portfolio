const path = require("node:path").posix;

const statusLabels = {
  shipped: "Shipped",
  prototype: "Prototype",
  planned: "Planned",
};

module.exports = function (config) {
  const includeDrafts = process.env.ELEVENTY_RUN_MODE === "serve";

  config.addPassthroughCopy("public/styles.css");
  config.addPassthroughCopy("public/favicon.svg");
  config.addPassthroughCopy("public/images");
  config.addCollection("notes", (collection) =>
    collection
      .getFilteredByGlob("public/notes/*.md")
      .filter((note) => includeDrafts || !note.data.draft)
      .sort((a, b) => (a.data.order ?? 100) - (b.data.order ?? 100) || a.date - b.date)
  );
  config.addGlobalData("includeDrafts", includeDrafts);
  config.addFilter("statusLabel", (value) => statusLabels[value] || "Prototype");
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

