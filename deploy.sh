#!/usr/bin/env bash

# usually /var/www/gnrs
APACHE_FOLDER=$1

# clone repo
echo "## cloning the repository ##"
# remove if the repository already exists
rm -rf GNRSweb
git clone https://github.com/EnquistLab/GNRSweb.git || exit 1

# making sure the repo is up to date
cd GNRSweb || exit 1
git checkout main || exit 1
git pull || exit 1

# run compiling script
echo "## installing npm packages ##"
npm install || exit 1
echo "## compiling js files ##"
npm run export || exit 1

# delete the content of the /var/www/gnrs
rm -rf $APACHE_FOLDER/* || exit 1

# move the content to the right place
echo "## moving compiled files to $APACHE_FOLDER ##"
mv out/* $APACHE_FOLDER || exit 1

echo "## deployed successfully ##"
