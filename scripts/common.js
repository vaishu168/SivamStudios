  document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded before initializing Wow.js
  
    // Initialize Wow.js
    new WOW().init();


    let scrollpos = window.scrollY ;
    const header = document.querySelector(".main-header-hldr");
    const header_height = header.offsetHeight;

    const add_class_on_scroll = () => header.classList.add("header-scrolled")
    const remove_class_on_scroll = () => header.classList.remove("header-scrolled")

    window.addEventListener('scroll', function() { 
        scrollpos = window.scrollY;

        if (scrollpos >= header_height) { 
            add_class_on_scroll();
            header.style.height = '70px'; // Adjust the reduced height as per your requirement
        }
        else { 
            remove_class_on_scroll();
            header.style.height = '100px'; // Default height of the header
        }
      })


      // Get the <span> element by its class
      const spanElement = document.querySelector(".changing-span");

      // Create an array with the texts you want to cycle through
      const textsToCycle = ["Weddings", "Businesses", "Graduations", "Baby Showers","Birthday"];

      let currentIndex = 0;

      // Function to update the span text with deleting and retyping animation
      function updateSpanText() {
        // Add Wow.js animation classes to trigger deleting animation
        spanElement.classList.add("fadeOut");
        spanElement.classList.add("wow");
        spanElement.classList.remove("is-invisible");

    
        // Remove existing content after the deleting animation (duration: 1s, delay: 1s)
        setTimeout(function() {
          spanElement.textContent = textsToCycle[currentIndex];
    
          // Add Wow.js animation classes to trigger retyping animation
          spanElement.classList.remove("fadeOut");
          spanElement.classList.add("is-visible");
          spanElement.classList.add("fadeIn");
    
          // Remove Wow.js animation classes after the retyping animation (duration: 1s)
          setTimeout(function() {
            spanElement.classList.remove("fadeIn");
            spanElement.classList.remove("wow");
            spanElement.classList.remove("is-visible");
            spanElement.classList.add("is-invisible");

            currentIndex = (currentIndex + 1) % textsToCycle.length;
    
            // Call the function again after 5 seconds (5000 ms)
            setTimeout(updateSpanText, 5000);
          }, 1000); // Adjust this value to match your retyping animation duration
        }, 1000); // Adjust this value to match your deleting animation duration
      }
    
      // Start the animation loop
      updateSpanText();
      // Start the animation loop
      updateSpanText();
  });
  
  $(document).ready(function(){
    $('.cus-filter-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
    });
  });