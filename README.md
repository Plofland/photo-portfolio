This is my personal portfolio that will serve primarily as a photography portfolio and secondarily as a web developer portfolio.
In the future, when I purchase another domain, I should separate these two portfolios.

## Getting Started Locally

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deployment on Git

In order to deploy this reposity to GitHub pages, go through these steps:

    push up your changes
    run npm run deploy
        this runs npm run build&&gh-pages -d build
    then go to this repo on GitHub and navigate to the Settings tab
    in the left column, click on the Pages tab
    the Custom domain will be reset to the default github pages * change it back to my domain and click Save

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
