# <img alt="@ooxml-tools/cli" height="56" src="https://github.com/user-attachments/assets/aab3d389-6c30-4d5b-932d-2abe7734e21e" />
Command line tools for dealing with Office Open XML files in nodejs.

## Usage

```bash
npx @ooxml-tools/cli [args]
# 
# Commands:
#   pack <docxpath> <dirpath>    pack directory to docx file
#   unpack <docxpath> <dirpath>  unpack docx to a directory
#   list <docxpath>              list files in docx
#   read <docxpath> <filepath>   read file inside docx to sdtout
#   write <docxpath> <filepath>  create/override file in docx
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
#   bin/ooxml-cli.ts open ./test.docx word/document.xml
#   bin/ooxml-cli.ts cat ./test.docx word/document.xml
#   bin/ooxml-cli.ts render --app msword,pages .test.docx
#   bin/ooxml-cli.ts validate .test.docx
```


## License
MIT

