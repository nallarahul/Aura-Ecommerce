
# AURA E-commerce

A modern, clean, and responsive e-commerce storefront built with React, Vite, TypeScript, and shadcn/ui. This project serves as a template for a high-performance, aesthetically pleasing online store.

*(Note: Replace this with a screenshot of your actual application)*

## Features

  - **Product Listing:** Browse a grid of available products from mock data.
  - **Advanced Filtering:** Filter products by category, price range, and stock availability via a slide-out sidebar.
  - **Live Search:** Instantly search across product names, descriptions, and categories.
  - **Shopping Cart:** Add/remove items, update quantities, and clear the cart.
  - **Local Storage Persistence:** The cart state is saved in `localStorage` using a custom hook (`useCart`).
  - **Quick View:** View product details in a modal without leaving the page.
  - **Responsive Design:** Fully responsive layout for desktop, tablet, and mobile devices.
  - **Modern UI:** Built with the sleek, accessible components from **shadcn/ui**.
  - **Toasts/Notifications:** Uses **Sonner** for user feedback on actions like adding to cart.

## Tech Stack

This project is built with a modern, type-safe stack:

  - **Framework:** [React](https://react.dev/)
  - **Bundler:** [Vite](https://vitejs.dev/)
  - **Language:** [TypeScript](https://www.typescriptlang.org/)
  - **Styling:** [Tailwind CSS](https://tailwindcss.com/)
  - **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (which uses Radix UI & Vaul)
  - **Routing:** [React Router](https://reactrouter.com/)
  - **Form Management:** [React Hook Form](https://react-hook-form.com/)
  - **Schema Validation:** [Zod](https://zod.dev/)
  - **Icons:** [Lucide React](https://lucide.dev/)
  - **Notifications:** [Sonner](https://www.google.com/search?q=https://sonner.emilkowal.ski/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18 or newer recommended) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/nallarahul/aura-ecommerce.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd aura-ecommerce
    ```

3.  **Install the dependencies:**

    ```bash
    npm install
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:8080`.

## Available Scripts

In the project directory, you can run the following commands:

  - `npm run dev`: Starts the development server with auto-reloading.
  - `npm run build`: Builds the app for production to the `dist` folder.
  - `npm run preview`: Serves the production build locally to preview it.
  - `npm run lint`: Lints the codebase using ESLint and TypeScript.