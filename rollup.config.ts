import shebang from 'rollup-plugin-preserve-shebang';
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import { join } from "path";

const outputDir = join(import.meta.dirname, "/dist/npm/");

export default [
  {
    input: {
      "bin/ooxml-cli": "bin/ooxml-cli.ts",
    },
    output: {
      dir: outputDir,
      format: "es",
    },
    external: ["yargs/yargs", "yargs/helpers", "fs/promises"],
    plugins: [
      shebang({     
        shebang: '#!/usr/bin/env node'
      }),
      json(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
];
