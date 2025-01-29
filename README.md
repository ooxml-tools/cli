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
#   pack <docxpath> <dirpath>    pack directory to docx file
#   unpack <docxpath> <dirpath>  unpack docx to a directory
#   list <docxpath>              list files in docx
#   read <docxpath> <filepath>   read file inside docx to sdtout
#   write <docxpath> <filepath>  create/override file in docx
#   init <docxpath>              initializes a blank file (docx)
#   render <filepath>            render files
#   support <filepath>           list supported apps for <filepath>
#   validate <filepath>          validate docx files
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
