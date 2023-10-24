// document.addEventListener("DOMContentLoaded", function () {
//     const animationContainer = document.querySelector(".design-section");

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 document.querySelectorAll(".line").forEach((line, index) => {
//                     setTimeout(() => {
//                         line.style.height = "100%";
//                     }, index * 300);
//                 });

//                 document.querySelectorAll(".text").forEach((text, index) => {
//                     setTimeout(() => {
//                         text.style.opacity = 1;
//                     }, 1000 + index * 300);
//                 });

//                 observer.unobserve(entry.target);
//             }
//         });
//     });

//     observer.observe(animationContainer);
// });