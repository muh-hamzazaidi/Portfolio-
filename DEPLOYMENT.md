# Deployment Guide

## Quick Deploy to Vercel

The easiest way to deploy this portfolio is to Vercel with zero configuration.

### Step 1: Push to GitHub

```bash
# Initialize Git if not already done
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit"

# Add GitHub remote
git remote add origin https://github.com/yourusername/hamza-zaidi-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Visit [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect Next.js settings
5. Click "Deploy"
6. Wait for deployment to complete (usually 1-2 minutes)

Your portfolio is now live at `https://your-portfolio.vercel.app`

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to your project settings
2. Navigate to "Domains"
3. Click "Add"
4. Enter your custom domain (e.g., `hamzazaidi.dev`)
5. Follow DNS configuration instructions for your domain provider

## Environment Variables

No environment variables are required for this static portfolio.

## GitHub Actions for Auto-Deployment

Vercel automatically sets up GitHub integration for automatic deployments on every push to main.

## Performance Optimization

The portfolio is already optimized for Vercel's platform:

- ✅ Static site generation (SSG)
- ✅ Image optimization with Next.js Image component
- ✅ Automatic code splitting
- ✅ CSS minification
- ✅ Tree shaking
- ✅ Gzip compression

## Analytics (Optional)

To enable analytics, Vercel automatically provides:

1. **Core Web Vitals**: Monitor page performance
2. **Real User Monitoring**: Track user interactions
3. **Edge Network Analytics**: Monitor edge function performance

Access these in your Vercel dashboard under "Analytics"

## Other Deployment Options

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=.next
```

### Deploy to GitHub Pages

1. Update `next.config.js`:
```javascript
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
}
module.exports = nextConfig
```

2. Update `package.json`:
```json
{
  "scripts": {
    "build": "next build && touch out/.nojekyll"
  }
}
```

3. Push to GitHub and enable Pages in repository settings

### Docker Deployment

Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY .next ./
COPY public ./public

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]
```

Build and run:
```bash
docker build -t hamza-portfolio .
docker run -p 3000:3000 hamza-portfolio
```

## Troubleshooting

### Build Fails on Vercel

1. Check build logs in Vercel dashboard
2. Ensure `package.json` has all dependencies
3. Run `npm install` locally to verify dependencies
4. Commit `package-lock.json` if using npm

### Site Shows 404 After Deployment

1. Verify build output contains `.next` folder
2. Check Vercel project settings for correct root directory
3. Ensure `next.config.js` is properly configured

### Slow Performance

1. Check Vercel Analytics for bottlenecks
2. Optimize images with WebP format
3. Monitor Edge Function execution time
4. Consider upgrading Vercel plan for better performance

## Monitoring & Maintenance

### Monitor Site Health

1. Set up monitoring via Vercel Dashboard
2. Enable email notifications for deployment failures
3. Monitor Core Web Vitals regularly

### Update Dependencies

```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Update to latest major versions (be careful!)
npm upgrade
```

### Regular Backups

Since this is static content:
1. Maintain git repository as backup
2. Push regularly to GitHub
3. Tag important releases

## SSL/TLS Certificate

Vercel automatically provides:
- Free SSL certificate via Let's Encrypt
- Auto-renewal (no action needed)
- HTTPS on all domains
- HTTP/2 support

## CDN & Edge Network

Your portfolio is served globally via Vercel's edge network:
- Automatic caching at edge locations
- Instant deployments
- Real-time updates (no cache busting needed)
- DDoS protection included

## Support

For deployment issues:
1. Check [Vercel Documentation](https://vercel.com/docs)
2. Review build logs in dashboard
3. Contact Vercel support
4. Check GitHub Issues

---

Happy deploying! 🚀
