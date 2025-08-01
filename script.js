// 语言配置
const translations = {
    zh: {
        'nav.features': '功能特色',
        'nav.download': '下载安装',
        'nav.privacy': '隐私政策',
        'nav.home': '首页',
        'hero.title': '每日励志，助你前行',
        'hero.subtitle': '每天第一次打开浏览器时，让励志名言为你开启美好的一天',
        'hero.download': '立即下载',
        'hero.learn-more': '了解更多',
        'demo.quote': '今天的努力是为了明天的收获',
        'features.title': '功能特色',
        'features.daily.title': '每日提醒',
        'features.daily.desc': '每天第一次打开浏览器时自动显示励志名言，为你开启美好的一天',
        'features.multilingual.title': '多语言支持',
        'features.multilingual.desc': '支持中英文双语，根据系统语言自动切换，全球用户友好',
        'features.custom.title': '个性化设置',
        'features.custom.desc': '自定义名言、显示位置、时长等，打造专属的励志体验',
        'features.cross-platform.title': '跨平台支持',
        'features.cross-platform.desc': '支持Chrome、Firefox、Edge等主流浏览器，随时随地使用',
        'download.title': '下载安装',
        'download.subtitle': '简单三步，开始你的励志之旅',
        'download.step1.title': '下载扩展',
        'download.step1.desc': '点击下方按钮下载DayDayUp扩展文件',
        'download.step2.title': '安装到浏览器',
        'download.step2.desc': '打开浏览器扩展管理页面，拖拽文件进行安装',
        'download.step3.title': '开始使用',
        'download.step3.desc': '明天打开浏览器时，就能看到励志名言了',
        'download.button': '下载扩展',
        'download.note': '支持 Chrome 88+ / Firefox 85+ / Edge 88+',
        'privacy.title': '隐私政策',
        'privacy.intro': '我们重视您的隐私，承诺保护您的个人信息安全。',
        'privacy.data.title': '数据收集',
        'privacy.data.desc': '我们仅收集必要的本地存储数据，包括您的自定义设置和偏好，所有数据均存储在您的设备本地。',
        'privacy.usage.title': '使用方式',
        'privacy.usage.desc': '扩展程序仅在您访问网页时运行，不会收集您的浏览历史或个人信息。',
        'privacy.security.title': '安全保障',
        'privacy.security.desc': '所有数据均采用本地存储，不会上传到任何服务器，确保您的隐私安全。',
        'privacy.read-more': '查看完整隐私政策',
        'footer.description': '让每一天都充满正能量',
        'footer.links.title': '快速链接',
        'footer.links.features': '功能特色',
        'footer.links.download': '下载安装',
        'footer.links.privacy': '隐私政策',
        'footer.links.home': '首页',
        'footer.contact.title': '联系我们',
        'footer.contact.email': '邮箱：hwygy001@gmail.com',
        'footer.contact.version': '版本：1.0.0',
        'footer.rights': '保留所有权利。'
    },
    en: {
        'nav.features': 'Features',
        'nav.download': 'Download',
        'nav.privacy': 'Privacy',
        'nav.home': 'Home',
        'hero.title': 'Daily Motivation, Keep Moving Forward',
        'hero.subtitle': 'Get inspired with motivational quotes every time you first open your browser each day',
        'hero.download': 'Download Now',
        'hero.learn-more': 'Learn More',
        'demo.quote': 'Today\'s effort is for tomorrow\'s harvest',
        'features.title': 'Features',
        'features.daily.title': 'Daily Reminders',
        'features.daily.desc': 'Automatically display motivational quotes when you first open your browser each day',
        'features.multilingual.title': 'Multilingual Support',
        'features.multilingual.desc': 'Supports Chinese and English, automatically switches based on system language',
        'features.custom.title': 'Personalization',
        'features.custom.desc': 'Customize quotes, display position, duration, and more for your unique experience',
        'features.cross-platform.title': 'Cross-Platform Support',
        'features.cross-platform.desc': 'Supports Chrome, Firefox, Edge and other major browsers',
        'download.title': 'Download & Install',
        'download.subtitle': 'Three simple steps to start your motivational journey',
        'download.step1.title': 'Download Extension',
        'download.step1.desc': 'Click the button below to download the DayDayUp extension file',
        'download.step2.title': 'Install to Browser',
        'download.step2.desc': 'Open browser extension management page and drag the file to install',
        'download.step3.title': 'Start Using',
        'download.step3.desc': 'You\'ll see motivational quotes when you open your browser tomorrow',
        'download.button': 'Download Extension',
        'download.note': 'Supports Chrome 88+ / Firefox 85+ / Edge 88+',
        'privacy.title': 'Privacy Policy',
        'privacy.intro': 'We value your privacy and are committed to protecting your personal information.',
        'privacy.data.title': 'Data Collection',
        'privacy.data.desc': 'We only collect necessary local storage data including your custom settings and preferences, all stored locally on your device.',
        'privacy.usage.title': 'Usage',
        'privacy.usage.desc': 'The extension only runs when you visit web pages and does not collect your browsing history or personal information.',
        'privacy.security.title': 'Security',
        'privacy.security.desc': 'All data is stored locally and not uploaded to any servers, ensuring your privacy and security.',
        'privacy.read-more': 'View Full Privacy Policy',
        'footer.description': 'Make every day full of positive energy',
        'footer.links.title': 'Quick Links',
        'footer.links.features': 'Features',
        'footer.links.download': 'Download',
        'footer.links.privacy': 'Privacy Policy',
        'footer.links.home': 'Home',
        'footer.contact.title': 'Contact Us',
        'footer.contact.email': 'Email: hwygy001@gmail.com',
        'footer.contact.version': 'Version: 1.0.0',
        'footer.rights': 'All rights reserved.'
    }
};

// 当前语言
let currentLanguage = 'zh';

// 检测浏览器语言
function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('zh')) {
        return 'zh';
    } else {
        return 'en';
    }
}

// 切换语言
function toggleLanguage() {
    currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
    updateLanguage();
    localStorage.setItem('daydayup-language', currentLanguage);
}

// 更新页面语言
function updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[currentLanguage][key];
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // 更新语言按钮文本
    const langButton = document.getElementById('current-lang');
    if (langButton) {
        langButton.textContent = currentLanguage === 'zh' ? '中文' : 'English';
    }
    
    // 更新HTML lang属性
    document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
}

// 初始化
function init() {
    // 从localStorage获取保存的语言设置
    const savedLanguage = localStorage.getItem('daydayup-language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    } else {
        // 如果没有保存的设置，使用浏览器语言检测
        currentLanguage = detectLanguage();
    }
    
    updateLanguage();
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 