<h1>
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://ooxml-tools.github.io/design/images/cli-dark.png">
        <source media="(prefers-color-scheme: light)" srcset="https://ooxml-tools.github.io/design/images/cli-light.png">
        <img alt="@ooxml-tools/cli" height="56" src="https://ooxml-tools.github.io/design/images/cli-light.png">
    </picture>
</h1>

Command line tools for dealing with Office Open XML files in nodejs.

## Usage

```bash
npx @ooxml-tools/cli --help
# ooxml <command> [args]
#
# Commands:
#   pack <ooxmlpath> <dirpath>    pack directory to docx file
#   unpack <ooxmlpath> <dirpath>  unpack docx to a directory
#   list <ooxmlpath>              list files in docx
#   read <ooxmlpath> <filepath>   read file inside docx to sdtout
#   write <ooxmlpath> <filepath>  create/override file in docx
#   init <ooxmlpath>              initializes a blank file (docx)
#   render <ooxmlpath>            render files
#   support <ooxmlpath>           list supported apps for <ooxmlpath>
#   validate <ooxmlpath>          validate docx files
#   convert <from> <to> <value>  convert between units
#
# Options:
#   --version  Show version number                                       [boolean]
#   --help     Show help                                                 [boolean]
#
# Examples:
#   ooxml init ./test.docx
#   ooxml read ./test.docx word/document.xml
#   ooxml render ./test.docx
```

## License

MIT
