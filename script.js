(() => {
  const head = document.head;

  /* ========== 1. CLOUDFLARE ANALYTICS (bị thiếu ở bản trước) ========== */
  const cf = document.createElement('script');
  cf.type = 'module';
  cf.src = 'https://static.cloudflareinsights.com/beacon.min.js/vce701823e78c4301a35b7e07294d87301792088814092';
  cf.integrity = 'sha512-UKNk8GbxkABxKcXYuLkO16EleLGUkcvJWtpSNmExE0Too3ZaFAxTscNWEc1OdAv5/BikHawapSCaiD2XCmp+Bw==';
  cf.crossOrigin = 'anonymous';
  cf.setAttribute('data-cf-beacon', JSON.stringify({
    version: "2024.11.0",
    token: "737d8cf736464a6f826052cf51815808",
    r: 1,
    spa: 2
  }));
  head.appendChild(cf);

  /* ========== 2. STYLES (link + inline) ========== */
  const addLink = (rel, href, attrs = {}) => {
    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    Object.assign(link, attrs);
    head.appendChild(link);
  };

  addLink('stylesheet', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
  addLink('icon', 'https://lemonhub-dev.vercel.app/lemon.jpg', { type: 'image/jpeg' });

  const style = document.createElement('style');
  style.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
html, body { background: #0a0600; }
html:not(.lang-ready) body { opacity: 0; }
html.lang-ready body { opacity: 1; transition: opacity 0.2s ease; }
.lang-overlay {
    position: fixed; inset: 0; z-index: 9999;
    pointer-events: none; opacity: 0;
    background: radial-gradient(circle at 50% 50%, rgba(255, 235, 120, 0.28) 0%, rgba(255, 216, 0, 0.18) 55%, rgba(255, 179, 0, 0.14) 100%);
    -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px);
    transition: opacity 0.35s ease;
}
body.lang-switching .lang-overlay { opacity: 1; transition: opacity 0.35s ease-out; }
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

body, button, a, input, select, textarea, .faq-question, label {
    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Ccircle cx='10' cy='10' r='5' fill='%23ffe066'/%3E%3Ccircle cx='10' cy='10' r='7.5' fill='none' stroke='%23ffe066' stroke-opacity='0.5' stroke-width='2'/%3E%3C/svg%3E") 10 10, auto !important;
}
a:hover, button:hover, .faq-question:hover, .btn-outline-glow:hover, .about-card:hover, .feature-card:hover, .why-card:hover {
    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='6' fill='%23ffe066'/%3E%3Ccircle cx='12' cy='12' r='9' fill='none' stroke='%23ffe066' stroke-opacity='0.6' stroke-width='2.5'/%3E%3C/svg%3E") 12 12, pointer !important;
}
.font-orbitron { font-family: 'Orbitron', sans-serif; }
.font-mono { font-family: 'Space Mono', monospace; }
.font-faq { font-family: 'Rajdhani', sans-serif !important; font-weight: 700; letter-spacing: 0.05em; }
.bg-layer { position: fixed; inset: 0; z-index: 0; background: #0a0600; pointer-events: none; }
.grid-layer {
    position: fixed; inset: 0; z-index: 1;
    background-image: linear-gradient(rgba(255, 220, 60, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 220, 60, 0.03) 1px, transparent 1px);
    background-size: 50px 50px; pointer-events: none;
}
.stars-layer { position: fixed; inset: 0; z-index: 2; pointer-events: none; }
.star { position: absolute; border-radius: 50%; background: #ffe066; box-shadow: 0 0 3px #ffe066; animation: twinkle 4s ease-in-out infinite; will-change: opacity; }
@keyframes twinkle { 0%, 100% { opacity: 0.1; } 50% { opacity: 0.7; } }
nav, section, footer { position: relative; z-index: 10; }
@keyframes floatDashboard { 0%, 100% { transform: translate3d(0, 0, 0); } 50% { transform: translate3d(0, -14px, 0); } }
.animate-float { animation: floatDashboard 4s ease-in-out infinite; will-change: transform; }
.glow-lemon { text-shadow: 0 0 8px rgba(255, 230, 100, 0.5); }
.title-lemon, .gradient-text {
    background: linear-gradient(135deg, #fff59d 0%, #ffe066 50%, #ffb300 100%);
    -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
}
.glass-panel { background: #140f04; border: 1px solid rgba(255, 220, 60, 0.2); border-radius: 20px; transition: border-color 0.2s ease, transform 0.2s ease; }
.glass-panel:hover { border-color: rgba(255, 220, 60, 0.5); }
.navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: rgba(10, 6, 0, 0.95); border-bottom: 1px solid rgba(255, 220, 60, 0.15); }
.nav-link { position: relative; transition: all 0.3s ease; }
.nav-link:hover { color: #ffe066 !important; }
.nav-link.active { color: #ffe066 !important; text-shadow: 0 0 10px rgba(255, 224, 102, 0.6); }
.nav-link.active::after { content: ''; position: absolute; bottom: -6px; left: 0; width: 100%; height: 2px; background: #ffe066; border-radius: 2px; box-shadow: 0 0 8px #ffe066; }
.logo-lemon { width: 42px; height: 42px; border-radius: 50%; background: #ffe066; display: flex; align-items: center; justify-content: center; color: #3e2723; font-size: 20px; }
.hero-title { font-size: clamp(2.5rem, 9vw, 7rem); line-height: 0.95; letter-spacing: -0.02em; }
.stat-num { font-family: 'Orbitron', sans-serif; font-weight: 900; color: #ffe066; }
.divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(255, 220, 60, 0.4), transparent); position: relative; }
.divider::after { content: '◆'; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); color: #ffe066; font-size: 14px; }
.reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.4s ease, transform 0.4s ease; will-change: opacity, transform; }
.reveal.active { opacity: 1; transform: translateY(0); }
.badge-lemon {
    display: inline-flex; align-items: center; gap: 6px; padding: 5px 14px; border-radius: 999px;
    background: rgba(255, 220, 60, 0.1); border: 1px solid rgba(255, 220, 60, 0.3);
    font-family: 'Orbitron', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.25em;
    color: #fff59d; text-transform: uppercase;
}
.author-sig { font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: 0.3em; color: rgba(255, 220, 60, 0.7); text-transform: uppercase; }
.lang-switch { display: flex; align-items: center; background: rgba(255, 220, 60, 0.08); border: 1px solid rgba(255, 220, 60, 0.3); border-radius: 999px; padding: 2px; font-family: 'Orbitron', sans-serif; font-size: 11px; font-weight: 700; }
.lang-btn { padding: 4px 10px; border-radius: 999px; color: rgba(255, 245, 157, 0.6); cursor: pointer; transition: all 0.2s ease; background: transparent; border: none; }
.lang-btn.active { background: #ffe066; color: #0a0600; box-shadow: 0 0 8px rgba(255, 224, 102, 0.5); }
a[href*="discord.gg"]:not(.icon-plain) {
    position: relative; display: inline-flex; align-items: center; justify-content: center; gap: 10px;
    padding: 12px 26px; border-radius: 14px; font-family: 'Orbitron', sans-serif; font-weight: 800; font-size: 12px;
    letter-spacing: 0.12em; text-transform: uppercase; color: #0a0600 !important;
    background: radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.35), transparent 45%), linear-gradient(135deg, #fff59d 0%, #ffe066 45%, #ffb300 100%) !important;
    border: 1px solid rgba(255, 255, 255, 0.4) !important; overflow: hidden; isolation: isolate; text-decoration: none;
    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, filter 0.3s ease;
    box-shadow: 0 0 0 1px rgba(255, 224, 102, 0.25), 0 6px 20px -6px rgba(255, 179, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.6);
}
a[href*="discord.gg"]:not(.icon-plain)::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(110deg, transparent 25%, rgba(255, 255, 255, 0.7) 50%, transparent 75%);
    transform: translateX(-120%); transition: transform 0.7s ease; z-index: 1; pointer-events: none;
}
a[href*="discord.gg"]:not(.icon-plain)::after {
    content: ''; position: absolute; inset: -3px; border-radius: 17px;
    background: linear-gradient(135deg, #ffe066, #ffb300, #ffe066); background-size: 200% 200%;
    filter: blur(12px); opacity: 0; z-index: -1; transition: opacity 0.35s ease;
    animation: btnGlowShift 3s linear infinite; pointer-events: none;
}
a[href*="discord.gg"]:not(.icon-plain):hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 0 0 1px rgba(255, 224, 102, 0.55), 0 14px 32px -8px rgba(255, 179, 0, 0.75), inset 0 1px 0 rgba(255, 255, 255, 0.85);
    filter: brightness(1.06);
}
a[href*="discord.gg"]:not(.icon-plain):hover::before { transform: translateX(120%); }
a[href*="discord.gg"]:not(.icon-plain):hover::after { opacity: 0.8; }
a[href*="discord.gg"]:not(.icon-plain) i { position: relative; z-index: 2; display: inline-block; font-size: 16px; transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1); }
a[href*="discord.gg"]:not(.icon-plain):hover i { transform: rotate(-10deg) scale(1.18); }
a[href*="discord.gg"]:not(.icon-plain) span { position: relative; z-index: 2; }
@keyframes btnGlowShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
a[href*="discord.gg"]:not(.icon-plain).text-xs, a[href*="discord.gg"]:not(.icon-plain).text-sm { font-size: 11px; padding: 10px 20px; border-radius: 12px; letter-spacing: 0.1em; }
a[href*="discord.gg"]:not(.icon-plain).text-xs i { font-size: 13px; }
a[href*="discord.gg"]:not(.icon-plain).py-4 { padding: 15px 32px; font-size: 13px; border-radius: 14px; }
a[href*="discord.gg"]:not(.icon-plain).py-3\\.5 { padding: 14px 36px; font-size: 13px; border-radius: 14px; }
a[href*="discord.gg"]:not(.icon-plain).w-full { width: 100%; padding: 14px 20px; }
.btn-outline-glow {
    position: relative; display: inline-flex; align-items: center; justify-content: center; gap: 10px;
    padding: 12px 26px; border-radius: 14px; font-family: 'Orbitron', sans-serif; font-weight: 800; font-size: 12px;
    letter-spacing: 0.12em; text-transform: uppercase; color: #fff59d; background: rgba(255, 220, 60, 0.06);
    border: 1.5px solid rgba(255, 224, 102, 0.45); backdrop-filter: blur(8px); overflow: visible !important;
    transition: all 0.28s ease; text-decoration: none; isolation: isolate;
}
.btn-outline-glow:hover { border-color: #ffe066; transform: translateY(-3px); box-shadow: 0 12px 28px -8px rgba(255, 179, 0, 0.55); }
.btn-outline-glow i { display: inline-block !important; position: relative; z-index: 2; font-size: 15px !important; transform: scale(1); transform-origin: center center; transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) !important; will-change: transform; }
.btn-outline-glow:hover i { transform: scale(1.35) !important; }
.btn-outline-glow span { position: relative; z-index: 2; }
.about-card, .feature-card {
    position: relative; display: flex; flex-direction: column; align-items: flex-start; gap: 6px;
    padding: 24px; border-radius: 20px; background: rgba(255, 220, 60, 0.06);
    border: 1.5px solid rgba(255, 224, 102, 0.45); backdrop-filter: blur(8px); overflow: visible;
    transition: all 0.28s ease; isolation: isolate;
}
.about-card:hover, .feature-card:hover { border-color: #ffe066; transform: translateY(-3px); box-shadow: 0 12px 28px -8px rgba(255, 179, 0, 0.55); }
.about-card .about-icon, .feature-card .feature-icon {
    display: inline-flex !important; align-items: center; justify-content: center;
    width: 40px; height: 40px; border-radius: 12px; background: rgba(255, 220, 60, 0.1);
    color: #ffe066; font-size: 18px; position: relative; z-index: 2; transform: scale(1);
    transform-origin: center center; transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); will-change: transform;
}
.about-card:hover .about-icon, .feature-card:hover .feature-icon { transform: scale(1.25); }
.about-card h3, .feature-card h3, .about-card p, .feature-card p { position: relative; z-index: 2; }
.why-card {
    position: relative; display: flex; flex-direction: column; align-items: flex-start; gap: 8px;
    padding: 20px 20px 20px 24px; border-radius: 16px; background: #140f04;
    border: 1px solid rgba(255, 220, 60, 0.2); overflow: hidden;
    transition: all 0.28s ease; isolation: isolate;
}
.why-card::before { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: #facc15; z-index: 1; display: block !important; }
.why-card:hover { border-color: rgba(255, 220, 60, 0.6); transform: translateY(-2px); box-shadow: 0 8px 20px -10px rgba(255, 179, 0, 0.5); }
.why-card h3 { position: relative; z-index: 2; font-size: 16px; margin-bottom: 0; transition: color 0.28s ease; }
.why-card p { position: relative; z-index: 2; font-size: 13px; line-height: 1.5; color: rgba(255, 245, 157, 0.6); transition: color 0.28s ease; }
.why-card:hover h3 { color: #fff59d !important; text-shadow: 0 0 8px rgba(255, 224, 102, 0.6); }
.why-card .why-icon { display: none !important; }
.faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.35s ease-out; }
.faq-answer-inner { padding: 0 24px 20px 24px; }
.faq-item.open .faq-icon { transform: rotate(180deg); }
.faq-question { transition: none !important; background: transparent !important; }
.faq-question:hover { background: transparent !important; }
.faq-item:has(.faq-question:hover) { border-color: rgba(255, 220, 60, 0.2) !important; box-shadow: none !important; }
.faq-question span[data-i18n] { transition: color 0.28s ease, text-shadow 0.28s ease; }
.faq-question:hover span[data-i18n] { color: #ffea00 !important; text-shadow: 0 0 12px rgba(255, 234, 0, 0.9), 0 0 20px rgba(255, 234, 0, 0.5); }
#home { min-height: 100vh; }
`;
  head.appendChild(style);

  /* ========== 3. MARKUP ========== */
  const root = document.getElementById('app');
  root.innerHTML = `
<div class="lang-overlay" aria-hidden="true"></div>
<div class="bg-layer"></div>
<div class="grid-layer"></div>
<div class="stars-layer" id="starsLayer"></div>
<nav class="navbar" id="navbar">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#" class="flex items-center gap-3 group">
            <div class="logo-lemon"><i class="fa-solid fa-lemon"></i></div>
            <div>
                <div class="font-orbitron font-black text-lg text-yellow-200 glow-lemon leading-none">LEMON HUB</div>
                <div class="author-sig">by NamDevXHub</div>
            </div>
        </a>
        <div class="hidden md:flex items-center gap-6">
            <a href="#home" class="nav-link text-sm font-bold text-yellow-100/85 active" data-i18n="nav_home">Trang Chủ</a>
            <a href="#about" class="nav-link text-sm font-bold text-yellow-100/85" data-i18n="nav_about">Giới Thiệu</a>
            <a href="#features" class="nav-link text-sm font-bold text-yellow-100/85" data-i18n="nav_features">Tính Năng</a>
            <a href="#why" class="nav-link text-sm font-bold text-yellow-100/85" data-i18n="nav_why">Tại Sao Chọn</a>
            <a href="#faq" class="nav-link font-faq text-sm text-yellow-100/85" data-i18n="nav_faq">FAQ</a>
            <div class="lang-switch">
                <button class="lang-btn active" data-lang="vi">🇻🇳 VI</button>
                <button class="lang-btn" data-lang="en">🇬🇧 EN</button>
            </div>
            <a href="https://discord.gg/3vAR4zfz7f" target="_blank" class="text-xs">
                <i class="fa-brands fa-discord"></i> <span>DISCORD</span>
            </a>
        </div>
        <div class="flex items-center gap-3 md:hidden">
            <div class="lang-switch">
                <button class="lang-btn active" data-lang="vi">🇻🇳 VI</button>
                <button class="lang-btn" data-lang="en">🇬🇧 EN</button>
            </div>
            <button id="mobileMenuBtn" class="text-yellow-300 text-2xl focus:outline-none"><i class="fa-solid fa-bars"></i></button>
        </div>
    </div>
    <div id="mobileMenu" class="md:hidden hidden bg-black/95 border-t border-yellow-500/20">
        <div class="flex flex-col p-4 gap-3">
            <a href="#home" class="text-yellow-100 font-bold py-2 border-b border-white/5" data-i18n="nav_home">Trang Chủ</a>
            <a href="#about" class="text-yellow-100 font-bold py-2 border-b border-white/5" data-i18n="nav_about">Giới Thiệu</a>
            <a href="#features" class="text-yellow-100 font-bold py-2 border-b border-white/5" data-i18n="nav_features">Tính Năng</a>
            <a href="#why" class="text-yellow-100 font-bold py-2 border-b border-white/5" data-i18n="nav_why">Tại Sao Chọn</a>
            <a href="#faq" class="font-faq text-yellow-100 py-2 border-b border-white/5 text-base" data-i18n="nav_faq">FAQ</a>
            <a href="https://discord.gg/3vAR4zfz7f" target="_blank" class="w-full mt-2 text-xs text-center"><i class="fa-brands fa-discord"></i> <span>DISCORD</span></a>
        </div>
    </div>
</nav>
<section id="home" class="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-12 overflow-hidden">
    <div class="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
        <div class="text-center lg:text-left reveal active">
            <div class="badge-lemon mb-6"><span class="w-2 h-2 rounded-full bg-green-400"></span> LEMON HUB · 2026</div>
            <h1 class="font-orbitron hero-title font-black mb-4">
                <span class="block title-lemon">LEMON</span>
                <span class="block title-lemon">HUB</span>
            </h1>
            <div class="divider w-32 mb-4 mx-auto lg:mx-0"></div>
            <p class="font-orbitron text-sm text-yellow-300 mb-6 tracking-[0.3em]"><i class="fa-solid fa-code mr-2"></i> BY NAMDEVXHUB</p>
            <p class="text-lg sm:text-xl text-yellow-100/70 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed" data-i18n="hero_desc">Hub tự động hóa thế hệ mới — tối ưu hiệu năng, giao diện sạch, hỗ trợ 50+ tính năng tiện lợi và luôn cập nhật.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a href="https://discord.gg/3vAR4zfz7f" target="_blank" class="py-4"><i class="fa-brands fa-discord"></i><span data-i18n="btn_join_discord">THAM GIA DISCORD</span></a>
                <a href="#features" class="btn-outline-glow"><i class="fa-solid fa-th"></i><span data-i18n="btn_view_features">XEM TÍNH NĂNG</span></a>
            </div>
            <div class="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                <div class="text-center border-r border-yellow-500/20">
                    <div class="stat-num text-2xl sm:text-3xl count-50">0+</div>
                    <div class="font-mono text-[10px] text-yellow-500/60 uppercase tracking-widest mt-1" data-i18n="stat_features">TÍNH NĂNG</div>
                </div>
                <div class="text-center">
                    <div class="stat-num text-2xl sm:text-3xl">24/7</div>
                    <div class="font-mono text-[10px] text-yellow-500/60 uppercase tracking-widest mt-1" data-i18n="stat_support">HỖ TRỢ</div>
                </div>
            </div>
        </div>
        <div class="relative flex items-center justify-center reveal active">
            <div class="glass-panel p-2 rounded-2xl w-full max-w-[500px] border-yellow-500/40 animate-float">
                <div class="bg-[#0d0a04] rounded-xl overflow-hidden border border-yellow-500/20">
                    <div class="bg-black/60 px-4 py-3 flex items-center gap-2 border-b border-yellow-500/10">
                        <div class="w-3 h-3 rounded-full bg-red-500"></div><div class="w-3 h-3 rounded-full bg-yellow-500"></div><div class="w-3 h-3 rounded-full bg-green-500"></div>
                        <div class="ml-auto font-mono text-[10px] text-gray-500">Lemon Hub — Dashboard</div>
                    </div>
                    <div class="flex h-[250px]">
                        <div class="w-[60px] bg-black/40 border-r border-yellow-500/10 p-3 flex flex-col items-center gap-4">
                            <i class="fa-solid fa-lemon text-yellow-400 text-lg"></i>
                            <div class="w-full h-1.5 rounded bg-yellow-500/50 mt-4"></div><div class="w-full h-1.5 rounded bg-gray-700"></div><div class="w-full h-1.5 rounded bg-gray-700"></div>
                        </div>
                        <div class="flex-1 p-5 flex flex-col gap-4">
                            <div class="flex gap-3"><div class="flex-1 h-12 rounded-lg bg-yellow-500/5 border border-yellow-500/10"></div><div class="flex-1 h-12 rounded-lg bg-yellow-500/5 border border-yellow-500/10"></div></div>
                            <div class="flex-1 rounded-lg border border-yellow-500/10 bg-gradient-to-t from-yellow-500/10 to-transparent relative overflow-hidden"><div class="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></div></div>
                            <div class="flex flex-col gap-2"><div class="w-full h-2 rounded bg-gray-700"></div><div class="w-3/4 h-2 rounded bg-gray-700"></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="about" class="py-20 px-4 relative bg-black/20">
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12 reveal">
            <div class="badge-lemon mb-4" data-i18n="badge_about">GIỚI THIỆU</div>
            <h2 class="font-orbitron text-3xl sm:text-5xl font-black mb-6 leading-tight gradient-text" data-i18n="about_title">Hub không chỉ là<br>một công cụ</h2>
            <div class="max-w-3xl mx-auto space-y-4 text-yellow-100/80 text-lg leading-relaxed">
                <p data-i18n="about_p1">Lemon Hub được xây dựng với triết lý đơn giản: <strong class="text-yellow-300 font-bold">mạnh mẽ nhưng dễ dùng.</strong> Dù bạn là người mới hay lập trình viên kỳ cựu, Hub đều hoạt động trơn tru ngay từ lần đầu tiên.</p>
                <p class="text-yellow-100/60 text-base" data-i18n="about_p2">Chúng tôi liên tục cập nhật, lắng nghe cộng đồng và tối ưu từng tính năng để mang lại trải nghiệm tốt nhất.</p>
            </div>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="about-card reveal rounded-2xl">
                <div class="about-icon"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
                <h3 class="font-orbitron text-lg font-bold text-yellow-200 mb-2" data-i18n="ab_1_t">Dễ sử dụng</h3>
                <p class="text-yellow-100/60 text-sm" data-i18n="ab_1_d">Cài đặt và chạy trong vài giây, không cần kiến thức chuyên sâu.</p>
            </div>
            <div class="about-card reveal rounded-2xl">
                <div class="about-icon"><i class="fa-solid fa-desktop"></i></div>
                <h3 class="font-orbitron text-lg font-bold text-yellow-200 mb-2" data-i18n="ab_2_t">Giao diện thân thiện</h3>
                <p class="text-yellow-100/60 text-sm" data-i18n="ab_2_d">UI sạch, trực quan, dễ điều hướng trên mọi thiết bị.</p>
            </div>
            <div class="about-card reveal rounded-2xl">
                <div class="about-icon"><i class="fa-solid fa-arrows-rotate"></i></div>
                <h3 class="font-orbitron text-lg font-bold text-yellow-200 mb-2" data-i18n="ab_3_t">Cập nhật thường xuyên</h3>
                <p class="text-yellow-100/60 text-sm" data-i18n="ab_3_d">Tính năng mới và bản vá lỗi được phát hành định kỳ.</p>
            </div>
            <div class="about-card reveal rounded-2xl">
                <div class="about-icon"><i class="fa-solid fa-bolt"></i></div>
                <h3 class="font-orbitron text-lg font-bold text-yellow-200 mb-2" data-i18n="ab_4_t">Tối ưu hiệu năng</h3>
                <p class="text-yellow-100/60 text-sm" data-i18n="ab_4_d">Nhẹ, nhanh và không ảnh hưởng đến hiệu suất hệ thống.</p>
            </div>
            <div class="about-card reveal rounded-2xl">
                <div class="about-icon"><i class="fa-solid fa-layer-group"></i></div>
                <h3 class="font-orbitron text-lg font-bold text-yellow-200 mb-2" data-i18n="ab_5_t">Hỗ trợ nhiều tính năng</h3>
                <p class="text-yellow-100/60 text-sm" data-i18n="ab_5_d">50+ tính năng được tích hợp sẵn, đáp ứng mọi nhu cầu.</p>
            </div>
            <div class="about-card reveal rounded-2xl">
                <div class="about-icon"><i class="fa-solid fa-users"></i></div>
                <h3 class="font-orbitron text-lg font-bold text-yellow-200 mb-2" data-i18n="ab_6_t">Cộng đồng sôi động</h3>
                <p class="text-yellow-100/60 text-sm" data-i18n="ab_6_d">Cộng đồng người dùng đông đảo, sẵn sàng trao đổi và hỗ trợ lẫn nhau.</p>
            </div>
        </div>
    </div>
</section>
<section id="features" class="py-20 px-4 relative">
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-10 reveal">
            <div class="badge-lemon mb-4" data-i18n="nav_features">TÍNH NĂNG</div>
            <h2 class="font-orbitron text-3xl sm:text-5xl font-black mb-3 title-lemon" data-i18n="feat_title">50+ TÍNH NĂNG MẠNH MẼ</h2>
            <p class="text-yellow-100/60 max-w-2xl mx-auto" data-i18n="feat_sub">Từ tự động hóa cơ bản đến hệ thống nâng cao — tất cả đều có trong Hub.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="feature-card reveal rounded-2xl"><div class="feature-icon"><i class="fa-solid fa-wheat-awn"></i></div><h3 class="font-orbitron text-base font-black text-yellow-200 mb-2">Auto Farm</h3><p class="text-yellow-100/60 text-sm" data-i18n="f1_d">Tự động farming hiệu quả, tối ưu hóa từng vòng lặp để đạt loot tối đa.</p></div>
            <div class="feature-card reveal rounded-2xl"><div class="feature-icon"><i class="fa-solid fa-scroll"></i></div><h3 class="font-orbitron text-base font-black text-yellow-200 mb-2">Auto Quest</h3><p class="text-yellow-100/60 text-sm" data-i18n="f2_d">Nhận và hoàn thành quest tự động, không bỏ sót bất kỳ nhiệm vụ nào.</p></div>
            <div class="feature-card reveal rounded-2xl"><div class="feature-icon"><i class="fa-solid fa-skull-crossbones"></i></div><h3 class="font-orbitron text-base font-black text-yellow-200 mb-2">Auto Boss</h3><p class="text-yellow-100/60 text-sm" data-i18n="f3_d">Tham chiến boss tự động với chiến thuật thông minh và phản xạ nhanh.</p></div>
            <div class="feature-card reveal rounded-2xl"><div class="feature-icon"><i class="fa-solid fa-chess-rook"></i></div><h3 class="font-orbitron text-base font-black text-yellow-200 mb-2">Auto Raid</h3><p class="text-yellow-100/60 text-sm" data-i18n="f4_d">Tự động tham gia raid, tối ưu điểm số và phần thưởng mỗi mùa.</p></div>
            <div class="feature-card reveal rounded-2xl"><div class="feature-icon"><i class="fa-solid fa-water"></i></div><h3 class="font-orbitron text-base font-black text-yellow-200 mb-2">Auto Sea Event</h3><p class="text-yellow-100/60 text-sm" data-i18n="f5_d">Không bỏ lỡ bất kỳ sự kiện biển nào với hệ thống phát hiện thông minh.</p></div>
            <div class="feature-card reveal rounded-2xl"><div class="feature-icon"><i class="fa-solid fa-magnet"></i></div><h3 class="font-orbitron text-base font-black text-yellow-200 mb-2">Auto Collect</h3><p class="text-yellow-100/60 text-sm" data-i18n="f6_d">Thu thập item, tài nguyên và phần thưởng tự động, không cần giám sát.</p></div>
            <div class="feature-card reveal rounded-2xl"><div class="feature-icon"><i class="fa-solid fa-map-location-dot"></i></div><h3 class="font-orbitron text-base font-black text-yellow-200 mb-2">Teleport System</h3><p class="text-yellow-100/60 text-sm" data-i18n="f7_d">Dịch chuyển tức thì đến bất kỳ vị trí nào với hệ thống teleport tiên tiến.</p></div>
            <div class="feature-card reveal rounded-2xl"><div class="feature-icon"><i class="fa-solid fa-chart-pie"></i></div><h3 class="font-orbitron text-base font-black text-yellow-200 mb-2">Status UI</h3><p class="text-yellow-100/60 text-sm" data-i18n="f8_d">Giao diện hiển thị trạng thái real-time, theo dõi mọi thông số quan trọng.</p></div>
            <div class="feature-card reveal rounded-2xl"><div class="feature-icon"><i class="fa-solid fa-bell"></i></div><h3 class="font-orbitron text-base font-black text-yellow-200 mb-2">Webhook Notification</h3><p class="text-yellow-100/60 text-sm" data-i18n="f9_d">Nhận thông báo tức thì qua Discord Webhook khi có sự kiện quan trọng.</p></div>
            <div class="feature-card reveal rounded-2xl"><div class="feature-icon"><i class="fa-solid fa-users"></i></div><h3 class="font-orbitron text-base font-black text-yellow-200 mb-2">Multi Account</h3><p class="text-yellow-100/60 text-sm" data-i18n="f10_d">Hỗ trợ đa tài khoản đồng thời, quản lý tập trung trong một giao diện.</p></div>
            <div class="feature-card reveal rounded-2xl"><div class="feature-icon"><i class="fa-solid fa-sliders"></i></div><h3 class="font-orbitron text-base font-black text-yellow-200 mb-2">Config System</h3><p class="text-yellow-100/60 text-sm" data-i18n="f11_d">Hệ thống cấu hình linh hoạt, lưu/tải profile dễ dàng chỉ với vài click.</p></div>
            <div class="feature-card reveal rounded-2xl"><div class="feature-icon"><i class="fa-solid fa-gauge-high"></i></div><h3 class="font-orbitron text-base font-black text-yellow-200 mb-2">Performance Optimization</h3><p class="text-yellow-100/60 text-sm" data-i18n="f12_d">Tối ưu CPU & RAM thông minh, chạy mượt ngay cả trên máy cấu hình thấp.</p></div>
        </div>
        <div class="text-center mt-8"><div class="badge-lemon text-sm py-2 px-6" data-i18n="f13_d">VÀ 38+ TÍNH NĂNG KHÁC ĐANG CHỜ ĐÓN BẠN!</div></div>
    </div>
</section>
<section id="why" class="py-20 px-4 relative bg-black/20">
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-10 reveal">
            <div class="badge-lemon mb-4" data-i18n="badge_why">TẠI SAO CHỌN</div>
            <h2 class="font-orbitron text-3xl sm:text-5xl font-black mb-3 title-lemon" data-i18n="why_title">TẠI SAO CHỌN LEMON HUB?</h2>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="why-card reveal rounded-2xl"><h3 class="font-orbitron font-black text-yellow-200">Fast & Stable</h3><p data-i18n="w1_d">Hệ thống được tối ưu kỹ lưỡng, hoạt động ổn định 24/7 không gián đoạn.</p></div>
            <div class="why-card reveal rounded-2xl"><h3 class="font-orbitron font-black text-yellow-200">Clean UI</h3><p data-i18n="w2_d">Giao diện tối giản, không rối, mọi chức năng đều dễ tìm và dễ dùng.</p></div>
            <div class="why-card reveal rounded-2xl"><h3 class="font-orbitron font-black text-yellow-200">Smart Automation</h3><p data-i18n="w3_d">Thuật toán thông minh, tự thích nghi với từng tình huống trong game.</p></div>
            <div class="why-card reveal rounded-2xl"><h3 class="font-orbitron font-black text-yellow-200">Low Lag</h3><p data-i18n="w4_d">Tiêu tốn tài nguyên tối thiểu, không làm chậm máy hay kết nối mạng.</p></div>
            <div class="why-card reveal rounded-2xl"><h3 class="font-orbitron font-black text-yellow-200">Easy Setup</h3><p data-i18n="w5_d">Cài đặt trong 60 giây, hướng dẫn chi tiết bằng tiếng Việt đầy đủ.</p></div>
            <div class="why-card reveal rounded-2xl"><h3 class="font-orbitron font-black text-yellow-200">Active Support</h3><p data-i18n="w6_d">Đội ngũ hỗ trợ sẵn sàng 24/7 qua Discord, phản hồi trong vài phút.</p></div>
        </div>
    </div>
</section>
<section id="faq" class="py-20 px-4 relative">
    <div class="max-w-4xl mx-auto">
        <div class="text-center mb-10 reveal">
            <div class="badge-lemon font-faq mb-4 tracking-widest">FAQ</div>
            <h2 class="font-orbitron text-3xl sm:text-5xl font-black mb-3 title-lemon" data-i18n="faq_title">CÂU HỎI THƯỜNG GẶP</h2>
            <p class="text-yellow-100/60 max-w-2xl mx-auto" data-i18n="faq_sub">Giải đáp các thắc mắc phổ biến nhất khi sử dụng Lemon Hub.</p>
        </div>
        <div class="flex flex-col gap-4">
            <div class="glass-panel rounded-2xl reveal border-yellow-500/30 faq-item overflow-hidden">
                <div class="faq-question w-full p-6 text-left flex items-center justify-between cursor-pointer text-yellow-200 font-orbitron font-black text-base sm:text-lg select-none">
                    <span class="flex items-center gap-3"><i class="fa-solid fa-circle-question text-yellow-400"></i><span data-i18n="fq1_q">Hub có dễ sử dụng không?</span></span>
                    <i class="faq-icon fa-solid fa-chevron-down text-yellow-400 transition-transform duration-300"></i>
                </div>
                <div class="faq-answer"><div class="faq-answer-inner text-yellow-100/70 text-sm sm:text-base leading-relaxed" data-i18n="fq1_a">Rất dễ! Chỉ cần tải Hub, chạy file cài đặt và làm theo hướng dẫn từng bước. Toàn bộ giao diện được thiết kế tối giản, dễ hiểu kể cả với người mới lần đầu sử dụng.</div></div>
            </div>
            <div class="glass-panel rounded-2xl reveal border-yellow-500/30 faq-item overflow-hidden">
                <div class="faq-question w-full p-6 text-left flex items-center justify-between cursor-pointer text-yellow-200 font-orbitron font-black text-base sm:text-lg select-none">
                    <span class="flex items-center gap-3"><i class="fa-solid fa-arrows-rotate text-yellow-400"></i><span data-i18n="fq2_q">Có cập nhật thường xuyên không?</span></span>
                    <i class="faq-icon fa-solid fa-chevron-down text-yellow-400 transition-transform duration-300"></i>
                </div>
                <div class="faq-answer"><div class="faq-answer-inner text-yellow-100/70 text-sm sm:text-base leading-relaxed" data-i18n="fq2_a">Có! Chúng tôi phát hành bản cập nhật liên tục — bao gồm tính năng mới, vá lỗi và tối ưu hiệu năng. Mỗi bản cập nhật đều được thông báo trước trên Discord.</div></div>
            </div>
            <div class="glass-panel rounded-2xl reveal border-yellow-500/30 faq-item overflow-hidden">
                <div class="faq-question w-full p-6 text-left flex items-center justify-between cursor-pointer text-yellow-200 font-orbitron font-black text-base sm:text-lg select-none">
                    <span class="flex items-center gap-3"><i class="fa-solid fa-sliders text-yellow-400"></i><span data-i18n="fq3_q">Có hỗ trợ config không?</span></span>
                    <i class="faq-icon fa-solid fa-chevron-down text-yellow-400 transition-transform duration-300"></i>
                </div>
                <div class="faq-answer"><div class="faq-answer-inner text-yellow-100/70 text-sm sm:text-base leading-relaxed" data-i18n="fq3_a">Có đầy đủ! Hệ thống Config cho phép bạn lưu, tải và chia sẻ cấu hình một cách dễ dàng. Bạn có thể tạo nhiều profile khác nhau cho từng mục đích sử dụng.</div></div>
            </div>
            <div class="glass-panel rounded-2xl reveal border-yellow-500/30 faq-item overflow-hidden">
                <div class="faq-question w-full p-6 text-left flex items-center justify-between cursor-pointer text-yellow-200 font-orbitron font-black text-base sm:text-lg select-none">
                    <span class="flex items-center gap-3"><i class="fa-solid fa-headset text-yellow-400"></i><span data-i18n="fq4_q">Có Discord hỗ trợ không?</span></span>
                    <i class="faq-icon fa-solid fa-chevron-down text-yellow-400 transition-transform duration-300"></i>
                </div>
                <div class="faq-answer"><div class="faq-answer-inner text-yellow-100/70 text-sm sm:text-base leading-relaxed" data-i18n="fq4_a">Có! Discord của chúng tôi luôn hoạt động 24/7 với đội ngũ support nhiệt tình. Cộng đồng sẵn sàng giúp đỡ bạn bất kỳ lúc nào.</div></div>
            </div>
            <div class="glass-panel rounded-2xl reveal border-yellow-500/30 faq-item overflow-hidden">
                <div class="faq-question w-full p-6 text-left flex items-center justify-between cursor-pointer text-yellow-200 font-orbitron font-black text-base sm:text-lg select-none">
                    <span class="flex items-center gap-3"><i class="fa-solid fa-users text-yellow-400"></i><span data-i18n="fq5_q">Hub có hỗ trợ đa tài khoản không?</span></span>
                    <i class="faq-icon fa-solid fa-chevron-down text-yellow-400 transition-transform duration-300"></i>
                </div>
                <div class="faq-answer"><div class="faq-answer-inner text-yellow-100/70 text-sm sm:text-base leading-relaxed" data-i18n="fq5_a">Có! Tính năng Multi Account cho phép quản lý nhiều tài khoản cùng lúc trong một giao diện thống nhất, tiết kiệm thời gian và tăng hiệu quả đáng kể.</div></div>
            </div>
        </div>
    </div>
</section>
<section id="contact" class="py-20 px-4 relative">
    <div class="max-w-4xl mx-auto">
        <div class="reveal active glass-panel p-12 text-center relative overflow-hidden">
            <div class="text-4xl text-yellow-300 mb-6 flex justify-center"><i class="fa-solid fa-lemon"></i></div>
            <h2 class="font-orbitron text-3xl sm:text-4xl font-black mb-4 text-yellow-300 leading-tight" data-i18n="cta_title">Bạn đã sẵn sàng<br>tham gia Discord chưa?</h2>
            <p class="text-yellow-200 text-lg mb-8" data-i18n="cta_desc">Cùng đồng hành với Lemon Hub mỗi ngày. Đừng bỏ lỡ!</p>
            <a href="https://discord.gg/3vAR4zfz7f" target="_blank" class="py-3.5"><i class="fa-brands fa-discord"></i><span data-i18n="btn_join_now">Tham gia ngay</span></a>
        </div>
    </div>
</section>
<footer class="border-t border-yellow-500/20 py-12 px-4 bg-black/40">
    <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-yellow-500/10">
            <div>
                <a href="#" class="flex items-center gap-3 group mb-2">
                    <div class="logo-lemon text-base w-9 h-9"><i class="fa-solid fa-lemon"></i></div>
                    <div class="font-orbitron font-black text-lg text-yellow-200 glow-lemon">LEMON HUB</div>
                </a>
                <p class="font-mono text-xs text-yellow-100/50 uppercase tracking-widest">Automation Redefined.</p>
            </div>
            <div class="flex flex-wrap gap-10">
                <div>
                    <h5 class="font-orbitron text-xs font-bold text-yellow-300 uppercase tracking-wider mb-3">Hub</h5>
                    <ul class="space-y-2 text-sm">
                        <li><a href="#about" class="text-yellow-100/70 hover:text-yellow-300 transition" data-i18n="nav_about">Giới thiệu</a></li>
                        <li><a href="#features" class="text-yellow-100/70 hover:text-yellow-300 transition" data-i18n="nav_features">Tính năng</a></li>
                        <li><a href="#why" class="text-yellow-100/70 hover:text-yellow-300 transition" data-i18n="nav_why">Tại sao chọn</a></li>
                        <li><a href="#faq" class="font-faq text-yellow-100/70 hover:text-yellow-300 transition" data-i18n="nav_faq">FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-orbitron text-xs font-bold text-yellow-300 uppercase tracking-wider mb-3" data-i18n="footer_community">Cộng đồng</h5>
                    <ul class="space-y-2 text-sm">
                        <li><a href="https://discord.gg/3vAR4zfz7f" target="_blank" class="icon-plain text-yellow-100/70 hover:text-yellow-300 transition">Discord</a></li>
                        <li><a href="https://www.youtube.com/@NamDevXHub" target="_blank" class="text-yellow-100/70 hover:text-yellow-300 transition">YouTube</a></li>
                        <li><a href="https://www.tiktok.com/@namdevxhub" target="_blank" class="text-yellow-100/70 hover:text-yellow-300 transition">TikTok</a></li>
                        <li><a href="https://github.com/NamDevXHub" target="_blank" class="text-yellow-100/70 hover:text-yellow-300 transition">GitHub</a></li>
                        <li><a href="https://guns.lol/namdevxhub" target="_blank" class="text-yellow-100/70 hover:text-yellow-300 transition">Guns</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-yellow-100/40 font-mono">
            <div><span data-i18n="footer_rights">© 2026 Lemon Hub. Bảo lưu mọi quyền</span> · By <span class="text-yellow-300 font-bold">NamDevXHub</span></div>
            <div class="flex items-center gap-4 text-lg text-yellow-300/80">
                <a href="https://discord.gg/3vAR4zfz7f" target="_blank" class="icon-plain hover:text-yellow-300 transition"><i class="fa-brands fa-discord"></i></a>
                <a href="https://www.youtube.com/@NamDevXHub" target="_blank" class="hover:text-yellow-300 transition"><i class="fa-brands fa-youtube"></i></a>
                <a href="https://www.tiktok.com/@namdevxhub" target="_blank" class="hover:text-yellow-300 transition"><i class="fa-brands fa-tiktok"></i></a>
                <a href="https://github.com/NamDevXHub" target="_blank" class="hover:text-yellow-300 transition"><i class="fa-brands fa-github"></i></a>
                <a href="https://guns.lol/namdevxhub" target="_blank" class="icon-plain hover:text-yellow-300 transition"><i class="fa-solid fa-gun text-yellow-400"></i></a>
            </div>
        </div>
    </div>
</footer>
`;

  /* ========== 4. TRANSLATIONS ========== */
  const translations = {
    vi: {
      nav_home: "Trang Chủ", nav_about: "Giới Thiệu", nav_features: "Tính Năng", nav_why: "Tại Sao Chọn", nav_faq: "FAQ",
      hero_desc: "Hub tự động hóa thế hệ mới — tối ưu hiệu năng, giao diện sạch, hỗ trợ 50+ tính năng tiện lợi và luôn cập nhật.",
      btn_join_discord: "THAM GIA DISCORD", btn_view_features: "XEM TÍNH NĂNG", stat_features: "TÍNH NĂNG", stat_support: "HỖ TRỢ",
      badge_about: "GIỚI THIỆU", about_title: "Hub không chỉ là<br>một công cụ",
      about_p1: 'Lemon Hub được xây dựng với triết lý đơn giản: <strong class="text-yellow-300 font-bold">mạnh mẽ nhưng dễ dùng.</strong> Dù bạn là người mới hay lập trình viên kỳ cựu, Hub đều hoạt động trơn tru ngay từ lần đầu tiên.',
      about_p2: "Chúng tôi liên tục cập nhật, lắng nghe cộng đồng và tối ưu từng tính năng để mang lại trải nghiệm tốt nhất.",
      ab_1_t: "Dễ sử dụng", ab_1_d: "Cài đặt và chạy trong vài giây, không cần kiến thức chuyên sâu.",
      ab_2_t: "Giao diện thân thiện", ab_2_d: "UI sạch, trực quan, dễ điều hướng trên mọi thiết bị.",
      ab_3_t: "Cập nhật thường xuyên", ab_3_d: "Tính năng mới và bản vá lỗi được phát hành định kỳ.",
      ab_4_t: "Tối ưu hiệu năng", ab_4_d: "Nhẹ, nhanh và không ảnh hưởng đến hiệu suất hệ thống.",
      ab_5_t: "Hỗ trợ nhiều tính năng", ab_5_d: "50+ tính năng được tích hợp sẵn, đáp ứng mọi nhu cầu.",
      ab_6_t: "Cộng đồng sôi động", ab_6_d: "Cộng đồng người dùng đông đảo, sẵn sàng trao đổi và hỗ trợ lẫn nhau.",
      feat_title: "50+ TÍNH NĂNG MẠNH MẼ", feat_sub: "Từ tự động hóa cơ bản đến hệ thống nâng cao — tất cả đều có trong Hub.",
      f1_d: "Tự động farming hiệu quả, tối ưu hóa từng vòng lặp để đạt loot tối đa.",
      f2_d: "Nhận và hoàn thành quest tự động, không bỏ sót bất kỳ nhiệm vụ nào.",
      f3_d: "Tham chiến boss tự động với chiến thuật thông minh và phản xạ nhanh.",
      f4_d: "Tự động tham gia raid, tối ưu điểm số và phần thưởng mỗi mùa.",
      f5_d: "Không bỏ lỡ bất kỳ sự kiện biển nào với hệ thống phát hiện thông minh.",
      f6_d: "Thu thập item, tài nguyên và phần thưởng tự động, không cần giám sát.",
      f7_d: "Dịch chuyển tức thì đến bất kỳ vị trí nào với hệ thống teleport tiên tiến.",
      f8_d: "Giao diện hiển thị trạng thái real-time, theo dõi mọi thông số quan trọng.",
      f9_d: "Nhận thông báo tức thì qua Discord Webhook khi có sự kiện quan trọng.",
      f10_d: "Hỗ trợ đa tài khoản đồng thời, quản lý tập trung trong một giao diện.",
      f11_d: "Hệ thống cấu hình linh hoạt, lưu/tải profile dễ dàng chỉ với vài click.",
      f12_d: "Tối ưu CPU & RAM thông minh, chạy mượt ngay cả trên máy cấu hình thấp.",
      f13_d: "VÀ 38+ TÍNH NĂNG KHÁC ĐANG CHỜ ĐÓN BẠN!",
      badge_why: "TẠI SAO CHỌN", why_title: "TẠI SAO CHỌN LEMON HUB?",
      w1_d: "Hệ thống được tối ưu kỹ lưỡng, hoạt động ổn định 24/7 không gián đoạn.",
      w2_d: "Giao diện tối giản, không rối, mọi chức năng đều dễ tìm và dễ dùng.",
      w3_d: "Thuật toán thông minh, tự thích nghi với từng tình huống trong game.",
      w4_d: "Tiêu tốn tài nguyên tối thiểu, không làm chậm máy hay kết nối mạng.",
      w5_d: "Cài đặt trong 60 giây, hướng dẫn chi tiết bằng tiếng Việt đầy đủ.",
      w6_d: "Đội ngũ hỗ trợ sẵn sàng 24/7 qua Discord, phản hồi trong vài phút.",
      faq_title: "CÂU HỎI THƯỜNG GẶP", faq_sub: "Giải đáp các thắc mắc phổ biến nhất khi sử dụng Lemon Hub.",
      fq1_q: "Hub có dễ sử dụng không?", fq1_a: "Rất dễ! Chỉ cần tải Hub, chạy file cài đặt và làm theo hướng dẫn từng bước. Toàn bộ giao diện được thiết kế tối giản, dễ hiểu kể cả với người mới lần đầu sử dụng.",
      fq2_q: "Có cập nhật thường xuyên không?", fq2_a: "Có! Chúng tôi phát hành bản cập nhật liên tục — bao gồm tính năng mới, vá lỗi và tối ưu hiệu năng. Mỗi bản cập nhật đều được thông báo trước trên Discord.",
      fq3_q: "Có hỗ trợ config không?", fq3_a: "Có đầy đủ! Hệ thống Config cho phép bạn lưu, tải và chia sẻ cấu hình một cách dễ dàng. Bạn có thể tạo nhiều profile khác nhau cho từng mục đích sử dụng.",
      fq4_q: "Có Discord hỗ trợ không?", fq4_a: "Có! Discord của chúng tôi luôn hoạt động 24/7 với đội ngũ support nhiệt tình. Cộng đồng sẵn sàng giúp đỡ bạn bất kỳ lúc nào.",
      fq5_q: "Hub có hỗ trợ đa tài khoản không?", fq5_a: "Có! Tính năng Multi Account cho phép quản lý nhiều tài khoản cùng lúc trong một giao diện thống nhất, tiết kiệm thời gian và tăng hiệu quả đáng kể.",
      cta_title: "Bạn đã sẵn sàng<br>tham gia Discord chưa?", cta_desc: "Cùng đồng hành với Lemon Hub mỗi ngày. Đừng bỏ lỡ!",
      btn_join_now: "Tham gia ngay", footer_community: "Cộng đồng", footer_rights: "© 2026 Lemon Hub. Bảo lưu mọi quyền"
    },
    en: {
      nav_home: "Home", nav_about: "About", nav_features: "Features", nav_why: "Why Choose Us", nav_faq: "FAQ",
      hero_desc: "Next-gen automation Hub — performance optimized, clean UI, supporting 50+ features and always up-to-date.",
      btn_join_discord: "JOIN DISCORD", btn_view_features: "VIEW FEATURES", stat_features: "FEATURES", stat_support: "SUPPORT",
      badge_about: "ABOUT US", about_title: "Hub is not just<br>a tool",
      about_p1: 'Lemon Hub was built with a simple philosophy: <strong class="text-yellow-300 font-bold">powerful yet easy to use.</strong> Whether you are a beginner or a veteran developer, Hub works seamlessly from day one.',
      about_p2: "We continuously update, listen to community feedback, and optimize every feature to deliver the best experience.",
      ab_1_t: "Easy to Use", ab_1_d: "Setup and run in seconds with no technical knowledge required.",
      ab_2_t: "User-Friendly UI", ab_2_d: "Clean, intuitive UI, effortless to navigate on any device.",
      ab_3_t: "Regular Updates", ab_3_d: "New features and bug fixes are released periodically.",
      ab_4_t: "Performance Optimized", ab_4_d: "Lightweight, fast, and does not impact system performance.",
      ab_5_t: "Rich Features", ab_5_d: "50+ built-in features to fulfill all your automation needs.",
      ab_6_t: "Vibrant Community", ab_6_d: "An active community ready to share and support each other.",
      feat_title: "50+ POWERFUL FEATURES", feat_sub: "From basic automation to advanced systems — everything is in the Hub.",
      f1_d: "Efficient auto-farming, optimizing every loop for maximum loot.",
      f2_d: "Automatically accept and complete quests without missing any tasks.",
      f3_d: "Automated boss fights with smart tactics and quick reflexes.",
      f4_d: "Auto-join raids, optimizing your seasonal scores and rewards.",
      f5_d: "Never miss any sea event thanks to our smart detection system.",
      f6_d: "Auto-collect items, resources, and rewards completely hands-free.",
      f7_d: "Instant teleportation to any location with advanced teleporting.",
      f8_d: "Real-time status display tracking all vital metrics.",
      f9_d: "Receive instant Discord Webhook notifications for key events.",
      f10_d: "Concurrent multi-account support, centralized in one UI.",
      f11_d: "Flexible config system — save/load profiles easily in a few clicks.",
      f12_d: "Smart CPU & RAM optimization, runs smoothly on low-spec PCs.",
      f13_d: "AND 38+ OTHER FEATURES AWAIT YOU!",
      badge_why: "WHY CHOOSE", why_title: "WHY CHOOSE LEMON HUB?",
      w1_d: "Thoroughly optimized system, operating stably 24/7 without interruption.",
      w2_d: "Minimalist and clean layout — every control is clear and easy to access.",
      w3_d: "Smart algorithms that auto-adapt to every in-game situation.",
      w4_d: "Minimal resource usage — zero impact on system or network performance.",
      w5_d: "Set up in 60 seconds with clear and comprehensive step-by-step guides.",
      w6_d: "Support team ready 24/7 on Discord with fast response times.",
      faq_title: "FREQUENTLY ASKED QUESTIONS", faq_sub: "Answers to common questions when using Lemon Hub.",
      fq1_q: "Is Lemon Hub easy to use?", fq1_a: "Extremely easy! Just download the Hub, run the installer, and follow the simple guide. The UI is designed for beginners.",
      fq2_q: "Are updates frequent?", fq2_a: "Yes! We regularly push updates including new features, bug fixes, and performance boosts. All announced on Discord.",
      fq3_q: "Is there custom config support?", fq3_a: "Fully supported! The Config System lets you save, load, and share settings effortlessly across multiple profiles.",
      fq4_q: "Is there Discord support?", fq4_a: "Yes! Our Discord is active 24/7 with a dedicated support team ready to assist you anytime.",
      fq5_q: "Does Hub support multi-accounts?", fq5_a: "Yes! Multi-Account feature allows managing multiple accounts simultaneously in a single interface.",
      cta_title: "Are you ready<br>to join our Discord?", cta_desc: "Join Lemon Hub today. Don't miss out!",
      btn_join_now: "Join Now", footer_community: "Community", footer_rights: "© 2026 Lemon Hub. All rights reserved"
    }
  };

  /* ========== 5. i18n LOGIC ========== */
  const DEFAULT_LANG = 'vi', STORAGE_KEY = 'lemon_hub_lang';

  function safeGetStorage(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function safeSetStorage(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  let currentLang = (function () {
    const saved = safeGetStorage(STORAGE_KEY);
    if (saved !== 'vi' && saved !== 'en') {
      safeSetStorage(STORAGE_KEY, DEFAULT_LANG);
      return DEFAULT_LANG;
    }
    return saved;
  })();

  function applyTranslations(lang, animate) {
    animate = animate !== false;
    const t = translations[lang];
    if (!t) { document.documentElement.classList.add('lang-ready'); return; }
    if (animate) document.body.classList.add('lang-switching');

    const run = function () {
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.innerHTML = t[key];
      });
      document.documentElement.lang = lang;
      document.title = lang === 'en' ? 'Lemon Hub — Automation Redefined' : 'Lemon Hub — Tự Động Hóa Thế Hệ Mới';
      document.querySelectorAll('.faq-item.open .faq-answer').forEach(function (a) {
        a.style.maxHeight = a.scrollHeight + 'px';
      });
      if (animate) setTimeout(function () { document.body.classList.remove('lang-switching'); }, 250);
      document.documentElement.classList.add('lang-ready');
    };

    if (animate) setTimeout(run, 350); else run();
  }

  function setLang(lang) {
    if (!translations[lang] || lang === currentLang) return;
    currentLang = lang;
    safeSetStorage(STORAGE_KEY, lang);
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    applyTranslations(lang, true);
  }

  function initLangSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const lang = btn.dataset.lang;
        if (lang !== currentLang) setLang(lang);
      });
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
    applyTranslations(currentLang, false);
  }

  /* ========== 6. UI LOGIC ========== */
  function initUI() {
    // 50+ counter
    function animate50Count(el) {
      const target = 50, duration = 1200, startTime = performance.now();
      function updateCounter(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * (2 - progress) * target);
        el.innerText = current + "+";
        if (progress < 1) requestAnimationFrame(updateCounter);
        else el.innerText = "50+";
      }
      requestAnimationFrame(updateCounter);
    }
    try {
      const obs = new IntersectionObserver(function (entries, o) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { animate50Count(en.target); o.unobserve(en.target); }
        });
      }, { threshold: 0.3 });
      document.querySelectorAll('.count-50').forEach(function (el) { obs.observe(el); });
    } catch (e) { console.error(e); }

    // Stars
    try {
      const sc = document.getElementById('starsLayer');
      if (sc) {
        for (let i = 0; i < 120; i++) {
          const s = document.createElement('div');
          s.className = 'star';
          const size = Math.random() * 2 + 1;
          s.style.width = size + 'px';
          s.style.height = size + 'px';
          s.style.left = (Math.random() * 100) + '%';
          s.style.top = (Math.random() * 100) + '%';
          s.style.animationDelay = (Math.random() * 4) + 's';
          sc.appendChild(s);
        }
      }
    } catch (e) { console.error(e); }

    // Mobile menu
    try {
      const btn = document.getElementById('mobileMenuBtn');
      const menu = document.getElementById('mobileMenu');
      if (btn && menu) {
        btn.addEventListener('click', function () { menu.classList.toggle('hidden'); });
        menu.querySelectorAll('a').forEach(function (a) {
          a.addEventListener('click', function () { menu.classList.add('hidden'); });
        });
      }
    } catch (e) { console.error(e); }

    // Reveal
    try {
      const obs = new IntersectionObserver(function (entries, o) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('active'); o.unobserve(en.target); }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
    } catch (e) {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('active'); });
    }

    // FAQ
    try {
      document.querySelectorAll('.faq-item').forEach(function (item) {
        const btn = item.querySelector('.faq-question');
        const ans = item.querySelector('.faq-answer');
        if (!btn || !ans) return;
        btn.addEventListener('click', function () {
          const isOpen = item.classList.contains('open');
          document.querySelectorAll('.faq-item').forEach(function (i) {
            i.classList.remove('open');
            const a = i.querySelector('.faq-answer');
            if (a) a.style.maxHeight = '0';
          });
          if (!isOpen) {
            item.classList.add('open');
            ans.style.maxHeight = ans.scrollHeight + 'px';
          }
        });
      });
    } catch (e) { console.error(e); }

    // Smooth scroll
    try {
      document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
          e.preventDefault();
          const t = this.getAttribute('href');
          if (t === '#') window.scrollTo({ top: 0, behavior: 'smooth' });
          else {
            const sec = document.getElementById(t.substring(1));
            if (sec) sec.scrollIntoView({ behavior: 'smooth' });
          }
          history.pushState("", document.title, window.location.pathname + window.location.search);
        });
      });
    } catch (e) { console.error(e); }

    // Scroll spy
    try {
      window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        let cur = 'home';
        sections.forEach(function (s) {
          const top = s.offsetTop - 120;
          if (window.scrollY >= top && window.scrollY < top + s.offsetHeight) cur = s.getAttribute('id');
        });
        navLinks.forEach(function (l) {
          l.classList.remove('active');
          const href = l.getAttribute('href');
          if ((href === '#' && cur === 'home') || href === '#' + cur) l.classList.add('active');
        });
      });
    } catch (e) { console.error(e); }

    document.documentElement.classList.add('lang-ready');
  }

  /* ========== 7. BOOT ========== */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      try { initLangSwitcher(); } catch (e) { console.error(e); document.documentElement.classList.add('lang-ready'); }
      initUI();
    });
  } else {
    try { initLangSwitcher(); } catch (e) { console.error(e); document.documentElement.classList.add('lang-ready'); }
    initUI();
  }
})();
