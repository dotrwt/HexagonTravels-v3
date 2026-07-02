const destinations = [
  {
    title: "Kashmir",
    desc: "Revel in snow-capped peaks, blooming gardens, and tranquil shimmering lakes.",
    img: "../assets/kashmir.jpg",
    category: "domestic",
    duration: "5 Nights / 6 Days",
    price: "₹14,500*"
  },
  {
    title: "Himachal Pradesh",
    desc: "Discover scenic hill stations, adventure sports, and tranquil Himalayan landscapes.",
    img: "../assets/hp.jpg",
    category: "domestic",
    duration: "5 Nights / 6 Days",
    price: "₹11,500*"
  },
  {
    title: "Kerala, India",
    desc: "Explore lush backwaters, palm-fringed beaches, and rich cultural traditions.",
    img: "../assets/kerala.jpg",
    category: "domestic",
    duration: "5 Nights / 6 Days",
    price: "₹14,500*"
  },
  {
    title: "Uttrakhand",
    desc: "Embrace majestic mountains, sacred rivers, and serene Himalayan hill towns.",
    img: "../assets/uk.jpg",
    category: "domestic",
    duration: "5 Nights / 6 Days",
    price: "₹17,500*"
  },
  {
    title: "Goa",
    desc: "Relax on sun-kissed beaches, enjoy vibrant nightlife, and explore rich Portuguese heritage.",
    img: "../assets/goa.jpg",
    category: "domestic",
    duration: "3 Nights / 4 Days",
    price: "₹5,500*"
  },
  {
    title: "Andaman and Nicobar Islands",
    desc: "Dive into turquoise waters, pristine beaches, and vibrant marine life.",
    img: "../assets/ani.jpg",
    category: "domestic",
    duration: "5 Nights / 6 Days",
    price: "₹18,500*"
  },
  {
    title: "Sikkim & Darjeeling",
    desc: "Delight in Himalayan vistas, lush tea gardens, and vibrant cultural charm.",
    img: "../assets/s&k.jpg",
    category: "domestic",
    duration: "6 Nights / 7 Days",
    price: "₹26,500*"
  },
  {
    title: "Bali, Indonesia",
    desc: "Immerse yourself in tropical paradise with pristine beaches and rich cultural heritage. Perfect for relaxation and adventure.",
    img: "../assets/bali.jpg",
    category: "international",
    duration: "6 Nights / 7 Days",
    price: "₹59,500*"
  },
  {
    title: "Dubai",
    desc: "Luxury shopping, ultramodern architecture, and vibrant nightlife scene in the heart of the desert.",
    img: "../assets/dubai.jpg",
    category: "international",
    duration: "6 Nights / 7 Days",
    price: "₹57,000*"
  },
  {
    title: "Europe",
    desc: "Discover pristine mountain landscapes and world-class skiing in the heart of Europe. Adventure awaits in every season.",
    img: "../assets/europe.jpg",
    category: "international",
    duration: "7 Nights / 8 Days",
    price: "On Call*"
  },
  {
    title: "Thailand",
    desc: "Savor tropical beaches, ornate temples, and vibrant street food culture.",
    img: "../assets/thailand.jpg",
    category: "international",
    duration: "4 Nights / 5 Days",
    price: "₹10,500*"
  },
  {
    title: "Vietnam",
    desc: "Explore lush landscapes, bustling markets, and a rich tapestry of history.",
    img: "../assets/vietnam.jpg",
    category: "international",
    duration: "5 Nights / 6 Days",
    price: "₹22,500*"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll("[data-filter]");
  const gridContainer = document.getElementById("destinations-grid");

  function renderDestinations(filterValue) {
    if (!gridContainer) return;

    // Filter array
    const filtered = filterValue === "all"
      ? destinations
      : destinations.filter(d => d.category === filterValue);

    // Fade out
    gridContainer.style.opacity = "0";
    gridContainer.style.transition = "opacity 0.2s ease-in-out";

    setTimeout(() => {
      gridContainer.innerHTML = filtered.map(d => `
        <div class="relative h-[420px] rounded-[32px] p-8 flex flex-col justify-end group overflow-hidden shadow-sm border border-line/20">
          <img alt="${d.title}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="${d.img}">
          <div class="absolute inset-0 bg-black/45"></div>
          <div class="relative z-10 flex flex-col h-full justify-between items-start pointer-events-none">
            <span class="bg-white/20 backdrop-blur-md text-white font-label text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
              ${d.category}
            </span>
            <div class="w-full pointer-events-auto">
              <h3 class="font-h3 text-2xl font-bold mb-2 text-white">${d.title}</h3>
              <p class="font-body-md text-white/80 text-xs mb-4 leading-relaxed">${d.desc}</p>
              <a href="https://wa.me/919998888071?text=Hi%2C%20I%20am%20interested%20in%20a%20trip%20to%20${encodeURIComponent(d.title)}" 
                 target="_blank" 
                 class="flex items-center justify-between w-full bg-white/10 backdrop-blur-md border border-white/25 hover:bg-white hover:text-black text-white px-5 py-3 rounded-2xl transition-all duration-300 shadow-sm mt-2">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-sm">schedule</span>
                  <span class="font-label text-[11px] font-semibold uppercase tracking-wider">${d.duration}</span>
                </div>
                <div class="text-right flex flex-col items-end">
                  <span class="font-label text-[8px] opacity-75 uppercase leading-none mb-0.5">Starting at</span>
                  <span class="font-label text-xs font-bold">${d.price}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      `).join("");

      // Fade in
      gridContainer.style.opacity = "1";
    }, 200);
  }

  // Bind filter button click events
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => {
        btn.className = "px-6 py-2 rounded-full bg-white text-text font-label text-sm hover:bg-gray-50 transition-colors shadow-sm";
      });
      button.className = "px-6 py-2 rounded-full bg-black text-page-bg font-label text-sm shadow-md";

      const category = button.getAttribute("data-filter");
      renderDestinations(category);
    });
  });

  // Initial render
  renderDestinations("all");
});
