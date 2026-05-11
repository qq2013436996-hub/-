# Bike Website (Astro + Sanity)

这个项目已经接好 Astro 前台与 Sanity CMS。

## 项目结构

- `src/`：Astro 页面和组件
- `public/`：静态资源
- `Deli-main/sanity-studio/`：Sanity Studio 后台
- `.env.example`：环境变量示例

## 环境准备

- Node.js `>=22.12.0`
- npm `>=10`

## 快速开始

1. 安装前台依赖

```bash
npm install
```

2. 安装 Sanity Studio 依赖

```bash
npm install --prefix "./Deli-main/sanity-studio"
```

3. 配置环境变量

```bash
cp .env.example .env
```

如果你有自己的 Sanity 项目，请修改：

- `PUBLIC_SANITY_PROJECT_ID`
- `PUBLIC_SANITY_DATASET`
- `SANITY_API_WRITE_TOKEN`（写入数据时需要）

## 常用命令

- `npm run dev`：启动 Astro 前台（默认 `http://localhost:4321`）
- `npm run build`：构建 Astro 前台
- `npm run preview`：预览构建结果
- `npm run studio:dev`：启动 Sanity Studio
- `npm run studio:build`：构建 Sanity Studio
- `npm run studio:deploy`：部署 Sanity Studio

## 备注

- 目前默认连接的 Sanity 项目是 **`kzl6pdyn` / `production`**（Project ID）。
- 组织 ID（Organization ID）为 **`oDtAPliRg`**，在 [sanity.io/manage](https://www.sanity.io/manage) 里管理成员、计费、项目列表时会用到；Astro 前台读内容只需要 Project ID + Dataset，不必配置组织 ID。
- 若需要切换到你自己的 Sanity 项目，修改 `.env` 和 `Deli-main/sanity-studio/sanity.config.ts`/`sanity.cli.ts` 中的 `projectId` 与 `dataset` 即可。
