# DayDayUp 官网部署指南

## 本地测试

1. 进入项目目录
```bash
cd daydayup-website
```

2. 启动本地服务器
```bash
# 使用Python
python3 -m http.server 8000

# 或使用Node.js
npx serve .

# 或使用PHP
php -S localhost:8000
```

3. 访问网站
打开浏览器访问 `http://localhost:8000`

## 部署到GitHub Pages

1. 创建GitHub仓库
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/daydayup-website.git
git push -u origin main
```

2. 启用GitHub Pages
- 进入仓库设置
- 找到 "Pages" 选项
- 选择 "Deploy from a branch"
- 选择 "main" 分支
- 保存设置

3. 访问网站
网站将在几分钟内部署完成，访问地址：`https://your-username.github.io/daydayup-website`

## 部署到Netlify

1. 将代码推送到GitHub

2. 登录Netlify
- 访问 https://netlify.com
- 点击 "New site from Git"
- 选择GitHub并授权
- 选择你的仓库

3. 配置部署设置
- Build command: 留空（静态网站）
- Publish directory: `.`（根目录）

4. 部署
- 点击 "Deploy site"
- 等待部署完成

5. 自定义域名（可选）
- 在站点设置中添加自定义域名
- 配置DNS记录

## 部署到Vercel

1. 将代码推送到GitHub

2. 登录Vercel
- 访问 https://vercel.com
- 点击 "New Project"
- 导入GitHub仓库

3. 配置项目
- Framework Preset: 选择 "Other"
- Root Directory: `./`
- Build Command: 留空
- Output Directory: `.`

4. 部署
- 点击 "Deploy"
- 等待部署完成

## 文件结构说明

```
daydayup-website/
├── index.html          # 主页面
├── privacy.html        # 隐私政策页面
├── styles.css          # 样式文件
├── script.js           # JavaScript功能
├── README.md           # 项目说明
└── DEPLOY.md           # 部署指南
```

## 功能特性

- ✅ 响应式设计，适配移动端和桌面端
- ✅ 中英文双语支持，自动检测浏览器语言
- ✅ 现代化UI设计，渐变色彩和流畅动画
- ✅ SEO友好，语义化HTML标签
- ✅ 快速加载，优化的CSS和JavaScript
- ✅ 无依赖，纯静态网站

## 自定义配置

### 修改主题色彩
编辑 `styles.css` 中的CSS变量：
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    /* 其他变量... */
}
```

### 添加新语言
在 `script.js` 中的 `translations` 对象中添加新语言：
```javascript
const translations = {
    zh: { /* 中文翻译 */ },
    en: { /* 英文翻译 */ },
    ja: { /* 日文翻译 */ }  // 新增
};
```

### 修改内容
- 编辑HTML文件中的文本内容
- 更新 `script.js` 中对应的翻译
- 修改 `styles.css` 中的样式

## 性能优化建议

1. **图片优化**
   - 使用WebP格式
   - 压缩图片大小
   - 使用适当的图片尺寸

2. **代码优化**
   - 压缩CSS和JavaScript
   - 移除未使用的代码
   - 使用CDN加载字体和图标

3. **缓存策略**
   - 设置适当的缓存头
   - 使用版本号控制缓存

4. **SEO优化**
   - 添加meta标签
   - 优化页面标题和描述
   - 使用结构化数据

## 故障排除

### 常见问题

1. **语言切换不工作**
   - 检查浏览器是否支持localStorage
   - 确认JavaScript文件正确加载

2. **样式显示异常**
   - 检查CSS文件路径
   - 确认字体和图标CDN可访问

3. **页面无法访问**
   - 检查服务器配置
   - 确认文件权限正确

### 调试技巧

1. 打开浏览器开发者工具
2. 检查Console是否有错误信息
3. 查看Network标签页确认资源加载
4. 使用Lighthouse进行性能分析

## 更新维护

1. **定期更新**
   - 检查依赖库的更新
   - 更新翻译内容
   - 优化性能和用户体验

2. **备份策略**
   - 使用Git进行版本控制
   - 定期备份重要文件
   - 保存部署配置

3. **监控分析**
   - 使用Google Analytics跟踪访问
   - 监控网站性能
   - 收集用户反馈

## 联系方式

如有问题或建议，请联系：
- 邮箱：hwygy001@gmail.com
- GitHub Issues：https://github.com/your-username/daydayup-website/issues 