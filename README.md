This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```

Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.



*****Firebase

1. Add Firebases to your web app
2. copy config content
3. Create firebase.credential.ts - paste config there 
4. npm install firebase angularfire2 --save
5. import firebase_config, angularfiredatabasemodule and angularfiremodule in app.module.ts

---- Now able to use both angular file and database inside app ----

*****if this error: ERROR Error: Uncaught (in promise): Error: PERMISSION_DENIED: Permission denied Error: PERMISSION_DENIED: Permission denied .... here is the SOLUTION

Allow unauthenticated access to your database

The simplest workaround for the moment (until the tutorial gets updated) is to go into the Database panel in the console for you project, select the Rules tab and replace the contents with these rules:
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}

---- more optional: https://stackoverflow.com/questions/37403747/firebase-permission-denied

***** Note: navPush = go to another page directly in html
      item folder for store item list
      service folder: shoppinglist - to do interaction with the database: edit, push, update, remove