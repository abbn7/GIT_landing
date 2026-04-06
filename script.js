const FEATS = {
    en: [
        { icon: "upload", title: "Upload ZIP", desc: "Upload any ZIP and instantly create a new GitHub repository with all files organized." },
        { icon: "list", title: "List Repos", desc: "View all your GitHub repositories in a clean, scrollable list right inside Telegram." },
        { icon: "download", title: "Download Repo", desc: "Download any repository as a ZIP file delivered directly to your chat." },
        { icon: "trash-2", title: "Delete Repo", desc: "Remove repositories you no longer need, safely and instantly." },
        { icon: "lock", title: "Privacy Control", desc: "Toggle any repository between public and private with a single command." },
        { icon: "git-branch", title: "Fetch Any Repo", desc: "Download any public GitHub repository by just sharing its URL." }
    ],
    ar: [
        { icon: "upload", title: "رفع ملف ZIP", desc: "ارفع أي ملف ZIP وأنشئ مستودع GitHub جديد بجميع الملفات منظمة تلقائياً." },
        { icon: "list", title: "عرض المستودعات", desc: "اعرض جميع مستودعاتك على GitHub في قائمة نظيفة مباشرة داخل تلجرام." },
        { icon: "download", title: "تحميل مستودع", desc: "حمّل أي مستودع كملف ZIP يُرسل مباشرة إلى محادثتك." },
        { icon: "trash-2", title: "حذف مستودع", desc: "احذف المستودعات التي لا تحتاجها بأمان وفورية تامة." },
        { icon: "lock", title: "التحكم في الخصوصية", desc: "بدّل أي مستودع بين العام والخاص بأمر واحد بسيط." },
        { icon: "git-branch", title: "جلب أي مستودع", desc: "حمّل أي مستودع عام على GitHub بمجرد مشاركة رابطه." }
    ]
};

const CMDS = [
    { cmd: "/start", en: "Link your GitHub account", ar: "ربط حساب GitHub" },
    { cmd: "/repos", en: "List all your repositories", ar: "عرض قائمة مستودعاتك" },
    { cmd: "/uploadzip", en: "Upload a ZIP as a new repo", ar: "رفع ZIP كمستودع جديد" },
    { cmd: "/downloadrepo", en: "Download a repo as ZIP", ar: "تحميل مستودع كـ ZIP" },
    { cmd: "/deleterepo", en: "Delete a repository", ar: "حذف مستودع" },
    { cmd: "/setprivacy", en: "Toggle repository privacy", ar: "تغيير خصوصية مستودع" },
    { cmd: "/fetchrepo", en: "Fetch any public repository", ar: "جلب أي مستودع عام" },
    { cmd: "/help", en: "Show full help guide", ar: "عرض دليل المساعدة" },
    { cmd: "/cancel", en: "Cancel current operation", ar: "إلغاء العملية الحالية" }
];

const STEPS = {
    en: [
        { n: "01", t: "Open the Bot", d: "Start a conversation with @finial_GIT1_bot on Telegram" },
        { n: "02", t: "Connect GitHub", d: "Send your GitHub Personal Access Token to authenticate" },
        { n: "03", t: "Manage Repos", d: "Use commands to upload, download and manage repositories" }
    ],
    ar: [
        { n: "01", t: "افتح البوت", d: "ابدأ محادثة مع @finial_GIT1_bot على تلجرام" },
        { n: "02", t: "ربط GitHub", d: "أرسل GitHub Personal Access Token الخاص بك للمصادقة" },
        { n: "03", t: "أدر مستودعاتك", d: "استخدم الأوامر لرفع وتحميل وإدارة مستودعاتك" }
    ]
};

