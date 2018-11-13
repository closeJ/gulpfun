# npm gulp 自動化工具

gulp 是一種可以自動偵測執行、轉換(sass/scss -> css)的npm套件工具

必須先安裝 [node.js](https://nodejs.org/en/)

1. gulp 套件 - npm install gulp --save-dev (在專案下安裝)
2. gulp sass 套件 - npm install gulp-sass 
3. gulp uglify 套件 - 壓縮 javascript 檔案、減少容量 - npm install gulp-uglify 
4. gulp plumber 套件 - 可在 gulp 內顯示錯誤訊息(如: sass/js) - npm install gulp-plumber

安裝完後，在命令提示字元裡指定專案路徑 (cd XXXXX)

- [輸入 gulp] (啟動gulp)

```
gulp
[00:48:31] Using gulpfile C:\wamp\www\gulpped\gulpfile.js
[00:48:31] Starting 'default'...
[00:48:31] Finished 'default' after 15 ms
[00:48:41] Starting 'minify'...
[00:48:41] Finished 'minify' after 13 ms
[00:48:54] Starting 'minify'...
[00:48:54] Finished 'minify' after 1.83 ms
[00:48:59] Starting 'minify'...
[00:48:59] Finished 'minify' after 1.32 ms
```

即可偵測有變動過的 sass/scss 、 javascript 檔案

<hr>

