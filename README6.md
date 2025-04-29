# 🚀 Week 5 – Interneers Lab

This week, we explored **basic frontend development** and integrated it with our **backend APIs** using Django and Vanilla JavaScript.

---

## 📋 Step-by-Step Explanation

### ✅ Step 1: Basic HTML Structure
- Created a new HTML page.
- Added a **Product Display Tile** using plain HTML.

### 🎨 Step 2: Styling with CSS
- Styled the Product Display Tile using **CSS** for a clean and responsive look.

### 🌐 Step 3: API Calls with Vanilla JavaScript
- Made API calls to our backend using `fetch()`.
- Target API: `http://127.0.0.1:8000/api/mongo/products/`

### ⚠️ Step 4: Handling CORS Error in Django
When trying to access the API from the frontend, a **CORS error** was encountered. Here's how we fixed it:

#### 🔧 Enable CORS in Django:

1. **Install the CORS headers package**  
   ```bash
   pip install django-cors-headers
Add to your INSTALLED_APPS:

python
Copy
Edit
# settings.py
INSTALLED_APPS = [
    ...
    'corsheaders',
    ...
]
Add Middleware at the top:

python
Copy
Edit
# settings.py
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    ...
]
Allow all origins during development:

python
Copy
Edit
# settings.py
CORS_ALLOW_ALL_ORIGINS = True
Restart the Django server:

bash
Copy
Edit
python manage.py runserver
🛠️ Step 5: Used Browser Developer Tools
Utilized DevTools to debug the CORS issue.

Explored the DOM tree, console logs, and network tab.

🌟 Advanced Tasks
🔄 1. Dynamically Modify Tiles
Used .forEach() to loop through product data and inject HTML dynamically.

🧱 2. Render Products from API
Fetched all products via API and rendered each as a tile in the DOM.

✨ 3. CSS Animation
Added animation to tile appearance using @keyframes:

css
Copy
Edit
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.product-tile {
  animation: fadeInUp 0.5s ease forwards;
}