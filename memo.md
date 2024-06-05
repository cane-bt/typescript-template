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

コンテナにログイン後`npm init`でnpmを初期化する。  
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

<!-- markdownlint-enable MD024 MD033 MD041 -->
