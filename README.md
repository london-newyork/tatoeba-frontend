# [Express+MySQL版]アプリ概要

**オリジナルアプリ「Tatoeba」。**

**わかりにくい話をわかりやすく例える、「例え話を支援する」アプリです。**

※こちらは[Express+MySQL版]フロントエンドのみのリポジトリです。

-----

[Express+MySQL版]バックエンドを含むリポジトリ
https://github.com/london-newyork/tatoeba-api

[Prisma版]フロントエンドリポジトリ
https://github.com/london-newyork/tatoeba-frontend-prisma

[Prisma版]バックエンドを含むリポジトリ
https://github.com/london-newyork/tatoeba-api-prisma

-----


### このアプリでの機能および主なやったこと

CRUD処理/検索/(タグによるソート機能)/eメールによるメール認証・ログイン認証/API設計/(APIによる画像登録)/

他のユーザーからの評価機能/Express、Curl、SQL文などを使った、APIのHTTP通信/設計(オニオンアーキテクチャ)

# 使用技術

### 言語とツール等(フロントエンド)

Next.js/React/TypeScript/Tailwind CSS

### ライブラリ等

Recoil/next-router/next-link(フロントエンド)

- Next.js

  SSR・SSG で読み込み時のダウンロードファイルサイズを削減できる。SPA で巨大な JavaScript を生成してしまう React より効率的。
  また、URL ごとに個別の HTML が生成されるので、SEO 上良い点で採用しています。

- TypeScript

  型による制限で、ミスを少なくして開発を効率化するために採用しました。

- TailwindCSS

  TailwindCSS を使ってあらかじめ定義されたスタイルを使っていくことで、より開発期間を短縮することができるため、採用しました。

## 開発背景

WEB 担当として仕事をしていた時に、非エンジニア・非デザイナーの方とお話しする機会が多かったのですが、その際、WEB 独特の用語を理解していただくのに、苦労したことがありました。逆に、非エンジニア・非デザイナーの方も話を理解するのに、とても苦労されたと思っています。

ある時、わかりにくい話をわかりやすく例える「例え話」を使うと、コミュニケーションが円滑に進むことがありました。
そこから、このアプリを開発することで、同じようなことに悩んでいる方の支援ができないかと思うようになりました。

この「例え話」を支援するアプリを通して、みなさんに、円滑なコミュニケーションをしていただけたらと思っています。
