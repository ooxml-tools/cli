#!/usr/bin/env ./node_modules/.bin/tsx
import { relative } from 'path';
import yargs from 'yargs/yargs';
// import * as commands from "./commands";
import * as fileCommands from "@ooxml-tools/file/commands";
import * as unitsCommands from "@ooxml-tools/units/commands";
import * as renderCommands from "@ooxml-tools/render/commands";
import * as validateCommand from "@ooxml-tools/validate/command";

const scriptName = "ooxml";

yargs(process.argv.slice(2))
    .usage(`${scriptName} <command> [args]`)
    // HACK to remove script-name from commands
    .scriptName("")
    .example([
        [`${scriptName} open ./test.docx word/document.xml`],
        [`${scriptName} cat ./test.docx word/document.xml`],
        [`${scriptName} render --app msword,pages .test.docx`],
        [`${scriptName} validate .test.docx`],
    ])
    // File commands
    .command(fileCommands.pack.cmd, fileCommands.pack.desc, fileCommands.pack.builder, fileCommands.pack.handler)
    .command(fileCommands.unpack.cmd, fileCommands.unpack.desc, fileCommands.unpack.builder, fileCommands.unpack.handler)
    .command(fileCommands.list.cmd, fileCommands.list.desc, fileCommands.list.builder, fileCommands.list.handler)
    .command(fileCommands.read.cmd, fileCommands.read.desc, fileCommands.read.builder, fileCommands.read.handler)
    .command(fileCommands.write.cmd, fileCommands.write.desc, fileCommands.write.builder, fileCommands.write.handler)
    // Render commands
    .command(renderCommands.render.cmd, renderCommands.render.desc, renderCommands.render.builder, renderCommands.render.handler)
    .command(renderCommands.support.cmd, renderCommands.support.desc, renderCommands.support.builder, renderCommands.support.handler)
    // Validate commands
    .command(validateCommand.cmd.replace("$0", "validate"), validateCommand.desc, validateCommand.builder, validateCommand.handler)
    // Units commands
    .command(unitsCommands.convert.cmd, unitsCommands.convert.desc, unitsCommands.convert.builder, unitsCommands.convert.handler)
    // Local commands    
    // .command(commands.import.cmd, commands.import.desc, commands.import.builder, commands.import.handler)
    // .command(commands.ci.cmd, commands.ci.desc, commands.ci.builder, commands.ci.handler)
    // .command(commands.open.cmd, commands.open.desc, commands.open.builder, commands.open.handler)
    .help()
    .argv