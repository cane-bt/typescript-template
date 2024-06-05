# Node.jsのLTS版をベースにする
FROM node:lts

# 作業ディレクトリを設定
WORKDIR /app

# ポート3000番を開放
EXPOSE 3000
