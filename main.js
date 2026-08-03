(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============================================================
     CONTENT — everything editable lives here
     ============================================================ */
  const ACCENTS = {
    red:    { hex:'#E5384F', var:'--red' },
    yellow: { hex:'#F5C518', var:'--yellow' },
    blue:   { hex:'#2E8FEC', var:'--blue' },
    white:  { hex:'#E8E6E0', var:'--white' },
  };

  const GAMES = {
    'verso-recto': {
      accent: 'red',
      kicker: 'STRATÉGIE ABSTRAITE — PLATEAU TRIANGULAIRE',
      title: 'Verso Recto',
      tagline: "Un plateau triangulaire, deux faces de la même bataille. Chaque coup se joue à la fois sur le recto et sur le verso.",
      play: 'https://twagirumukiza.github.io/verso-recto-v54_1_1-fix-ia/',
      version: 'v61 · Web · Windows · Linux (Electron)',
      storyTitle: "D'un concours d'inventeurs à un moteur d'IA",
      story: [
        "Verso Recto n'est pas né dans un éditeur de code. Il est né en 2005, sur un vrai plateau, sous la forme d'un jeu de société original — récompensé de la médaille de l'A.I.F.F. au Concours Lépine.",
        "Deux décennies plus tard, ce même jeu a été repensé pour l'écran : plateau triangulaire fidèle aux règles originales, moteur d'intelligence artificielle construit sur mesure, et une infrastructure multijoueur en temps réel pour affronter d'autres joueurs en ligne.",
        "La version actuelle (v61) est le fruit d'un travail continu sur la justesse tactique de l'IA — recherche en profondeur, planificateur d'ouvertures, stratégie d'évaluation en deux phases — ainsi que sur la stabilité réseau et la persistance de partie en cas de rafraîchissement de page."
      ],
      features: [
        { title:'IA à deux phases', desc:"Un moteur qui isole ses constantes dans des Web Workers dédiés et combine recherche tactique et planification d'ouvertures." },
        { title:'Mode tournoi', desc:'Élimination directe en mort subite, avec réinitialisation propre du plateau entre les manches.' },
        { title:'Multijoueur en ligne', desc:'Salons Firebase en temps réel, gestion des forfaits et persistance de partie via localStorage.' },
        { title:'Build de bureau', desc:'Application desktop Windows et Linux packagée avec Electron, compilée automatiquement via GitHub Actions.' },
      ],
      roadmap: [
        { tag:'fait', title:'Moteur IA v61 — évaluation en deux phases', desc:"Recherche tactique affinée et cache de performance pour des coups d'IA plus rapides et plus justes." },
        { tag:'fait', title:'Build Electron Windows / Linux', desc:'Pipeline CI GitHub Actions pour générer automatiquement les exécutables de bureau.' },
        { tag:'now', title:'Durcissement sécurité multijoueur', desc:'Revue continue des règles Firebase et correctifs XSS sur les pages de salon.' },
        { tag:'next', title:'Classement et historique de parties', desc:'Suivi de progression des joueurs entre les sessions.' },
      ],
    },
    'focus': {
      accent: 'yellow',
      kicker: 'RÉFLEXE — MÉMOIRE VISUELLE',
      title: 'Focus',
      tagline: 'Repère le point. Suis le mouvement. Ne le perds pas de vue — même quand il redevient un visage dans la foule.',
      play: 'https://twagirumukiza.github.io/Focus-v6/',
      version: 'v6 · Web · Solo & Multijoueur',
      storyTitle: 'La règle la plus simple, la tension la plus pure',
      story: [
        "Focus part d'une idée volontairement minimaliste : un point devient jaune parmi d'autres, tous se mettent à bouger, puis le jaune redevient blanc et se fond dans la masse. Il faut le suivre des yeux jusqu'au bout.",
        "Cette simplicité est ce qui rend le jeu redoutable en multijoueur. En mode élimination, tous les joueurs observent la même manche en simultané : pas de bouton STOP, le minuteur d'observation choisi par l'hôte fige les points pour tout le monde en même temps.",
        "La v6 introduit une configuration fine du rythme de jeu — nombre de points de départ, vitesse, minuteur d'observation, temps de réponse — pour que chaque salon ait sa propre intensité."
      ],
      features: [
        { title:'Progression par séries', desc:"5 victoires d'affilée font monter de niveau ; une défaite ne fait que remettre la série à zéro." },
        { title:'Élimination en temps réel', desc:'Tous les joueurs figent en même temps, cliquent, et un mauvais point élimine — jusqu\'au dernier survivant.' },
        { title:'Réglages fins', desc:"Musique, effets sonores, vibration haptique mobile et plein écran, ajustables avant chaque partie." },
        { title:'Statistiques de session', desc:'Parties, victoires, précision et meilleure série suivies en direct pendant que tu joues.' },
      ],
      roadmap: [
        { tag:'fait', title:'Mode multijoueur à élimination', desc:'Minuteur d\'observation synchronisé et temps de réponse configurables par l\'hôte.' },
        { tag:'fait', title:'Progression par niveaux', desc:'Difficulté qui augmente automatiquement avec les séries de victoires.' },
        { tag:'now', title:'Peaufinage des retours haptiques mobiles', desc:'Ajustement des vibrations selon les appareils.' },
        { tag:'next', title:'Classements de précision', desc:'Comparer sa meilleure précision à celle de ses amis.' },
      ],
    },
    'buzzarena': {
      accent: 'blue',
      kicker: 'QUIZ — BUZZER MULTIJOUEUR',
      title: 'BuzzArena',
      tagline: "Le buzzer d'un vrai studio télé, mais dans un onglet de navigateur. Crée un salon, lance une manche, et laisse le premier doigt gagner.",
      play: 'https://twagirumukiza.github.io/buzzarenna-solo-v5CL/',
      version: 'v5 · Web · Firebase temps réel',
      storyTitle: "Reconstruire l'ambiance d'un plateau télé",
      story: [
        "BuzzArena est parti d'une question simple : comment recréer, entre amis et à distance, la tension d'un vrai jeu de buzzer télévisé ? La réponse est un système de salons en temps réel appuyé sur Firebase, avec une banque de questions qui ne cesse de grandir.",
        "La v5 marque une étape importante avec l'ajout d'un mode présentateur animé par IA, capable de mener une manche comme un vrai animateur, ainsi qu'un mode entraînement solo pour progresser sans attendre d'autres joueurs.",
        "L'authentification anonyme Firebase permet de rejoindre un salon en quelques secondes, sans création de compte — l'essentiel du jeu reste l'instant du buzz."
      ],
      features: [
        { title:'Présentateur IA', desc:'Un mode animation automatique qui rythme les manches comme un vrai présentateur de studio.' },
        { title:'Banque de 744 questions', desc:'Un large réservoir de questions avec déduplication entre les manches pour éviter les répétitions.' },
        { title:'Salons configurables', desc:'Gestion fine des paramètres de partie et des rôles dans chaque salon multijoueur.' },
        { title:'Entraînement solo', desc:'Un mode dédié pour se préparer seul, sans attendre l\'ouverture d\'un salon.' },
      ],
      roadmap: [
        { tag:'fait', title:'Mode présentateur IA', desc:'Animation automatisée des manches, pensée comme un vrai plateau télé.' },
        { tag:'fait', title:'Banque étendue à 744 questions', desc:'Déduplication entre manches pour garder chaque partie fraîche.' },
        { tag:'now', title:'Authentification anonyme Firebase', desc:"Rejoindre un salon sans compte, en conservant une identité de session stable." },
        { tag:'next', title:'Catégories thématiques personnalisées', desc:'Laisser les hôtes composer leurs propres thèmes de questions.' },
      ],
    },
    'pendu': {
      accent: 'white',
      kicker: 'DÉDUCTION — LEXIQUE',
      title: 'Le Pendu',
      tagline: 'Un mot secret, six erreurs de marge, et deux façons radicalement différentes d\'y jouer à plusieurs.',
      play: 'https://twagirumukiza.github.io/Le-pendu-V_1-fixed/',
      version: 'v1 · Web · Solo & Multijoueur',
      storyTitle: "Le classique, repensé pour jouer à plusieurs",
      story: [
        "Le Pendu reprend la règle que tout le monde connaît — un mot caché, des lettres proposées une à une, six erreurs de marge — et l'ouvre à deux formats multijoueurs bien distincts.",
        "En manche collective, les joueurs proposent une lettre chacun leur tour, mais n'importe qui peut tenter le mot entier à tout moment, même hors tour : une bonne réponse fait gagner immédiatement, une mauvaise compte comme une erreur pour tout le groupe.",
        "En mode mot secret, l'hôte choisit lui-même le mot et observe sans jouer : si ses camarades trouvent le mot avant que le pendu ne soit complet, ils gagnent ; sinon, c'est l'hôte qui l'emporte."
      ],
      features: [
        { title:'Thèmes multiples', desc:'Animaux, cuisine, géographie, informatique & cyber, sport, cinéma & culture — avec trois niveaux de difficulté.' },
        { title:'Buzz à tout moment', desc:'Tenter le mot complet hors tour, à tout instant, même en attendant son tour de lettre.' },
        { title:'Mode mot secret', desc:"L'hôte choisit le mot et regarde ses camarades tenter de le deviner ensemble." },
        { title:'Partage de salon en un lien', desc:'Un bouton pour envoyer directement l\'invitation — plus besoin de dicter un code.' },
      ],
      roadmap: [
        { tag:'fait', title:'Manche collective avec buzz libre', desc:'Deviner le mot entier à tout moment, même hors tour.' },
        { tag:'fait', title:'Mode mot secret asymétrique', desc:"L'hôte choisit le mot et regarde la partie sans y jouer directement." },
        { tag:'now', title:'Configuration Firebase multijoueur', desc:'Finalisation de la configuration temps réel pour les salons.' },
        { tag:'next', title:'Nouveaux thèmes de mots', desc:'Extension de la bibliothèque de thèmes disponibles.' },
      ],
    },
  };

  const DEVLOG = [
    {
      version: 'Verso Recto v61', accent:'red', date:'2026',
      title: "Moteur IA — évaluation en deux phases",
      items: [
        "Isolation des constantes IA dans les Web Workers pour éliminer un bug de portée critique.",
        "Ajout d'un cache de performance pour accélérer le calcul des coups de l'IA.",
        "Refonte du planificateur d'ouvertures (breakout planner).",
      ]
    },
    {
      version: 'BuzzArena v5', accent:'blue', date:'2026',
      title: "Mode présentateur IA et authentification anonyme",
      items: [
        "Introduction du mode présentateur animé par IA pour rythmer les manches.",
        "Ajout du mode entraînement solo.",
        "Authentification anonyme Firebase et banque de questions étendue à 744 entrées.",
      ]
    },
    {
      version: 'Verso Recto v54–v60', accent:'red', date:'2025 – 2026',
      title: "Mode tournoi et build desktop",
      items: [
        "Mise en place du mode tournoi en élimination directe (mort subite).",
        "Wrapper desktop Electron avec pipeline CI GitHub Actions (Windows / Linux).",
        "Persistance de partie via localStorage en cas de rafraîchissement de page.",
      ]
    },
    {
      version: 'Focus v6', accent:'yellow', date:'2025',
      title: "Multijoueur à élimination",
      items: [
        "Ajout du mode multijoueur en élimination avec minuteur d'observation synchronisé.",
        "Progression par niveaux basée sur les séries de victoires.",
        "Réglages fins : musique, effets sonores, vibration mobile, plein écran.",
      ]
    },
    {
      version: 'Le Pendu v1', accent:'white', date:'2025',
      title: "Première version publique",
      items: [
        "Mode solo multi-thèmes avec trois niveaux de difficulté.",
        "Mode multijoueur en manche collective avec buzz libre.",
        "Mode mot secret asymétrique hôte / joueurs.",
      ]
    },
  ];

  /* ============================================================
     INTRO SEQUENCE
     ============================================================ */
  function runIntro(){
    const intro = document.getElementById('intro');
    const fill = document.getElementById('intro-bar-fill');
    const status = document.getElementById('intro-status');
    const messages = ['Chargement des mondes…','Calibration des particules…','Assemblage du studio…','Prêt.'];
    if (reduceMotion){
      intro.classList.add('hide');
      return;
    }
    let p = 0;
    const tick = () => {
      p += Math.random()*22 + 10;
      if (p > 100) p = 100;
      fill.style.width = p + '%';
      status.textContent = messages[Math.min(messages.length-1, Math.floor((p/100)*messages.length))];
      if (p < 100){
        setTimeout(tick, 180 + Math.random()*150);
      } else {
        setTimeout(() => intro.classList.add('hide'), 350);
      }
    };
    tick();
  }

  /* ============================================================
     PARTICLE BACKGROUND (canvas, thousands of particles)
     ============================================================ */
  function initParticles(){
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let w, h, dpr;
    let particles = [];
    let targetColor = hexToRgb(getComputedStyle(document.documentElement).getPropertyValue('--studio').trim());
    let currentColor = { ...targetColor };
    let mouse = { x: -9999, y: -9999 };

    function hexToRgb(hex){
      hex = hex.replace('#','').trim();
      const n = parseInt(hex,16);
      return { r:(n>>16)&255, g:(n>>8)&255, b:n&255 };
    }

    function resize(){
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w*dpr; canvas.height = h*dpr;
      canvas.style.width = w+'px'; canvas.style.height = h+'px';
      ctx.setTransform(dpr,0,0,dpr,0,0);
      seedParticles();
    }

    function seedParticles(){
      const density = reduceMotion ? 0 : (w < 700 ? 0.05 : 0.09); // particles per 1000px^2 roughly
      const count = Math.min(2200, Math.floor((w*h/1000) * density));
      particles = new Array(count).fill(0).map(() => ({
        x: Math.random()*w,
        y: Math.random()*h,
        z: Math.random(), // depth 0..1 => size/speed/opacity
        vx: (Math.random()-0.5) * 0.15,
        vy: (Math.random()-0.5) * 0.15,
      }));
    }

    function setAccent(hex){
      targetColor = hexToRgb(hex);
    }

    function step(){
      ctx.clearRect(0,0,w,h);
      // ease current color toward target
      currentColor.r += (targetColor.r - currentColor.r) * 0.02;
      currentColor.g += (targetColor.g - currentColor.g) * 0.02;
      currentColor.b += (targetColor.b - currentColor.b) * 0.02;

      for (let i=0;i<particles.length;i++){
        const p = particles[i];
        p.x += p.vx * (0.4 + p.z*1.2);
        p.y += p.vy * (0.4 + p.z*1.2);

        // gentle parallax toward mouse
        const dx = mouse.x - p.x, dy = mouse.y - p.y;
        const dist2 = dx*dx + dy*dy;
        if (dist2 < 22000){
          const f = (1 - dist2/22000) * 0.02;
          p.x -= dx*f; p.y -= dy*f;
        }

        if (p.x < -10) p.x = w+10; if (p.x > w+10) p.x = -10;
        if (p.y < -10) p.y = h+10; if (p.y > h+10) p.y = -10;

        const size = 0.5 + p.z*1.6;
        const alpha = 0.12 + p.z*0.5;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${currentColor.r|0},${currentColor.g|0},${currentColor.b|0},${alpha})`;
        ctx.arc(p.x, p.y, size, 0, Math.PI*2);
        ctx.fill();
      }
      requestAnimationFrame(step);
    }

    window.addEventListener('resize', resize, { passive:true });
    window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive:true });
    window.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });

    resize();
    requestAnimationFrame(step);

    return { setAccent };
  }

  /* ============================================================
     3D TILT CARDS
     ============================================================ */
  function initTilt(){
    if (reduceMotion) return;
    const cards = document.querySelectorAll('[data-tilt]');
    cards.forEach(card => {
      let raf = null;
      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const glow = card.querySelector('.card-glow');
        if (glow){
          glow.style.right = (50 - x*80) + '%';
          glow.style.top = (50 + y*80 - 60) + '%';
        }
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          card.style.transform = `rotateY(${x*10}deg) rotateX(${-y*10}deg) translateY(-4px)`;
        });
      };
      const onLeave = () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg) translateY(0)';
      };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
    });
  }

  /* ============================================================
     ANIMATED STAT COUNTERS
     ============================================================ */
  function initCounters(){
    const nums = document.querySelectorAll('.stat-num');
    if (!nums.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        io.unobserve(el);
        const target = parseInt(el.dataset.count, 10);
        if (reduceMotion){ el.textContent = target; return; }
        const dur = 1100;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now-start)/dur);
          const eased = 1 - Math.pow(1-t, 3);
          el.textContent = Math.floor(eased * target);
          if (t < 1) requestAnimationFrame(tick);
          else el.textContent = target;
        };
        requestAnimationFrame(tick);
      });
    }, { threshold:0.4 });
    nums.forEach(n => io.observe(n));
  }

  /* ============================================================
     DEV LOG RENDER
     ============================================================ */
  function renderDevlog(){
    const full = document.getElementById('devlog-full-list');
    const preview = document.getElementById('devlog-preview-list');
    const html = (entries) => entries.map(e => `
      <div class="devlog-entry">
        <div class="dl-meta">
          <span class="dl-version acc-${e.accent}">${e.version}</span>
          <span class="dl-date">${e.date}</span>
        </div>
        <div class="dl-body">
          <h4>${e.title}</h4>
          <ul>${e.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
      </div>
    `).join('');
    if (full) full.innerHTML = html(DEVLOG);
    if (preview) preview.innerHTML = html(DEVLOG.slice(0,3));
  }

  /* ============================================================
     GAME PAGE RENDER
     ============================================================ */
  function renderGame(slug, particleAPI){
    const g = GAMES[slug];
    if (!g) return false;
    const accent = ACCENTS[g.accent];

    document.documentElement.style.setProperty('--accent-color', accent.hex);
    document.querySelector('.route-game').style.setProperty('--g-accent', accent.hex);
    if (particleAPI) particleAPI.setAccent(accent.hex);

    document.getElementById('g-kicker').textContent = g.kicker;
    document.getElementById('g-kicker').style.color = accent.hex;
    document.getElementById('g-title').textContent = g.title;
    document.getElementById('g-tagline').textContent = g.tagline;
    const playBtn = document.getElementById('g-play');
    playBtn.href = g.play;
    playBtn.textContent = 'Jouer maintenant ↗';
    document.getElementById('g-version').textContent = g.version;
    document.getElementById('g-story-title').textContent = g.storyTitle;
    document.getElementById('g-story-body').innerHTML = g.story.map(p => `<p>${p}</p>`).join('');

    document.getElementById('g-features').innerHTML = g.features.map((f,i) => `
      <div class="feature-card">
        <span class="f-num">${String(i+1).padStart(2,'0')}</span>
        <h4>${f.title}</h4>
        <p>${f.desc}</p>
      </div>
    `).join('');

    document.getElementById('g-roadmap-title').textContent = `Feuille de route — ${g.title}`;
    document.getElementById('g-roadmap').innerHTML = g.roadmap.map(r => `
      <div class="rm-item">
        <div class="rm-dot ${r.tag === 'fait' ? 'done' : ''}"><span></span></div>
        <div class="rm-body">
          <h4>${r.title} ${r.tag==='now' ? '<span class="rm-tag now">en cours</span>' : (r.tag==='next' ? '<span class="rm-tag">à venir</span>' : '')}</h4>
          <p>${r.desc}</p>
        </div>
      </div>
    `).join('');

    document.title = `${g.title} — Twagirumukiza Studio`;
    return true;
  }

  /* ============================================================
     ROUTER
     ============================================================ */
  function initRouter(particleAPI){
    const routes = {
      home: document.getElementById('route-home'),
      game: document.getElementById('route-game'),
      devlog: document.getElementById('route-devlog'),
    };

    function setActiveNav(routeKey){
      document.querySelectorAll('#main-nav a, .brand').forEach(a => {
        a.classList.toggle('active', a.dataset.route === routeKey);
      });
    }

    function closeMobileNav(){
      document.getElementById('main-nav').classList.remove('open');
      document.getElementById('nav-toggle').classList.remove('active');
    }

    function resolve(){
      const hash = window.location.hash.replace('#','') || 'home';
      closeMobileNav();
      Object.values(routes).forEach(r => r.classList.remove('active'));

      if (hash.startsWith('game/')){
        const slug = hash.split('/')[1];
        if (renderGame(slug, particleAPI)){
          routes.game.classList.add('active');
          setActiveNav(slug);
          window.scrollTo({ top:0, behavior: reduceMotion ? 'auto' : 'instant' in window ? 'instant' : 'auto' });
          return;
        }
      }
      if (hash === 'devlog'){
        routes.devlog.classList.add('active');
        setActiveNav('devlog');
        document.documentElement.style.setProperty('--accent-color', getComputedStyle(document.documentElement).getPropertyValue('--studio'));
        if (particleAPI) particleAPI.setAccent(getComputedStyle(document.documentElement).getPropertyValue('--studio').trim());
        window.scrollTo({ top:0 });
        document.title = 'Dev Log — Twagirumukiza Studio';
        return;
      }
      // default: home
      routes.home.classList.add('active');
      setActiveNav('home');
      if (particleAPI) particleAPI.setAccent(getComputedStyle(document.documentElement).getPropertyValue('--studio').trim());
      document.title = 'Twagirumukiza Studio — Jeux indépendants';
      window.scrollTo({ top:0 });
    }

    window.addEventListener('hashchange', resolve);
    resolve();
  }

  /* ============================================================
     HEADER SCROLL STATE + MOBILE NAV TOGGLE
     ============================================================ */
  function initChrome(){
    const header = document.getElementById('site-header');
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive:true });
    onScroll();

    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('main-nav');
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.classList.toggle('active', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('active');
    }));

    document.getElementById('year').textContent = new Date().getFullYear();

    document.querySelectorAll('[data-scroll]').forEach(a => {
      a.addEventListener('click', (e) => {
        const target = document.getElementById(a.dataset.scroll);
        if (target){
          e.preventDefault();
          target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
        }
      });
    });
  }

  /* ============================================================
     BOOT
     ============================================================ */
  document.addEventListener('DOMContentLoaded', () => {
    runIntro();
    const particleAPI = initParticles();
    initTilt();
    initCounters();
    renderDevlog();
    initChrome();
    initRouter(particleAPI);
  });
})();
