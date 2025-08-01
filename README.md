# DayDayUp 官网

这是 DayDayUp 浏览器扩展的官方网站，提供产品介绍、下载链接和隐私政策。

## 功能特色

- 🌍 **多语言支持**：支持中英文切换，根据浏览器语言自动检测
- 📱 **响应式设计**：适配桌面端和移动端
- 🎨 **现代化UI**：采用渐变色彩和流畅动画
- ⚡ **纯静态网站**：无需服务器，可直接部署到任何静态托管服务

## 文件结构

```
daydayup-website/
├── index.html          # 主页面
├── privacy.html        # 隐私政策页面
├── styles.css          # 样式文件
├── script.js           # JavaScript功能
└── README.md           # 项目说明
```

## 技术栈

- **HTML5**：语义化标签，SEO友好
- **CSS3**：现代CSS特性，响应式设计
- **JavaScript**：原生JS，无依赖
- **Material Icons**：Google图标库
- **Inter字体**：现代无衬线字体

## 部署方式

### 1. GitHub Pages

1. 将代码推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择主分支作为源

### 2. Netlify

1. 将代码推送到GitHub仓库
2. 在Netlify中连接GitHub仓库
3. 自动部署

### 3. Vercel

1. 将代码推送到GitHub仓库
2. 在Vercel中导入项目
3. 自动部署

## 本地开发

1. 克隆项目
```bash
git clone <repository-url>
cd daydayup-website
```

2. 使用本地服务器运行
```bash
# 使用Python
python -m http.server 8000

# 或使用Node.js
npx serve .
```

3. 访问 `http://localhost:8000`

## 自定义配置

### 修改语言

在 `script.js` 中的 `translations` 对象中添加或修改翻译内容。

### 修改样式

在 `styles.css` 中修改CSS变量来自定义主题色彩：

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    /* 其他变量... */
}
```

### 添加新页面

1. 创建新的HTML文件
2. 复制现有页面的头部和底部结构
3. 在导航中添加链接
4. 在 `script.js` 中添加对应的翻译

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 性能优化

- 使用CDN加载字体和图标
- 压缩CSS和JavaScript
- 优化图片大小
- 启用浏览器缓存

## 更新日志

### v1.0.0 (2024-01-01)
- 初始版本发布
- 支持中英文切换
- 响应式设计
- 隐私政策页面

## 许可证

MIT License

## 联系方式

- 邮箱：hwygy001@gmail.com
- 项目地址：https://github.com/your-username/daydayup-website 