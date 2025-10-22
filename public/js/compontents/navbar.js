class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: white;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .logo {
          font-weight: 700;
          font-size: 1.25rem;
          color: #1f2937;
          display: flex;
          align-items: center;
        }
        .logo-icon {
          color: #3b82f6;
          margin-right: 0.5rem;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        .nav-links a {
          color: #4b5563;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 0;
          position: relative;
          transition: color 0.2s;
        }
        .nav-links a:hover {
          color: #1f2937;
        }
        .nav-links a.active {
          color: #3b82f6;
        }
        .nav-links a.active:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #3b82f6;
        }
        .user-menu {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: #4b5563;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .mobile-menu-button {
            display: block;
          }
          .nav-links {
            display: none;
          }
          .nav-links.mobile-open {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            padding: 1rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
        }
      </style>
      <nav>
        <a href="/roadruler" class="logo">
          <i data-feather="truck" class="logo-icon"></i>
          RoadRuler
        </a>
        
        <button class="mobile-menu-button" aria-label="Toggle menu">
          <i data-feather="menu"></i>
        </button>
        
        <ul class="nav-links">
          <li><a href="/roadruler/dashboard" class="active">Dashboard</a></li>
          <li><a href="/roadruler/drivers">Drivers</a></li>
          <li><a href="#">Templates</a></li>
          <li><a href="#">Reports</a></li>
          
          <li class="user-menu">
            <img src="http://static.photos/people/200x200/1" alt="User" class="user-avatar">
            <span>Admin</span>
          </li>
        </ul>
      </nav>
    `;

    // Mobile menu toggle
    const mobileButton = this.shadowRoot.querySelector(".mobile-menu-button");
    const navLinks = this.shadowRoot.querySelector(".nav-links");

    mobileButton.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
      feather.replace();
    });

    // Update active link based on current page
    const links = this.shadowRoot.querySelectorAll(".nav-links a");
    links.forEach((link) => {
      if (link.getAttribute("href") === window.location.pathname) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Replace feather icons
    feather.replace();
  }
}

customElements.define("custom-navbar", CustomNavbar);
