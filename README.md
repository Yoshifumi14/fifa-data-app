FIFA(ゲーム)の選手データを国籍ごとに可視化して比べるアプリ

# 使用しているデータ
- https://www.kaggle.com/stefanoleone992/fifa-20-complete-player-dataset


# 開発環境

### 環境構築

前提
- Node.js
- yarn

```sh
$ yarn install
```

### デバッグ実行

flaskサーバー起動
```sh
$ cd ./flask
$ python app.py
```

アプリ起動
```sh
$ yarn start
```
http://localhost:3000/

### storybook

```sh
$ yarn storybook
```
http://localhost:6006/

### ビルド
```sh
$ yarn build
```