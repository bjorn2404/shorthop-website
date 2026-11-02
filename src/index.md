---
layout: base.njk
pageTitle: "ShortHop - Browser Extension | Down the Rabbit Hole"
pageScripts: |
  document.addEventListener('DOMContentLoaded', () => {
      // Fallback - Display text without animation if something goes wrong
      const textElements = document.querySelectorAll('.typed-text');
      textElements.forEach(el => {
          // Set a timeout to ensure text displays even if animation fails
          setTimeout(() => {
              if (el.style.width !== '100%') {
                  el.style.width = '100%';
                  el.textContent = el.dataset.text;
              }
          }, 4000);
      });

      // Get all demo elements
      const demos = document.querySelectorAll('.typing-demo');

      // Function to start typing animation
      function startTypingAnimation(element, delay = 0) {
          setTimeout(() => {
              // Add active class to start animation
              element.classList.add('typing-active');

              // Get the text to type
              const textElement = element.querySelector('.typed-text');
              const cursorElement = element.querySelector('.cursor');
              const text = textElement.dataset.text;
              const typingDuration = 2000; // 2 seconds

              // Make sure text is visible during animation
              textElement.textContent = text;

              // Show cursor
              cursorElement.classList.remove('hidden');

              // When animation completes
              setTimeout(() => {
                  element.classList.add('typing-complete');
                  textElement.style.width = '100%'; // Force width to 100%

                  // Hide cursor after a delay
                  setTimeout(() => {
                      cursorElement.classList.add('hidden');
                  }, 500);
              }, typingDuration);

          }, delay);
      }

      // Check if IntersectionObserver is supported
      if ('IntersectionObserver' in window) {
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.5
          };

          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      // Element is in view, start animation
                      const index = Array.from(demos).indexOf(entry.target);
                      startTypingAnimation(entry.target, index * 2000); // Stagger by 2 seconds

                      // Unobserve after animation starts
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          // Observe each demo element
          demos.forEach(demo => {
              observer.observe(demo);
          });
      } else {
          // Fallback for browsers without IntersectionObserver
          // Just start the first animation
          startTypingAnimation(demos[0]);

          // Add scroll listener to trigger the rest
          let animatedCount = 1;
          window.addEventListener('scroll', () => {
              if (animatedCount < demos.length) {
                  startTypingAnimation(demos[animatedCount], 500);
                  animatedCount++;
              }
          });
      }

      // Option to manually trigger animation again by clicking
      demos.forEach(demo => {
          demo.addEventListener('click', () => {
              // Reset classes
              demo.classList.remove('typing-active', 'typing-complete');

              // Force reflow
              void demo.offsetWidth;

              // Start animation again
              startTypingAnimation(demo);
          });
      });
  });

---

<section id="intro">
    <p class="terminal-line"><strong>Boost your browsing efficiency</strong> - Skip bookmarks, navigate intelligently with 240+ shortcuts</p>
    <p class="terminal-line">Search GitHub with 'gh typescript', Yahoo Finance with 'yf AAPL', Reddit with 'r programming'</p>
    <p class="terminal-line">240+ built-in shortcuts. Add 10 custom ones for free.</p>
    <div class="shortcut-legend">
        <div style="width: 100%; text-align: center; margin-bottom: 0.75rem;">
            <span style="color: var(--secondary-color); font-size: 0.85rem; font-weight: 500;">Popular shortcuts (examples):</span>
        </div>
        <span class="legend-item"><span class="command">cld</span> = Claude AI</span>
        <span class="legend-item"><span class="command">gh</span> = GitHub</span>
        <span class="legend-item"><span class="command">yf</span> = Yahoo Finance</span>
        <span class="legend-item"><span class="command">amz</span> = Amazon</span>
        <span class="legend-item"><span class="command">yt</span> = YouTube</span>
        <span class="legend-item"><span class="command">bbg</span> = Bloomberg</span>
        <div style="width: 100%; text-align: center; margin-top: 0.75rem;">
            <a href="/docs/" style="color: var(--highlight-color); text-decoration: none; font-size: 0.85rem; font-weight: 500;">→ View all 240+ shortcuts</a>
        </div>
    </div>
</section>

<!-- Initial fallback text - These will be replaced by animations but ensure content is visible -->
<section id="how-it-works">
    <h2>Productivity in Action</h2>
    <p>Transform your address bar into a productivity powerhouse. Type shortcuts to search any site instantly:</p>

    <div class="url-example typing-demo" id="demo1" data-site="Claude AI"><span class="command">cld</span>&nbsp;<span class="typed-text" data-text="explain quantum computing">explain quantum computing</span><span class="cursor">&nbsp;</span></div>
    <div class="url-example typing-demo" id="demo2" data-site="GitHub"><span class="command">gh</span>&nbsp;<span class="typed-text" data-text="typescript">typescript</span><span class="cursor hidden">&nbsp;</span></div>
    <div class="url-example typing-demo" id="demo3" data-site="Yahoo Finance"><span class="command">yf</span>&nbsp;<span class="typed-text" data-text="NVDA">NVDA</span><span class="cursor hidden">&nbsp;</span></div>
    <div class="url-example typing-demo" id="demo4" data-site="Stack Overflow"><span class="command">so</span>&nbsp;<span class="typed-text" data-text="javascript async await">javascript async await</span><span class="cursor hidden">&nbsp;</span></div>
    <div class="url-example typing-demo" id="demo5" data-site="Amazon"><span class="command">amz</span>&nbsp;<span class="typed-text" data-text="mechanical keyboard">mechanical keyboard</span><span class="cursor hidden">&nbsp;</span></div>
    <div class="url-example typing-demo" id="demo6" data-site="YouTube"><span class="command">yt</span>&nbsp;<span class="typed-text" data-text="python tutorial">python tutorial</span><span class="cursor hidden">&nbsp;</span></div>
    <div class="url-example typing-demo" id="demo7" data-site="Reddit"><span class="command">r</span>&nbsp;<span class="typed-text" data-text="programming">programming</span><span class="cursor hidden">&nbsp;</span></div>
    <div class="url-example typing-demo" id="demo8" data-site="Bloomberg"><span class="command">bbg</span>&nbsp;<span class="typed-text" data-text="federal reserve">federal reserve</span><span class="cursor hidden">&nbsp;</span></div>
