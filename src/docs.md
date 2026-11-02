---
layout: base.njk
pageTitle: "ShortHop - Documentation"
animatedTitle: true
customTagline: "Complete list of all 240+ shortcuts"
pageScripts: |
    document.addEventListener('DOMContentLoaded', () => {
        // Animate the title
        const titleElement = document.getElementById('animatedTitle');
        titleElement.textContent = 'ShortHop'; // Start with just "ShortHop"
        
        setTimeout(() => {
            // Create a typing effect for " Documentation"
            const additionalText = ' Documentation';
            let currentIndex = 0;
            
            const typeChar = () => {
                if (currentIndex < additionalText.length) {
                    titleElement.textContent += additionalText[currentIndex];
                    currentIndex++;
                    setTimeout(typeChar, 100); // 100ms between characters
                }
            };
            
            typeChar();
        }, 1000);

        // Load shortcuts data - embedded directly for reliability
        const shortcutCategories = {
            "Search Engines": {
                "b": "Bing",
                "bd": "Baidu",
                "br": "Brave Search",
                "ddg": "DuckDuckGo",
                "g": "Google",
                "gb": "Google Books",
                "gn": "Google News",
                "y": "Yahoo",
                "gt": "Google Translate",
                "gs": "Google Scholar",
                "pt": "Google Patents"
            },
            "AI & Research": {
                "cai": "Character.AI",
                "cld": "Claude AI",
                "gpt": "ChatGPT",
                "hf": "Hugging Face",
                "px": "Perplexity AI",
                "cop": "Microsoft Copilot",
                "you": "You.com",
                "poe": "Poe by Quora",
                "dalle": "DALL-E",
                "w": "Wikipedia",
                "pm": "PubMed",
                "arxiv": "arXiv"
            },
            "Developer Tools": {
                "aws": "AWS Documentation",
                "az": "Azure Documentation",
                "atmos": "Atmosphere.js",
                "ciu": "Can I Use",
                "dhub": "Docker Hub",
                "gcp": "Google Cloud Documentation",
                "gh": "GitHub",
                "gist": "GitHub Gist",
                "gl": "GitLab",
                "jira": "Jira",
                "mdn": "MDN Web Docs",
                "php": "PHP Documentation",
                "so": "Stack Overflow",
                "wp": "WordPress Codex",
                "cve": "NIST NVD",
                "uspto": "USPTO"
            },
            "Development Environment (App Launchers)": {
                "clion": "CLion",
                "emacs": "Emacs",
                "figma": "Figma",
                "goland": "GoLand",
                "idea": "IntelliJ IDEA",
                "ps": "Adobe Photoshop",
                "pstorm": "PhpStorm",
                "pycharm": "PyCharm",
                "rider": "JetBrains Rider",
                "rm": "RubyMine",
                "sublime": "Sublime Text",
                "wstorm": "WebStorm",
                "vsc": "Visual Studio Code"
            },
            "E-commerce & Shopping": {
                "ador": "Adorama",
                "amz": "Amazon",
                "bb": "Best Buy",
                "bh": "B&H Photo Video",
                "cl": "Craigslist",
                "costco": "Costco",
                "eb": "eBay",
                "etsy": "Etsy",
                "hd": "Home Depot",
                "ne": "Newegg",
                "tgt": "Target",
                "wmt": "Walmart",
                "thumb": "Thumbtack"
            },
            "Finance & Markets": {
                "bbg": "Bloomberg",
                "fv": "Finviz",
                "inv": "Investopedia",
                "ms": "Morningstar",
                "mw": "MarketWatch",
                "rh": "Robinhood",
                "tview": "TradingView",
                "wsj": "The Wall Street Journal",
                "yf": "Yahoo Finance"
            },
            "Cryptocurrency": {
                "cb": "Coinbase",
                "cg": "CoinGecko",
                "cmc": "CoinMarketCap",
                "decrypt": "Decrypt",
                "cd": "CoinDesk",
                "os": "OpenSea",
                "blur": "Blur",
                "me": "Magic Eden"
            },
            "Social & Media": {
                "bsky": "Bluesky",
                "dc": "Discord Servers",
                "discord": "Discord",
                "fb": "Facebook",
                "ig": "Instagram",
                "m": "Medium",
                "mast": "Mastodon",
                "pin": "Pinterest",
                "r": "Reddit",
                "sub": "Substack",
                "thrd": "Threads",
                "tt": "TikTok",
                "tum": "Tumblr",
                "yt": "YouTube"
            },
            "Streaming & Entertainment": {
                "amzpv": "Amazon Prime Video",
                "disney": "Disney+",
                "hbo": "HBO Max",
                "hulu": "Hulu",
                "nf": "Netflix",
                "spotify": "Spotify",
                "steam": "Steam",
                "twc": "Twitch"
            },
            "Gaming": {
                "des": "Destructoid",
                "egm": "Eurogamer",
                "gsp": "GameSpot",
                "kot": "Kotaku",
                "pcg": "PC Gamer",
                "pg": "Polygon",
                "stm": "Steam Store"
            },
            "Movies & TV": {
                "imdb": "IMDb",
                "lb": "Letterboxd",
                "mc": "Metacritic",
                "rt": "Rotten Tomatoes",
                "vm": "Vimeo"
            },
            "Music & Audio": {
                "amzm": "Amazon Music",
                "apm": "Apple Music",
                "bc": "Bandcamp",
                "dcs": "Discogs",
                "ihrt": "iHeartRadio",
                "itunes": "iTunes",
                "lfm": "Last.fm",
                "pd": "Pandora",
                "pf": "Pitchfork",
                "sc": "SoundCloud",
                "ytm": "YouTube Music"
            },
            "News & Technology": {
                "ap": "Associated Press",
                "ars": "Ars Technica",
                "bbc": "BBC",
                "buzz": "BuzzFeed",
                "cn": "CNET",
                "cnn": "CNN",
                "eg": "Engadget",
                "ft": "Financial Times",
                "nyt": "The New York Times",
                "reg": "The Register",
                "rtr": "Reuters",
                "sd": "Slashdot",
                "sr": "Screen Rant",
                "tc": "TechCrunch",
                "vrg": "The Verge",
                "vb": "VentureBeat",
                "wapo": "The Washington Post",
                "wrd": "WIRED",
                "zd": "ZDNet"
            },
            "Sports": {
                "espn": "ESPN"
            },
            "Weather": {
                "aw": "AccuWeather"
            },
            "Maps & Travel": {
                "bmap": "Bing Maps",
                "book": "Booking.com",
                "exp": "Expedia",
                "gmap": "Google Maps",
                "lp": "Lonely Planet",
                "trip": "TripAdvisor"
            },
            "Outdoor & Recreation": {
                "fd": "Fandom",
                "fns": "Field & Stream",
                "gj": "GearJunkie",
                "ogl": "Outdoor Gear Lab",
                "out": "Outside Online",
                "rei": "REI",
                "trk": "The Trek"
            },
            "Education & Learning": {
                "ca": "Codecademy",
                "crs": "Coursera",
                "edx": "edX",
                "instr": "Instructables",
                "khan": "Khan Academy",
                "ocw": "MIT OpenCourseWare",
                "udem": "Udemy"
            },
            "Health & Lifestyle": {
                "ar": "AllRecipes",
                "dd": "DoorDash",
                "food": "Food Network",
                "mayo": "Mayo Clinic",
                "mfp": "MyFitnessPal",
                "rxl": "RxList",
                "wmd": "WebMD",
                "ghub": "Grubhub"
            },
            "Photography & Design": {
                "bhn": "Behance",
                "da": "DeviantArt",
                "drib": "Dribbble",
                "flk": "Flickr",
                "shtr": "Shutterstock",
                "un": "Unsplash"
            },
            "Productivity & Communication": {
                "dbx": "Dropbox",
                "gm": "Gmail",
                "gd": "Google Drive",
                "gp": "Google Photos",
                "notion": "Notion",
                "outlook": "Microsoft Outlook",
                "skype": "Skype",
                "slack": "Slack",
                "teams": "Microsoft Teams",
                "whatsapp": "WhatsApp",
                "wpcom": "WordPress.com",
                "zm": "Zoom",
                "gt": "Google Translate",
                "deepl": "DeepL Translator",
                "sf": "Salesforce",
                "tg": "Telegram"
            },
            "Career & Business": {
                "gfm": "GoFundMe",
                "hn": "Hacker News",
                "ind": "Indeed",
                "kick": "Kickstarter",
                "li": "LinkedIn",
                "levels": "Levels.fyi",
                "blind": "Blind",
                "built": "BuiltIn",
                "ro": "RemoteOK",
                "dice": "Dice",
                "hired": "Hired",
                "upwork": "Upwork"
            },
            "Real Estate & Local": {
                "realtor": "Realtor.com",
                "yelp": "Yelp",
                "zillow": "Zillow"
            },
            "Transportation": {
                "lyft": "Lyft",
                "uber": "Uber",
                "ue": "Uber Eats"
            },
            "Knowledge & Reference": {
                "gr": "Goodreads",
                "jstor": "JSTOR",
                "qr": "Quora",
                "sno": "Snopes",
                "wa": "Wolfram Alpha",
                "wc": "Wirecutter",
                "wdata": "Wikidata"
            },
            "Package Managers": {
                "clj": "Clojars",
                "cpan": "CPAN",
                "crates": "Crates.io",
                "ctan": "CTAN",
                "dub": "DUB",
                "gems": "RubyGems",
                "gopkg": "Go Packages",
                "hex": "Hex",
                "hkg": "Hackage",
                "jlpkg": "JuliaHub",
                "lrocks": "LuaRocks",
                "melpa": "MELPA",
                "mvn": "Maven Repository",
                "npm": "npm",
                "nuget": "NuGet",
                "pkg": "Packagist",
                "pubdev": "Pub.dev",
                "pypi": "PyPI",
                "wppkg": "WordPress Plugins"
            }
        };
        
        // Generate the grid immediately since data is available
        generateShortcutsGrid();
        
        function generateShortcutsGrid() {
            // Generate shortcuts grid
            const grid = document.getElementById('shortcutsGrid');
        
            Object.entries(shortcutCategories).forEach(([category, shortcuts]) => {
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'category';
                
                const title = document.createElement('h3');
                title.textContent = category;
                categoryDiv.appendChild(title);
                
                const shortcutList = document.createElement('div');
                shortcutList.className = 'shortcut-list';
                
                Object.entries(shortcuts).forEach(([command, name]) => {
                    const item = document.createElement('div');
                    item.className = 'shortcut-item';
                    item.innerHTML = `<span class="command">${command}</span> ${name}`;
                    shortcutList.appendChild(item);
                });
                
                categoryDiv.appendChild(shortcutList);
                grid.appendChild(categoryDiv);
            });
        }
    });
