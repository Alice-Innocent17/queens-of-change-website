document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       IMAGE SLIDER
    ========================= */

    const slider = document.querySelector('.slider');

    const nextBtn = document.querySelector('.next');

    const prevBtn = document.querySelector('.prev');

    if(slider && nextBtn && prevBtn){

        nextBtn.addEventListener('click', () => {

            slider.scrollLeft += 350;

        });

        prevBtn.addEventListener('click', () => {

            slider.scrollLeft -= 350;

        });

    }



    /* =========================
       DARK MODE
    ========================= */

    const darkBtn = document.querySelector(".dark-btn");

    if(darkBtn){

        darkBtn.onclick = function () {

            document.body.classList.toggle("dark-mode");

        };

    }



    /* =========================
       COUNTER ANIMATION
    ========================= */

    const counters = document.querySelectorAll('.counter');

    if(counters.length > 0){

        counters.forEach(counter => {

            const updateCounter = () => {

                const target = +counter.getAttribute('data-target');

                const current = +counter.innerText;

                const increment = target / 100;

                if(current < target){

                    counter.innerText = Math.ceil(current + increment);

                    setTimeout(updateCounter, 20);

                }else{

                    counter.innerText = target + "+";

                }

            };

            updateCounter();

        });

    }



    /* =========================
       TYPING EFFECT
    ========================= */

    const typingText = document.getElementById("typing-text");

    if(typingText){

        const words = [

            "Empowering Change",

            "Building Better Futures",

            "Supporting Communities",

            "Creating Equal Opportunities"

        ];

        let wordIndex = 0;

        let charIndex = 0;

        let isDeleting = false;

        function typeEffect(){

            const currentWord = words[wordIndex];

            if(isDeleting){

                typingText.textContent =
                currentWord.substring(0, charIndex);
                charIndex--;

            }else{

                typingText.textContent =
                currentWord.substring(0, charIndex);
                charIndex++;

            }

            if(!isDeleting && charIndex > currentWord.length){

                isDeleting = true;

                setTimeout(typeEffect, 1500);

                return;

            }

            if(isDeleting && charIndex < 0){

                isDeleting = false;

                wordIndex++;

                if(wordIndex >= words.length){

                    wordIndex = 0;

                }

            }

            setTimeout(typeEffect, isDeleting ? 60 : 120);

        }

        typeEffect();

    }



    /* =========================
       SCROLL REVEAL
    ========================= */

    const hiddenElements = document.querySelectorAll('.hidden');

    if(hiddenElements.length > 0){

        const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry) => {

                if(entry.isIntersecting){

                    entry.target.classList.add('show');

                }

            });

        });

        hiddenElements.forEach((el) => observer.observe(el));

    }

});