#Change directory to workspace
cd $GITHUB_WORKSPACE
pwd

#install all dependency
echo "~~~~~~~~~~~~~~Install dependency~~~~~~~~~~~~~~"
npm install

#build
echo "~~~~~~~~~~~~~~Build~~~~~~~~~~~~~~"
ng build --prod --base-href "./"