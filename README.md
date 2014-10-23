# Ghost blog platform for Qt Cloud Services

This is a template for installing and running [Ghost](https://ghost.org/) on [Qt Cloud Services](http://www.qtcloudservices.com/) with a focus on best practises while using the Qt Cloud Services platform-as-a-service (PaaS) features.

Ghost is installed by NPM. To upgrade Ghost version, simply update the `package.json` file.

You can customize the site and themes by modifying files at `/content` directory.

See the working demo (our development blog) at http://feed.qtcloudservices.com/

## Installation

### 1. Create MAR and MDB instances.

Use Qt Cloud Services [management console](https://console.qtcloudservices.com) to create the instances. 

* Select **Mini** runtime size for MAR instance. 
* Select **MySQL 5.6** for MDB with the amount of memory you feel comfortable. For small blog with few visitors the 256MB memory is enough.


### 2. Create database into MDB.

Take [MySQL remote access](https://developer.qtcloudservices.com/mdb/key-concepts/remote-access) to MDB instance and create new database for the Ghost.

```sh
mysql> create database ghost_db
```

### 3. Clone this repository.

```sh
$ git clone git://github.com/qtcloudservices/qtc-ghost.git
```


### 4. Add new Git remote to local repository.

```sh
$ cd qtc-ghost
$ git remote add qtc YOUR_MAR_GIT_REMOTE_ADDRESS_HERE
```

`Git remote address` can be copied from managament console, from general settings panel under the MAR instance. 


### 5. Setup configuration variables to MAR with the [`qtc-cli`](https://developer.qtcloudservices.com/qtc/cli) tool.

```sh
$ qtc-cli mar envs:set NODE_ENV=production
$ qtc-cli mar envs:set APP_URL=YOUR_BLOG_ADDRESS_HERE
$ qtc-cli mar envs:set MYSQL_HOST=YOUR_MDB_ADDRESS_HERE
$ qtc-cli mar envs:set MYSQL_PORT=YOUR_MDB_PORT_HERE
$ qtc-cli mar envs:set MYSQL_USERNAME=YOUR_MDB_USERNAME_HERE
$ qtc-cli mar envs:set MYSQL_PASSWORD=YOUR_MDB_PASSWORD_HERE
$ qtc-cli mar envs:set MYSQL_DATABASE=ghost_db
$ qtc-cli mar envs:set MYSQL_CHARSET=utf8    
```
`MDB details` can be copied from managament console, from general settings panel under the MDB instance. 
`ghost_db` is the same name as you used in step 2 for the new database. 

Optionally you can setup also SMTP server settings. 
Hint! If you don't have SMTP server, check [Mandrill](https://mandrill.com/) or something similar. 

```sh
$ qtc-cli mar envs:set SMTP_HOST=YOUR_SMTP_SERVER_ADDRESS_HERE
$ qtc-cli mar envs:set SMTP_PORT=YOUR_SMTP_SERVER_PORT_HERE
$ qtc-cli mar envs:set SMTP_USERNAME=YOUR_SMTP_SERVER_USERNAME_HERE
$ qtc-cli mar envs:set SMTP_PASSWORD=YOUR_SMTP_SERVER_PASSWORD_HERE
```

### 6. Deploy codes to MAR

```sh
$ git push qtc master
> Counting objects: 40, done.
> Delta compression using up to 4 threads.
> Compressing objects: 100% (28/28), done.
> Writing objects: 100% (40/40), 26.20 KiB | 0 bytes/s, done.
> Total 40 (delta 5), reused 40 (delta 5)
> remote: -----> Node.js app detected
> .
> .
> . lot of build related information
> .
> .
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

Ghost blog platform does not (yet) support cloud based file storage such as Amazon S3. Because a files written to MAR file system are not persistent, media uploads have been disabled by default.

## Custom Domains

If you want to assign a custom domain to your site, enter the follow command.

```sh
$ qtc-cli domains:add www.example.com
```
