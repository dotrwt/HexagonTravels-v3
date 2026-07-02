tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
              "page-bg": "#FAF9F5",
              "panel-bg": "#F0EFEB",
              "soft-card": "#E9E8E4",
              "soft-card-2": "#F4F3EF",
              "text": "#1B1B1B",
              "muted": "#8C8880",
              "muted-light": "#BDBAB2",
              "line": "#D9D7D0",
              "black": "#181818",
              "deep-black": "#151515",
              "white-card": "#FFFDF8",
              "white-soft": "#FAF9F5"
      },
      "borderRadius": {
              "DEFAULT": "0.125rem",
              "lg": "0.25rem",
              "xl": "0.5rem",
              "full": "0.75rem",
              "3xl": "2rem",
              "4xl": "3rem"
      },
      "spacing": {
              "gutter": "24px",
              "unit": "4px",
              "sm": "16px",
              "md": "32px",
              "xl": "128px",
              "lg": "64px",
              "margin": "40px",
              "xs": "8px",
              "section": "160px"
      },
      "fontFamily": {
              "label": ["Helvetica", "Arial", "sans-serif"],
              "body-lg": ["Helvetica", "Arial", "sans-serif"],
              "display": ["Helvetica", "Arial", "sans-serif"],
              "h2": ["Helvetica", "Arial", "sans-serif"],
              "h1": ["Helvetica", "Arial", "sans-serif"],
              "h3": ["Helvetica", "Arial", "sans-serif"],
              "body-md": ["Helvetica", "Arial", "sans-serif"]
      },
      "fontSize": {
              "label": ["12px", { "lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600" }],
              "body-lg": ["18px", { "lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400" }],
              "display": ["82px", { "lineHeight": "1.05", "letterSpacing": "-0.04em", "fontWeight": "700" }],
              "h2": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600" }],
              "h1": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.03em", "fontWeight": "700" }],
              "h3": ["24px", { "lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "600" }],
              "body-md": ["15px", { "lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400" }]
      }
    },
  },
};

