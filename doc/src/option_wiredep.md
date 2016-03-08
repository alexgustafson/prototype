---
label: Option Wiredep
id: option_wiredep
categorySlug:
categoryLabel: 
categoryRank: 
documentRank: 11
highlightTheme: 'solarized_dark'


Option Wiredep
==============

Wiredep is a node module that will automatically add references to js, css, 
sass and less files from packages imported via bower.

We will add a wiredep watcher that will watch the bower.json file for 
changes and then add the appropriate links.

## Install Dependencies

From the root directory issue the following commands:

    $ npm install bower --save-dev
    $ npm install wiredep --save-dev
    
## Add Wiredep Placeholders
  
In the src/jade/index.jade file add the css and js placeholder. Css placeholders
go in the head, js placeholders at the end of the body.

    doctype html
    html(lang="en")
      head
        title= pageTitle
        script(type='text/javascript').
          if (foo) {
            bar(1 + 5)
          }
    
        // bower:css
        // endbower
    
      body
        h1 Jade - node template engine
        #container.col
          p.
            Jade is a terse and simple
            templating language with a
            strong focus on performance
            and powerful features..
    
        // bower:js
        // endbower

For bower dependencies that use sass ( susy or foundation for example ) wiredep
will automatically add those import statements to your sass style as well.
Just add the sass placeholders in your src/scss/main.scss file.


    // bower:scss
    // endbower
    
    body {
      background-color: dimgrey;
    
      h3 {
        color: white;
      }
    }