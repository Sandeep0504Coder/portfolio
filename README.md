# Sandeep Mandal - Professional Portfolio

A modern, stylish, and fully responsive portfolio website built with **React**, **TypeScript**, and **Vite**. Showcasing professional expertise, projects, skills, and achievements as a Full Stack & Flutter Developer.

## ✨ Features

- **Modern Design**: Contemporary gradient UI with smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Fast Performance**: Built with Vite for lightning-fast development and build
- **Dark Theme**: Professional dark color scheme with vibrant accent colors
- **Smooth Animations**: Engaging transitions and hover effects
- **Organized Content**:
  - Hero section with social links
  - About section
  - Technical skills categorized
  - Professional experience
  - Featured projects with highlights
  - Education details
  - Achievements & recognitions
  - Contact information
  - Smooth navigation

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header with mobile menu
│   ├── Hero.tsx        # Hero/landing section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Technical skills grid
│   ├── Experience.tsx  # Professional experience timeline
│   ├── Projects.tsx    # Featured projects showcase
│   ├── Education.tsx   # Educational background
│   ├── Achievements.tsx # Achievements & recognition
│   ├── Contact.tsx     # Contact information
│   └── Footer.tsx      # Footer
├── styles/             # Component-specific CSS
│   ├── Header.css
│   ├── Hero.css
│   ├── About.css
│   ├── Skills.css
│   ├── Experience.css
│   ├── Projects.css
│   ├── Education.css
│   ├── Achievements.css
│   ├── Contact.css
│   └── Footer.css
├── App.tsx            # Main app component
├── App.css            # Global styles and themes
└── main.tsx           # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd f:\sandeep-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint checks

## 🎨 Design Highlights

### Color Scheme
- **Primary**: Indigo (`#6366f1`)
- **Secondary**: Pink (`#ec4899`)
- **Background**: Dark Blue (`#0f172a`)
- **Text**: Light Gray (`#f1f5f9`)

### Typography
- Clean, modern system fonts
- Responsive font sizing using CSS clamps
- Proper hierarchy and contrast

### Components
- **Header**: Fixed navigation with mobile hamburger menu
- **Hero Section**: Animated gradient text and floating blobs
- **Skill Cards**: Hover animations with tech badges
- **Project Cards**: Interactive cards with technology stacks
- **Timeline**: Professional experience with visual timeline

## 🔧 Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling with animations and gradients
- **ESLint** - Code quality

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Desktop: 1200px+ (full layout)
- Tablet: 768px - 1199px (adjusted grid/spacing)
- Mobile: < 768px (single column, hamburger menu)

## 🎯 Key Sections

1. **Hero**: Eye-catching introduction with statistics and CTA buttons
2. **About**: Professional summary with highlights
3. **Skills**: Categorized technical skills with 15+ technologies
4. **Experience**: Professional timeline at Defineway Technologies
5. **Projects**: 8+ featured projects with tech stacks and key highlights
6. **Education**: B.Tech degree and academic achievements
7. **Achievements**: Recognition, certifications, and milestones
8. **Contact**: Multiple contact options and social links

## 🌐 Deployment

To build for production:

```bash
npm run build
```

This creates an optimized build in the `dist` folder, ready for deployment on platforms like:
- Vercel
- Netlify
- GitHub Pages
- AWS Amplify
- Any static hosting service

## 📞 Contact Information

- **Email**: [sandeepmandal0504@gmail.com](mailto:sandeepmandal0504@gmail.com)
- **Phone**: +91 7439623426
- **GitHub**: [github.com/Sandeep0504Coder](https://github.com/Sandeep0504Coder)
- **LinkedIn**: [linkedin.com/in/isandeepmandal](https://linkedin.com/in/isandeepmandal)

## 📄 License

This project is personal and represents Sandeep Mandal's professional portfolio.
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
