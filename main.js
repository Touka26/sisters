// من اجل الناف بار
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});

//start counter
function countUp(el, target) {
    let current = 0; // البداية من الصفر
    const increment = Math.ceil(target / 100); // تحديد مقدار الزيادة في كل خطوة
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(interval); // إيقاف العداد عند الوصول للهدف
        }
        el.innerText = current.toLocaleString(); // تحديث النص في العنصر
    }, 20); // تحديث كل 20 مللي ثانية
}

function startCountUpOnView() {
    const counters = document.querySelectorAll('[data-countup]');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target.querySelector('h2');
                const target = parseInt(entry.target.dataset.countup, 10);
                countUp(el, target);
                observer.unobserve(entry.target); // إلغاء المراقبة بعد بدء العداد
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));
}

// تفعيل العداد عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', startCountUpOnView);

// end counter

// tabs navigation

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('#menu-tabs li');
    const contents = document.querySelectorAll('.tab-content .content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // إزالة الفئة النشطة من جميع التبويبات
            tabs.forEach(t => t.classList.remove('is-active'));
            // إزالة الفئة النشطة من جميع الأقسام
            contents.forEach(content => content.classList.remove('is-active'));

            // إضافة الفئة النشطة للتبويب والقسم الذي تم النقر عليه
            tab.classList.add('is-active');
            const target = tab.getAttribute('data-tab');
            document.getElementById(target).classList.add('is-active');
        });
    });
});

// start slider 1

const swiper_testimoniala = new Swiper('.swiper_testimoniala', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-testimoniala-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
    }
});

// end slide 1


// start slide 2
var swiper_image = new Swiper(".swiper-image", {
    watchSlidesProgress: true,
    slidesPerView: 3,
    spaceBetween: 1,
    pagination: {
        el: ".swiper-image-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000,
    },


});
// end slide 2

// start slide 3

var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-trend-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// end slide 3


//  float button 
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// navbar line
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";

        // تحديد القسم الحالي بناءً على التمرير
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 150; // تعديل للحساسية
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        // تحديث الروابط بناءً على القسم الحالي
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});



