const TRANSLATIONS = {
    en: {
        navFeatures: "Features",
        navHow: "How It Works",
        navCommands: "Commands",
        navDev: "Developer",
        navBtn: "Open Bot",
        heroBadge: "Available Now • Free",
        heroTitle: "Manage <span class='gt'>GitHub</span><br>From Telegram",
        heroSub: "A powerful SaaS Telegram bot letting you upload, download, delete and control your GitHub repositories — all in one chat, fully in Arabic.",
        heroBtn1: "Try Bot Now",
        heroBtn2: "Discover Features",
        botStatus: "online",
        msgWelcome: "<span class='mc'>Welcome 👋</span><br>Send your GitHub PAT to begin 🚀",
        msgRepos: "📋 <strong>Your repos:</strong><br>• my-project<br>• portfolio-site<br>• api-backend",
        discoverText: "Discover",
        stagFeatures: "Features",
        titleFeatures: "Everything You Need",
        subFeatures: "Full GitHub management through a single Telegram bot",
        stagHow: "How It Works",
        titleHow: "Start in Minutes",
        subHow: "Three simple steps and you're ready",
        stagCommands: "Commands",
        titleCommands: "Available Commands",
        subCommands: "Simple commands, powerful results",
        stagDev: "Developer",
        titleDev: "About the Developer",
        devRole: "Software Developer",
        devBio: "Software developer passionate about building tools that simplify developers' workflows. Created this bot to make GitHub management accessible to Arabic-speaking developers.",
        instaText: "Instagram",
        githubText: "GitHub Profile",
        ctaTitle: "Ready to Start?",
        ctaSub: "Join developers managing their GitHub repos directly from Telegram",
        ctaBtn: "Open Bot Now",
        footerText: "© 2025 GitBot · All rights reserved · Made with ❤️ by Abdelhamed Nada"
    },
    ar: {
        navFeatures: "المميزات",
        navHow: "كيف يعمل",
        navCommands: "الأوامر",
        navDev: "المطور",
        navBtn: "افتح البوت",
        heroBadge: "متاح الآن • مجاني",
        heroTitle: "إدارة <span class='gt'>GitHub</span><br>من تلجرام",
        heroSub: "بوت تلجرام احترافي يمنحك تحكماً كاملاً في مستودعاتك على GitHub — رفع، تحميل، حذف، وإدارة الخصوصية — بضغطة زر واحدة وبأمان تام.",
        heroBtn1: "جرب البوت الآن",
        heroBtn2: "اكتشف المميزات",
        botStatus: "متصل الآن",
        msgWelcome: "<span class='mc'>أهلاً 👋</span><br>أرسل GitHub PAT الخاص بك للبدء 🚀",
        msgRepos: "📋 <strong>مستودعاتك:</strong><br>• my-project<br>• portfolio-site<br>• api-backend",
        discoverText: "اكتشف المزيد",
        stagFeatures: "المميزات",
        titleFeatures: "كل ما تحتاجه",
        subFeatures: "إدارة GitHub الكاملة من بوت تلجرام واحد",
        stagHow: "كيف يعمل",
        titleHow: "ابدأ في دقائق",
        subHow: "ثلاث خطوات بسيطة وأنت جاهز",
        stagCommands: "الأوامر",
        titleCommands: "الأوامر المتاحة",
        subCommands: "أوامر بسيطة، نتائج قوية",
        stagDev: "المطور",
        titleDev: "من طوّر البوت",
        devRole: "مطور برمجيات",
        devBio: "مطور برمجيات شغوف ببناء أدوات تُبسّط سير عمل المطورين. طوّر هذا البوت ليجعل إدارة GitHub في متناول المطورين العرب في كل مكان.",
        instaText: "إنستجرام",
        githubText: "ملف GitHub",
        ctaTitle: "مستعد للبدء؟",
        ctaSub: "انضم إلى المطورين الذين يديرون مستودعاتهم مباشرة من تلجرام",
        ctaBtn: "افتح البوت الآن",
        footerText: "© 2025 GitBot · جميع الحقوق محفوظة · صُنع بـ ❤️ بواسطة Abdelhamed Nada"
    }
};

let currentLang = "ar";
let currentTheme = "dark";

