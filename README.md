# AlecHsu Portfolio

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features a beautiful design with smooth animations, dark mode support, and shadcn/ui components.

## 🚀 Features

- **Modern Design**: Clean and professional design with gradient accents
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes with system preference detection
- **Smooth Animations**: Motion animations for enhanced user experience
- **shadcn/ui Components**: Modern, accessible UI components
- **Contact Information**: Professional contact details and links
- **Performance Optimized**: Built with Vite for fast development and production builds
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, Motion (animation library)
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form with Zod validation
- **Theme Management**: next-themes

## 📋 Sections

1. **Hero**: Introduction with call-to-action buttons
2. **About**: Personal information and background
3. **Experience**: Work history and achievements
4. **Education**: Academic background and qualifications
5. **Skills**: Technical skills with progress indicators
6. **Projects**: Side project showcase
7. **Contact**: Contact information and professional links
8. **Footer**: Social links and navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hsu022210/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Navbar.tsx      # Navigation bar with theme toggle
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Experience section
│   ├── Education.tsx   # Education section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Side project section
│   ├── Contact.tsx     # Contact section
│   ├── Footer.tsx      # Footer component
│   ├── ThemeToggle.tsx # Theme toggle component
│   └── theme-provider.tsx # Theme provider
├── hooks/              # Custom React hooks
│   ├── use-animations.ts # Animation utilities
│   └── use-theme.ts    # Theme management
├── lib/                # Utility libraries
│   ├── animations.css  # Animation styles
│   ├── theme-context.tsx # Theme context
│   └── utils.ts        # Utility functions
├── App.tsx             # Main App component
├── main.tsx           # Entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.tsx` - Update name, title, and description
- `src/components/About.tsx` - Update personal information
- `src/components/Experience.tsx` - Update work experience
- `src/components/Education.tsx` - Update education details
- `src/components/Skills.tsx` - Update skills and proficiency levels
- `src/components/Projects.tsx` - Update side project details
- `src/components/Contact.tsx` - Update contact information

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors: Update the color palette in `tailwind.config.js`
- Typography: Modify font families and sizes
- Animations: Adjust animation durations and effects in `src/lib/animations.css`

### Theme Customization

The project uses next-themes for theme management. Customize themes in:

- `src/components/theme-provider.tsx` - Theme provider configuration
- `tailwind.config.js` - Dark mode color schemes

## 🌟 Features in Detail

### Dark Mode
- Automatic detection of system preference
- Manual toggle in the navigation bar
- Persistent across sessions using localStorage
- Smooth transitions between themes

### Animations
- Smooth scroll animations using Motion
- Staggered animations for lists and grids
- Hover effects and transitions
- Consolidated animation management

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Optimized navigation for mobile devices

### Performance
- Efficient state management with React Query
- Optimized images and assets
- Lazy loading capabilities

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: alechsu83@gmail.com
- **LinkedIn**: [AlecHsu](https://www.linkedin.com/in/alechsu83/)
- **GitHub**: [hsu022210](https://github.com/hsu022210)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [Lucide React](https://lucide.dev/)
- Animation library [Motion](https://motion.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- CSS framework [Tailwind CSS](https://tailwindcss.com/)
