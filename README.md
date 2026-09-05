# Inovus Labs IEDC Website

The official web platform for **Inovus Labs IEDC** — fostering innovation, entrepreneurship, and technical excellence among student innovators.

---

## 🚀 Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/) (Composition & Options API)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & SCSS
- **UI Components**: [Flowbite](https://flowbite.com/)
- **Sliders & Carousel**: [Swiper](https://swiperjs.com/)
- **Routing**: [Vue Router 4](https://router.vuejs.org/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Photo Gallery**: [PhotoSwipe](https://photoswipe.com/)

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or higher recommended)
- [npm](https://www.npmjs.com/) (or pnpm / yarn)

### 1. Clone the repository

```bash
git clone https://github.com/inovus-labs/inovuslabs.org.git
cd inovuslabs.org
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example environment file and configure your local settings:

```bash
cp .env.example .env
```

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `VITE_CDN_BASE_URL` | Base URL for CDN static assets (illustrations, logos, photos) | `https://cdn.inovuslabs.org` |
| `VITE_APP_INOVUS_API_BASE_URL` | Inovus backend API base URL | `https://api.inovuslabs.org` |
| `VITE_APP_INOVUS_BLOGS_BASE_URL` | Ghost CMS blog content API endpoint | `https://blog.inovuslabs.org` |
| `VITE_APP_INOVUS_BLOGS_API_KEY` | Ghost Content API access key | `your_key_here` |
| `VITE_APP_LINKED_IN_ACCESS_TOKEN` | *(Optional)* LinkedIn API access token | `""` |
| `VITE_APP_LINKED_IN_API_BASE_URL` | *(Optional)* LinkedIn API URL | `https://api.linkedin.com/v2` |
| `VITE_APP_INSTAGRAM_ACCESS_TOKEN` | *(Optional)* Instagram API access token | `""` |

> [!NOTE]
> All static CDN assets fall back to `https://cdn.inovuslabs.org` if `VITE_CDN_BASE_URL` is omitted.

### 4. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

To preview the built production bundle locally:

```bash
npm run preview
```

---

## 📂 Project Structure

```text
├── public/                 # Static public files & favicon
├── src/
│   ├── API/                # Data services & API endpoints (index.js)
│   ├── assets/             # Global CSS, SCSS styles, and fonts
│   ├── components/         # Reusable UI components
│   │   ├── Home/           # Homepage-specific components (Partners, Testimonial, etc.)
│   │   └── reusable/       # Global reusable components (Navbar, Footer, StatsCounter)
│   ├── layouts/            # Page layouts (PublicLayout, ErrorLayout)
│   ├── router/             # Vue Router route configuration (index.js)
│   ├── views/              # Page views (Home, About, Events, Projects, Blog, etc.)
│   ├── App.vue             # Main application component
│   └── main.js             # Application entrypoint
├── .env.example            # Sample environment variables template
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite build configuration
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/inovus-labs/inovuslabs.org/issues).
