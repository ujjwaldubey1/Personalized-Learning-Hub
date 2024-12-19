

# **Personalized Learning Hub**

A dynamic platform that allows users to create personalized learning paths, track progress, and explore curated content across various topics. This project is built with Next.js and leverages its server-side rendering and dynamic routing capabilities for optimal performance and scalability.

---

## **Features**
- **User Authentication**:  
  Secure login and signup using NextAuth.js with support for Google, GitHub, and email/password.
  
- **Custom Learning Paths**:  
  Users can create and manage their own learning paths by selecting topics of interest.  

- **Content Integration**:  
  Educational content (articles, videos, and tutorials) is fetched dynamically from external APIs like YouTube or a custom database.

- **Interactive Quizzes**:  
  Engage users with quizzes that offer real-time scoring and performance analysis.

- **Progress Visualization**:  
  Track learning progress through a visually interactive 3D progress tree using Three.js.

- **Offline Mode**:  
  Save content for offline access with PWA functionality.

- **Admin Dashboard**:  
  Manage topics, quizzes, and content from an intuitive admin panel.

---

## **Technologies Used**
- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Next.js API routes, MongoDB
- **Authentication**: NextAuth.js
- **3D Visualization**: Three.js
- **APIs**: YouTube API, custom REST APIs
- **PWA Support**: Service Workers

---

## **Project Structure**
```
/pages
  ├── api             # API routes for backend logic
  ├── quiz/[id].js    # Dynamic routing for quizzes
  ├── index.js        # Home page
  ├── dashboard.js    # Admin dashboard
/components
  ├── Navbar.js       # Navigation bar
  ├── QuizCard.js     # Quiz card component
  ├── ProgressTree.js # 3D progress tree
/utils
  ├── auth.js         # Authentication utilities
  ├── api.js          # API call helpers
/public
  ├── icons           # Static icons
  ├── images          # Static images
```

## **Acknowledgments**
- [Next.js Documentation](https://nextjs.org/docs)
- [YouTube API](https://developers.google.com/youtube/v3)
- [Three.js Documentation](https://threejs.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/)