---

<a href="/" class="back-link">← Back to ShortHop</a>

<section id="customization-info">
    <h2>Customization Options</h2>
    <div style="background: rgba(0, 178, 202, 0.1); border: 1px solid rgba(0, 178, 202, 0.3); border-radius: 4px; padding: 1.5rem; margin: 2rem 0;">
        <ul>
            <li><strong class="highlight">Modify commands:</strong> Use your preferred keywords for any shortcut (e.g., "gh" → "git")</li>
            <li><strong class="highlight">Customize names:</strong> Rename shortcuts to match your preferences (e.g., "Google" → "Search")</li>
            <li><strong class="highlight">Hide shortcuts:</strong> Remove ones you don't use from the list</li>
            <li><strong class="highlight">Add custom shortcuts:</strong> Create up to 10 shortcuts for your favorite sites</li>
        </ul>
        <p style="margin-top: 1rem; color: var(--secondary-color); font-size: 0.9rem;">
            <strong>Note:</strong> URLs are protected to keep this extension free, but you have full control over names and commands.
        </p>
        <p style="margin-top: 0.5rem; color: var(--highlight-color); font-size: 0.85rem;">
            <strong>💡 Tip:</strong> "App Launchers" open applications directly (like VS Code, Figma), while others search websites.
        </p>
    </div>
</section>

<section id="smart-patterns">
{% include "smart-patterns.njk" %}
</section>

<section id="default-shortcuts">
    <h2>Default Shortcuts</h2>
    <p style="color: var(--secondary-color); margin-bottom: 2rem;">
        Below are all the built-in shortcuts. You can customize any of these to match your preferences!
    </p>
    <div class="shortcuts-grid" id="shortcutsGrid">
        <!-- Shortcuts will be populated by JavaScript -->
    </div>
</section>