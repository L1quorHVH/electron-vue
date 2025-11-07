# Electron + Vue 桌面应用

基于 Electron + Vue 3 + Vite 的桌面应用开发模板。

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev    # 启动 Vue 开发服务器
npm start      # 启动 Electron 应用
```

## 📁 项目结构

<div style="background: #f5f5f5; padding: 15px; border-radius: 8px; font-family: 'Courier New', monospace;">
<strong>electron_test/</strong>
<br>
├── <span style="color: #e06c75;">src/</span>           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Vue 源码目录
<br>
│&nbsp;&nbsp;&nbsp;├── <span style="color: #61afef;">index.html</span> &nbsp;&nbsp;# 应用入口页面
<br>
│&nbsp;&nbsp;&nbsp;├── <span style="color: #61afef;">main.js</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Vue 应用入口
<br>
│&nbsp;&nbsp;&nbsp;└── <span style="color: #61afef;">App.vue</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Vue 根组件
<br>
├── <span style="color: #61afef;">main.js</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Electron 主进程
<br>
├── <span style="color: #61afef;">vite.config.js</span> &nbsp;# Vite 构建配置
<br>
├── <span style="color: #61afef;">preload.js</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# 预加载脚本
<br>
└── <span style="color: #61afef;">package.json</span> &nbsp;&nbsp;# 项目配置
</div>

## 🚀 可用命令

```bash
npm run dev    # 启动开发服务器 (http://localhost:5173)
npm run build  # 构建 Vue 应用
npm start      # 运行 Electron 应用
```

## 🛠️ 技术栈

- **Electron 29** - 跨平台桌面框架
- **Vue 3** - 前端框架  
- **Vite** - 构建工具

---

开始开发：运行 `npm run dev` 和 `npm start`