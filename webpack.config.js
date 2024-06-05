const path = require('path');
module.exports = {
  // モジュールバンドルを行う起点となるファイルの指定
  // 指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
  // 下記はオブジェクトとして指定した例
  mode: 'development',
  entry: './src/app.ts',
  output: {
    // モジュールバンドルを行った結果を出力する場所やファイル名の指定
    // "__dirname"はこのファイルが存在するディレクトリを表すnode.jsで定義済みの定数
    // path: path.join(__dirname, 'dist'),
    // filename: '[name].js'
    filename: 'bundle.js'
  },
  // モジュールに適用するルールの設定（ここではローダーの設定を行う事が多い）
  module: {
    rules: [
      {
        // 拡張子が.tsで終わるファイルに対して、TypeScriptコンパイラを適用する
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // モジュールとして扱いたいファイルの拡張子を指定する
  // 例えば「import Foo from './foo'」という記述に対して"foo.ts"という名前のファイルをモジュールとして探す
  // デフォルトは['.js', '.json']
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    // webpack-dev-serverの公開フォルダ
    port: 3000,  // ポートを3000に設定
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  // output: {
  //   filename: 'bundle.js',
  // },
};
