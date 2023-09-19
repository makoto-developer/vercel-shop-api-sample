# Serverless Function

## Stack

- Next.js
- TypeScript

## Require
- asdf
- Docker
- Yarn
  - `yarn global add vercel@latest`などで最新にしておく
- Vercel Account

## Starting

```bash
yarn install
yarn dev
```

## deploy

開発環境
```shell
vercel
```

本番環境
```shell
vercel --prod
```

## 構築メモ

```shell
yarn create next-app 
```

## Operation

定期的なバージョン更新作業
```shell
yarn outdated
```

## Feature

| title     | detail            |note|
|:----------|:------------------|:----|
| Vercel KV | データベース機能を使えるようにする ||
|           |                   ||




