# Jayesh MJ's Bookmarks - Read ME
  - [Links](#links)
  - [Features](#features)
  - [Note](#note)

## Links:
- Mahesh: http://jmjcando.github.com/Bookmarks (optional index.htm)
- Jayesh: http://jmjcando.github.com/Bookmarks/jmj.htm#! (optional version=three)
  - http://jmjcando.github.com/Bookmarks/jmj.htm#!?version=two  - Jayesh J (old bootstrap / panel)
  - http://jmjcando.github.com/Bookmarks/jmj.htm#!?version=one  - Jayesh J (old)
  - http://jmjcando.github.com/Bookmarks/jmj.htm#!?data=mock  - Jayesh J (mock data, useful for testing)


## Features:
- query-string:  
  - **version=three** (default) shows bootstrap and dt/dd version
  - **version=two** shows bootstrap version
  - **version=one** shows old version (non--bootstrap)
  - **data=mock** uses mockdata
  - must use # for angularjs to capture query-strings. e.g. http://127.0.0.1:8080/bookmarks/jmj.htm#!?version=one&data=mock

## Note:
- **web-server**:  
  - Web server is needed because angularjs uses xhr to load templeteUrl. (chrome does not allow xhr if file is loaded locally).
  
  - Run on parent folder (that's how it is served by github), so all relative paths are tested well.
  
  - **lite-server** is preferred. A wrapper on browserSync but more suitable for angular. angular.io uses it.  Watches for file and refreshes itself.  It is installed locally and included as scripts in package.json, so can be used like  ```npm run web```.

  - Use http-server (installed via npm) to run on local machine (development) on command-line.     ```http-server```.
  
  - Any other web-server is also just fine such as IIS or IIS express (included with Visual studio).


- **bower**: is used to update client packages.  Using files directly from *bower_components* and then include/exclude from VS project and git seems to be more errorprone and seems not clean.  So, now using gulp *bower-to-lib-gulp.js* to copy needed files from *bower_components* to *lib* folder.  
``` gulp --gulpfile bower-to-lib-gulp.js  ```
~~Only needed files are included into got (source control), using .gitignore.~~

- **issues:** refer to [github repository](https://github.com/jmjcando/bookmarks/issues)

- **Visual Studio Code** is advisable to use with this project, so all files in the folder tree are used. 

- **Visul studio** if used then open folder as web-site. bookmarks.sln (Visual studio) is not up-to-date and not used anymore. 

- **angularjs unit test:** all tests files need to be reviwed.
