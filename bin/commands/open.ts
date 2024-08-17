import { join } from "path";
import type { ArgumentsCamelCase, Argv } from "yargs";
// import open from "../lib/open";

export default {
  cmd: "open <docxpath> <filepath>",
  desc: "open file within docx saving on exit",
  builder: (yargs: Argv) => {
    yargs
      .positional("docxpath", {
        type: "string",
        describe: "filepath of docx file",
      })
      .positional("filepath", {
        type: "string",
        describe: "filepath within compressed docx",
      });
  },
  handler: async (
    args: ArgumentsCamelCase<{ docxpath: string; filepath: string }>,
  ) => {
    // const docxFilePath = join(process.cwd(), args.docxpath);
    // const docxInnerFilePath = args.filepath;
    // open(docxFilePath, docxInnerFilePath, (event, filepath) => {
    //   if (event === "open") {
    //     console.log("open: %s", filepath);
    //   } else if (event === "write") {
    //     console.log("write: %s", filepath);
    //   }
    // });
  },
};
