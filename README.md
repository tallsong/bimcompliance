
# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/0a4a8903-7979-4a72-89c7-9bc251e9ee5e

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`



# logo

```typescript
import { Building2 } from "lucide-react";
<Building2 className="w-8 h-8 text-brand" />

```

## Deploy 
```bash
npx vite build
npm run dev


npm install gh-pages --save-dev
npm run deploy
npm run deploy -- -m "Deploy React app to GitHub Pages"
```