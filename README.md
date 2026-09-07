# Sarh Al Elm Private School — Website

## What's in this project
A bilingual (English/Arabic, with RTL) school website built with Astro, ready to connect to Decap CMS so office staff can edit news, gallery photos, hero slides, social links, and contact info without touching code.

## Before you start
You'll need:
- A free [GitHub](https://github.com) account
- A free [Netlify](https://netlify.com) account (you mentioned you've used Netlify before)

## Step 1 — Push this project to GitHub
1. Create a new empty repository on GitHub (e.g. `sarh-al-elm-website`) — don't initialize it with a README.
2. On your computer, unzip this project, then in a terminal inside the folder run:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/sarh-al-elm-website.git
   git push -u origin main
   ```

## Step 2 — Connect to Netlify
1. In Netlify, click **Add new site → Import an existing project**.
2. Choose GitHub and select your new repository.
3. Build settings should auto-detect from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy site**. Your site will be live at a `*.netlify.app` URL within a minute or two.
5. (Optional, later) Point your school's real domain at this site under **Domain settings**.

## Step 3 — Turn on Netlify Identity (staff logins)
1. In your site's Netlify dashboard, go to **Site configuration → Identity** and click **Enable Identity**.
2. Under **Registration preferences**, set it to **Invite only** (so random people can't sign up).
3. Under **Services → Git Gateway**, click **Enable Git Gateway** — this lets the CMS save content back to your GitHub repo on staff's behalf.
4. Go to the **Identity** tab and click **Invite users** — enter the email addresses of school office staff who should be able to edit the site. They'll get an email to set a password.

## Step 4 — Staff start editing
Staff go to `yoursite.netlify.app/admin`, log in with the email/password from their invite, and get a simple dashboard to:
- Publish news/announcements
- Add/reorder homepage hero slides
- Upload single gallery photos or full albums (with a chosen cover photo)
- Update social media links, address, phone, email, map link, and the Sila login URL

No code, no GitHub knowledge needed — Decap CMS handles the Git commits behind the scenes.

## Local development (optional, for you/a developer)
```
npm install
npm run dev
```
Visit `http://localhost:4321`. To preview the CMS locally, see the [Decap CMS local backend docs](https://decapcms.org/docs/beta-features/#working-with-a-local-git-repository).

## Project structure
```
src/
  content/           ← CMS-managed content (news, gallery, hero slides, settings)
  content.config.ts  ← content type schemas
  components/        ← Header, Footer
  layouts/           ← BaseLayout (handles lang/RTL switching)
  pages/             ← English pages at root, Arabic pages under /ar/
public/
  admin/             ← Decap CMS config and entry point (config.yml, index.html)
  images/            ← placeholder images (replace via CMS uploads)
```

## Replacing placeholder content
- Sample news post, hero slide, gallery photo, and gallery album are included so the site isn't empty on first deploy — replace or delete these from the CMS once real content is added.
- Placeholder images are simple colored SVGs — swap them for real school photos via the CMS gallery/hero upload fields.
- Update `src/content/settings/site.md` (or better, do this through the CMS Settings panel) with the real Sila login URL, phone, email, and address.

## What this phase does NOT include (by design)
- No login/portal for parents, students, or teachers (Sila already handles this — the header/footer just link out to it)
- No online admissions form (admissions stays offline, per the current plan)
- No database — all content lives as files in this Git repo

The future parent/student/teacher portal and mobile app are planned as separate phases, likely on a subdomain (e.g. `portal.sarhalelm.com`), sharing this site's branding but built as their own system.
