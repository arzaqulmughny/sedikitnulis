// scripts/generate-reserved-paths.mjs

import fs from "node:fs";
import path from "node:path";

const APP_DIR = path.join(process.cwd(), "app");
const OUTPUT_FILE = path.join(
  process.cwd(),
  "src/generated/reserved-paths.json"
);

const reservedPaths = new Set();

function isDynamicSegment(segment) {
  return (
    segment.startsWith("[") ||
    segment.startsWith("...")
  );
}

function isRouteGroup(segment) {
  return (
    segment.startsWith("(") &&
    segment.endsWith(")")
  );
}

function isPageDirectory(directory) {
  return (
    fs.existsSync(path.join(directory, "page.tsx")) ||
    fs.existsSync(path.join(directory, "page.ts"))
  );
}

function scan(directory, segments = []) {
  const entries = fs.readdirSync(directory, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const segment = entry.name;
    const fullPath = path.join(directory, segment);

    // Dynamic routes should not be treated as reserved paths.
    if (isDynamicSegment(segment)) {
      scan(fullPath, segments);
      continue;
    }

    // Route groups are not included in the URL.
    if (isRouteGroup(segment)) {
      scan(fullPath, segments);
      continue;
    }

    const nextSegments = [...segments, segment];

    /*
     * We only need top-level paths because the username
     * is located at the first URL segment:
     *
     * /{username}/writings/{slug}
     */
    if (
      nextSegments.length === 1 &&
      isPageDirectory(fullPath)
    ) {
      reservedPaths.add(segment);
    }

    scan(fullPath, nextSegments);
  }
}

scan(APP_DIR);

const result = [...reservedPaths].sort();

fs.mkdirSync(path.dirname(OUTPUT_FILE), {
  recursive: true,
});

fs.writeFileSync(
  OUTPUT_FILE,
  JSON.stringify(result, null, 2) + "\n"
);