
# デバッグ用のflaskサーバー
csvファイルをpandasで読み込んでクエリ結果を返す。

### 前提
- Python3

### 依存ライブラリ
- flask
- flask_cors
- pandas

```sh
$ pip install -r requirements.txt
```

### 実行
```sh
$ cd ./flask
$ python app.py
```

# Dockerコンテナで起動

### 前提
- Docker
  
### Dockerイメージ

ビルドする
```sh
$ docker build -t yoshifumi14/flask-fifa-data ./flask
```
もしくはpull
```sh
$ docker pull yoshifumi14/flask-fifa-data
```

### コンテナ起動

初回
```sh
$ docker run -d -p 5000:5000 --name flask-server yoshifumi14/flask-fifa-data
```
それ移行
```sh
docker start flask-server
```

### コンテナ停止

```sh
$ docker stop flask-server
```