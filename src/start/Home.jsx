// export const Home=()=>{
//     return<>
//     <div id="aaa">
//     <h1>home🏠</h1></div></>
// }
// // HomePage.js
// import React from 'react';
// import './HomePage.css';

// const Slider = () => {
//   return (
//     <div className="slider">
//       <div className="slide">
//         <img src="path/to/image1.jpg" alt="דירה 1" />
//         <div className="slide-caption">דירה יוקרה במרכז העיר</div>
//       </div>
//       <div className="slide">
//         <img src="path/to/image2.jpg" alt="דירה 2" />
//         <div className="slide-caption">דירה יפהפה על הים</div>
//       </div>
//       <div className="slide">
//         <img src="path/to/image3.jpg" alt="דירה 3" />
//         <div className="slide-caption">דירה חמודה לשהות משפחתית</div>
//       </div>
//     </div>
//   );
// };

// const Categories = () => {
//   return (
//     <div className="categories-container">
//       <div className="category"><h3>דירות יוקרה</h3></div>
//       <div className="category"><h3>דירות במרכז העיר</h3></div>
//       <div className="category"><h3>דירות למשפחות</h3></div>
//       <div className="category"><h3>דירות במחירים נוחים</h3></div>
//     </div>
//   );
// };

// const Testimonials = () => {
//   const reviews = [
//     { id: 1, text: "היה לנו סוף שבוע נהדר! הדירה הייתה נקייה ומסודרת." },
//     { id: 2, text: "שירות מצוין! בהחלט נשוב." },
//     { id: 3, text: "מומלץ בחום! דירה מושלמת." },
//   ];

//   return (
//     <div className="testimonials-container">
//       {reviews.map(review => (
//         <div key={review.id} className="testimonial">
//           <p>{review.text}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// const BlogPosts = () => {
//   const posts = [
//     { id: 1, title: "5 טיפים חשובים לשכירת דירה", excerpt: "אם אתה מחפש דירה חדשה, יש כמה דברים שחשוב לדעת. ממש כאן..." },
//     { id: 2, title: "איך לבחור את האזור הנכון בשבילך", excerpt: "אזור טוב יכול להרוויח לך הרבה יותר מאשר רק דירה יפה. הכנס כאן…" },
//     { id: 3, title: "מה לבדוק לפני העברת דירה", excerpt: "המעבר לדירה חדשה יכול להיות חוויה מלחיצה. הבטיחו לעצמכם…" },
//   ];

//   return (
//     <div className="blog-posts-container">
//       {posts.map(post => (
//         <div key={post.id} className="blog-post">
//           <h3>{post.title}</h3>
//           <p>{post.excerpt}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// const InteractiveMap = () => {
//   return (
//     <div className="map">
//       <h3>מפה אינטראקטיבית</h3>
//       <p>כאן תוכל למצוא את הדירות שלנו על המפה!</p>
//     </div>
//   );
// };

// const HomePage = () => {
//   return (
//     <div className="home-container">
//       <header className="header">
//         <h1 className="logo">🏠 Happy Rentals</h1>
//         <nav className="navbar">
//           <a href="#about">אודות</a>
//           <a href="#categories">קטגוריות</a>
//           <a href="#testimonials">ביקורות</a>
//           <a href="#blog">טיפים</a>
//           <a href="#contact">צרו קשר</a>
//         </nav>
//       </header>

//       <Slider />

//       <section id="categories">
//         <h2 className="section-title">קטגוריות פופולריות</h2>
//         <Categories />
//       </section>

//       <section id="testimonials">
//         <h2 className="section-title">מה הלקוחות שלנו אומרים</h2>
//         <Testimonials />
//       </section>

//       <section id="map" className="map-section">
//         <h2 className="section-title">גלה אזורים פופולריים</h2>
//         <InteractiveMap />
//       </section>

//       <section id="blog" className="blog-section">
//         <h2 className="section-title">טיפים להשכרת דירות</h2>
//         <BlogPosts />
//       </section>

//       <section className="cta-section">
//         <h2>מה מחכה לך? הזמן היום!</h2>
//         <button className="cta-button">התחל לחפש דירה עכשיו 🔑</button>
//       </section>

