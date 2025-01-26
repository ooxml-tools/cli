import shebang from 'rollup-plugin-preserve-shebang';
import typescript from "@rollup/plugin-typescript";
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
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
];
