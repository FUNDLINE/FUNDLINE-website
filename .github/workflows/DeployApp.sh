cd /
mkdir DeployApp
cd DeployApp
pwd | echo

echo "~~~~~~~~~~~~git clone~~~~~~~~~~~~"
git clone https://G-Basak:$API_TOKEN@github.com/FUNDLINE/FUNDLINE.github.io.git

cd FUNDLINE.github.io.git
echo "~~~~~~~~~~~~copy~~~~~~~~~~~~"
rm -f *
rm -rf *
cp -v -r -f $GITHUB_WORKSPACE/dist/FUNDLINE-website/* /DeployApp

echo "~~~~~~~~~~~~commit and push~~~~~~~~~~~~"
git config --local user.name "G-Basak"
git config --local user.email "basak.gunjan@gmail.com"
git add --verbose --ignore-errors -all
git commit -m "Automated Deploy"
git push origin head:master