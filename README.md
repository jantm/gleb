# GLEB - Gulp Less Email Builder

GLEB automates the flow of creating email templates with less.

## Features

Development:

- compile `.less` files to CSS
- insert the generated CSS into the HTML template
- use the MailChimp's inliner to inline all styles
- run a browser preview and automatically refresh when a `.less` or `.html` file changes (using *BrowserSync* and *gulp-watch* for that)

Build:

- compile, insert and inline styles just as in the development flow
- replace all image paths in the final HTML template (`src` and `href` attributes, `background-image` urls) from your local paths to the final hosted ones (e.g. on AWS) 

Test:

- use Mailgun to send a specific email with a single gulp task 


## Installation

Download the package or clone the repo and run
```console
npm install
```

Now you should be fully equipped to code and test emails.


## Usage

### TL;DR:

Run `gulp serve` and start editing your HTML/less files. The default browser will open and automatically refresh on every file save.

Run `gulp build` to generate the final HTML template to send.

Run `gulp send -t template_name` to send a test email with the developed template.


### Full explanation

Aside from the gulp tasks etc., the default directory structure looks like this:
```
|- html
|  |- template-foo.html
|  \- template-bar.html
|
|- images
|  |- logo.png
|  \- my-photo.jpg
|
\- less
   |- style.less
   \- custom-template.less
```

You can change it in the `config.json` file, where you can also set a build directory, set test email data, and add MailChimp and Mailgun credentials.

When you run `gulp serve`, the default browser will show you the newly created `preview` directory. All templates processed by the watcher (triggered by the `gulp serve` command) are put here.

When you run `gulp build`, final versions of the processed templates end up in the newly created `build` directory.

Note that currently when you run `gulp serve` or `gulp build`, *all* templates will be processed (which might slow things down if you have lots of templates).

### Inlining styles

The styles you write in your `.less` files will be automatically injected to the template HTML. However, after that they need to be *inlined*, so that different email clients can display your emails properly.

We use Mailchimp's inliner for that purpose and you need to provide a Mailchimp API key in the `config.json` file. No worries, simply set up a free account at Mailchimp and you'll find the API key in your *Account settings* (*Extras/API keys*).

### Sending emails

The `gulp send` task takes the *template name* as an argument, and sends the selected emails according to the settings in the `config.json`.

A template name is simply the filename without the extension, so if you have a template `html/0316-fancy-email.html`, its name is `0316-fancy-email`. 

```console
gulp send -t 0316-fancy-email
```

It uses Mailgun for that, so you need proper credentials. Sign up for a free account and enter the *domain* and the public *API key* in your `config.json`.

Note that you have to run a `gulp build` task first, so there will actually be an up to date template to send.
