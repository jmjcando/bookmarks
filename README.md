# Jayesh MJ's Bookmarks - Read ME
  - [Links](#links)
  - [Features](#features)
  - [Note](#note)

## Links:
- http://jmjcando.github.com/Bookmarks  MaheshJ  
- http://jmjcando.github.com/Bookmarks/jmj.htm  - Jayesh J  
  - http://jmjcando.github.com/Bookmarks/jmj.htm?version=old  - Jayesh J (old)
  - http://jmjcando.github.com/Bookmarks/jmj.htm?data=mock  - Jayesh J (mock data, useful for testing)


## Features:
- query-string:  
  - **version=two** (default) shows bootstrap version
  - **version=one** shows old version (non--bootstrap)
  - **data=mock** uses mockdata
  - must use # for angularjs to capture query-strings. e.g. http://127.0.0.1:8080/bookmarks/jmj.htm#!?version=one&data=mock

## NOTE:
- Use http-server (installed via node) to run on local machine (development) on command-line.
Run on parent folder (that's how it is served by github), so all relative paths are tested well.
    ```
      http-server
    ```
    http-server is needed because angularjs uses xhr to load templeteUrl. Any other web-server is also just fine. May be IIS or IIS express.
- **bower**: is used to update client packages.  Only needed files are included into got (source control), using .gitignore.
- **issues:** refer to [github repository](https://github.com/jmjcando/bookmarks/issues)
- **Visual Studio Code** is advisable to use with this project, so all files in the folder tree are used. 
- **Visul studio** if used then open folder as web-site. bookmarks.sln (Visual studio) is not up-to-date and not used anymore. 
- **angularjs unit test:** all tests files need to be reviwed.

