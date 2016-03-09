---
label: Option Browsersync
id: option_browsersync
categorySlug:
categoryLabel: 
categoryRank: 
documentRank: 14
highlightTheme: 'solarized_dark'


Option Browsersync
==================

Wiredep is a node module that will automatically add references to js, css, 
sass and less files from packages imported via bower.

We will add a wiredep watcher that will watch the bower.json file for 
changes and then add the appropriate links.

## Install Dependencies

From the root directory issue the following commands:

    $ npm install bower --save-dev
    $ npm install wiredep --save-dev
    
    $ bower init
    
## Add Wiredep Placeholders
  
