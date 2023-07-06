# GNRS Web

<img src="./public/logo.png" width="100" height="100">

The Geographic Name Resolution Service (GNRS) is a tool for resolving, standardizing, and indexing political division names.
The GNRS resolves political division names against standard world political units in the Geonames and Global Administrative Areas (GADM) databases

## How to contribute

This project is written in JavaScript and uses [Node.js](https://nodejs.org/en/) intepreter.
The first step to contribute is to install node in your machine.

You can find help to install node [here](https://nodejs.dev/learn/how-to-install-nodejs).

If you are on MacOSX, cosider downloading
and installing npm from https://nodejs.org/en/ (mac homebrew package manager doesn't have npm).

Make sure you have `npm` installed before you continue:

```
❯ npm --version
6.14.8
```

After you install `npm` you can proceed and clone this repository.

You also need node:

```
❯ node --version
v18.16.1
```

## How to deploy to Apache

1. Download the deploy.sh script from the repository:

```
wget https://raw.githubusercontent.com/EnquistLab/GNRSweb/main/deploy.sh
```

2. For safety purposes, it is recommended to create a backup of the current version that has been deployed in the Apache folder.

3. Run the script with sudo:

```sh
sudo sh deploy.sh <apache folder>
```
