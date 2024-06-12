<!-- markdownlint-disable MD024 MD033 MD041 -->
# やったこと（手順）メモ

## 06月05日(Wed)

### 環境構築

#### Dockerfile, docker-compose.ymlを行う

`Dockerfile`と`docker-compose.yml`を追加して設定を行う。  
以下が簡単に構築できた。  
コンテナに入るときに毎回コマンドを叩くのが面倒なので`Makefile`を作成。  
`make cin`でコンテナに入れる。

#### 初期化する

コンテナにログインした状態で`npm init`を実行してnpmを初期化する。  
全てエンターで対応。  
問い合わせが必要ない場合は`npm init -y` または `npm init -yes`を実行すれば良い。  

<details>
<summary>npm initの実行結果</summary>

```bash
/app # npm init
# =>This utility will walk you through creating a package.json file.
# =>It only covers the most common items, and tries to guess sensible defaults.
# =>
# =>See `npm help init` for definitive documentation on these fields
# =>and exactly what they do.
# =>
# =>Use `npm install <pkg>` afterwards to install a package and
# =>save it as a dependency in the package.json file.
# =>
# =>Press ^C at any time to quit.
# =>package name: (app)
# =>version: (1.0.0)
# =>keywords:
# =>author:
# =>license: (ISC)
# =>About to write to /app/package.json:
# =>
# =>{
# =>  "name": "app",
# =>  "version": "1.0.0",
# =>  "description": "## Why",
# =>  "main": "index.js",
# =>  "scripts": {
# =>    "test": "echo \"Error: no test specified\" && exit 1"
# =>  },
# =>  "repository": {
# =>    "type": "git",
# =>    "url": "git+<https://github.com/toshi-ue/typescript-setup.git>"
# =>  },
# =>  "author": "",
# =>  "license": "ISC",
# =>  "bugs": {
# =>    "url": "<https://github.com/toshi-ue/typescript-setup/issues>"
# =>  },
# =>  "homepage": "<https://github.com/toshi-ue/typescript-setup#readme>"
# =>}
# =>
# =>Is this OK? (yes)
```

</details>

#### webpackなどのツール類のインストール

コンテナにログインした状態で以下を実行

```bash
npm install typescript ts-loader webpack webpack-cli webpack-dev-server --save-dev
```

インストールしているパッケージの概要は以下

- typescript
    - TypeScriptコンパイラ
- ts-loader
    - TypeScript用のローダー。Webpackと連動してTypeScriptコンパイラを動作させる
- webpack
    - JavaScript用のビルドツール（正式にはモジュールバンドラーと呼ぶ）
- webpack-cli
    - コマンドプロンプトからWebpackを動作させるためのツール。Webpack 4.0から必要になった
- webpack-dev-server
    - Webpackのビルド、開発用Webサーバー、ソースコードの変更検知、ブラウザの自動リロードを一括して提供するサーバー

> [Webpackなどツール類のインストール(TypeScriptチュートリアル -環境構築編- #JavaScript - Qiita)](https://qiita.com/ochiochi/items/efdaa0ae7d8c972c8103#webpack%E3%81%AA%E3%81%A9%E3%83%84%E3%83%BC%E3%83%AB%E9%A1%9E%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)

### 環境構築がうまくいかなかった

Copilotの内容をそのまま貼り付けたらできてしまった。  
原因を調べる。

### 結局分からず

参考にしたサイトとCopilotで何が違うのか分からなかった。  
TypeScriptを試したいだけなので以下のサイトを参考にして作成した。  
[【初心者】Dockerの使い方(Node.jsの開発環境構築)](https://zenn.dev/boarinclover/articles/a839e8d24ff9c0)

### ブラウザを使用して動作確認できるようにしたい

最終的に分からなくなってしまったのでCopilotに以下の質問をしてそのコードをそのままコピペした。
問題なく動作してしまった。

```bash
TypeScriptのエキスパートとして振る舞ってください。
Dockerfileとcompose.ymlを使用したTypeScriptの環境構築の方法をハンズオン形式で教えてください。
前提条件としてexpressは使用しません。
ゴールはブラウザでサンプルファイルの内容が表示されることです。
```

### 完成系

最終的には

- Copilotに質問した内容
- [TypeScriptチュートリアル -環境構築編- #JavaScript - Qiita](https://qiita.com/ochiochi/items/efdaa0ae7d8c972c8103)
の2つを組み合わせて環境構築した。

Copilotに質問した内容は以下になる。

<details>
<summary>Copilotへの質問(2回)</summary>

```markdown
# 1度目の質問
TypeScriptのエキスパートとして振る舞ってください。

Dockerfileとcompose.ymlを使用したTypeScriptの環境構築の方法をハンズオン形式で教えてください。

その際にコンテナにログインしてnpmコマンドで各ライブラリをインストールし、package-lock.jsonを作成する手順は必須です。
package.jsonを定義してインストールする手法は取らないでください。

使用するライブラリは以下になります。
- typescript
- ts-loader
- webpack
- webpack-cli
- webpack-dev-server

前提条件としてexpressは使用しません。
ゴールはブラウザでサンプルファイルの内容が表示されることです。

# 2度目の質問
npx webpack-dev-serveを実行して確認すると`[webpack-dev-server] Loopback: http://localhost:8080/`と表示されました。

ポートを3000番に指定する方法を教えてください。
```

</details>

<!-- markdownlint-enable MD024 MD033 MD041 -->
