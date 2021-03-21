#Change directory to workspace
cd $workspace
pwd | echo

#install all dependency
echo "~~~~~~~~~~~~~~Install dependency~~~~~~~~~~~~~~"
npm install

#build
echo "~~~~~~~~~~~~~~Build~~~~~~~~~~~~~~"
ng build --prod --base-href "./"