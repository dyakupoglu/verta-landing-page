# Verta Limited - Next.js Landing Page

Welcome to the **Verta Limited** landing page! This project is built using [Next.js](https://nextjs.org), a React framework for production-grade web applications. The landing page is designed to be modern, responsive, and scalable, following industry best practices.

## Features

- **Modern Design**: Clean and responsive UI with TailwindCSS.
- **Contact Form**: Integrated with FormSubmit for email submissions.
- **Optimized Performance**: Leveraging Next.js features like server-side rendering (SSR) and static site generation (SSG).
- **Accessibility**: Fully accessible components.
- **Scalable Architecture**: Modular and reusable components.

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js) or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/verta-landing-page.git
   ```

2. Navigate to the project directory:

   ```bash
   cd verta-landing-page
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Build for Production

To create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run start
```

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to a GitHub repository.
2. Import the repository into Vercel.
3. Configure the build settings (Framework: Next.js, Build Command: `npm run build`).
4. Deploy your app and connect your custom domain.

## Folder Structure

```
verta/
├── app/                # Application pages and layouts
├── components/         # Reusable UI components
├── public/             # Static assets (images, icons, etc.)
├── styles/             # Global styles
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## License

This project is licensed under the [MIT License](LICENSE).

---

Built with ❤️ by **Verta Limited**.
