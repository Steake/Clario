# 🎓 Clario - Decentralized Tutoring Marketplace

<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
  
  **The world's first crypto-native tutoring marketplace**
  
  [![Built with React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
</div>

---

## 🌟 Overview

Clario is a revolutionary decentralized marketplace connecting students with both **human tutors** and **AI-powered tutors**. Built on blockchain technology, it enables secure, crypto-based payments with built-in escrow protection and on-chain reputation tracking via EQBSL.

### ✨ Key Features

- 🔐 **Crypto-First Payments** - Pay securely with cryptocurrency (ETH)
- 🤝 **Smart Contract Escrow** - Funds held securely until lesson completion
- 🤖 **Human & AI Tutors** - Choose from verified human experts or AI agents
- 📊 **On-Chain Reputation** - Build and verify reputation on the blockchain
- 💼 **Multi-Role Support** - Student, Tutor, and Admin dashboards
- 🎥 **Integrated Classroom** - Built-in video lesson rooms
- 💰 **Crypto Wallet** - Manage funds, view transactions, and track escrow
- ⚖️ **Dispute Resolution** - Admin-managed dispute system for fair outcomes
- 🌓 **Dark Mode** - Beautiful UI with light/dark theme support

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Gemini API Key** (for AI features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Steake/Clario.git
   cd Clario
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 📱 Application Structure

### User Roles

#### 👨‍🎓 **Student**
- Browse and filter tutors by subject (Computer Science, Math, Languages, Arts)
- View tutor profiles with ratings, reviews, and pricing
- Book sessions with crypto payments
- Join live lesson rooms
- Manage wallet and view transaction history
- Track funds in escrow

#### 👨‍🏫 **Tutor**
- Manage availability calendar
- View earnings and completed sessions
- Set hourly rates in cryptocurrency
- Access tutor dashboard with analytics
- Manage booking requests

#### 🛡️ **Admin**
- Monitor platform activity
- Manage dispute resolution
- Oversee escrow contracts
- Platform administration tools

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | Frontend framework |
| **TypeScript** | Type-safe development |
| **Vite** | Build tool and dev server |
| **React Router** | Client-side routing |
| **Tailwind CSS** | Utility-first styling |
| **Google Material Symbols** | Icon system |

---

## 📂 Project Structure

```
Clario/
├── components/          # Reusable UI components
│   └── Layout.tsx       # Main layout with sidebar and navigation
├── context/             # React context providers
│   └── ToastContext.tsx # Toast notification system
├── pages/               # Application pages/routes
│   ├── Landing.tsx      # Landing page
│   ├── StudentDashboard.tsx
│   ├── TutorDashboard.tsx
│   ├── TutorDiscovery.tsx
│   ├── TutorAvailability.tsx
│   ├── Booking.tsx      # Session booking flow
│   ├── LessonRoom.tsx   # Live lesson interface
│   ├── Wallet.tsx       # Crypto wallet management
│   ├── AdminDashboard.tsx
│   └── DisputeResolution.tsx
├── App.tsx              # Main app component with routing
├── types.ts             # TypeScript type definitions
├── index.tsx            # Application entry point
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── netlify.toml         # Netlify deployment config
└── package.json         # Dependencies and scripts
```

---

## 🌐 Deployment

### Netlify (Recommended)

This project is configured for Netlify deployment:

1. **Connect your repository** to Netlify
2. **Build settings** are configured in `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

3. **Environment variables**: Add `GEMINI_API_KEY` in Netlify dashboard

4. **Deploy**: Netlify will automatically deploy on push to main branch

### Manual Deployment

```bash
npm run build
# Deploy the dist/ folder to your hosting provider
```

---

## 🎨 Features Walkthrough

### 💳 Crypto Payments
Students can pay for lessons using cryptocurrency (ETH). The platform displays both fiat and crypto equivalents for transparency.

### 🔒 Escrow System
Payments are held in a smart contract escrow until the lesson is completed, protecting both students and tutors.

### 🤖 AI & Human Tutors
Browse tutors filtered by:
- Subject expertise
- Human vs AI agent
- Hourly rate
- Rating and reviews

### 📅 Booking System
- Select available time slots
- View session details and pricing
- Confirm payment with crypto
- Join lesson room when live

### 💰 Wallet Management
- View total balance and funds in escrow
- Transaction history with filters
- Quick actions for deposits and withdrawals
- Clario Pro upgrade for reduced fees

### 🎓 Lesson Room
- Video conferencing interface
- Real-time collaboration tools
- Session recording (if enabled)
- In-lesson chat

---

## 🔧 Configuration

### Tailwind Configuration
Custom colors and theme settings are defined in `index.html`:
- Primary color: `#137fec`
- Dark mode support with custom backgrounds
- Material Design inspired color palette

### Vite Configuration
- React plugin enabled
- Path aliases (`@/` maps to root)
- Environment variable handling for API keys
- Development server on port 3000

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is part of the AI Studio template system. See the original template at [google-gemini/aistudio-repository-template](https://github.com/google-gemini/aistudio-repository-template).

---

## 🔗 Links

- **AI Studio App**: https://ai.studio/apps/drive/109TaaCsThETGHCytkxOcGgFZQhEKvBbz
- **Repository**: https://github.com/Steake/Clario

---

## 📧 Support

For issues and questions, please open an issue on GitHub or contact the maintainers.

---

<div align="center">
  Made with ❤️ by the Clario Team
</div>