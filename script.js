const FEATS = {
    en: [
        { icon: "upload", title: "Upload ZIP", desc: "Upload any ZIP and install it as a new repository." },
        { icon: "list", title: "List Repos", desc: "View all your GitHub repositories in one place." },
        { icon: "download", title: "Download Repo", desc: "Download any repository as a ZIP file." },
        { icon: "trash-2", title: "Delete Repo", desc: "Remove repositories with a single command." },
        { icon: "lock", title: "Privacy Control", desc: "Toggle any repository between public and private." },
        { icon: "git-branch", title: "Fetch Any Repo", desc: "Download any public GitHub repository instantly." }
    ],
    ar: [
        { icon: "upload", title: "رفع ملف ZIP", desc: "ستودع ZIP ارفع أي ملف واستخرجه كمستودع جديد." },
        { icon: "list", title: "عرض المستودعات", desc: "عرض جميع مستودعاتك على GitHub في مكان واحد." },
        { icon: "download", title: "تحميل مستودع", desc: "حمّل أي مستودع كملف ZIP مضغوط." },
        { icon: "trash-2", title: "حذف مستودع", desc: "حذف مستودعاتك بأمر واحد وفورية تامة." },
        { icon: "lock", title: "التحكم في الخصوصية", desc: "تبديل خصوصية أي مستودع بين عام وخاص." },
        { icon: "git-branch", title: "جلب أي مستودع", desc: "حمّل أي مستودع عام على GitHub فوراً." }
    ]
};

const CMDS = [
    { cmd: "/start", en: "Link your GitHub account", ar: "ربط حساب Git" },
    { cmd: "/repos", en: "List all your repositories", ar: "قائمة مستودعاتك" },
    { cmd: "/uploadzip", en: "Upload a ZIP as a new repo", ar: "رفع ZIP جديد" },
    { cmd: "/downloadrepo", en: "Download a repo as ZIP", ar: "تحميل مستودع كـ ZIP" },
    { cmd: "/deleterepo", en: "Delete a repository", ar: "حذف مستودع" },
    { cmd: "/setprivacy", en: "Toggle repository privacy", ar: "تغيير الخصوصية" },
    { cmd: "/fetchrepo", en: "Fetch any public repository", ar: "جلب مستودع عام" },
    { cmd: "/help", en: "Show full help guide", ar: "دليل المساعدة" }
];

const STEPS = {
    en: [
        { n: "01", t: "Open the Bot", d: "Start a conversation with @finial_GIT1_bot on Telegram." },
        { n: "02", t: "Connect GitHub", d: "Authorize the bot to access your repositories securely." },
        { n: "03", t: "Start Managing", d: "Use simple commands to manage your code from anywhere." }
    ],
    ar: [
        { n: "01", t: "افتح البوت", d: "ابدأ محادثة مع @finial_GIT1_bot على تلجرام." },
        { n: "02", t: "اربط حسابك", d: "قم بتفويض البوت للوصول إلى مستودعاتك بأمان." },
        { n: "03", t: "ابدأ الإدارة", d: "استخدم أوامر بسيطة لإدارة كودك من أي مكان." }
    ]
};

