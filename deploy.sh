rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:knight-8/gorge-ui-website.git &&
git push -f -u origin master &&
cd .. &&
echo https://knight-8.github.io/gorge-ui-website/index.html#/