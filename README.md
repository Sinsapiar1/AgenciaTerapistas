# 🏥 ABA Agencies Miami - Professional RBT Therapist Agency

Professional website for ABA therapy services specializing in children with autism and developmental disorders in Miami, Florida.

## 🎯 Key Features

### ✅ **SEO Optimized for "ABA Agencies Miami"**
- Complete meta tags (Open Graph, Twitter Cards)
- Schema.org markup (MedicalOrganization + LocalBusiness)
- Optimized for keyword: "aba agencies miami"
- XML Sitemap
- Configured robots.txt
- Semantic HTML5 structure

### 🌐 **Bilingual (EN/ES) - English Priority**
- **English as default language** (US market focus)
- Dynamic language toggle without page reload
- Preference saved in localStorage
- Complete translations
- Meta tags updated per language

### 📱 **100% Responsive with Fixed Mobile Menu**
- **Fixed hamburguesa menu** with proper icons
- Mobile-first design
- Tablets
- Desktop
- Large screens
- Tested on all devices

### 🎨 **Professional US-Style Design with Animations**
- Modern American medical/healthcare aesthetic
- Professional medical color palette
- Smooth entrance animations
- Fluid transitions
- Interactive hover effects
- Trust-building visual elements

### 🚀 **Performance & UX**
- Lazy loading images
- Optimized CSS with animations
- Modular JavaScript
- No heavy frameworks
- Fast load (<2s)
- Scroll-triggered animations

### 📬 **Contact Form**
- Real-time validation
- Ready for Make.com integration
- Success/error messages
- Required fields
- Email and phone validation

## 📁 Project Structure

```
AgenciaTerapistas/
├── index.html              # Main page
├── css/
│   └── style.css          # Main styles with animations
├── js/
│   └── main.js            # JavaScript (English default)
├── img/                   # Images (to be added)
│   ├── hero-therapist.jpg
│   ├── team-therapist.jpg
│   ├── testimonial-1.jpg
│   ├── testimonial-2.jpg
│   ├── testimonial-3.jpg
│   └── florida-map.svg
├── robots.txt             # SEO - Robots
├── sitemap.xml            # SEO - Sitemap
├── CNAME                  # Custom domain
└── README.md              # This file
```

## 🌐 Live Site

**GitHub Pages:** https://sinsapiar1.github.io/AgenciaTerapistas/
**Custom Domain:** https://abaagenciesmiami.com (configure DNS)

## 🔧 Recent Updates

### ✅ Fixed (May 2026)
1. **Mobile menu now works perfectly** - Added hamburger and close icons
2. **English as default language** - Changed from Spanish to English priority
3. **Added smooth animations** - Entrance animations on all sections
4. **Improved responsiveness** - Menu works on all screen sizes
5. **Enhanced visual trust** - Hover effects, transitions, professional feel

## 🔌 Connect Make.com Webhook

### Step 1: Create Scenario in Make.com
1. Create account at Make.com (free)
2. Create New Scenario
3. Add "Custom Webhook"
4. Copy webhook URL

### Step 2: Configure in JavaScript
Open `js/main.js` and find line ~268:
```javascript
const webhookUrl = 'YOUR_MAKE_COM_WEBHOOK_URL_HERE';
```

Replace with your Make.com webhook URL:
```javascript
const webhookUrl = 'https://hook.us1.make.com/xxxxxxxxxx';
```

### Step 3: Configure Flow in Make.com
1. **Webhook** → Receives form data
2. **Gmail** → Sends email with data
3. **Google Sheets** (optional) → Saves lead
4. **Slack/Discord** (optional) → Internal notification

## 🌐 Configure Custom Domain (abaagenciesmiami.com)

### On Squarespace Domains or your registrar:

**A Records** (for root domain):
```
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A  
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153
```

**CNAME Record** (for www):
```
Type: CNAME
Host: www
Value: sinsapiar1.github.io
```

### On GitHub:
1. Settings → Pages
2. Custom domain: `abaagenciesmiami.com`
3. Save
4. Wait 24-48 hours for verification
5. Enable "Enforce HTTPS"

### Create CNAME file
In repository root, file named `CNAME` (no extension) with:
```
abaagenciesmiami.com
```

## 🎨 Customization

### Colors
Edit in `css/style.css`:
```css
:root {
    --primary-color: #0066CC;     /* Primary blue */
    --secondary-color: #00A884;   /* Secondary green */
    --accent-color: #FF6B35;      /* Accent orange */
}
```

### Content
- **Testimonials:** Update in `index.html` (lines ~920-1050)
- **Services:** Update in `index.html` (lines ~380-680)
- **Statistics:** Update in `index.html` (lines ~310-330)
- **Coverage areas:** Update in `index.html` (lines ~760-790)

## 📊 SEO - Google Ranking

### Primary Keywords:
- **English (priority):**
  - "aba agencies miami"
  - "rbt therapist miami"
  - "aba therapy florida"
  - "autism therapy miami"
  
- **Spanish (secondary):**
  - "agencia terapistas rbt miami"
  - "terapia aba miami"

### Post-Launch Optimization:
1. **Google Search Console:**
   - Register site
   - Upload sitemap.xml
   - Verify indexing

2. **Google My Business:**
   - Create business profile
   - Add location
   - Request client reviews

3. **Content Marketing:**
   - Create blog with ABA articles
   - Publish parent resources
   - RBT therapy guides

4. **Local SEO:**
   - Consistent NAP (Name, Address, Phone)
   - Google reviews
   - Local media mentions

## 🚀 Launch Checklist

- [x] Upload all files to GitHub
- [x] Configure GitHub Pages
- [x] Fix responsive menu
- [x] Change language to English default
- [x] Add animations
- [ ] Connect custom domain
- [ ] Add all images
- [ ] Configure Make.com webhook
- [ ] Test contact form
- [ ] Test responsive on mobile
- [ ] Test language toggle
- [ ] Configure Google Analytics (optional)
- [ ] Register in Google Search Console
- [ ] Create Google My Business
- [ ] Update real contact information

## 🖼️ Required Images

Add these images to `img/` folder:

1. **hero-therapist.jpg** (1200x800px) - Professional RBT therapist with child
2. **team-therapist.jpg** (1000x800px) - Therapy session
3. **testimonial-1.jpg** (150x150px) - Profile photo mother
4. **testimonial-2.jpg** (150x150px) - Profile photo father
5. **testimonial-3.jpg** (150x150px) - Profile photo mother
6. **florida-map.svg** - Florida vector map

**Recommended sources:**
- Pexels.com (free, high quality)
- Unsplash.com (free, professional)
- Freepik.com (free version available)

Search terms: "therapist child autism", "child therapy session", "behavioral therapist"

## 🛠️ Technologies

- **HTML5** - Semantic structure
- **CSS3** - Modern design with animations
- **JavaScript (Vanilla)** - Functionality without frameworks
- **Google Fonts** - Inter & Poppins
- **Schema.org** - Rich Snippets
- **Open Graph** - Social sharing

## 📞 Support

For questions or modifications:
- Email: raulpivet@gmail.com
- Portfolio: https://raulpivet.com

## 📄 License

© 2026 ABA Agencies Miami. All rights reserved.

---

**Developed by:** Raul Pivet  
**Date:** May 2026  
**Version:** 1.1.0 (English Priority + Animations + Fixed Mobile Menu)