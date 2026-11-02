---
layout: base.njk
pageTitle: "ShortHop - Privacy Policy"
animatedTitle: true
customTagline: "Your data stays with you"
pageScripts: |
    document.addEventListener('DOMContentLoaded', () => {
        // Animate the title
        const titleElement = document.getElementById('animatedTitle');
        titleElement.textContent = 'ShortHop'; // Start with just "ShortHop"
        
        setTimeout(() => {
            // Create a typing effect for " Privacy"
            const additionalText = ' Privacy';
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
    });
---

<a href="/" class="back-link">← Back to ShortHop</a>

# Privacy Policy

*Last updated: November 1, 2026*

## Our Privacy Commitment

ShortHop is built with privacy as a core principle. We believe your browsing habits and shortcuts are personal, and we've designed both the extension and this website to keep your data completely under your control.

## What We Don't Collect

**We collect zero personal data.** Specifically:

- ❌ **No browsing history** - We don't track what sites you visit
- ❌ **No search queries** - We don't see what you search for
- ❌ **No personal information** - No names, emails, or demographic data
- ❌ **No usage analytics** - We don't track how often you use shortcuts
- ❌ **No location data** - We don't access your geographic information
- ❌ **No device fingerprinting** - We don't identify your specific device

## How Your Data Works

### Local Storage Only
- Your custom shortcuts and preferences are stored locally in your browser
- Default shortcuts are built into the extension - no external requests needed
- Everything runs entirely within your browser environment

### Sync Storage (Optional)
- If you're signed into your browser (Chrome/Firefox/Edge), your custom shortcuts sync across your devices
- This sync is handled directly by your browser vendor (Google, Mozilla, Microsoft)
- We never see your sync data - it goes directly between your devices through your browser account

### No External Servers (Core Functionality)
- ShortHop's core shortcut functionality doesn't communicate with any external servers
- No browsing data, search queries, or shortcut usage is sent to us, third parties, or analytics services
- All shortcut processing happens locally in your browser
- **Your typed command is never sent anywhere to be looked up.** Some shortcut tools work by routing what you type through a server that decides where to send you - ShortHop doesn't work that way. The redirect is computed entirely within your own browser, using Chrome and Firefox's native request-redirecting APIs, with no network request involved in that decision at all
- The only exception is the optional Pro upgrade, described below

## Permissions Explained

ShortHop requires certain browser permissions to function. Here's exactly what each permission is used for:

### Storage Permission
- **What it does:** Saves your custom shortcuts and preferences
- **Data stored:** Only your custom shortcuts, hidden shortcuts, and customization preferences
- **Location:** Your local browser storage and browser sync (if enabled)

### Tabs Permission
- **What it does:** Opens new tabs or redirects existing tabs when you use shortcuts
- **Data accessed:** Only the URL you're navigating to (which you initiated)

### DeclarativeNetRequest Permission
- **What it does:** Intercepts your shortcut commands and redirects to the correct websites
- **Data accessed:** Only the URLs that match your shortcut patterns

### Web Navigation Permission
- **What it does:** Detects when you've used a shortcut command for fallback handling
- **Data accessed:** Only navigation events that match shortcut patterns

### Notifications Permission
- **What it does:** Reserved for upgrade-related alerts (e.g. confirming a successful Pro purchase)
- **Data accessed:** None - no notification currently fires in the shipped extension

### Offscreen and Scripting Permissions
- **What they do:** Detect whether your system is in light or dark mode, so the toolbar icon matches
- **Data accessed:** None - this only reads your OS's color scheme preference, not any browsing data

**Important:** These permissions are used exclusively for ShortHop's core functionality (or, for the Pro upgrade, the ExtensionPay/Stripe integration described above). We don't use them to collect data about your general browsing.

## Third-Party Services

When you use ShortHop shortcuts, you're redirected to third-party websites (Google, GitHub, Amazon, etc.). Your interaction with those sites is governed by their respective privacy policies, not ours.

ShortHop simply facilitates the connection - we don't track or modify your interactions with destination websites.

### Pro Upgrade (ExtensionPay / Stripe)

ShortHop's optional one-time $14.99 Pro upgrade is processed by [ExtensionPay](https://extensionpay.com), which uses Stripe to handle payment. This only applies if you choose to upgrade - it has no involvement in the free version's core functionality.

- When you click "Upgrade," the extension communicates with extensionpay.com to open the payment page and check your purchase status
- ExtensionPay assigns your install an anonymous key to identify your purchase; if you provide an email (e.g. to activate your purchase on another device), that's stored by ExtensionPay, not by us
- Payment details (card numbers, etc.) are handled directly by Stripe and never pass through ShortHop's code
- See [ExtensionPay's privacy policy](https://extensionpay.com/privacy) and [Stripe's privacy policy](https://stripe.com/privacy) for how they handle this data

## Website Privacy

### This Website (shorthop.to)
- **No analytics:** We don't use Google Analytics, tracking pixels, or any analytics services
- **No cookies:** This website doesn't set any cookies or tracking cookies
- **No user accounts:** No registration, login, or user accounts required
- **Static hosting:** Hosted on GitHub Pages with no server-side processing or logging
- **No forms:** No contact forms, newsletters, or data collection forms

### Extension Statistics
We rely solely on public statistics provided by browser extension stores (Chrome Web Store, Firefox Add-ons, etc.) rather than implementing our own tracking.

## Data Security

- **No transmission:** Since we don't collect data, there's no data to intercept or breach
- **Local encryption:** Browser storage is protected by your browser's security measures
- **Sync security:** If using sync, data is encrypted by your browser vendor's sync infrastructure
- **No passwords:** ShortHop doesn't require accounts, passwords, or authentication

## Your Control

You have complete control over your data:

- **Custom shortcuts:** Add, edit, or delete through the extension options
- **Sync control:** Enable/disable sync through your browser settings
- **Complete removal:** Uninstalling the extension removes all local data

## Legal Compliance

### GDPR (European Union)
ShortHop's core functionality collects no personal data, so GDPR requirements don't apply to it. If you choose the optional Pro upgrade, ExtensionPay and Stripe process limited payment-related data on our behalf as described above - see their privacy policies for their own GDPR compliance.

### CCPA (California)
We don't sell, share, or process personal information as defined by CCPA. The Pro upgrade's payment processing is handled by ExtensionPay/Stripe, not by us directly.

### Children's Privacy
ShortHop doesn't collect any data from users of any age, making it safe for all users including children under 13.

## Changes to This Policy

We may update this privacy policy to reflect changes in our practices or for legal compliance. Any changes will be posted on this page with an updated "last modified" date.

Since we don't collect contact information, we recommend checking this page periodically if you have concerns about privacy.

## Open Source Commitment

ShortHop's privacy-first approach isn't just a promise - it's verifiable:

- The extension uses standard browser APIs with no custom data collection
- All functionality is local or uses browser-native sync
- The architecture makes data collection technically impossible without major code changes

## Questions?

If you have questions about this privacy policy or our privacy practices, you can:

- Review the extension's permissions in your browser settings
- Check that no network requests are made to external servers (visible in browser developer tools)
- Verify that uninstalling removes all extension data

---

**Privacy-first design means your shortcuts stay yours.**