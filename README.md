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

## 项目结构
```
electron_test/
├── src/           # Vue 源码
│   ├── index.html
│   ├── main.js
│   └── App.vue
├── main.js        # Electron 主进程
├── vite.config.js # 构建配置
└── package.json
```

## 可用命令
- `npm run dev` - 启动开发服务器 (端口 5173)
- `npm run build` - 构建 Vue 应用
- `npm start` - 运行 Electron 应用

## 技术栈
- Electron 29
- Vue 3
- Vite

开始开发：运行 `npm run dev` 和 `npm start`