const TRANSLATIONS = {
    en: {
        navFeatures: "Features",
        navHow: "How It Works",
        navCommands: "Commands",
        heroBadge: "Manage Your Repos",
        heroTitle: "Control Your Repos <br><span class='gt'>With Total Security</span>",
        heroSub: "Professional SaaS Telegram bot to control your GitHub repositories with simple and fast commands.",
        heroBtn1: "Try Bot Free",
        heroBtn2: "Source",
        ctaTitle: "Ready to Start?",
        ctaSub: "Join developers who manage their repositories directly from Telegram.",
        ctaBtn: "Start Now Free",
        devBio: "Software developer passionate about building tools that make developers' lives easier. Developed this bot to make repository management simpler.",
        footerMade: "Made with ❤️ by Abdelhamed Nada"
    },
    ar: {
        navFeatures: "المميزات",
        navHow: "كيف يعمل",
        navCommands: "الأوامر",
        heroBadge: "أدر مستودعاتك",
        heroTitle: "التحكم في مستودعاتك <br><span class='gt'>بأمان وفورية تامة</span>",
        heroSub: "بوت تلجرام SaaS احترافي للتحكم في مستودعات GitHub الخاصة بك بأوامر بسيطة وسريعة.",
        heroBtn1: "جرب البوت مجاناً",
        heroBtn2: "المصدر",
        ctaTitle: "مستعد للبدء؟",
        ctaSub: "انضم إلى المطورين الذين يديرون مستودعاتهم مباشرة من تلجرام.",
        ctaBtn: "ابدأ الآن مجاناً",
        devBio: "مطور برمجيات شغوف ببناء أدوات تسهل حياة المطورين. طور هذا البوت ليجعل إدارة المستودعات أسهل.",
        footerMade: "صنع بـ ❤️ بواسطة Abdelhamed Nada"
    }
};

let currentLang = "ar";
let currentTheme = "light";

function updateUI() {
    const isAr = currentLang === "ar";
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;
    
    // Update Nav
    const navLinks = document.querySelectorAll('.nl');
    navLinks[0].textContent = TRANSLATIONS[currentLang].navFeatures;
    navLinks[1].textContent = TRANSLATIONS[currentLang].navHow;
    navLinks[2].textContent = TRANSLATIONS[currentLang].navCommands;
    
    // Update Hero
    document.getElementById('heroBadge').textContent = TRANSLATIONS[currentLang].heroBadge;
    document.getElementById('heroTitle').innerHTML = TRANSLATIONS[currentLang].heroTitle;
    document.getElementById('heroSub').textContent = TRANSLATIONS[currentLang].heroSub;
    const heroBtns = document.querySelectorAll('.hero .btn');
    heroBtns[0].textContent = TRANSLATIONS[currentLang].heroBtn1;
    heroBtns[1].innerHTML = `<i data-lucide="github"></i> ${TRANSLATIONS[currentLang].heroBtn2}`;
    
    // Update Features
    const featuresGrid = document.getElementById('featuresGrid');
    featuresGrid.innerHTML = FEATS[currentLang].map(f => `
        <div class="bc">
            <div class="bci"><i data-lucide="${f.icon}"></i></div>
            <div class="bct">${f.title}</div>
            <div class="bcd">${f.desc}</div>
        </div>
    `).join('');
    
    // Update Steps
    const stepsGrid = document.getElementById('stepsGrid');
    stepsGrid.innerHTML = STEPS[currentLang].map(s => `
        <div class="sc">
            <div class="sn">${s.n}</div>
            <div class="st">${s.t}</div>
            <div class="sd">${s.d}</div>
        </div>
    `).join('');
    
    // Update Commands
    const commandsList = document.getElementById('commandsList');
    commandsList.innerHTML = CMDS.map(c => `
        <div class="cr">
            <div class="cmd">${c.cmd}</div>
            <div class="cds">${c[currentLang]}</div>
        </div>
    `).join('');

    // Update CTA & Footer
    document.querySelector('.ctat').textContent = TRANSLATIONS[currentLang].ctaTitle;
    document.querySelector('.ctas_').textContent = TRANSLATIONS[currentLang].ctaSub;
    document.querySelector('.ctas .btn').textContent = TRANSLATIONS[currentLang].ctaBtn;
    document.querySelector('.dbio').textContent = TRANSLATIONS[currentLang].devBio;
    document.querySelector('footer p').textContent = `© 2025 GitBot · ${TRANSLATIONS[currentLang].footerMade}`;

    lucide.createIcons();
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

// Progress Bar
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("pbar").style.transform = `scaleX(${scrolled / 100})`;
    
    // Navbar stuck effect
    if (winScroll > 24) {
        document.getElementById('navbar').style.boxShadow = "var(--sh)";
    } else {
        document.getElementById('navbar').style.boxShadow = "none";
    }
});

// Initial Load
updateUI();
