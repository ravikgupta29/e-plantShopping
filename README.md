1.Paradise Nursery

Paradise Nursery — Where Green Meets Serenity. A React + Redux Toolkit storefront for houseplants: browse plants by category, add them to a cart, adjust quantities and see live totals.

Live app: `https://<your-github-username>.github.io/<your-repo-name>/`
Repository:`https://github.com/<your-github-username>/<your-repo-name>`

2.Features

Landing page: background image, company name, company description and a Get Started button.
Product listing:multipe plants in 5 categories (Air Purifying, Aromatic Fragrant, Insect Repellent,Medicinal ,Low Maintenance), each with thumbnail, name, price and Add to Cart. The button becomes a disabled Added to Cart once the plant is in the cart.
Navbar (plants and cart pages): links to Home, Plants and Cart, plus a cart icon whose count updates live.
Cart page:total plants, total cart amount, per-plant thumbnail / name / unit price / subtotal, increase (+), decrease (−) and Delete buttons, Continue Shopping and Checkout ("Coming Soon").

3.Tech stack

React 18.3 · Redux Toolkit · React-Redux · Vite

4. Project structure

```
src/
  App.jsx          Landing page (company name, Get Started)
  App.css          Global styles + background image
  AboutUs.jsx      Company description
  ProductList.jsx  Navbar + product listing, switches to cart view
  CartItem.jsx     Shopping cart page
  CartSlice.jsx    Redux slice: addItem, removeItem, updateQuantity + selectors
  store.js         Redux store
  plantData.js     Plant catalogue (3 categories x 6 plants)
  plantArt.js      Generates the SVG plant thumbnails
```

5. Run locally

```bash
npm install
npm run preview        # http://localhost:4173
npm run build      # production build in dist/
```

6 Deploy to GitHub Pages
Respository name:e-plantShopping
Option A – GitHub Actions (included): push to `main`, then in the repo go to Settings → Pages → Source: GitHub Actions. `.github/workflows/deploy.yml` builds and publishes automatically.

Option B – gh-pages branch:

```bash
npm run deploy
```
then set Settings → Pages → Source: Deploy from a branch → `gh-pages`.

## Using real plant photos

Thumbnails are generated SVG illustrations so the app has no external image dependencies. To use photos, replace the value of plantsArray values like `name`,'image`,`description`,`cost` value of any plant in `src/ProductList.js` with an image URL or an imported local file.
