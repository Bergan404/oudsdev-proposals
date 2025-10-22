class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1f2937;
          color: white;
          padding: 3rem 2rem;
          margin-top: auto;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          font-weight: 700;
          font-size: 1.25rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
        }
        .footer-logo-icon {
          margin-right: 0.5rem;
        }
        .footer-links h3 {
          font-weight: 600;
          margin-bottom: 1rem;
          font-size: 1rem;
        }
        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        .footer-links a {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: white;
        }
        .footer-bottom {
          text-align: center;
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid #374151;
          color: #9ca3af;
          font-size: 0.875rem;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          color: #9ca3af;
          transition: color 0.2s;
        }
        .social-links a:hover {
          color: white;
        }
      </style>
      <footer>
        <div class="footer-container">
          <div class="footer-about">
            <div class="footer-logo">
              <i data-feather="truck" class="footer-logo-icon"></i>
              RoadRuler
            </div>
            <p class="text-gray-400">Simplifying driver compliance for logistics teams.</p>
            <div class="social-links">
              <a href="#"><i data-feather="twitter"></i></a>
              <a href="#"><i data-feather="linkedin"></i></a>
              <a href="#"><i data-feather="github"></i></a>
            </div>
          </div>
          
          <div class="footer-links">
            <h3>Product</h3>
            <ul>
              <li><a href="/features.html">Features</a></li>
              <li><a href="/pricing.html">Pricing</a></li>
              <li><a href="/integrations.html">Integrations</a></li>
              <li><a href="/changelog.html">Changelog</a></li>
            </ul>
          </div>
          
          <div class="footer-links">
            <h3>Company</h3>
            <ul>
              <li><a href="/about.html">About</a></li>
              <li><a href="/blog.html">Blog</a></li>
              <li><a href="/careers.html">Careers</a></li>
              <li><a href="/contact.html">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-links">
            <h3>Legal</h3>
            <ul>
              <li><a href="/privacy.html">Privacy</a></li>
              <li><a href="/terms.html">Terms</a></li>
              <li><a href="/security.html">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          &copy; ${new Date().getFullYear()} RoadRuler. All rights reserved.
        </div>
      </footer>
    `;

    feather.replace();
  }
}

customElements.define("custom-footer", CustomFooter);