</section>

<section id="smart-patterns">
{% include "smart-patterns.njk" %}
</section>

<section id="features">
    <h2>Efficiency Features</h2>
    <ul>
        <li><strong>Save time daily</strong> - 240+ built-in shortcuts eliminate bookmark hunting</li>
        <li><strong>Instant productivity</strong> - Works immediately after install, no setup required</li>
        <li><strong>Streamlined workflow</strong> - Launch apps directly (VS Code, Figma, Slack, Discord...)</li>
        <li><strong>Custom efficiency</strong> - Add up to 10 personal shortcuts (Pro: many more)</li>
        <li><strong>Cross-device sync</strong> - Your shortcuts follow you everywhere via browser sync</li>
        <li><strong>Zero friction</strong> - Works with your existing search engine settings</li>
        <li><strong>AI workflow ready</strong> - Claude, ChatGPT, Copilot, Perplexity shortcuts built-in</li>
        <li><strong>Developer focused</strong> - Instant access to GitHub, Stack Overflow, MDN, package managers</li>
        <li><strong>Complete coverage</strong> - Finance, news, shopping, entertainment, and more</li>
    </ul>
</section>

<section id="mobile">
    <h2>Mobile Productivity Revolution</h2>
    <ul>
        <li><strong>Eliminate app switching</strong> - Search any site directly from your address bar</li>
        <li><strong>Faster than bookmarks</strong> - Type shortcuts instead of hunting through folders</li>
        <li><strong>Replace dozens of apps</strong> - One extension handles multiple workflows</li>
        <li><strong>Seamless efficiency</strong> - Works perfectly on phones and tablets</li>
        <li><strong>Real-world example</strong> - Type 'yf AAPL' instead of finding Yahoo Finance app</li>
    </ul>
</section>

<section id="technical">
    <h2>Built for Privacy & Performance</h2>
    <ul>
        <li>Manifest V3 extension - Google's latest security standard</li>
        <li>No third-party servers - runs entirely in your browser</li>
        <li>Zero data collection or tracking</li>
        <li>Supports Chrome and Firefox</li>
    </ul>
</section>

<section id="roadmap">
    <h2>Pro Features Available Now</h2>
    <p class="secondary">Upgrade to ShortHop Pro for:</p>
    <ul>
        <li><strong>Many more custom shortcuts</strong> - No 10-shortcut limit</li>
        <li><strong>Enhanced functionality</strong> - Additional features in development</li>
        <li><strong>Priority support</strong> - Direct access to developer</li>
    </ul>
    <p class="secondary" style="margin-top: 1.5rem;">One-time payment of $14.99 - no subscription required. Planned features include import/export, team sharing, and enhanced productivity tools.</p>
    
    <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(0, 0, 0, 0.2); border: 1px solid rgba(51, 255, 51, 0.2); border-radius: 4px;">
        <h3 style="color: var(--highlight-color); margin: 0 0 1rem 0;">How to Upgrade to Pro</h3>
        <ol style="list-style-type: decimal; padding-left: 1.5rem; color: var(--text-color);">
            <li style="margin-bottom: 0.5rem;">Install the ShortHop extension from your browser's store</li>
            <li style="margin-bottom: 0.5rem;">Right-click the extension icon and select "Options" (or "Extensions" → "ShortHop" → "Options")</li>
            <li style="margin-bottom: 0.5rem;">Click the "Upgrade - $14.99" button in the options page</li>
            <li style="margin-bottom: 0.5rem;">Complete the secure one-time payment via ExtPay</li>
            <li style="margin-bottom: 0;">Enjoy hundreds more custom shortcuts and enhanced features!</li>
        </ol>
        <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--secondary-color); font-style: italic;">
            Note: The upgrade option is only available within the extension's options page, not on this website.
        </p>
    </div>
</section>

<div class="cta-container">
    <div class="cta-box">
        <h2>Install ShortHop</h2>
        <p>Get 240+ shortcuts + 10 custom ones instantly. No setup required, completely free to start. Pro upgrade available for $14.99 one-time (no subscription).</p>
        <span class="button" aria-disabled="true" style="opacity: 0.6; cursor: default;">Coming Soon</span>
    </div>
    <div class="cta-box">
        <h2>Explore All Shortcuts</h2>
        <p>Browse 240+ built-in shortcuts and discover new productivity workflows.</p>
        <a href="/docs/" class="button">Browse Shortcuts</a>
    </div>
</div>