import type { ArgumentsCamelCase, Argv } from "yargs";
import { default as importCmd } from "./import";
// import { default as render } from "./render";
// import { default as report } from "./report";

export default {
  cmd: "ci <docxpath>",
  desc: "import, report & render",
  builder: (yargs: Argv) => {
    yargs.positional("docxpath", {
      type: "string",
      describe: "filepath of docx file",
    });
  },
  handler: async (args: ArgumentsCamelCase<{ docxpath: string }>) => {
    // console.log(">>>> import")
    // await importCmd.handler(args);
    // console.log(">>>> report")
    // await report.handler(args);
    // console.log(">>>> render")
    // await render.handler(args);
  },
};
