rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "试验" &&
git branch -M master &&
git remote add origin https://gitee.com/gorge-wu/gorge-ui.git &&
git push -f -u origin master &&
cd .. 
echo https://knight-8.github.io/gorge-ui-website/index.html#/