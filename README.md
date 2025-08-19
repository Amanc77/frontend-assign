

This project is a **Next.js product page UI** that demonstrates optimized images and client-side caching for a smooth user experience.

## Live Demo
You can view the project here: [Frontend Assign Live Demo](https://frontend-assign-bay-zeta.vercel.app/)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How to Use](#how-to-use)
- [Live Demo](#live-demo)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)

## Overview
This project displays product details with an interactive UI. Users can select product colors and sizes, view optimized product images, and add items to the cart. Client-side caching is implemented for faster page reloads.

## Features
- Optimized product image using `next/image` (lazy loading & responsive)
- Color selector with visual feedback
- Size selector synchronized with selected color
- Add to cart button with hover and focus effects
- Client-side caching using `SWR` or `localStorage` for faster reloads

## Technologies Used
- **Next.js**: Framework for building React apps
- **React**: UI library
- **Tailwind CSS**: Styling framework
- **SWR / localStorage**: Client-side caching

## How to Use
1. Clone the repository:
   ```bash
   git clone https://github.com/Amanc77/frontend-assign.git
   cd frontend-assign
   npm install


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.


Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
