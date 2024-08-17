import type { ArgumentsCamelCase, Argv } from "yargs";
// import extract from "../lib/extract";
import { basename, join } from "path";
import { mkdir } from "fs/promises";

export default {
  cmd: "import <docxpath>",
  desc: "import .docx into ./docx-files",
  builder: (yargs: Argv) => {
    yargs.positional("docxpath", {
      type: "string",
      describe: "filepath of docx file",
    });
  },
  handler: async (args: ArgumentsCamelCase<{ docxpath: string }>) => {
    // const docxFilePath = join(process.cwd(), args.docxpath);
    // const dirpath = join(process.cwd(), "/docx-files/", basename(docxFilePath));
    // await mkdir(dirpath, {recursive: true});
    // await extract(docxFilePath, dirpath);
  },
};