//       <footer className="footer">
//         <h3>צרו קשר</h3>
//         <p>טלפון: 123-456-7890</p>
//         <p>אימייל: info@happyrentals.com</p>
//         <div className="socials">
//           <a href="#">פייסבוק</a>
//           <a href="#">אינסטגרם</a>
//         </div>
//         <p>© 2023 Happy Rentals. כל הזכויות שמורות.</p>
//       </footer>
//     </div>
//   );
// }

// export default HomePage;

// import React from 'react';
// import '../Style/Home.css'; // וודא שאתה יוצר קובץ CSS עם הסגנון המתאים

// export const Home = () => {
//     return (
//       <div className="home-page">
//         <header className="header">
//           <div className="logo">לוגו שלך כאן</div>
//           <nav className="nav">
//             <ul>
//               <li><a href="#features">תכונות</a></li>
//               <li><a href="#gallery">גלריה</a></li>
//               <li><a href="#about">אודות</a></li>
//               <li><a href="#contact">צור קשר</a></li>
//             </ul>
//           </nav>
//         </header>
        
//         <section className="hero-section">
//           <h1>ברוך הבא לעולם האירוח שלנו!</h1>
//           <p>מצא את הדירה המושלמת לחופשה הבאה שלך עוד היום.</p>
//           <button className="btn-main">חפש עכשיו</button>
//         </section>
  
//         <section id="features" className="features">
//           <h2>תכונות עיקריות</h2>
//           <div className="features-grid">
//             <div className="feature-item">
//               <img src="/images/feature1.jpg" alt="פינוק בפריחה" />
//               <h3>פינוק בפריחה</h3>
//               <p>דירות מפוארות עם ארוחות בוקר מדהימות.</p>
//             </div>
//             <div className="feature-item">
//               <img src="/images/feature2.jpg" alt="גישה לפעילויות" />
//               <h3>גישה לפעילויות</h3>
//               <p>קרבת דירות לפעילויות וספורט ימי.</p>
//             </div>
//             <div className="feature-item">
//               <img src="/images/feature3.jpg" alt="שירות אישי" />
//               <h3>שירות אישי</h3>
//               <p>צוות זמין 24/7 בכל בקשה שלך.</p>
//             </div>
//           </div>
//         </section>
  
//         <section id="gallery" className="gallery">
//           <h2>גלריה</h2>
//           <div className="gallery-grid">
//             <img src="/images/gallery1.jpg" alt="תמונה 1" />
//             <img src="/images/gallery2.jpg" alt="תמונה 2" />
//             <img src="/images/gallery3.jpg" alt="תמונה 3" />
//             <img src="/images/gallery4.jpg" alt="תמונה 4" />
//           </div>
//         </section>
  
//         <section id="about" className="about">
//           <h2>אודותינו</h2>
//           <p>אנו מציעים מגוון רחב של דירות אירוח בכל רחבי הארץ, עם מחירים תחרותיים ושירות חסר תחליף.</p>
//           <p>כל דירה נבחרה בקפידה כדי להבטיח שהאורחים שלנו יקבלו חוויה בלתי נשכחת.</p>
//         </section>
  
//         <footer className="footer">
//           <p>© 2023 כל הזכויות שמורות. השכרת דירות - הפתרון המושלם לחופשה הבאה שלך!</p>
//           <div className="social-media-links">
//             <a href="#">פייסבוק</a>
//             <a href="#">אינסטגרם</a>
//             <a href="#">טוויטר</a>
//           </div>
//         </footer>
//       </div>
//     );
//   };
  
//   export default Home;

import React from 'react';
import '../style/Home.css';

// export const Home = () => {
//   return (
//     <div className="home-page">
//       <header className="header">
//         <div className="logo">לוגו שלך</div>
//         <nav className="nav">
//           <ul>
//             <li><a href="#features">תכונות</a></li>
//             <li><a href="#gallery">גלריה</a></li>
//             <li><a href="#about">אודות</a></li>
//             <li><a href="#contact">צרו קשר</a></li>
//           </ul>
//         </nav>
//       </header>

//       <section className="hero-section">
//         <div className="hero-content">
//           <h1>חופשה בלתי נשכחת מתחילה כאן!</h1>
//           <p>תמצא את הדירה המושלמת לחופשה שלך.</p>
//           <button className="btn-main">חפש עכשיו</button>
//         </div>
//       </section>

