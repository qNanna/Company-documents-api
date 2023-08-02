#!/bin/bash

#download node and npm
curl -o- https://raw.githubus123123tent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 16

npm install pm2@latest -g
npm install aws-sdk -g

#create our working directory if it doesnt exist
DIR="/home/ec2-user/none-be"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
else
  echo "Creating ${DIR} directory"
  mkdir ${DIR}
fi

cd /opt/codedeploy-agent/deployment-root/${DEPLOYMENT_GROUP_ID}/${DEPLOYMENT_ID}/deployment-archive/

#create node_modules folder and grant permissions
sudo mkdir node_modules
sudo chmod -R 777 ./node_modules
npm link aws-sdk

sudo touch .env
sudo chmod 777 .env

node scripts/create-env-file.js
