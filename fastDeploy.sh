#!/bin/bash
[[ $1 = '' ]] && BRANCH="master" || BRANCH=$1

SERVER="46.101.156.51"
DEST_FOLDER="CoronaStatus/"
PARAMS="BRANCH=\"$BRANCH\" DEST_FOLDER=\"$DEST_FOLDER\""

echo ===================================================
echo Autodeploy server
echo selected branch $BRANCH
echo ===================================================
echo Connecting to remote server...

ssh $SERVER 'bash -i' <<-'ENDSSH'

cd CoronaStatus/
pm2 stop coronastatus

git stash
# to stash package-lock.json file changes

git pull
git checkout master
git pull origin master

npm run build

pm2 start coronastatus
pm2 save

echo =======================
echo ======== DONE =========
echo =======================
exit
ENDSSH