function updateUI() {
    const isAr = currentLang === "ar";
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;
    
    const t = TRANSLATIONS[currentLang];
    
    // Update Nav
    document.getElementById('navFeatures').textContent = t.navFeatures;
    document.getElementById('navHow').textContent = t.navHow;
    document.getElementById('navCommands').textContent = t.navCommands;
    document.getElementById('navDev').textContent = t.navDev;
    document.getElementById('navBtn').textContent = t.navBtn;
    
    // Update Hero
    document.getElementById('heroBadge').textContent = t.heroBadge;
    document.getElementById('heroTitle').innerHTML = t.heroTitle;
    document.getElementById('heroSub').textContent = t.heroSub;
    document.getElementById('heroBtn1').textContent = t.heroBtn1;
    document.getElementById('heroBtn2').textContent = t.heroBtn2;
    document.getElementById('botStatus').textContent = t.botStatus;
    document.getElementById('msgWelcome').innerHTML = t.msgWelcome;
    document.getElementById('msgRepos').innerHTML = t.msgRepos;
    document.getElementById('discoverText').textContent = t.discoverText;
    
    // Update Features
    document.getElementById('stagFeatures').textContent = t.stagFeatures;
    document.getElementById('titleFeatures').textContent = t.titleFeatures;
    document.getElementById('subFeatures').textContent = t.subFeatures;
    const featuresGrid = document.getElementById('featuresGrid');
    featuresGrid.innerHTML = FEATS[currentLang].map((f, i) => `
        <div class="bc rv-s" style="transition-delay: ${i * 0.07}s">
            <div class="bci"><i data-lucide="${f.icon}"></i></div>
            <div class="bct">${f.title}</div>
            <div class="bcd">${f.desc}</div>
        </div>
    `).join('');
    
    // Update Steps
    document.getElementById('stagHow').textContent = t.stagHow;
    document.getElementById('titleHow').textContent = t.titleHow;
    document.getElementById('subHow').textContent = t.subHow;
    const stepsGrid = document.getElementById('stepsGrid');
    stepsGrid.innerHTML = STEPS[currentLang].map((s, i) => `
        <div class="sc rv" style="transition-delay: ${i * 0.1}s">
            <div class="sn">${s.n}</div>
            <div class="st">${s.t}</div>
            <div class="sd">${s.d}</div>
        </div>
    `).join('');
    
    // Update Commands
    document.getElementById('stagCommands').textContent = t.stagCommands;
    document.getElementById('titleCommands').textContent = t.titleCommands;
    document.getElementById('subCommands').textContent = t.subCommands;
    const commandsList = document.getElementById('commandsList');
    commandsList.innerHTML = CMDS.map(c => `
        <div class="cr">
            <span class="cmd">${c.cmd}</span>
            <span class="cds">${isAr ? c.ar : c.en}</span>
        </div>
    `).join('');

    // Update Dev
    document.getElementById('stagDev').textContent = t.stagDev;
    document.getElementById('titleDev').textContent = t.titleDev;
    document.getElementById('devRole').textContent = t.devRole;
    document.getElementById('devBio').textContent = t.devBio;
    document.getElementById('instaText').textContent = t.instaText;
    document.getElementById('githubText').textContent = t.githubText;

    // Update CTA & Footer
    document.getElementById('ctaTitle').textContent = t.ctaTitle;
    document.getElementById('ctaSub').textContent = t.ctaSub;
    document.getElementById('ctaBtn').textContent = t.ctaBtn;
    document.getElementById('footerText').textContent = t.footerText;

    lucide.createIcons();
    
    // Re-observe elements for animation
    const obs = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("on"); }),
        { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    );
    document.querySelectorAll(".rv, .rv-s").forEach((el) => obs.observe(el));
}

// Theme Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    document.body.setAttribute('data-theme', currentTheme);
    const icon = currentTheme === "light" ? "moon" : "sun";
    document.getElementById('themeToggle').innerHTML = `<i data-lucide="${icon}"></i>`;
    lucide.createIcons();
});

// Lang Toggle
document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === "ar" ? "en" : "ar";
    document.getElementById('langToggle').textContent = currentLang === "ar" ? "EN" : "AR";
    updateUI();
});

// Scroll Effects
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("pbar").style.transform = `scaleX(${scrolled / 100})`;
    
    if (winScroll > 24) {
        document.getElementById('navbar').classList.add('sk');
    } else {
        document.getElementById('navbar').classList.remove('sk');
    }
});

// Initial Load
updateUI();
