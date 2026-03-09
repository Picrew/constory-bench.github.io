# 🚀 Quick Start Guide - Long-Story Bench Website

## 本地查看网站 (View Locally)

### 方法 1: Python HTTP Server（推荐）

1. 打开 PowerShell
2. 进入项目目录:
```powershell
cd "d:\ms\StoryVerify\generate_story\benchmark\website\long-story-bench"
```

3. 启动服务器:
```powershell
python -m http.server 8000
```

4. 在浏览器打开: `http://localhost:8000`

### 方法 2: 直接打开

双击 `index.html` 文件即可在浏览器中打开。

---

## 部署到 GitHub Pages

### 1️⃣ 在 GitHub 上创建新仓库

- 仓库名称: `long-story-bench` (或任意名称)
- 设置为 Public（公开）
- 不要初始化 README

### 2️⃣ 推送代码到 GitHub

在项目目录打开 PowerShell，运行以下命令:

```powershell
# 初始化 git
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Long-Story Bench website"

# 关联远程仓库（替换 YOUR-USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR-USERNAME/long-story-bench.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 3️⃣ 启用 GitHub Pages

1. 进入你的 GitHub 仓库
2. 点击 **Settings** (设置)
3. 左侧菜单找到 **Pages**
4. Source 选择:
   - Branch: `main`
   - Folder: `/ (root)`
5. 点击 **Save** (保存)

### 4️⃣ 访问网站

等待 1-2 分钟，你的网站将在以下地址可用:

```
https://YOUR-USERNAME.github.io/long-story-bench/
```

---

## 📝 修改内容

### 更新排行榜数据

编辑 `js/main.js` 文件中的 `leaderboardData` 数组。

### 修改颜色主题

编辑 `css/style.css` 文件中的 `:root` CSS 变量。

### 更新文本内容

编辑 `index.html` 文件中的相应部分。

---

## ✨ 已实现的功能

✅ 响应式设计（支持手机、平板、桌面）
✅ 交互式排行榜（可点击排序）
✅ 流畅动画效果
✅ 模型图标展示
✅ 4个评测类别展示
✅ 现代化设计风格

---

## 🎯 项目文件说明

- **index.html** - 主页面
- **css/style.css** - 样式表
- **js/main.js** - JavaScript 交互逻辑和数据
- **assets/icons/** - LLM 模型图标
- **assets/images/** - Logo 和其他图片

---

## 📧 需要帮助？

如有问题，请在 GitHub 仓库中提交 Issue。

祝你部署顺利！🎉
