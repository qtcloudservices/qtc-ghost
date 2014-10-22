# Ghost blog platform for Qt Cloud Services

This is a template for installing and running [Ghost](https://ghost.org/) on [Qt Cloud Services](http://www.qtcloudservices.com/) with a focus on best practises while using the Qt Cloud Services platform-as-a-service (PaaS) features.

Ghost is installed by NPM. To upgrade Ghost version, simply update the `package.json` file.

You can customize the site and themes by modifying files at `/content` directory.

See the working demo (our development blog) at http://feed.qtcloudservices.com/

## Installation

### 1. Clone the repository from Github

```sh
$ git clone git://github.com/qtcloudservices/qtc-ghost.git
```

### 2. Create MAR and MDB instances.

You can create the instances with Qt Cloud Services [management console](https://console.qtcloudservices.com). 

    * Select **Mini** runtime size for MAR instance. 
    * Select **MySQL 5.6** for MDB with the amount of memory you feel comfortable. For small blog with few visitors the 256MB memory is enough.

### 3. Initialize the `qtc-cli` command-line tool.

You will need `git remote address` for your MAR instance to initialize the [qtc-cli](https://developer.qtcloudservices.com/qtc/cli) tool. Copy/paste your git remote address from MAR instance general settings panel. 

```sh
$ cd qtc-ghost
$ git remote add qtc YOUR_MAR_GIT_REMOTE_ADDRESS_HERE
```

### 4. Add application configuration with qtc-cli tool.

You will need database configuration from your MDB instance and SMTP server settings to complete the application configuration. Hint! If you don't have SMTP server, check [Mandrill](https://mandrill.com/) or something similar.

```sh
$ qtc-cli mar envs:set NODE_ENV=production
$ qtc-cli mar envs:set APP_URL=http://ghostonqtc.com
$ qtc-cli mar envs:set SMTP_HOST=YOUR_SMTP_SERVER_ADDRESS_HERE
$ qtc-cli mar envs:set SMTP_PORT=YOUR_SMTP_SERVER_PORT_HERE
$ qtc-cli mar envs:set SMTP_USERNAME=YOUR_SMTP_SERVER_USERNAME_HERE
$ qtc-cli mar envs:set SMTP_PASSWORD=YOUR_SMTP_SERVER_PASSWORD_HERE
$ qtc-cli mar envs:set MYSQL_HOST=YOUR_MDB_ADDRESS_HERE
$ qtc-cli mar envs:set MYSQL_PORT=YOUR_MDB_PORT_HERE
$ qtc-cli mar envs:set MYSQL_USERNAME=YOUR_MDB_USERNAME_HERE
$ qtc-cli mar envs:set MYSQL_PASSWORD=YOUR_MDB_PASSWORD_HERE
$ qtc-cli mar envs:set MYSQL_DATABASE=ghost_db
$ qtc-cli mar envs:set MYSQL_CHARSET=utf8    
```

### 5. Deploy to Managed Application Runtime

```sh
$ git push qtc master
> Counting objects: 40, done.
> Delta compression using up to 4 threads.
> Compressing objects: 100% (28/28), done.
> Writing objects: 100% (40/40), 26.20 KiB | 0 bytes/s, done.
> Total 40 (delta 5), reused 40 (delta 5)
> remote: -----> Node.js app detected
> remote:
> remote:        PRO TIP: Specify a node version in package.json
> remote:        See https://devcenter.heroku.com/articles/nodejs-support
> remote:
> remote: -----> Defaulting to latest stable node: 0.10.32
> remote: -----> Downloading and installing node
> remote: -----> Installing dependencies
> remote:        npm WARN package.json qtc-ghost@0.1.0 No repository field.
> remote:        npm WARN engine html-to-text@0.1.0: wanted: {"node":"~0.8.0"} (current: {"node":"0.10.32","npm":"1.4.28"})
> remote:        npm WARN deprecated set-immediate@0.1.1: Use `setimmediate` instead
> remote:
> remote:        > sqlite3@2.2.7 install /tmp/build/node_modules/ghost/node_modules/sqlite3
> remote:        > node-pre-gyp install --fallback-to-build
> remote:
> remote:        [sqlite3] Command failed:
> remote:        module.js:356
> remote:        Module._extensions[extension](this, filename);
> remote:        ^
> remote:        Error: /lib/libc.so.6: version `GLIBC_2.14' not found (required by /tmp/build/node_modules/ghost/node_modules/sqlite3/lib/binding/node-v11-linux-x64/node_sqlite3.node)
> remote:        at Module.load (module.js:356:32)
> remote:        at Function.Module._load (module.js:312:12)
> remote:        at Module.require (module.js:364:17)
> remote:        at require (module.js:380:17)
> remote:        at [eval]:1:1
> remote:        at Object.<anonymous> ([eval]-wrapper:6:22)
> remote:        at Module._compile (module.js:456:26)
> remote:        at evalScript (node.js:536:25)
> remote:        at startup (node.js:80:7)
> remote:        at node.js:906:3
> remote:
> remote:        node-pre-gyp ERR! Testing pre-built binary failed, attempting to source compile
> remote:        make: Entering directory `/tmp/build/node_modules/ghost/node_modules/sqlite3/build'
> remote:        ACTION deps_sqlite3_gyp_action_before_build_target_unpack_sqlite_dep Release/obj/gen/sqlite-autoconf-3080500/sqlite3.c
> remote:        TOUCH Release/obj.target/deps/action_before_build.stamp
> remote:        CC(target) Release/obj.target/sqlite3/gen/sqlite-autoconf-3080500/sqlite3.o
> remote:        AR(target) Release/obj.target/deps/sqlite3.a
> remote:        COPY Release/sqlite3.a
> remote:        CXX(target) Release/obj.target/node_sqlite3/src/database.o
> remote:        CXX(target) Release/obj.target/node_sqlite3/src/node_sqlite3.o
> remote:        CXX(target) Release/obj.target/node_sqlite3/src/statement.o
> remote:        SOLINK_MODULE(target) Release/obj.target/node_sqlite3.node
> remote:        SOLINK_MODULE(target) Release/obj.target/node_sqlite3.node: Finished
> remote:        COPY Release/node_sqlite3.node
> remote:        COPY /tmp/build/node_modules/ghost/node_modules/sqlite3/lib/binding/node-v11-linux-x64/node_sqlite3.node
> remote:        TOUCH Release/obj.target/action_after_build.stamp
> remote:        make: Leaving directory `/tmp/build/node_modules/ghost/node_modules/sqlite3/build'
> remote:        express@4.9.2 node_modules/express
> remote:        ├── merge-descriptors@0.0.2
> remote:        ├── utils-merge@1.0.0
> remote:        ├── fresh@0.2.4
> remote:        ├── cookie@0.1.2
> remote:        ├── escape-html@1.0.1
> remote:        ├── range-parser@1.0.2
> remote:        ├── cookie-signature@1.0.5
> remote:        ├── finalhandler@0.2.0
> remote:        ├── vary@1.0.0
> remote:        ├── media-typer@0.3.0
> remote:        ├── parseurl@1.3.0
> remote:        ├── methods@1.1.0
> remote:        ├── path-to-regexp@0.1.3
> remote:        ├── depd@0.4.5
> remote:        ├── qs@2.2.3
> remote:        ├── on-finished@2.1.0 (ee-first@1.0.5)
> remote:        ├── debug@2.0.0 (ms@0.6.2)
> remote:        ├── proxy-addr@1.0.1 (ipaddr.js@0.1.2)
> remote:        ├── etag@1.3.1 (crc@3.0.0)
> remote:        ├── send@0.9.2 (destroy@1.0.3, mime@1.2.11, ms@0.6.2)
> remote:        ├── serve-static@1.6.4 (send@0.9.3)
> remote:        ├── type-is@1.5.2 (mime-types@2.0.2)
> remote:        └── accepts@1.1.2 (negotiator@0.4.9, mime-types@2.0.2)
> remote:
> remote:        ghost@0.5.3 node_modules/ghost
> remote:        ├── connect-slashes@1.2.0
> remote:        ├── colors@0.6.2
> remote:        ├── xml@0.0.12
> remote:        ├── node-uuid@1.4.1
> remote:        ├── validator@3.4.0
> remote:        ├── passport-http-bearer@1.0.1 (passport-strategy@1.0.0)
> remote:        ├── showdown@0.3.2-ghost
> remote:        ├── morgan@1.3.1 (basic-auth@1.0.0, depd@0.4.5, on-finished@2.1.0)
> remote:        ├── semver@2.2.1
> remote:        ├── bcryptjs@0.7.10
> remote:        ├── passport@0.2.0 (pause@0.0.1, passport-strategy@1.0.0)
> remote:        ├── fs-extra@0.8.1 (jsonfile@1.1.1, rimraf@2.2.8, ncp@0.4.2, mkdirp@0.3.5)
> remote:        ├── passport-oauth2-client-password@0.1.1 (pkginfo@0.2.3, passport@0.1.18)
> remote:        ├── oauth2orize@1.0.1 (uid2@0.0.3, utils-merge@1.0.0, debug@0.7.4)
> remote:        ├── rss@0.2.1 (mime@1.2.11)
> remote:        ├── downsize@0.0.5 (xregexp@2.0.0)
> remote:        ├── body-parser@1.8.2 (media-typer@0.3.0, bytes@1.0.0, raw-body@1.3.0, depd@0.4.5, on-finished@2.1.0, qs@2.2.3, type-is@1.5.2, iconv-lite@0.4.4)
> remote:        ├── bluebird@2.3.0
> remote:        ├── compression@1.1.0 (vary@1.0.0, on-headers@1.0.0, bytes@1.0.0, debug@2.0.0, compressible@2.0.1, accepts@1.1.2)
> remote:        ├── html-to-text@0.1.0 (underscore@1.7.0, htmlparser@1.7.7, optimist@0.6.1, underscore.string@2.3.3)
> remote:        ├── lodash@2.4.1
> remote:        ├── unidecode@0.1.3
> remote:        ├── cheerio@0.17.0 (entities@1.1.1, dom-serializer@0.0.1, CSSselect@0.4.1, htmlparser2@3.7.3)
> remote:        ├── busboy@0.2.8 (readable-stream@1.1.13, dicer@0.2.3)
> remote:        ├── bookshelf@0.7.6 (trigger-then@0.3.0, simple-extend@0.1.0, inherits@2.0.1, create-error@0.3.1, inflection@1.3.8, backbone@1.1.0, semver@2.3.2, bluebird@2.0.7)
> remote:        ├── moment@2.4.0
> remote:        ├── knex@0.6.21 (tildify@0.2.0, inherits@2.0.1, interpret@0.3.7, commander@2.4.0, generic-pool-redux@0.1.0, minimist@0.0.10, chalk@0.4.0, semver@2.3.2, readable-stream@1.1.13, mkdirp@0.5.0, bluebird@1.2.4, liftoff@0.11.3)
> remote:        ├── mysql@2.1.1 (require-all@0.0.3, readable-stream@1.1.13, bignumber.js@1.0.1)
> remote:        ├── express-hbs@0.7.11 (readdirp@0.3.3, js-beautify@1.4.2, handlebars@2.0.0)
> remote:        ├── nodemailer@0.7.1 (public-address@0.1.1, directmail@0.1.8, he@0.3.6, readable-stream@1.1.13, simplesmtp@0.3.33, mailcomposer@0.2.12, aws-sdk@2.0.5)
> remote:        └── sqlite3@2.2.7 (set-immediate@0.1.1, nan@1.1.2)
> remote: -----> Caching node_modules directory for future builds
> remote: -----> Cleaning up node-gyp and npm artifacts
> remote: -----> No Procfile found; Adding npm start to new Procfile
> remote: -----> Building runtime environment
> remote: -----> Discovering process types
> remote:        Procfile declares types -> web
> remote: -----> Compiled slug size is 23M
> remote: -----> Deploying app
> remote:        Uploading app container .. done.
> remote:        your-app-id deployed to http://your-app-id.qtcloudapp.com
> To git@git-mar-eu-1.qtc.io:your-app-id
>  * [new branch]      master -> master
```

The Ghost blog should be now up and running at the MAR application URL. Enjoy!

## Usage

Access your blog admin page at

```
http://your-app-url.qtcloudapp.com/ghost
```

## Media uploads

Ghost blog platform does not (yet) support cloud based file storage such as Amazon S3. Because a files written to MAR file system are not persistent, media uploads has been disabled by default.

## Custom Domains

If you want to assign a custom domain to your site, enter the follow commands.

```sh
$ qtc-cli domains:add www.example.com
```