# ConStory-Bench Website

A professional website for the ConStory-Bench benchmark - evaluating Large Language Models on long story consistency and contradiction detection.

## 🌟 Features

- **Modern Design**: Clean, elegant interface inspired by leading benchmark websites
- **Interactive Leaderboard**: Sortable rankings of LLM models across 4 evaluation categories
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Professional transitions and scroll effects
- **Model Icons**: Visual representation of each LLM with organization logos

## 📁 Project Structure

```
constory-bench/
├── index.html              # Main HTML page
├── css/
│   └── style.css          # Styling and responsive design
├── js/
│   └── main.js            # JavaScript for interactivity and data
├── assets/
│   ├── icons/             # LLM and organization SVG icons
│   └── images/            # Logo and other images
└── README.md              # This file
```

## 🚀 Local Deployment (Testing)

### Method 1: Python HTTP Server (Recommended)

1. Open PowerShell and navigate to the project directory:
```powershell
cd "d:\ms\StoryVerify\generate_story\benchmark\website\constory-bench"
```

2. Start a simple HTTP server:
```powershell
python -m http.server 8000
```

3. Open your browser and visit:
```
http://localhost:8000
```

### Method 2: VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. The page will automatically open in your default browser

### Method 3: Direct File Opening

Simply double-click `index.html` to open it in your browser. Note: Some features may not work properly due to CORS restrictions.

## 📦 GitHub Pages Deployment

### Step 1: Create a GitHub Repository

1. Go to GitHub and create a new repository
2. Name it: `constory-bench` (or your preferred name)
3. Make it public (required for GitHub Pages)
4. Don't initialize with README, .gitignore, or license

### Step 2: Initialize Git and Push

Open PowerShell in the `constory-bench` directory and run:

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: ConStory-Bench website"

# Add remote repository (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/constory-bench.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages** (in the left sidebar)
3. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes for deployment

### Step 4: Access Your Website

Your website will be available at:
```
https://YOUR-USERNAME.github.io/constory-bench/
```

## 🎨 Customization

### Update Leaderboard Data

Edit `js/main.js` and modify the `leaderboardData` array:

```javascript
const leaderboardData = [
    {
        model: "Model Name",
        modelIcon: "model-icon.svg",
        org: "Organization",
        orgIcon: "org-icon.svg",
        overall: 85.5,
        temporal: 87.2,
        character: 86.3,
        plot: 84.8,
        world: 83.7
    },
    // Add more models...
];
```

### Change Colors

Edit `css/style.css` and modify the CSS variables in the `:root` section:

```css
:root {
    --primary-color: #3b82f6;
    --secondary-color: #8b5cf6;
    --accent-color: #f59e0b;
    /* ... other colors */
}
```

### Add New Model Icons

1. Add SVG files to `assets/icons/`
2. Reference them in the leaderboard data using the filename

### Update Content

Edit `index.html` to modify:
- Hero section text
- About section description
- Category descriptions
- Paper/resource links

## 🔧 Technical Details

### Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled

### Dependencies

- No external JavaScript libraries required
- Uses Google Fonts (Inter) for typography
- Pure vanilla JavaScript for all functionality

### Performance

- Lightweight (< 100KB total)
- Fast load times
- Optimized images and icons
- CSS animations using GPU acceleration

## 📝 Content Structure

### Sections

1. **Hero**: Introduction and key statistics
2. **About**: Overview of the benchmark
3. **Categories**: 4 evaluation dimensions
   - Temporal Consistency
   - Character Consistency
   - Plot Coherence
   - World State Consistency
4. **Leaderboard**: Interactive model rankings
5. **Paper**: Research resources and links

### Leaderboard Columns

- **Rank**: Position in overall ranking
- **Model**: LLM name with icon
- **Organization**: Model developer with logo
- **Overall**: Average score across all categories
- **Temporal**: Temporal consistency score
- **Character**: Character consistency score
- **Plot**: Plot coherence score
- **World State**: World state consistency score

## 🐛 Troubleshooting

### Icons Not Showing

- Ensure SVG files are in `assets/icons/`
- Check file names match exactly (case-sensitive)
- Verify SVG files are valid

### Styles Not Loading

- Clear browser cache
- Check console for errors (F12)
- Verify file paths are correct

### GitHub Pages Not Working

- Ensure repository is public
- Check that GitHub Pages is enabled in settings
- Wait a few minutes after pushing changes
- Verify branch name is correct

## 📄 License

This project is open source. Feel free to use and modify for your research.

## 🤝 Contributing

To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

For questions or issues, please open a GitHub issue in the repository.

---

**Built with ❤️ for the ConStory-Bench project**
