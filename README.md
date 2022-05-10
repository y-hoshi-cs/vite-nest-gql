### 環境構築方法
1. docker-compose up -d --build
2. docker-compose exec nest sh
3. prisma:migrate

### ブラウザアクセス

|  Name  |  URL  |
| ---- | ---- |
|  React  |  localhost:3000  |
|  Nest.js  |  localhost:3001  |
|  GraphQL Playground  |  localhost:3001/graphql  |
|  Prisma(yarn prisma:start時)  |  localhost:5555  |

### 開発時操作(フロントエンド)

|  操作  |  説明  |
| ---- | ---- |
|  yarn dev  |  開発サーバースタート  |
|  yarn gql:gen  |  GraphQLフック自動生成  |


### 開発時操作(バックエンド)

|  操作  |  説明  |
| ---- | ---- |
|  yarn start:dev  |  開発サーバースタート  |
|  yarn prisma:start  |  Prismaサーバースタート  |
|  yarn prisma:migrate  |  Prismaマイグレーション実行  |


### 主要利用パッケージ
- Vite: https://ja.vitejs.dev/
- Nestjs: https://docs.nestjs.com/
- Prisma: https://www.prisma.io/
- GraphQL Code Generator: https://www.graphql-code-generator.com/
- apollo-server-express: https://www.npmjs.com/package/apollo-server-express
- Apollo Client: https://www.apollographql.com/docs/react/