// Destination Tab switching logic
document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll("[data-tab]");
  const cardContainer = document.getElementById("destination-cards");

  const tabData = {
    group: [
      {
        title: "Kashmir Getaway",
        desc: "Experience heaven on earth with snow-clad mountains and serene valleys.",
        img: "assets/kashmir.jpg"
      },
      {
        title: "Himachal Explorer",
        desc: "Discover scenic hill stations, adventure sports, and tranquil Himalayan landscapes.",
        img: "assets/hp.jpg"
      },
      {
        title: "Goa Fiesta",
        desc: "Enjoy golden beaches, vibrant nightlife, and a blend of Indian-Portuguese culture.",
        img: "assets/goa.jpg"
      },
      {
        title: "Uttarakhand Wonders",
        desc: "Embrace majestic mountains, sacred rivers, and serene Himalayan hill towns.",
        img: "assets/uk.jpg"
      }
    ],
    corporate: [
      {
        title: "Dubai MICE Retreat",
        desc: "Futuristic skyscrapers, desert team building safaris, and premium conferences.",
        img: "assets/dubai.jpg"
      },
      {
        title: "Bali Conference",
        desc: "Lush rice terraces, premium beachfront resorts, and creative spaces.",
        img: "assets/bali.jpg"
      },
      {
        title: "Europe Summit",
        desc: "Historic cities, premium business accommodations, and stunning Alpine landscapes.",
        img: "assets/europe.jpg"
      },
      {
        title: "Kerala Incentive Tour",
        desc: "Lush backwaters, premium heritage stays, and serene team bonding activities.",
        img: "assets/kerala.jpg"
      }
    ],
    family: [
      {
        title: "Kerala Backwaters",
        desc: "Explore lush canals, palm-fringed beaches, and rich cultural traditions.",
        img: "assets/kerala.jpg"
      },
      {
        title: "Kashmir Serenity",
        desc: "Scenic shikara rides, houseboat stays, and snow-clad mountain sightseeing.",
        img: "assets/kashmir.jpg"
      },
      {
        title: "Himachal Valley",
        desc: "Family cable car rides, snow excursions, and beautiful pine forests.",
        img: "assets/hp.jpg"
      },
      {
        title: "Goa Family Beach",
        desc: "Fun watersports, beach side dinners, and historic Portuguese fort tours.",
        img: "assets/goa.jpg"
      }
    ],
    honeymoon: [
      {
        title: "Bali Bliss",
        desc: "Romantic private pool villas, pristine beaches, and unforgettable tropical sunsets.",
        img: "assets/bali.jpg"
      },
      {
        title: "Kashmir Paradise",
        desc: "Stay in luxury houseboats, stroll through Shalimar gardens, and enjoy snow valleys.",
        img: "assets/kashmir.jpg"
      },
      {
        title: "Dubai Luxury",
        desc: "Romantic dinner in the sky, private desert stargazing, and luxury shopping.",
        img: "assets/dubai.jpg"
      },
      {
        title: "Kerala Backwater Cruise",
        desc: "Romantic private houseboat cruise, spice plantation walks, and tea gardens.",
        img: "assets/kerala.jpg"
      }
    ]
  };

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Toggle active states on buttons
      tabButtons.forEach(btn => {
        btn.className = "px-6 py-2 rounded-full bg-white text-text font-label text-sm hover:bg-gray-50 transition-colors shadow-sm";
      });
      button.className = "px-6 py-2 rounded-full bg-black text-page-bg font-label text-sm shadow-md";

      const selectedTab = button.getAttribute("data-tab");
      const items = tabData[selectedTab];

      if (!cardContainer || !items) return;

      // Animate card container fade out
      cardContainer.style.opacity = "0";
      cardContainer.style.transition = "opacity 0.2s ease-in-out";

      setTimeout(() => {
        // Rebuild cards HTML
        cardContainer.innerHTML = items.map(item => `
          <div class="relative h-[400px] rounded-[32px] p-8 flex flex-col justify-end group overflow-hidden shadow-sm border border-line/20">
            <img alt="${item.title}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="${item.img}">
            <div class="absolute inset-0 bg-black/40"></div>
            <div class="relative z-10">
              <h4 class="font-h3 text-xl font-bold mb-2 text-white">${item.title}</h4>
              <p class="font-body-md text-white/80">${item.desc}</p>
            </div>
          </div>
        `).join("");

        // Fade in
        cardContainer.style.opacity = "1";
      }, 200);
    });
  });

  // Testimonials Carousel Data & Logic
  const testimonials = [
    {
      name: "Aditi Raval",
      tag: "Custom Honeymoon & Excursions",
      quote: "Exceptional service from start to finish! My experience with Hexagon Travels was truly unforgettable. Their knowledgeable staff helped me plan every aspect of my trip with meticulous attention to detail. From booking flights to arranging accommodations and excursions, they exceeded my expectations.",
      initials: "AR"
    },
    {
      name: "Franciskumar Christian",
      tag: "Shimla & Manali Trip",
      quote: "I m francis christian and enjoyed great journey and tour of shimla / manali from 2nd-May to 7th-May. My traveller Hexagon travels has planned my tour very well. Travel arrangements and Hotel arrangements were comfortable and suitable for travellers. We have enjoyed very well with family without any issue.",
      initials: "FC"
    },
    {
      name: "Bhagirath Kachhadiya",
      tag: "Mussoorie, Nainital & Rishikesh",
      quote: "Its great experience to visited at mussorie, Nainital and Rishikesh with Heaxagonal travels. We enjoyed trip so much.Facility and services given as per commitment.So supportive team of Mr.Rishiji.we definitely go with hexagon travels again. Thank you for beautiful trip",
      initials: "BK"
    },
    {
      name: "Shivam Patel",
      tag: "Kumbhalgarh Resort Booking",
      quote: "We had a booking with Hexagon Travel for Kumbhalgarh Resort, and they helped us find the best and most valuable resort at a cheaper rate than other booking sites. Highly recommend booking your package with Hexagon Travel!!",
      initials: "SP"
    },
    {
      name: "Kurnal Shah",
      tag: "Bali, Indonesia Holiday",
      quote: "Awesome Trip through Hexagon travels. We enjoyed lot in Bali Indonesia.",
      initials: "KS"
    },
    {
      name: "Haresh Patel",
      tag: "Kerala Family Tour",
      quote: "Nice planning by hexagon travels recently we travel in Kerala march 2025 very good service by hexagon travels",
      initials: "HP"
    },
    {
      name: "Rushi Shah",
      tag: "Diu Getaway",
      quote: "My experience with Hexagon Travels was truly unforgettable & we were very happy travel with hexagon travels in diu(TGH).. highly recommended",
      initials: "RS"
    },
    {
      name: "Tejas Joshi",
      tag: "Honeymoon Special",
      quote: "My partner and I recently embarked on our dream honeymoon, thanks to the Hexagon Travels Honeymoon Package, and it surpassed all our expectations. From the moment we booked to the very last day of our trip, every detail was meticulously planned and flawlessly executed.",
      initials: "TJ"
    },
    {
      name: "Jayesh Patel",
      tag: "Jaisalmer Excursion",
      quote: "All Resort we have booked through Hexagon Travels is very Good. Service is outstanding We are fully satisfied with booking we have done in Hexagon Travels, specially in Jaisalmer The Desert Valley Resorts & The Desert Palace property is Outstanding & beautiful Food quality is very very good.We are here thanks to Team of Hexagon Travels for given excellent support & Service.",
      initials: "JP"
    },
    {
      name: "Nirav Shah",
      tag: "Udaipur Family Journey",
      quote: "Absolutely brilliant seamless booking & the way Rishi owner took care in entire journey for our Udaipur journey with family... Superb Highly recommended 👏👏✌✌ Blessings from parents & my family for growth of your business 👍👍",
      initials: "NS"
    }
  ];

  let currentTestimonialIndex = 0;
  const quoteEl = document.getElementById("testimonial-quote");
  const authorEl = document.getElementById("testimonial-author");
  const tagEl = document.getElementById("testimonial-tag");
  const avatarEl = document.getElementById("testimonial-avatar");
  const prevBtn = document.getElementById("testimonial-prev");
  const nextBtn = document.getElementById("testimonial-next");
  const dotsContainer = document.getElementById("testimonial-dots");

  if (quoteEl && authorEl && tagEl && avatarEl) {
    // Generate dots
    dotsContainer.innerHTML = testimonials.map((_, i) => `
      <button data-testimonial-dot="${i}" class="w-2.5 h-2.5 rounded-full bg-line hover:bg-black transition-all duration-300 ${i === 0 ? 'bg-black w-6' : ''}"></button>
    `).join("");

    const updateTestimonial = (index) => {
      currentTestimonialIndex = index;

      // Animate fade out
      const card = document.getElementById("testimonial-card");
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "scale(0.98)";
        card.style.transition = "all 0.3s ease-in-out";
      }

      setTimeout(() => {
        const item = testimonials[currentTestimonialIndex];
        quoteEl.textContent = `"${item.quote}"`;
        authorEl.textContent = item.name;
        tagEl.textContent = item.tag;
        avatarEl.textContent = item.initials;

        // Update dots
        const dots = dotsContainer.querySelectorAll("[data-testimonial-dot]");
        dots.forEach((dot, idx) => {
          if (idx === currentTestimonialIndex) {
            dot.className = "w-2.5 h-2.5 rounded-full bg-black w-6 transition-all duration-300";
          } else {
            dot.className = "w-2.5 h-2.5 rounded-full bg-line hover:bg-black transition-all duration-300";
          }
        });

        // Fade in
        if (card) {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }
      }, 300);
    };

    // Manual controls
    prevBtn?.addEventListener("click", () => {
      let prevIdx = currentTestimonialIndex - 1;
      if (prevIdx < 0) prevIdx = testimonials.length - 1;
      updateTestimonial(prevIdx);
      resetAutoPlay();
    });

    nextBtn?.addEventListener("click", () => {
      let nextIdx = (currentTestimonialIndex + 1) % testimonials.length;
      updateTestimonial(nextIdx);
      resetAutoPlay();
    });

    dotsContainer.addEventListener("click", (e) => {
      const dotBtn = e.target.closest("[data-testimonial-dot]");
      if (!dotBtn) return;
      const index = parseInt(dotBtn.getAttribute("data-testimonial-dot"), 10);
      updateTestimonial(index);
      resetAutoPlay();
    });

    // Auto-play loop
    let autoPlayInterval = setInterval(() => {
      let nextIdx = (currentTestimonialIndex + 1) % testimonials.length;
      updateTestimonial(nextIdx);
    }, 6000);

    const resetAutoPlay = () => {
      clearInterval(autoPlayInterval);
      autoPlayInterval = setInterval(() => {
        let nextIdx = (currentTestimonialIndex + 1) % testimonials.length;
        updateTestimonial(nextIdx);
      }, 6000);
    };

    // Initialize with first testimonial
    updateTestimonial(0);
  }
});
