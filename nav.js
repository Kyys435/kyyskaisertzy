:root {
	--border-glow: rgba(83, 101, 247, 0.4);



.top-nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      background: rgba(10, 12, 25, 0.7);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border-glow);
      z-index: 9999;
      animation: slideDown 0.5s ease-out;
    }

    @keyframes slideDown {
      from { transform: translateY(-100%); }
      to { transform: translateY(0); }
    }

    .top-nav::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--primary), transparent);
    }
    
    /* --- NAV BOTTOM (STAY) --- */
    .nav-bottom {
      position: fixed;
      bottom: 0; left: 0; right: 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: rgba(20, 20, 28, 0.9);
      backdrop-filter: blur(12px);
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      height: 58px;
      z-index: 9999;
    }

    .nav-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: #a1a1aa;
      flex: 1;
      position: relative;
    }

    .nav-btn i, .nav-btn svg { font-size: 1.35rem; width: 1.35rem; height: 1.35rem; }
    .nav-btn span { font-family: var(--font-nav); font-size: 0.68rem; font-weight: 600; }
    .nav-btn.active { color: #5b6ef6; }
    .nav-btn.active::after {
      content: ""; position: absolute; bottom: -5px; width: 26px; height: 2px;
      background: #5b6ef6; border-radius: 2px; animation: underlineBreath 2s infinite;
    }
    @keyframes underlineBreath { 0%, 100% { width: 22px; } 50% { width: 32px; } }

<nav class="nav-bottom">
    <a href="../home" class="nav-btn"><i class="fas fa-home"></i>
  <span>Home</span>
</a>
    <a href="../Nokos" class="nav-btn"><i class="fas fa-phone"></i>
<span>Nokos</span>
</a>
<a href="../spammer-kyys" class="nav-btn"><i class="fa-solid fa-bolt"></i>
<span>Spamer</span>
</a>
    <a href="#" class="nav-btn active"><i class="fas fa-film"></i>
<span>SnapKyy</span></a>
    <a href="../Worm-Kyys" class="nav-btn">
      <svg class="openai-icon" fill="currentColor" viewBox="0 0 16 16">
 <path d="M14.949 6.547a3.94 3.94 0 0 0-.348-3.273 4.11 4.11 0 0 0-4.4-1.934A4.1 4.1 0 0 0 8.423.2 4.15 4.15 0 0 0 6.305.086a4.1 4.1 0 0 0-1.891.948 4.04 4.04 0 0 0-1.158 1.753 4.1 4.1 0 0 0-1.563.679A4 4 0 0 0 .554 4.72a3.99 3.99 0 0 0 .502 4.731 3.94 3.94 0 0 0 .346 3.274 4.11 4.11 0 0 0 4.402 1.933c.382.425.852.764 1.377.995.526.231 1.095.35 1.67.346 1.78.002 3.358-1.132 3.901-2.804a4.1 4.1 0 0 0 1.563-.68 4 4 0 0 0 1.14-1.253 3.99 3.99 0 0 0-.506-4.716m-6.097 8.406a3.05 3.05 0 0 1-1.945-.694l.096-.054 3.23-1.838a.53.53 0 0 0 .265-.455v-4.49l1.366.778q.02.011.025.035v3.722c-.003 1.653-1.361 2.992-3.037 2.996m-6.53-2.75a2.95 2.95 0 0 1-.36-2.01l.095.057L5.29 12.09a.53.53 0 0 0 .527 0l3.949-2.246v1.555a.05.05 0 0 1-.022.041L6.473 13.3c-1.454.826-3.311.335-4.15-1.098m-.85-6.94A3.02 3.02 0 0 1 3.07 3.949v3.785a.51.51 0 0 0 .262.451l3.93 2.237-1.366.779a.05.05 0 0 1-.048 0L2.585 9.342a2.98 2.98 0 0 1-1.113-4.094zm11.216 2.571L8.747 5.576l1.362-.776a.05.05 0 0 1 .048 0l3.265 1.86a3 3 0 0 1 1.173 1.207 2.96 2.96 0 0 1-.27 3.2 3.05 3.05 0 0 1-1.36.997V8.279a.52.52 0 0 0-.276-.445m1.36-2.015-.097-.057-3.226-1.855a.53.53 0 0 0-.53 0L6.249 6.153V4.598a.04.04 0 0 1 .019-.04L9.533 2.7a3.07 3.07 0 0 1 3.257.139c.474.325.843.778 1.066 1.303.223.526.289 1.103.191 1.664zM5.503 8.575 4.139 7.8a.05.05 0 0 1-.026-.037V4.049c0-.57.166-1.127.476-1.607s.752-.864 1.275-1.105a3.08 3.08 0 0 1 3.234.41l-.096.054-3.23 1.838a.53.53 0 0 0-.265.455zm.742-1.577 1.758-1 1.762 1v2l-1.755 1-1.762-1z"/></svg>
<span>WormKyys</span>
</a>
       <a href="../VIP" class="nav-btn"><i class="fas fa-crown"></i>
 <span>Upgrade</span>
</a>
       <a href="../User" class="nav-btn">
            <i class="fa-regular fa-user"></i>
        <span>Akun</span>
            </a>
    </nav>