# Subscription Hub

A colourful, fully-offline PWA to track every subscription you pay for — AI, streaming & music, and software/apps — in one place. Built to run from GitHub Pages, installable to your phone's home screen, no server, no account.

## Features

### Subscriptions tab
- **One unified list, three categories** (AI · Streaming & Music · Software & Apps) with a category filter.
- **Dashboard**: estimated monthly & yearly spend, spend-by-category donut, upcoming renewals, active/trial/paused counts.
- **Dual currency**: enter a price in USD or Taka; totals convert to ৳ using a rate you set.
- **Per subscription**: name, price, billing cycle (weekly/monthly/quarterly/yearly), start date, free-trial toggle + trial-end date, status (active/paused/cancelled), and a note.
- **Search** across names and notes.
- **In-app "due soon"** highlighting (no push notifications — reliable offline behaviour instead).
- **6 themes** (Aurora, Midnight, Sunset, Ocean, Mint, Grape) and **3 fonts** (Poppins, Roboto, Lato) — all bundled, work offline.
- **Backup**: download a JSON file or use *Save / share* to send it straight to Google Drive. **Restore** by merging or replacing.
- 34 quick-add presets (ChatGPT, Claude, Netflix, Spotify, Canva Pro, ExpressVPN, iCloud+, Google One …).
- **Link each subscription to the card that pays it.**

### Cards tab
- Track credit cards with **statement day, payment due day, annual fee (+ which month it charges), expiry, and credit limit**.
- Card tiles are styled per network with **distinct colours** — Amex (blue-teal), Visa (navy-gold), Mastercard (red-orange).
- Dashboard: total annual fees, next payment due, cards expiring soon, and a **card calendar** of upcoming due dates / fees / expiries.
- Each card shows the **subscriptions billed to it** and their monthly total.
- Quick-add presets for your cards: City Amex Gold, EBL Platinum Visa, SCBL Gold Visa.
- **Only the last 4 digits are stored** — never the full card number or CVV, so nothing sensitive lives on the device.

### Shared
- 6 themes, 3 fonts, offline, and one JSON backup that covers **both** subscriptions and cards.

## Deploy on GitHub Pages
1. Create a repo (e.g. `subscription-hub`) and upload **all** files in this folder, keeping the `fonts/` folder intact.
2. Repo **Settings → Pages → Build and deployment → Source: Deploy from a branch**, pick `main` / root, Save.
3. Open the URL GitHub gives you (e.g. `https://<you>.github.io/subscription-hub/`).
4. On your phone: browser menu → **Add to Home screen / Install app**. After the first load it works with no internet.

## Notes
- All data is stored **only on your device** (browser localStorage). Clearing the browser or switching phones will lose it — so back up to Google Drive from Settings.
- To ship a change, edit a file and bump the `CACHE` version string in `sw.js` so devices pull the update.
