# 筑学台 (zhuxuetai)

筑学有台，认知有方：以科学逻辑对冲教育熵增，守护家庭成长的独立航标。

## 项目简介

筑学台是一个基于 Astro 框架构建的静态网站，用于向学生及家长展示认知与心智底层逻辑、学习方法并分发学习资源（Anki牌组、PPT闪卡、错题模板）、AI+学习工具等。

## 技术栈

- **框架**：Astro (最新版)
- **样式**：Tailwind CSS + DaisyUI
- **部署**：GitHub Pages

## 目录结构

```
zhuxuetai/
├── src/
│   ├── components/          # 组件
│   ├── pages/               # 页面
│   │   ├── index.astro      # 首页
│   │   ├── resources.astro  # 资源下载页
│   │   └── about.astro      # 关于筑学台
│   ├── content/             # 内容
│   │   └── products/        # 产品介绍 (Markdown)
│   └── styles/              # 样式
├── static/                  # 静态资源
│   └── downloads/           # 资源下载占位符
├── astro.config.mjs         # Astro 配置
├── tailwind.config.mjs      # Tailwind 配置
├── package.json             # 项目配置
└── README.md                # 项目说明
```

## 本地运行

1. **安装依赖**

```bash
npm install
```

2. **启动开发服务器**

```bash
npm run dev
```

3. **预览构建结果**

```bash
npm run build
npm run preview
```

## 部署到 GitHub Pages

### 步骤 1: 创建 GitHub 仓库

在 GitHub 上创建一个新的仓库，命名为 `zhuxuetai`。

### 步骤 2: 配置 GitHub Pages

1. 进入仓库设置
2. 导航到 "Pages" 部分
3. 选择 "Deploy from a branch"
4. 选择 `main` 分支
5. 选择 `/ (root)` 目录
6. 点击 "Save"

### 步骤 3: 构建并部署

1. **构建项目**

```bash
npm run build
```

2. **推送构建结果**

```bash
# 初始化 git (如果尚未初始化)
git init
git add .
git commit -m "Initial commit"

# 添加远程仓库
git remote add origin https://github.com/yourname/zhuxuetai.git

# 推送代码
git push -u origin main
```

3. **等待部署完成**

GitHub Pages 会自动部署你的网站，通常需要 1-2 分钟。部署完成后，你可以通过 `https://yourname.github.io/zhuxuetai/` 访问你的网站。

## 配置说明

### astro.config.mjs

已配置支持 GitHub Pages：

```javascript
export default defineConfig({
  integrations: [tailwind()],
  base: '/zhuxuetai/',
  site: 'https://yourname.github.io',
});
```

### 资源分发

实际资源将通过 GitHub Releases 分发，配置格式：

```
https://github.com/yourname/zhuxuetai/releases/download/v1.0/xxx.apkg
```

### Formspree 表单

加入筑学台体验圈的表单使用 Formspree，需要替换为你的实际表单 ID：

```html
<a href="https://formspree.io/f/YOUR_FORM_ID" class="btn btn-secondary text-white py-3 px-8 rounded-lg font-medium">
    加入筑学台体验圈
</a>
```

## 设计参考

- **配色**：主色 #3B82F6（教育蓝），强调色 #F97316（活力橙）
- **字体**：系统默认（中文优先）
- **图标**：使用 Heroicons

## 功能特性

- **响应式设计**：适配移动端和桌面端
- **资源下载**：按分类展示和下载学习资源
- **折叠面板**：提供资源使用说明
- **无登录**：纯静态网站，无需用户登录
- **开源**：项目代码开源，欢迎贡献

## 许可证

MIT License
