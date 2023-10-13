This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Digipolis LayoutRenderer/Redactie NextJS - Starter Kit

## Run locally

- Use Node `version 18`.
- `npm install`
- `npm run dev`
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ENV Variables

- API_GW_URL=https://api-gw-a.antwerpen.be
- WCM_BASE_PATH=/acpaas/wcm-proxy/v4
- WCM_API_KEY=<YOUR_API_KEY>
- WCM_SITE_ID=<YOUR_SITE_ID>

## Content of repo

- Starter kit for working with LayoutRender and redactie (WCM) using NextJS.
- Example 1: Getting data from Redactie and serving it to the front-end via GraphQL (if your ENV variables are correct you should seetthe name of your WCM site as the title of the `AlertWidget`).
- Example 2: Using (static) rules to render some widgets. In real application layout rules can be provided by GraphQL (using techniques from `Example 1`).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- Layout Renderer doc
- Widgets documentat
