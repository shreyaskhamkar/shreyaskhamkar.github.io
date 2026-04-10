# Shreyas Khamkar - Portfolio Website

A modern, responsive portfolio website showcasing Full-Stack Developer expertise in ASP.NET Core, React.js, and Flutter with production-grade quality and performance optimization.

**Live Site:** [https://shreyaskhamkar.com](https://shreyaskhamkar.com)

## ✨ Features

- **Fully Responsive Design** - Mobile-first approach with pixel-perfect desktop experience
- **Smooth Animations** - Scroll-triggered reveals and custom cursor interactions
- **Interactive Elements** - Project preview on hover, smooth navigation
- **Accessibility** - WCAG 2.1 compliant with ARIA labels and keyboard navigation
- **SEO Optimized** - Schema.org structured data, meta tags, and Open Graph support
- **Performance** - Optimized assets, lazy loading support, and smooth rendering
- **Modern UX** - Custom cursor, hamburger menu, and elegant typography
- **Contact Form** - Client-side validation with visual feedback
- **Dark Mode Ready** - CSS custom properties for easy theming

## 🚀 Tech Stack

| Category        | Technologies                                       |
| --------------- | -------------------------------------------------- |
| **Frontend**    | HTML5, CSS3, JavaScript ES6+                       |
| **Design**      | Responsive Grid/Flexbox, CSS Variables, Animations |
| **Fonts**       | Cormorant Garamond (Serif), DM Sans (Sans-serif)   |
| **Performance** | Google Fonts Preconnect, Optimized Images          |
| **Deployment**  | GitHub Pages with custom domain                    |
| **SEO**         | Schema.org, Open Graph, Twitter Cards              |

## 📋 Sections

- **Hero** - Eye-catching introduction with call-to-action
- **About** - Professional summary with skills grid
- **Experience** - B2A Technologies role with detailed projects and stack
- **Projects** - Showcase of recent work with live links
- **Certifications & Education** - Academic background and achievements
- **Contact** - Multiple contact methods and functional form

## 🛠️ Local Development

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Python 3.x for local server

### Setup Options

**Option 1: Direct File Opening**

```bash
# Simply open index.html in your browser
open index.html
```

**Option 2: Python Local Server (Recommended)**

```bash
# Python 3.x
python -m http.server 8000

# Then visit: http://localhost:8000
```

**Option 3: VS Code Live Server**

```bash
# Install Live Server extension, then:
# Right-click index.html → Open with Live Server
```

## 📁 Project Structure

```
shreyaskhamkar.github.io/
├── index.html          # Main HTML file with all sections
├── style.css           # All styling and animations
├── script.js           # Interactive functionality
├── CNAME               # Custom domain configuration
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## ⚡ Performance Optimizations

- Preconnect to Google Fonts
- Efficient CSS with custom properties
- Minified JavaScript at runtime (can be improved with build process)
- Smooth scroll behavior
- Optimized images with proper alt text
- RequestAnimationFrame for smooth cursor animation

## ♿ Accessibility Features

- **Semantic HTML** - Proper heading hierarchy and sectioning
- **ARIA Labels** - Navigation, form, and interactive elements properly labeled
- **Keyboard Navigation** - Full tab navigation support
- **Focus Management** - Visible focus indicators for all interactive elements
- **Form Validation** - Clear error messages and feedback
- **Color Contrast** - WCAG AA compliant contrast ratios
- **Alt Text** - Descriptive alt text for all images

## 🔍 SEO Enhancements

- **Meta Tags** - Title, description, keywords
- **Open Graph** - Social media sharing optimization
- **Twitter Cards** - Enhanced Twitter previews
- **Schema.org JSON-LD** - Structured data for search engines
- **Canonical URL** - Prevents duplicate content issues
- **Mobile Meta** - Viewport and theme color tags
- **Accessibility** - Proper semantic markup

## 📝 Form Handling

The contact form includes:

- **Client-side Validation** - Real-time field validation
- **Email Verification** - Regex-based email format check
- **User Feedback** - Success and error messages with auto-clear
- **Accessibility** - ARIA live regions and proper labeling

**Note:** Current form shows success message locally. For production email integration, consider:

- Formspree.io (easy setup)
- Email.js (JavaScript library)
- Backend API (Node.js, Python, etc.)

## 📱 Responsive Breakpoints

```css
Desktop:     1200px and above
Tablet:      900px - 1199px
Mobile:      Below 900px
```

## 🎨 Color Palette

```css
--cream: #f5f2ed /* Background */ --ink: #0f0f0e /* Primary text */
  --ink-soft: #3d3c3a /* Secondary text */ --ink-ghost: #9a9894
  /* Tertiary text */ --accent: #c8b89a /* Highlights */ --accent-warm: #e8d5b7
  /* Light highlights */ --line: rgba(...) /* Borders */;
```

## 🚀 Deployment

This site is deployed on **GitHub Pages** using the repository name as the domain.

```bash
# Push changes to main branch
git add .
git commit -m "Update portfolio"
git push origin main
```

The site auto-deploys from the default branch.

## 🔧 Customization

### Changing Colors

Edit CSS variables in the `:root` selector in `style.css`

### Updating Content

Edit sections directly in `index.html`

### Adding Projects

Duplicate a `.project-entry` block and update:

- `href` for external link
- `data-img` for preview image
- Project title and description

### Modifying Fonts

Update the Google Fonts import URL in `index.html`

## 📄 License

Personal portfolio website - feel free to use as reference for your own.

## 📧 Contact

- **Email:** shreyaskhamkar96@gmail.com
- **Phone:** +91 92730 80607
- **GitHub:** [shreyaskhamkar](https://github.com/shreyaskhamkar)
- **LinkedIn:** [shreyas-khamkarr](https://www.linkedin.com/in/shreyas-khamkarr/)

## 🤝 Contributing

Found a bug or have a suggestion? [Open an issue](https://github.com/shreyaskhamkar/shreyaskhamkar.github.io/issues)

---

**Last Updated:** 2026 | **Status:** Active Maintenance ✅

````

Then visit `http://localhost:8000`

4. **Option 3: Using Node.js**
```bash
npm install -g live-server
live-server
````

## 📁 Project Structure

```
shreyaskhamkar.github.io/
├── index.html                  # Main HTML file
├── style.css                   # Stylesheet
├── script.js                   # JavaScript functionality
├── README.md                   # This file
├── CNAME                       # GitHub Pages custom domain
├── shreyas_khamkar_resume.pdf  # Resume download
├── profile.jpg                 # Profile image
├── logo.jpg                    # Logo image
├── github.png                  # GitHub icon
└── linkedin.png                # LinkedIn icon
```

## 🎨 Customization

To use this template for your own portfolio:

1. Fork this repository
2. Update the content in `index.html`:
   - Change name, description, and bio
   - Update project details and links
   - Modify social media links
   - Replace images with your own
3. Update `style.css` for custom styling if needed
4. Replace `shreyaskhamkar.pdf` with your resume
5. Commit and push to deploy on GitHub Pages

## 📱 Responsive Design

The site is optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🤝 Contributing

This is a personal portfolio site, but feel free to submit issues or suggestions for improvements!

## 📞 Contact

- **Website:** [shreyaskhamkar.com](https://shreyaskhamkar.com)
- **LinkedIn:** [Shreyas Khamkar](https://www.linkedin.com/in/shreyas-khamkar-0777b720a/)
- **GitHub:** [shreyaskhamkar](https://github.com/shreyaskhamkar)

---

Built with ❤️ by Shreyas Khamkar
