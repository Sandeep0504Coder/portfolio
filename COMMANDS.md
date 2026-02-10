#!/bin/bash
# Quick Command Reference for Sandeep's Portfolio

# ==========================================
# SETUP & INSTALLATION
# ==========================================

# First time setup (only needed once)
npm install

# ==========================================
# DEVELOPMENT
# ==========================================

# Start development server with hot reload
npm run dev

# The app will be available at: http://localhost:5173

# ==========================================
# BUILD & DEPLOYMENT
# ==========================================

# Build for production (creates dist/ folder)
npm run build

# Preview production build locally
npm run preview

# ==========================================
# CODE QUALITY
# ==========================================

# Run ESLint to check code quality
npm run lint

# ==========================================
# GIT COMMANDS (for version control)
# ==========================================

# Initialize git (only once)
git init

# Check status
git status

# Stage all changes
git add .

# Commit changes
git commit -m \"Your message here\"

# Push to GitHub
git push origin main

# ==========================================
# USEFUL NPM COMMANDS
# ==========================================

# Clear npm cache (if you have issues)
npm cache clean --force

# Install specific package
npm install package-name

# Update all packages
npm update

# Check outdated packages
npm outdated

# ==========================================
# DEPLOYMENT QUICK LINKS
# ==========================================

# Vercel (Recommended)
# 1. Push to GitHub
# 2. Go to vercel.com
# 3. Import your GitHub repo
# 4. Done! (auto-deploys on every push)

# Netlify
# 1. npm run build
# 2. Go to netlify.com
# 3. Drag and drop 'dist' folder
# 4. Done!

# GitHub Pages
# 1. npm run build
# 2. Enable GitHub Pages in repo settings
# 3. Select gh-pages branch
# 4. Done!

# ==========================================
# PROJECT STRUCTURE QUICK REFERENCE
# ==========================================

# Source code
src/
├── components/          # React components (Header, Hero, About, etc.)
├── styles/             # Component CSS files
├── App.tsx            # Main app component
├── App.css            # Global styles
├── main.tsx           # Entry point
└── index.css          # Document styles

# Build output (after npm run build)
dist/
├── index.html         # Main HTML file
├── assets/            # Bundled assets
└── ...

# Configuration
├── vite.config.ts     # Vite build configuration
├── tsconfig.json      # TypeScript configuration
├── eslint.config.js   # ESLint rules
└── package.json       # Dependencies

# ==========================================
# COMMON TASKS
# ==========================================

# Task: Start working on the portfolio
npm run dev

# Task: Make changes and commit
git add .
git commit -m \"Update portfolio\"
git push

# Task: Deploy to Vercel
# Just push to GitHub, Vercel handles it!

# Task: Update a component
# 1. Edit src/components/ComponentName.tsx
# 2. Changes appear live in browser (HMR)
# 3. git add, commit, push

# Task: Add a new package
npm install new-package
npm run build

# Task: Check what's deployed
npm run preview

# ==========================================
# TROUBLESHOOTING
# ==========================================

# Port 5173 already in use?
npm run dev -- --port 3000

# Build fails?
npm cache clean --force
npm install
npm run build

# Can't push to GitHub?
git config user.name \"Your Name\"
git config user.email \"your.email@example.com\"
git push

# Old changes showing after deploy?
# Clear browser cache (Ctrl+Shift+Delete)
# Or hard refresh (Ctrl+Shift+R)

# ==========================================
# FILE SHORTCUTS
# ==========================================

# Start here
README.md                   # Project overview

# Learn more
IMPLEMENTATION_SUMMARY.md  # What was created
PORTFOLIO_SETUP.md         # Setup details
DEPLOYMENT_GUIDE.md        # How to deploy
UI_UX_OVERVIEW.md          # Design details
this file (COMMANDS.md)    # Quick reference

# ==========================================
# IMPORTANT LINKS
# ==========================================

# Documentation
TypeScript: https://www.typescriptlang.org/docs/
React: https://react.dev/learn
Vite: https://vitejs.dev/guide/
CSS Guide: https://developer.mozilla.org/en-US/docs/Web/CSS/

# Hosting
Vercel: https://vercel.com
Netlify: https://netlify.com
GitHub Pages: https://pages.github.com

# Tools
GitHub: https://github.com
npm: https://www.npmjs.com
VS Code: https://code.visualstudio.com

# ==========================================
# TIPS & TRICKS
# ==========================================

# Tip 1: Use git frequently
# Commit often with clear messages

# Tip 2: Test before deploying
npm run build
npm run preview

# Tip 3: Keep dependencies updated
npm update

# Tip 4: Use meaningful branch names
git checkout -b feature/add-testimonials
git checkout -b fix/mobile-menu-bug

# Tip 5: Check performance
# After deploy, use: https://pagespeed.web.dev

# Tip 6: Monitor your site
# Add Google Analytics for traffic insights

# Tip 7: Update regularly
# Add new projects as you complete them

# Tip 8: Get feedback
# Share your portfolio with friends/mentors

# ==========================================
# NEXT STEPS
# ==========================================

# 1. Run: npm run dev
# 2. Open browser at http://localhost:5173
# 3. Make changes and see them live
# 4. When ready: npm run build
# 5. Deploy to your chosen platform
# 6. Share with potential employers!

# Happy coding! 🚀
