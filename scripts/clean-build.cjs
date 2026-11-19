const { existsSync, realpathSync, rmSync } = require("node:fs");
const { join } = require("node:path");

const output = join(realpathSync(join(__dirname, "..")), "_site");
if (existsSync(output)) {
  if (realpathSync(output) !== output) {
    throw new Error("Expected _site to be a directory inside the portfolio.");
  }
  rmSync(output, { recursive: true });
}
