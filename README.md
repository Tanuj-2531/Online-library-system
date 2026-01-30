# 📚 Online Library System

An Online Library System built using **React** and **Vite**.  
This application allows users to browse books by category, search for books, view detailed information, and add new books using Redux for state management.

---

## 🚀 Features

### 🏠 Home Page
- Welcome message
- List of book categories (Fiction, Non-Fiction, Sci-Fi, etc.)
- Popular books displayed as cards
- Navigation bar with links to Home, Browse Books, and Add Book

### 📖 Browse Books Page
- Displays books filtered by category using dynamic routing (`/books/:category`)
- Search bar to filter books by title or author
- Each book includes a "View Details" link

### 📘 Book Details Page
- Shows detailed information about a selected book
- Displays book title, author, description, and rating
- "Back to Browse" button

### ➕ Add Book Page
- Form to add a new book
- Uses Redux to manage the book list
- Form validation ensures all fields are filled
- After submission, redirects to Browse Books with the new book displayed at the top

### ❌ 404 Page
- Displays a "Page Not Found" message
- Shows the invalid URL
- Includes a link back to the Home page
- Does NOT display the Navbar

---

## 🛠 Technologies Used

- React (Functional Components & Hooks)
- Vite
- React Router DOM
- Redux Toolkit
- React Redux
- JavaScript (ES6+)
- CSS

---

## 📂 Project Structure

src/  
│  
├── app/  
│   └── store.js  
│  
├── features/books/  
│   └── booksSlice.js  
│  
├── components/  
│   ├── Navbar.jsx  
│   └── BookCard.jsx  
│  
├── pages/  
│   ├── Home.jsx  
│   ├── BrowseBooks.jsx  
│   ├── BookDetails.jsx  
│   ├── AddBook.jsx  
│   └── NotFound.jsx  
│  
├── data/  
│   └── booksData.js  
│  
├── App.jsx  
├── main.jsx  
└── App.css  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Tanuj-2531/Online-library-system
cd online-library-system
```

*(Replace the link above with your actual GitHub repository link)*

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start Development Server

```bash
npm run dev
```

### 4️⃣ Open in Browser

After running the command, open the link shown in the terminal, usually:

http://localhost:5173

---

## 🧠 How the App Works

- Books are stored in Redux state
- Categories are filtered using React Router dynamic routes
- Users can search books by title or author
- Adding a new book updates the Redux store and re-renders the UI
- Invalid URLs redirect to a custom 404 page

---

## 🧪 Assignment Requirements Covered

✔ Created using Vite  
✔ Home page with categories and popular books  
✔ Browse Books page with category filtering  
✔ Dynamic routing (/books/:category)  
✔ Search functionality  
✔ Book details page with dynamic route  
✔ Add Book page with Redux  
✔ Form validation  
✔ Redirect after adding book  
✔ Custom 404 page (without Navbar)  
✔ Styled for better user experience  
✔ Code includes comments for readability  

---

## 🔮 Future Improvements

- Save books using Local Storage or a database  
- Add book cover images  
- Add user authentication  
- Add ratings & reviews  

---

## 👨‍💻 Author

Tanuj Agarwal

---

## 📄 License

This project is for educational purposes.