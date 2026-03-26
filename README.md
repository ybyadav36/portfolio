# Brijesh Yadav — Data Engineer Portfolio

A sleek, dark-themed portfolio built with **Next.js 14** and **TypeScript**, featuring a data-engineering aesthetic with cyan accents, animated canvas background, and a fully responsive layout.

## ✨ Features

- **Animated hero** with canvas network graph
- **Skills** section with progress bars
- **Projects** with expandable detail cards (4 real ETL projects)
- **Experience** timeline with metrics
- **Contact form** via Formspree (no backend needed)
- **Static export** → deploy anywhere for free

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
# → http://localhost:3000

# 3. Build for production (static export)
npm run build
# → Output in ./out/
```

## 📬 Setting Up the Contact Form (Formspree)

1. Go to [formspree.io](https://formspree.io) and create a **free account**
2. Create a new form and copy your **Form ID** (looks like `xpwzabcd`)
3. Open `components/Contact.tsx` and replace:
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```
   with your actual form ID:
   ```
   https://formspree.io/f/xpwzabcd
   ```
4. That's it — messages will arrive in your email inbox!

## 🌐 Deploy to GitHub Pages (Free)

### One-Time Setup

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow in `.github/workflows/deploy.yml` handles everything

### Every Push = Auto Deploy

Every push to `main` triggers a build + deploy automatically.

Your portfolio will be live at:
```
https://YOUR_GITHUB_USERNAME.github.io/brijesh-portfolio/
```

> **Note**: If deploying to a sub-path (not root domain), update `next.config.js`:
> ```js
> basePath: '/brijesh-portfolio',
> ```

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | CSS Modules (inline) + CSS Variables |
| Fonts | Syne (display) + Space Mono |
| Contact | Formspree |
| Deploy | GitHub Actions → GitHub Pages |

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # CSS variables & base styles
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx        # Fixed navbar with mobile menu
│   ├── Hero.tsx          # Animated hero with canvas
│   ├── Skills.tsx        # Skill cards with progress bars
│   ├── Projects.tsx      # Expandable project cards
│   ├── Experience.tsx    # Timeline + education
│   ├── Contact.tsx       # Formspree contact form
│   └── Footer.tsx        # Simple footer
├── public/
│   └── Resume_Brijesh_Yadav.pdf   # Your resume (add here)
├── .github/workflows/
│   └── deploy.yml        # GitHub Pages CI/CD
├── next.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Customization

- **Colors**: Edit CSS variables in `app/globals.css` (`:root` block)
- **Projects**: Edit the `projects` array in `components/Projects.tsx`
- **Skills**: Edit `skillGroups` in `components/Skills.tsx`
- **GitHub links**: Search for `github.com/brijeshyadav` and update to your actual username


