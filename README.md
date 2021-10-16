# CDK Lambda Sample

**(注): M1 Mac (Appleシリコン) では Docker 周りがだめで`cdk deploy`等がうまく動かない**

Lambda (Python) を CDK を使ってデプロイする。

- CDK のコードは TypeScript
- 依存ライブラリ(`Chronyk`)を使用
- 依存ライブラリは Lambda Layer で配置(コードサイズ抑制)
- メインコード(`index.py`)をコンソール上で編集可能

## 始め方

### 準備

```sh
git clone git@github.com:mozkzki/cdk-lambda-simple.git
cd cdk-lambda-simple
npm install
# tsc を watch モードで起動
npm run watch
```

#### `npm run watch`について

- **これをやらないと後述の`cdk deploy`や`cdk diff`等は失敗する**
- TypeScript コンパイラ(tsc)が watch モードで起動する
- .ts ファイルを変更すると自動的に.js へトランスパイルしてくれる

### 環境の初期構築

初回だけ必要。

```sh
cdk bootstrap
```

### デプロイ

スタックをデプロイ。

```sh
cdk deploy
```

### 実行

```sh
aws lambda invoke --function-name foo response.json --log-type Tail --query 'LogResult' --output text | base64 -d
# or
# cdk.jsonがある場所で
make start
```

### 削除

スタックを削除。

```sh
cdk destroy
```

## その他の操作

### テンプレート生成

- `cdk.json`がある場所で以下を実行。
- CDK アプリのコード(`lib/cdk-workshop-stack*.ts`)からテンプレートが生成される(CDK 用語で"synthesize")

```sh
cdk synth
```

### 差分の確認

```sh
cdk diff
```

## CDK の始め方

このプロジェクトは、[CDK の TYPESCRIPT ワークショップ](https://summit-online-japan-cdk.workshop.aws/20-typescript.html)で作成した。

```sh
npm install -g aws-cdk
mkdir cdk-workshop && cd cdk-workshop
cdk init sample-app --language typescript
```

## Python コードの開発

`lambda`ディレクトリ以下で開発する。

## Reference

- [API Reference · AWS CDK](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html)
- [AWS CDK Toolkit (cdk command) - AWS Cloud Development Kit (CDK)](https://docs.aws.amazon.com/cdk/latest/guide/cli.html)

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template
