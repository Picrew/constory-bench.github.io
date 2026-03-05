# 清除浏览器缓存以查看最新更改

如果你修改了CSS/JS文件但浏览器没有显示最新的更改，需要清除浏览器缓存。

## 快速方法（推荐）

### 硬刷新（强制刷新）
在浏览器中按以下快捷键：

- **Windows/Linux:**
  - Chrome/Edge: `Ctrl + Shift + R` 或 `Ctrl + F5`
  - Firefox: `Ctrl + Shift + R` 或 `Ctrl + F5`
  
- **Mac:**
  - Chrome/Edge: `Cmd + Shift + R`
  - Firefox: `Cmd + Shift + R`
  - Safari: `Cmd + Option + R`

## 完全清除缓存

### Chrome/Edge
1. 按 `Ctrl + Shift + Delete` (Windows) 或 `Cmd + Shift + Delete` (Mac)
2. 选择"时间范围"为"全部时间"
3. 勾选"缓存的图片和文件"
4. 点击"清除数据"

### Firefox
1. 按 `Ctrl + Shift + Delete` (Windows) 或 `Cmd + Shift + Delete` (Mac)
2. 选择"时间范围"为"全部"
3. 勾选"缓存"
4. 点击"立即清除"

### Safari
1. 按 `Cmd + Option + E` 清空缓存
2. 或者：Safari菜单 → 偏好设置 → 高级 → 勾选"在菜单栏中显示开发菜单"
3. 然后：开发 → 清空缓存

## 开发者工具方法

1. 打开开发者工具（F12）
2. 右键点击刷新按钮
3. 选择"清空缓存并硬性重新加载"

## 禁用缓存（开发时）

在开发者工具中：
1. 打开开发者工具（F12）
2. 进入 Network（网络）标签
3. 勾选"Disable cache"（禁用缓存）
4. 保持开发者工具打开状态，这样每次刷新都会获取最新文件
