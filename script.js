// const reviews = [
//     {
//         name: "John Doe",
//         rating: 5,
//         review: "Amazing product quality and fast shipping! Will definitely buy again."
//     },
//     {
//         name: "Jane Smith",
//         rating: 4,
//         review: "Great customer service, but the packaging could be better."
//     },
//     {
//         name: "Michael Lee",
//         rating: 5,
//         review: "The cards were in pristine condition. Highly recommend!"
//     }
// ];

// // Load reviews immediately when the page loads
// function showReviews() {
//     const reviewsContainer = document.getElementById('reviews-container');

//     reviews.forEach(review => {
//         let reviewDiv = document.createElement('div');
//         reviewDiv.classList.add('review');
//         reviewDiv.innerHTML = `
//                     <h3>${review.name}</h3>
//                     <p>Rating: ${'⭐'.repeat(review.rating)}</p>
//                     <p>${review.review}</p>
//                 `;
//         reviewsContainer.appendChild(reviewDiv);
//     });
// }

// // Call the function to show reviews when the page loads
// window.onload = showReviews;
