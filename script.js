        // --- TEXT TYPING ANIMATION SYSTEM ---
        const words = [
            "Practical Tech Education.", "Machine Design & CAD.", 
            "Custom Digital Solutions.", "Career Transformations."];
        let i = 0;
        let timer;

        function typingEffect() {
            let word = words[i].split("");
            var loopTyping = function() {
                if (word.length > 0) {
                    document.getElementById('typing-text').innerHTML = "Empowering Growth Through " + 
                    `<span style="color: #D4AF37;">${word.shift()}</span>`;
                    // Treat full string assembly cleanly
                    let assembled = words[i].substring(0, words[i].length - word.length);
                    document.getElementById('typing-text').innerHTML = "Empowering Growth Through " + 
                    `<span style="color: #D4AF37;">${assembled}</span>`;
                    timer = setTimeout(loopTyping, 80);
                } else {
                    setTimeout(deletingEffect, 2000);
                }
            };
            loopTyping();
        }

        function deletingEffect() {
            let word = words[i].split("");
            var loopDeleting = function() {
                if (word.length > 0) {
                    word.pop();
                    let assembled = word.join("");
                    document.getElementById('typing-text').innerHTML = "Empowering Growth Through " + `<span style="color: #D4AF37;">${assembled}</span>`;
                    timer = setTimeout(loopDeleting, 40);
                } else {
                    i = (i + 1) % words.length;
                    setTimeout(typingEffect, 500);
                }
            };
            loopDeleting();
        }

        // Start typing effect on load
        window.onload = typingEffect;

        //SERVICES SERCTION PAGE
        // --- VANILLA JS TAB SWITCHING LOGIC ---
document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");

    tabButtons.forEach(button => {
        button.addEventListener("click", function () {
            // 1. Remove active status from all buttons
            tabButtons.forEach(btn => btn.classList.remove("active"));
            
            // 2. Hide all tab content panels
            tabPanels.forEach(panel => panel.classList.remove("active"));

            // 3. Add active status to the clicked button
            this.classList.add("active");

            // 4. Retrieve the targeting panel ID via data attribute
            const targetTabId = this.getAttribute("data-tab");
            
            // 5. Select and show the active matching panel
            const targetPanel = document.getElementById(targetTabId);
            if (targetPanel) {
                targetPanel.classList.add("active");
            }
        });
    });
});


//PORTFOLIO SCRIPT

// --- VANILLA JS GALLERY FILTER LOGIC ---
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioCards = document.querySelectorAll(".portfolio-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // 1. Swap Active Highlight Class across buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // 2. Identify target category token
            const filterValue = this.getAttribute("data-filter");

            // 3. Loop cards and trigger scale animation classes
            portfolioCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (filterValue === "all" || filterValue === cardCategory) {
                    card.classList.remove("hide");
                    card.classList.add("show");
                } else {
                    card.classList.remove("show");
                    card.classList.add("hide");
                }
            });
        });
    });
});

// --- GLOBAL LAYOUT INTERACTION SYSTEM ---
document.addEventListener("DOMContentLoaded", function () {
    const rebrandBanner = document.getElementById("rebrandBanner");
    const closeBannerBtn = document.getElementById("closeBannerBtn");

    // Check if both elements exist on the current page
    if (rebrandBanner && closeBannerBtn) {
        closeBannerBtn.addEventListener("click", function () {
            // Smoothly hide the banner
            rebrandBanner.style.opacity = "0";
            rebrandBanner.style.transform = "translateY(-100%)";
            
            setTimeout(() => {
                rebrandBanner.style.display = "none";
            }, 300); // Matches the opacity fade time
        });
    }
});

// --- AUTOMATIC & MANUAL TESTIMONIAL SLIDER LOGIC ---
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".testimonial-slide");
    const prevBtn = document.getElementById("prevSlideBtn");
    const nextBtn = document.getElementById("nextSlideBtn");
    
    // Safety check: only run if slider elements exist on this page
    if (slides.length === 0) return;

    let currentSlideIndex = 0;
    let autoSlideInterval;

    function showSlide(index) {
        // Reset boundaries if out of bounds
        if (index >= slides.length) currentSlideIndex = 0;
        if (index < 0) currentSlideIndex = slides.length - 1;

        // Hide all slides
        slides.forEach(slide => slide.classList.remove("active"));
        
        // Target and reveal selected active index slide
        slides[currentSlideIndex].classList.add("active");
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            currentSlideIndex++;
            showSlide(currentSlideIndex);
        }, 6000); // Cycles smoothly to the next slide every 6 seconds
    }

    function resetTimer() {
        clearInterval(autoSlideInterval);
        startAutoSlide(); // Restarts clock cycle fresh after manual user click
    }

    // Manual Event Listeners
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", function () {
            currentSlideIndex++;
            showSlide(currentSlideIndex);
            resetTimer();
        });

        prevBtn.addEventListener("click", function () {
            currentSlideIndex--;
            showSlide(currentSlideIndex);
            resetTimer();
        });
    }

    // Kickstart the cycle on page load
    startAutoSlide();
});