//       <section id="features" className="features">
//         <h2>תכונות עיקריות</h2>
//         <div className="features-grid">
//           <div className="feature-item">
//             <img src="/images/feature1.jpg" alt="פינוק בפריחה" />
//             <h3>פינוק בפריחה</h3>
//             <p>דירות מפוארות עם ארוחות בוקר מדהימות.</p>
//           </div>
//           <div className="feature-item">
//             <img src="/images/feature2.jpg" alt="גישה לפעילויות" />
//             <h3>גישה לפעילויות</h3>
//             <p>קרבת דירות לפעילויות וספורט ימי.</p>
//           </div>
//           <div className="feature-item">
//             <img src="/images/feature3.jpg" alt="שירות אישי" />
//             <h3>שירות אישי</h3>
//             <p>צוות זמין 24/7 בכל בקשה שלך.</p>
//           </div>
//         </div>
//       </section>

//       <section id="gallery" className="gallery">
//         <h2>גלריה</h2>
//         <div className="gallery-grid">
//           <img src="/images/gallery1.jpg" alt="תמונה 1" />
//           <img src="/images/gallery2.jpg" alt="תמונה 2" />
//           <img src="/images/gallery3.jpg" alt="תמונה 3" />
//           <img src="/images/gallery4.jpg" alt="תמונה 4" />
//         </div>
//       </section>

//       <section id="about" className="about">
//         <h2>אודותינו</h2>
//         <p>אנו מציעים מגוון רחב של דירות אירוח בכל רחבי הארץ, עם מחירים תחרותיים ושירות חסר תחליף.</p>
//         <p>כל דירה נבחרה בקפידה כדי להבטיח שהאורחים שלנו יקבלו חוויה בלתי נשכחת.</p>
//       </section>

//       <footer className="footer">
//         <p>© 2023 כל הזכויות שמורות. השכרת דירות - הפתרון המושלם לחופשה הבאה שלך!</p>
//         <div className="social-media-links">
//           <a href="#">פייסבוק</a>
//           <a href="#">אינסטגרם</a>
//           <a href="#">טוויטר</a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;

export const Home = () => {
    return (
        <div className="home-container">
            <header className="header">
                <h1>Welcome to Our Apartment Rental Service</h1>
                <p id='a'>Your dream home is just a click away!</p>
            </header>
            <section className="featured-properties">
                {/* <h2>Featured Properties</h2> */}
                <div className="property-card">
                <img src="pic/48950_br_group_pic_950x650_3-683b75f9-b8f5-427d-8f29-cad7d8865ff4.jpg" alt="Property 1" />
                    <h3>Luxury Apartment in the City</h3>
                    <p>3 Beds, 2 Baths - $2500/month</p>
                </div>
                <div className="property-card">
                <img src="pic/466557710.jpg" alt="Property 3" />
                    <h3>Modern Loft with City Views</h3>
                    <p>1 Bed, 1 Bath - $2200/month</p>
                </div>
                <div className="property-card">
                <img src="pic/396306090411720.jpg" alt="Property 2" />
                    <h3>Cozy Cottage by the Beach</h3>
                    <p>2 Beds, 1 Bath - $1800/month</p>
                </div>
                <div className="property-card">
                    <img src="pic/1691906511229147.jpeg" alt="Property 4" />
                    <h3>The specialest apartment for a real rest</h3>
                    <p>4 Beds, 2 Bath - $2500/month</p>
                </div>
                <div className="property-card">
                    <img src="pic/2020101410234355-s.jpg" alt="Property 5" />
                    <h3>The best dream lodge</h3>
                    <p>6 Bed5, 1 Bath - $2800/month</p>
                </div>
                <div className="property-card">
                    <img src="pic/image_30051_9b1815a8f7cf44fdb8c2475b833ddd03.webp" alt="Property 6" />
                    <h3>A hotel that suits everyone's taste</h3>
                    <p>5 Bed5, 1 Bath - $3000/month</p>
                </div>
            </section>
            <section className="about-us">
                <h2>About Us</h2>
                <p>We are dedicated to helping you find the perfect rental property that fits your needs and lifestyle.</p>
            </section>
            <br /><br /><br />
            <footer className="footer">
                <p>Contact us: info@rentalservice.com</p>
                <p>Follow us on social media!</p>
            </footer>
        </div>
    );
};

export default Home;