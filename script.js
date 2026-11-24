/* ==========================================================================
   The Paw Place 🐾 — Complete Application Engine
   Cart, Auth, Pets, Products, Services Booking, Checkout, Donate, Bilingual
   ========================================================================== */

(function () {
  'use strict';

  // ------------------------------------------------------------------------
  // 1. MASTER CATALOG DATA (Exact lowercase filenames matching Surge/Linux)
  // ------------------------------------------------------------------------
  const PETS = [
    {
      id: 'loza',
      type: 'Cat',
      category: 'cat',
      name: 'Loza',
      breed: 'Egyptian Mau Mix',
      age: '2 years',
      gender: 'Female',
      size: 'Medium',
      energy: 45,
      goodWithKids: true,
      goodWithPets: true,
      vaccinated: true,
      spayed: true,
      microchipped: true,
      img: 'pet1.jpg',
      shortDesc: 'Quiet, affectionate, and loves sunny afternoons by the window.',
      description:
        'Loza is a calm, gentle soul who loves curling up beside you during quiet afternoons. She is fully vaccinated, spayed, litter-trained, and ready to bring warmth and serenity to a loving forever home.',
      traits: ['Calm', 'Affectionate', 'Litter Trained', 'Indoor Cat']
    },
    {
      id: 'sokar',
      type: 'Cat',
      category: 'cat',
      name: 'Sokar',
      breed: 'Domestic Shorthair',
      age: '6 months',
      gender: 'Male',
      size: 'Small',
      energy: 90,
      goodWithKids: true,
      goodWithPets: true,
      vaccinated: true,
      spayed: false,
      microchipped: true,
      img: 'pet3.jpg',
      shortDesc: 'Playful kitten full of joy who adores strings, feathers, and cuddles.',
      description:
        'Sokar is a bright, energetic kitten with endless curiosity and love to give. He chases feather wands with joy and falls asleep purring right on your lap. Ideal for families who enjoy interactive playtime.',
      traits: ['Playful', 'Curious', 'Kid Friendly', 'Fast Learner']
    },
    {
      id: 'mishmish',
      type: 'Cat',
      category: 'cat',
      name: 'Mishmish',
      breed: 'Ginger Tabby',
      age: '1 year',
      gender: 'Female',
      size: 'Medium',
      energy: 65,
      goodWithKids: true,
      goodWithPets: false,
      vaccinated: true,
      spayed: true,
      microchipped: true,
      img: 'cat1.jpg',
      shortDesc: 'Gorgeous ginger tabby who becomes your most loyal cuddle buddy.',
      description:
        'Mishmish has a radiant golden coat and a sweet personality once she warms up to you. She loves being the center of attention and thrives best as the only queen of the household.',
      traits: ['Cuddly', 'Loyal', 'Solo Pet', 'Vaccinated']
    },
    {
      id: 'fifi',
      type: 'Cat',
      category: 'cat',
      name: 'Fifi',
      breed: 'Calico',
      age: '4 years',
      gender: 'Female',
      size: 'Medium',
      energy: 50,
      goodWithKids: true,
      goodWithPets: true,
      vaccinated: true,
      spayed: true,
      microchipped: true,
      img: 'cat2.jpg',
      shortDesc: 'Independent and clever calico who loves exploring sunny rooms.',
      description:
        'Fifi is an elegant, observant calico who balances independence with sweet evening snuggles. She is already house-trained, gentle around guests, and wonderfully low-maintenance.',
      traits: ['Independent', 'Smart', 'Gentle', 'House Trained']
    },
    {
      id: 'king',
      type: 'Dog',
      category: 'dog',
      name: 'King',
      breed: 'Golden Shepherd Mix',
      age: '3 years',
      gender: 'Male',
      size: 'Large',
      energy: 85,
      goodWithKids: true,
      goodWithPets: true,
      vaccinated: true,
      spayed: true,
      microchipped: true,
      img: 'pet2.jpg',
      shortDesc: 'Active, noble, and fiercely loyal companion who loves daily walks.',
      description:
        'King is an athletic and devoted companion who excels at outdoor adventures, fetch, and basic obedience commands. He bonds deeply with his family and thrives with daily exercise.',
      traits: ['Loyal', 'Active', 'Trained', 'Great Guard']
    },
    {
      id: 'rocco',
      type: 'Dog',
      category: 'dog',
      name: 'Rocco',
      breed: 'Labrador Mix',
      age: '5 years',
      gender: 'Male',
      size: 'Large',
      energy: 55,
      goodWithKids: true,
      goodWithPets: true,
      vaccinated: true,
      spayed: true,
      microchipped: true,
      img: 'dog1.jpg',
      shortDesc: 'A gentle giant who is protective, calm, and adores family evenings.',
      description:
        'Rocco is the definition of a gentle giant. Patient with children and calm indoors, he loves moderate morning strolls followed by relaxing on the living room rug beside his favorite humans.',
      traits: ['Gentle Giant', 'Protective', 'Calm', 'Family Dog']
    },
    {
      id: 'lucy',
      type: 'Dog',
      category: 'dog',
      name: 'Lucy',
      breed: 'Terrier Mix',
      age: '1.5 years',
      gender: 'Female',
      size: 'Small',
      energy: 80,
      goodWithKids: true,
      goodWithPets: true,
      vaccinated: true,
      spayed: true,
      microchipped: true,
      img: 'dog2.jpg',
      shortDesc: 'Cheerful small-breed pup perfect for cozy apartments and parks.',
      description:
        'Lucy is a compact bundle of happiness! Weighing under 8 kg, she adapts effortlessly to apartment living while bringing lively energy to every walk in the park.',
      traits: ['Apartment Friendly', 'Cheerful', 'Social', 'Small Breed']
    }
  ];

  const PRODUCTS = [
    { id: 'prod1', name: 'Premium Dog Food (3kg)', category: 'food', price: 450, rating: 4.9, reviews: 124, badge: 'Best Seller', img: 'product1.jpg', shortDesc: 'Complete balanced nutrition for adult dogs with real chicken & omega oils.' },
    { id: 'prod2', name: 'Kitten Milk Substitute (500g)', category: 'food', price: 280, rating: 4.8, reviews: 64, badge: 'Vet Pick', img: 'product2.jpg', shortDesc: 'Gentle, nutrient-rich formula designed for newborn and orphaned kittens.' },
    { id: 'prod3', name: 'Senior Cat Food (1.5kg)', category: 'food', price: 320, rating: 4.7, reviews: 52, badge: '', img: 'product3.jpg', shortDesc: 'Tailored recipe supporting joint mobility, kidney health, and shiny coats.' },
    { id: 'prod4', name: 'High-Protein Training Treats', category: 'food', price: 150, rating: 4.9, reviews: 98, badge: 'Popular', img: 'product4.jpg', shortDesc: 'Delicious soft-chew reward bites packed with natural protein (200g).' },
    { id: 'prod13', name: 'Gourmet Wet Food (12 Cans)', category: 'food', price: 180, rating: 4.8, reviews: 77, badge: 'Value Pack', img: 'product13.jpg', shortDesc: 'High-moisture savory chunks in gravy for hydrated, happy cats.' },
    { id: 'prod14', name: 'Bone Broth Supplement (500ml)', category: 'care', price: 220, rating: 4.7, reviews: 41, badge: 'Organic', img: 'product14.jpg', shortDesc: 'Slow-simmered collagen broth supporting digestion and joint vitality.' },
    { id: 'prod15', name: 'Puppy Growth Dry Food (5kg)', category: 'food', price: 550, rating: 4.9, reviews: 89, badge: 'Top Rated', img: 'product15.jpg', shortDesc: 'DHA-enriched puppy kibble for healthy brain, bone, and immune growth.' },
    { id: 'prod16', name: 'Hairball Control Paste (100g)', category: 'care', price: 110, rating: 4.6, reviews: 63, badge: '', img: 'product16.jpg', shortDesc: 'Vet-formulated malt paste that gently prevents and clears hairballs.' },
    { id: 'prod5', name: 'Interactive Cat Laser Toy', category: 'toys', price: 180, rating: 4.8, reviews: 112, badge: 'Best Seller', img: 'product5.jpg', shortDesc: 'Auto-rotating pet-safe laser keeps indoor cats agile and entertained.' },
    { id: 'prod6', name: 'Adjustable Dog Harness', category: 'toys', price: 250, rating: 4.9, reviews: 84, badge: 'No-Pull', img: 'product6.jpg', shortDesc: 'Breathable padded chest harness with reflective strips for night walks.' },
    { id: 'prod7', name: 'Cozy Orthopedic Pet Bed', category: 'toys', price: 600, rating: 4.9, reviews: 145, badge: 'Best Seller', img: 'product7.jpg', shortDesc: 'Ultra-plush washable round bed engineered for deep, joint-friendly sleep.' },
    { id: 'prod8', name: 'Soft-Sided Travel Carrier', category: 'care', price: 550, rating: 4.8, reviews: 59, badge: 'Airline Ready', img: 'product8.jpg', shortDesc: 'Ventilated, escape-proof travel carrier with padded shoulder strap.' },
    { id: 'prod9', name: 'Luxury Grooming Kit', category: 'care', price: 380, rating: 4.8, reviews: 71, badge: 'Complete Set', img: 'product9.jpg', shortDesc: 'Deshedding brush, safety nail clippers, and hypoallergenic coat shampoo.' },
    { id: 'prod10', name: 'Smart Automatic Feeder', category: 'care', price: 750, rating: 4.9, reviews: 93, badge: 'Smart Tech', img: 'product10.jpg', shortDesc: 'Programmable meal timer with portion control and voice recording.' },
    { id: 'prod11', name: 'Durable Floating Duck Toy', category: 'toys', price: 120, rating: 4.7, reviews: 48, badge: '', img: 'product11.jpg', shortDesc: 'Chew-resistant natural rubber toy built for fetch, bath time, and pools.' },
    { id: 'prod12', name: 'Anti-Anxiety Weighted Blanket', category: 'toys', price: 420, rating: 4.9, reviews: 67, badge: 'Calming', img: 'product12.jpg', shortDesc: 'Soothing gentle-pressure blanket ideal for thunderstorms and travel.' }
  ];

  const SERVICES = [
    {
      id: 's001',
      name: 'Comprehensive Medical Checkup',
      price: 300,
      duration: '45 mins',
      rating: 4.9,
      vet: 'Dr. Mariam Hassan, DVM',
      img: 'service1.jpg',
      shortDesc: 'Full head-to-tail clinical exam, booster vaccinations, and digital health passport.',
      features: ['Full physical & dental exam', 'Core vaccination review', 'Weight & nutrition plan', 'Updated digital medical card']
    },
    {
      id: 's002',
      name: 'Full Grooming & Spa Session',
      price: 450,
      duration: '90 mins',
      rating: 4.9,
      vet: 'Certified Pet Stylists',
      img: 'service2.jpg',
      shortDesc: 'Stress-free organic bath, breed-standard styling, nail trim, and ear care.',
      features: ['Hypoallergenic warm bath & blow-dry', 'Breed-tailored haircut & brushing', 'Gentle nail clipping & paw balm', 'Ear cleaning & sanitary trim']
    },
    {
      id: 's003',
      name: 'Behavioral Training (3 Sessions)',
      price: 700,
      duration: '3 × 60 mins',
      rating: 4.8,
      vet: 'Capt. Omar Khaled',
      img: 'service3.jpg',
      shortDesc: 'Positive-reinforcement program for obedience, leash manners, and confidence.',
      features: ['Basic obedience commands', 'Leash walking without pulling', 'Anxiety & barking solutions', 'Take-home owner coaching guide']
    }
  ];

  // Expose catalog globally for any page-specific scripts
  window.PAW_DATA = { PETS, PRODUCTS, SERVICES };

  // ------------------------------------------------------------------------
  // 2. BILINGUAL DICTIONARY (EN / AR)
  // ------------------------------------------------------------------------
  const I18N = {
    en: {
      nav_home: 'Home',
      nav_adoption: 'Adoption',
      nav_products: 'Shop',
      nav_services: 'Services',
      nav_about: 'About',
      nav_contact: 'Contact',
      nav_signin: 'Sign In',
      nav_donate: 'Donate Now',
      hero_pill: 'Alexandria’s Trusted Pet Rescue & Care Center',
      hero_title: 'Your Best Friend Is Waiting For You.',
      hero_desc: 'Adopt a vaccinated rescue pet, shop vet-approved essentials, or book compassionate clinic care — every action helps save stray lives.',
      hero_cta1: 'Browse Adoptable Pets',
      hero_cta2: 'Shop Essentials',
      cart_title: 'Your Cart',
      checkout_btn: 'Proceed to Checkout',
      continue_btn: 'Continue Shopping',
      subtotal: 'Subtotal',
      empty_cart: 'Your cart is empty. Add products or book a care service to get started!'
    },
    ar: {
      nav_home: 'الرئيسية',
      nav_adoption: 'التبني',
      nav_products: 'المتجر',
      nav_services: 'الخدمات',
      nav_about: 'من نحن',
      nav_contact: 'اتصل بنا',
      nav_signin: 'تسجيل الدخول',
      nav_donate: 'تبرع الآن',
      hero_pill: 'مركز الإنقاذ ورعاية الحيوانات الأليفة الموثوق في الإسكندرية',
      hero_title: 'صديقك الوفي في انتظارك.',
      hero_desc: 'تبنّ حيواناً أليفاً مطعّماً، تسوّق مستلزمات معتمدة بيطرياً، أو احجز جلسة رعاية وعناية — كل خطوة تساهم في إنقاذ روح جديدة.',
      hero_cta1: 'تصفح الحيوانات للتبني',
      hero_cta2: 'تسوّق المستلزمات',
      cart_title: 'سلة التسوق',
      checkout_btn: 'إتمام الطلب',
      continue_btn: 'متابعة التسوق',
      subtotal: 'الإجمالي الفرعي',
      empty_cart: 'سلتك فارغة حالياً. أضف منتجات أو احجز خدمة للبدء!'
    }
  };

  // ------------------------------------------------------------------------
  // 3. LOCAL STORAGE HELPERS
  // ------------------------------------------------------------------------
  const KEYS = {
    CART: 'pawplace_cart',
    USER: 'pawplace_user',
    USERS: 'pawplace_users',
    ORDERS: 'pawplace_orders',
    ADOPTIONS: 'pawplace_adoptions',
    DONATIONS: 'pawplace_donations',
    FAVS: 'pawplace_favorites',
    LANG: 'pawplace_lang'
  };

  const readStore = (key, fallback) => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  };

  const writeStore = (key, val) => {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch {
      /* ignore quota errors */
    }
  };

  // Seed default demo user once so recruiters can log in effortlessly
  const ensureDemoUser = () => {
    const users = readStore(KEYS.USERS, []);
    if (!users.some(u => u.email === 'demo@pawplace.com')) {
      users.push({
        name: 'Seif Sarhan',
        email: 'demo@pawplace.com',
        password: '123456',
        phone: '+20 128 611 9756',
        joinedAt: '2025-01-15'
      });
      writeStore(KEYS.USERS, users);
    }
  };

  // Migrate legacy shoppingCart if present
  const migrateLegacyCart = () => {
    const legacy = localStorage.getItem('shoppingCart');
    if (legacy && !localStorage.getItem(KEYS.CART)) {
      try {
        const parsed = JSON.parse(legacy);
        if (Array.isArray(parsed) && parsed.length) {
          const normalized = parsed.map(item => ({
            ...item,
            img: resolveItemImage(item)
          }));
          writeStore(KEYS.CART, normalized);
        }
      } catch { /* ignore */ }
    }
  };

  const resolveItemImage = (item) => {
    if (item.img) return item.img;
    const prod = PRODUCTS.find(p => p.id === item.id);
    if (prod) return prod.img;
    const srv = SERVICES.find(s => s.id === item.id);
    if (srv) return srv.img;
    return 'product1.jpg';
  };

  // ------------------------------------------------------------------------
  // 4. TOAST & MODAL UTILITIES
  // ------------------------------------------------------------------------
  let toastContainer = null;
  const showToast = (message, type = 'success') => {
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = 'toast-container';
      document.body.appendChild(toastContainer);
    }
    const icons = {
      success: 'fa-check-circle',
      error: 'fa-exclamation-circle',
      info: 'fa-paw'
    };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i><span>${message}</span>`;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 260);
    }, 3200);
  };

  let modalOverlay = null;
  const openModal = (htmlContent) => {
    if (!modalOverlay) {
      modalOverlay = document.createElement('div');
      modalOverlay.className = 'modal-overlay';
      modalOverlay.innerHTML = `<div class="modal-box"><button class="modal-close" aria-label="Close modal"><i class="fas fa-times"></i></button><div id="global-modal-content"></div></div>`;
      document.body.appendChild(modalOverlay);
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay || e.target.closest('.modal-close')) {
          closeModal();
        }
      });
    }
    document.getElementById('global-modal-content').innerHTML = htmlContent;
    requestAnimationFrame(() => modalOverlay.classList.add('open'));
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (modalOverlay) modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  window.PAW_UI = { showToast, openModal, closeModal };

  // ------------------------------------------------------------------------
  // 5. CART ENGINE & SLIDE-OUT DRAWER
  // ------------------------------------------------------------------------
  const FREE_SHIPPING_THRESHOLD = 1000;
  const STANDARD_SHIPPING = 50;

  const getCart = () => readStore(KEYS.CART, []);
  const saveCart = (cart) => {
    writeStore(KEYS.CART, cart);
    updateCartUI();
  };

  const addToCart = (item) => {
    const cart = getCart();
    const keyMeta = item.meta ? JSON.stringify(item.meta) : '';
    const existing = cart.find(c => c.id === item.id && c.type === item.type && (c.meta ? JSON.stringify(c.meta) : '') === keyMeta);
    if (existing) {
      existing.quantity += item.quantity || 1;
    } else {
      cart.push({
        id: item.id,
        name: item.name,
        price: parseFloat(item.price),
        quantity: item.quantity || 1,
        type: item.type || 'product',
        img: item.img || resolveItemImage(item),
        meta: item.meta || null
      });
    }
    saveCart(cart);
    const badge = document.getElementById('cart-count');
    if (badge) {
      badge.classList.add('bump');
      setTimeout(() => badge.classList.remove('bump'), 300);
    }
    showToast(`Added "${item.name}" to your cart!`, 'success');
  };

  const updateCartQty = (index, delta) => {
    const cart = getCart();
    if (!cart[index]) return;
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCart(cart);
  };

  const removeCartItem = (index) => {
    const cart = getCart();
    if (!cart[index]) return;
    const removed = cart.splice(index, 1)[0];
    saveCart(cart);
    showToast(`Removed "${removed.name}" from cart`, 'info');
  };

  const calcShipping = (cart, promoCode) => {
    if (!cart.length) return 0;
    const hasPhysical = cart.some(i => i.type === 'product');
    if (!hasPhysical) return 0;
    const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    if (subtotal >= FREE_SHIPPING_THRESHOLD || promoCode === 'FREESHIP') return 0;
    return STANDARD_SHIPPING;
  };

  const renderCartDrawer = () => {
    const body = document.getElementById('cart-drawer-body');
    const subtotalEl = document.getElementById('drawer-subtotal');
    const shippingBar = document.getElementById('drawer-shipping-bar');
    const checkoutBtn = document.getElementById('drawer-checkout-btn');
    if (!body) return;

    const cart = getCart();
    const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

    if (shippingBar) {
      const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
      const pct = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
      shippingBar.innerHTML = remaining > 0
        ? `<i class="fas fa-truck"></i> Add <strong>${remaining.toFixed(0)} EGP</strong> more for <strong>FREE shipping!</strong><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>`
        : `<i class="fas fa-check-circle" style="color:var(--accent)"></i> Awesome! You unlocked <strong>FREE shipping</strong>! <div class="progress-track"><div class="progress-fill" style="width:100%"></div></div>`;
    }

    if (!cart.length) {
      body.innerHTML = `
        <div class="cart-empty-state">
          <i class="fas fa-shopping-basket"></i>
          <h4 style="margin-bottom:6px;color:var(--text);">Your cart is empty</h4>
          <p style="font-size:0.9rem;margin-bottom:18px;">Explore vet-approved pet supplies or book a care session.</p>
          <a href="products.html" class="btn btn-primary btn-sm">Shop Products</a>
        </div>`;
      if (subtotalEl) subtotalEl.textContent = '0.00 EGP';
      if (checkoutBtn) checkoutBtn.style.opacity = '0.5';
      return;
    }

    if (checkoutBtn) checkoutBtn.style.opacity = '1';
    body.innerHTML = cart.map((item, idx) => {
      const metaText = item.meta
        ? `${item.meta.petName ? item.meta.petName + ' • ' : ''}${item.meta.date || ''} ${item.meta.time || ''}`
        : (item.type === 'service' ? 'Care Service' : 'Pet Product');
      return `
        <div class="cart-drawer-item">
          <img src="${resolveItemImage(item)}" alt="${item.name}">
          <div class="cart-drawer-info">
            <h4>${item.name}</h4>
            <div class="cart-drawer-meta">${metaText}</div>
            <div class="qty-control">
              <button class="qty-btn" data-qty-idx="${idx}" data-delta="-1" aria-label="Decrease quantity">−</button>
              <span class="qty-value">${item.quantity}</span>
              <button class="qty-btn" data-qty-idx="${idx}" data-delta="1" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <div class="cart-drawer-right">
            <span class="cart-drawer-price">${(item.price * item.quantity).toFixed(0)} EGP</span>
            <button class="cart-remove-btn" data-remove-idx="${idx}"><i class="fas fa-trash-alt"></i> Remove</button>
          </div>
        </div>`;
    }).join('');

    if (subtotalEl) subtotalEl.textContent = `${subtotal.toFixed(2)} EGP`;

    body.querySelectorAll('[data-qty-idx]').forEach(btn => {
      btn.addEventListener('click', () => updateCartQty(Number(btn.dataset.qtyIdx), Number(btn.dataset.delta)));
    });
    body.querySelectorAll('[data-remove-idx]').forEach(btn => {
      btn.addEventListener('click', () => removeCartItem(Number(btn.dataset.removeIdx)));
    });
  };

  const updateCartUI = () => {
    const cart = getCart();
    const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);
    document.querySelectorAll('#cart-count, .cart-count-mirror').forEach(el => {
      el.textContent = totalCount;
    });
    renderCartDrawer();
    if (document.getElementById('checkout-cart-items')) {
      renderCheckoutPage();
    }
  };

  // ------------------------------------------------------------------------
  // 6. SHARED HEADER, DRAWERS & LANGUAGE ENGINE
  // ------------------------------------------------------------------------
  const currentPage = () => {
    const file = window.location.pathname.split('/').pop() || 'index.html';
    return file.toLowerCase();
  };

  const injectDrawers = () => {
    if (document.getElementById('drawer-backdrop')) return;
    const page = currentPage();
    const user = readStore(KEYS.USER, null);

    const backdrop = document.createElement('div');
    backdrop.id = 'drawer-backdrop';
    backdrop.className = 'drawer-backdrop';

    const mobileDrawer = document.createElement('aside');
    mobileDrawer.id = 'mobile-drawer';
    mobileDrawer.className = 'mobile-drawer';
    mobileDrawer.innerHTML = `
      <div class="mobile-drawer-header">
        <a href="index.html" class="logo"><span class="logo-icon"><i class="fas fa-paw"></i></span> The Paw Place</a>
        <button class="drawer-close-btn" id="close-mobile-drawer" aria-label="Close menu"><i class="fas fa-times"></i></button>
      </div>
      <ul class="mobile-nav-list">
        <li><a href="index.html" class="${page === 'index.html' || page === '' ? 'active' : ''}"><i class="fas fa-home"></i> <span data-i18n="nav_home">Home</span></a></li>
        <li><a href="paws.html" class="${page === 'paws.html' || page === 'pet_detail.html' ? 'active' : ''}"><i class="fas fa-paw"></i> <span data-i18n="nav_adoption">Adoption</span></a></li>
        <li><a href="products.html" class="${page === 'products.html' ? 'active' : ''}"><i class="fas fa-shopping-bag"></i> <span data-i18n="nav_products">Shop</span></a></li>
        <li><a href="services.html" class="${page === 'services.html' ? 'active' : ''}"><i class="fas fa-stethoscope"></i> <span data-i18n="nav_services">Services</span></a></li>
        <li><a href="about.html" class="${page === 'about.html' ? 'active' : ''}"><i class="fas fa-heart"></i> <span data-i18n="nav_about">About Us</span></a></li>
        <li><a href="contact.html" class="${page === 'contact.html' ? 'active' : ''}"><i class="fas fa-envelope"></i> <span data-i18n="nav_contact">Contact</span></a></li>
        <li><a href="checkout.html" class="${page === 'checkout.html' ? 'active' : ''}"><i class="fas fa-shopping-cart"></i> Cart (<span class="cart-count-mirror">0</span>)</a></li>
      </ul>
      <div class="mobile-drawer-actions">
        <a href="auth.html" class="btn btn-outline btn-block"><i class="fas fa-user-circle"></i> ${user ? user.name.split(' ')[0] + ' (Account)' : 'Sign In / Sign Up'}</a>
        <a href="donate.html" class="btn btn-primary btn-block"><i class="fas fa-hand-holding-heart"></i> <span data-i18n="nav_donate">Donate Now</span></a>
      </div>`;

    const cartDrawer = document.createElement('aside');
    cartDrawer.id = 'cart-drawer';
    cartDrawer.className = 'cart-drawer';
    cartDrawer.innerHTML = `
      <div class="cart-drawer-header">
        <h3><i class="fas fa-shopping-bag" style="color:var(--primary)"></i> <span data-i18n="cart_title">Your Cart</span></h3>
        <button class="drawer-close-btn" id="close-cart-drawer" aria-label="Close cart"><i class="fas fa-times"></i></button>
      </div>
      <div id="drawer-shipping-bar" class="free-shipping-bar"></div>
      <div id="cart-drawer-body" class="cart-drawer-body"></div>
      <div class="cart-drawer-footer">
        <div class="cart-drawer-row">
          <span data-i18n="subtotal">Subtotal</span>
          <span id="drawer-subtotal">0.00 EGP</span>
        </div>
        <a href="checkout.html" id="drawer-checkout-btn" class="btn btn-primary btn-block" style="margin-bottom:8px;">
          <i class="fas fa-lock"></i> <span data-i18n="checkout_btn">Proceed to Checkout</span>
        </a>
        <button id="drawer-continue-btn" class="btn btn-ghost btn-block btn-sm" data-i18n="continue_btn">Continue Shopping</button>
      </div>`;

    document.body.append(backdrop, mobileDrawer, cartDrawer);

    const closeAllDrawers = () => {
      backdrop.classList.remove('open');
      mobileDrawer.classList.remove('open');
      cartDrawer.classList.remove('open');
      document.body.style.overflow = '';
    };

    const openMobile = () => {
      closeAllDrawers();
      backdrop.classList.add('open');
      mobileDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    };

    const openCart = () => {
      closeAllDrawers();
      renderCartDrawer();
      backdrop.classList.add('open');
      cartDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    };

    backdrop.addEventListener('click', closeAllDrawers);
    document.getElementById('close-mobile-drawer').addEventListener('click', closeAllDrawers);
    document.getElementById('close-cart-drawer').addEventListener('click', closeAllDrawers);
    document.getElementById('drawer-continue-btn').addEventListener('click', closeAllDrawers);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllDrawers();
        closeModal();
      }
    });

    document.querySelectorAll('#mobile-menu-btn').forEach(btn => btn.addEventListener('click', openMobile));
    document.querySelectorAll('#cart-drawer-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (currentPage() !== 'checkout.html') {
          e.preventDefault();
          openCart();
        }
      });
    });

    window.PAW_UI.openCart = openCart;
  };

  const syncHeaderAuth = () => {
    const user = readStore(KEYS.USER, null);
    document.querySelectorAll('.header-auth-btn').forEach(btn => {
      if (user) {
        btn.innerHTML = `<i class="fas fa-user-check"></i> ${user.name.split(' ')[0]}`;
        btn.classList.remove('btn-outline');
        btn.classList.add('btn-secondary');
      } else {
        btn.innerHTML = `<i class="fas fa-user"></i> <span data-i18n="nav_signin">Sign In</span>`;
      }
    });
  };

  const applyLanguage = (lang) => {
    const valid = lang === 'ar' ? 'ar' : 'en';
    writeStore(KEYS.LANG, valid);
    document.documentElement.lang = valid;
    document.documentElement.dir = valid === 'ar' ? 'rtl' : 'ltr';

    const dict = I18N[valid];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll('#lang-toggle-btn').forEach(btn => {
      btn.innerHTML = valid === 'en' ? '<i class="fas fa-globe"></i> عربي' : '<i class="fas fa-globe"></i> EN';
    });
  };

  const initHeader = () => {
    const header = document.querySelector('.main-header');
    if (header) {
      window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 24);
      }, { passive: true });
    }
    const page = currentPage();
    document.querySelectorAll('.desktop-nav a').forEach(a => {
      const href = (a.getAttribute('href') || '').toLowerCase();
      if (href === page || (page === '' && href === 'index.html') || (page === 'pet_detail.html' && href === 'paws.html')) {
        a.classList.add('active');
      }
    });
    document.querySelectorAll('#lang-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const current = readStore(KEYS.LANG, 'en');
        applyLanguage(current === 'en' ? 'ar' : 'en');
        showToast(current === 'en' ? 'تم التبديل إلى اللغة العربية' : 'Switched to English', 'info');
      });
    });
    injectDrawers();
    syncHeaderAuth();
    applyLanguage(readStore(KEYS.LANG, 'en'));
  };

  // ------------------------------------------------------------------------
  // 7. FAVORITES SYSTEM
  // ------------------------------------------------------------------------
  const getFavs = () => readStore(KEYS.FAVS, []);
  const toggleFav = (petId) => {
    let favs = getFavs();
    const pet = PETS.find(p => p.id === petId);
    if (favs.includes(petId)) {
      favs = favs.filter(id => id !== petId);
      showToast(`Removed ${pet ? pet.name : 'pet'} from favorites`, 'info');
    } else {
      favs.push(petId);
      showToast(`Saved ${pet ? pet.name : 'pet'} to your favorites ❤️`, 'success');
    }
    writeStore(KEYS.FAVS, favs);
    document.querySelectorAll(`.fav-btn[data-pet-id="${petId}"]`).forEach(btn => {
      const isFav = favs.includes(petId);
      btn.classList.toggle('active', isFav);
      btn.innerHTML = `<i class="${isFav ? 'fas' : 'far'} fa-heart"></i>`;
    });
    return favs.includes(petId);
  };

  const renderPetCard = (pet) => {
    const isFav = getFavs().includes(pet.id);
    return `
      <article class="item-card pet-card">
        <div class="card-media">
          <img src="${pet.img}" alt="${pet.name} - ${pet.breed}" loading="lazy">
          <div class="card-badges">
            <span class="badge ${pet.category === 'cat' ? 'badge-secondary' : 'badge-primary'}">${pet.type}</span>
            <span class="badge badge-success"><i class="fas fa-shield-alt"></i> Vaccinated</span>
          </div>
          <button class="fav-btn ${isFav ? 'active' : ''}" data-pet-id="${pet.id}" aria-label="Save ${pet.name} to favorites">
            <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
          </button>
        </div>
        <div class="card-body">
          <div class="card-meta-row">
            <span><i class="fas fa-dna"></i> ${pet.breed}</span>
            <span><i class="fas fa-venus-mars"></i> ${pet.gender}</span>
          </div>
          <h3 class="card-title">${pet.name}</h3>
          <p class="card-desc">${pet.shortDesc}</p>
          <div class="pet-tags">
            <span class="pet-tag"><i class="far fa-clock"></i> ${pet.age}</span>
            <span class="pet-tag">${pet.size}</span>
            ${pet.traits.slice(0, 1).map(t => `<span class="pet-tag">${t}</span>`).join('')}
          </div>
          <div class="card-footer-row">
            <span style="font-size:0.84rem;font-weight:700;color:var(--accent);"><i class="fas fa-check-circle"></i> Free Shelter Adoption</span>
            <a href="pet_detail.html?id=${pet.id}" class="btn btn-secondary btn-sm">Meet ${pet.name} <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </article>`;
  };

  const renderProductCard = (prod) => {
    return `
      <article class="item-card product-card">
        <div class="card-media">
          <img src="${prod.img}" alt="${prod.name}" loading="lazy">
          ${prod.badge ? `<div class="card-badges"><span class="badge badge-primary">${prod.badge}</span></div>` : ''}
          <button class="fav-btn quick-view-btn" data-prod-id="${prod.id}" aria-label="Quick view ${prod.name}" title="Quick View">
            <i class="fas fa-eye"></i>
          </button>
        </div>
        <div class="card-body">
          <div class="card-meta-row">
            <span style="text-transform:capitalize;">${prod.category}</span>
            <span class="rating"><i class="fas fa-star"></i> ${prod.rating} <span style="color:var(--muted);font-weight:500;">(${prod.reviews})</span></span>
          </div>
          <h3 class="card-title">${prod.name}</h3>
          <p class="card-desc">${prod.shortDesc}</p>
          <div class="card-footer-row">
            <div class="price-tag">${prod.price} EGP <small>In Stock</small></div>
            <button class="btn btn-primary btn-sm add-product-btn" data-prod-id="${prod.id}">
              <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
          </div>
        </div>
      </article>`;
  };

  const bindCardActions = (root = document) => {
    root.querySelectorAll('.fav-btn[data-pet-id]').forEach(btn => {
      if (btn.dataset.bound) return;
      btn.dataset.bound = '1';
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleFav(btn.dataset.petId);
      });
    });

    root.querySelectorAll('.add-product-btn').forEach(btn => {
      if (btn.dataset.bound) return;
      btn.dataset.bound = '1';
      btn.addEventListener('click', () => {
        const prod = PRODUCTS.find(p => p.id === btn.dataset.prodId);
        if (!prod) return;
        addToCart({ id: prod.id, name: prod.name, price: prod.price, type: 'product', img: prod.img });
        const orig = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Added!';
        btn.style.background = 'var(--accent)';
        setTimeout(() => {
          btn.innerHTML = orig;
          btn.style.background = '';
        }, 1100);
      });
    });

    root.querySelectorAll('.quick-view-btn').forEach(btn => {
      if (btn.dataset.bound) return;
      btn.dataset.bound = '1';
      btn.addEventListener('click', () => {
        const prod = PRODUCTS.find(p => p.id === btn.dataset.prodId);
        if (!prod) return;
        openModal(`
          <div style="display:grid;gap:18px;">
            <img src="${prod.img}" alt="${prod.name}" style="width:100%;max-height:240px;object-fit:cover;border-radius:14px;">
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <span class="badge badge-secondary" style="text-transform:capitalize;">${prod.category}</span>
                <span class="rating"><i class="fas fa-star"></i> ${prod.rating} (${prod.reviews} reviews)</span>
              </div>
              <h3 style="font-size:1.35rem;margin-bottom:8px;">${prod.name}</h3>
              <p style="color:var(--muted);margin-bottom:14px;">${prod.shortDesc} Every purchase helps fund shelter food & emergency rescue in Alexandria.</p>
              <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;padding-top:14px;border-top:1px solid var(--border);">
                <div class="price-tag" style="font-size:1.45rem;">${prod.price} EGP</div>
                <button class="btn btn-primary" id="modal-add-prod"><i class="fas fa-cart-plus"></i> Add to Cart</button>
              </div>
            </div>
          </div>`);
        document.getElementById('modal-add-prod').addEventListener('click', () => {
          addToCart({ id: prod.id, name: prod.name, price: prod.price, type: 'product', img: prod.img });
          closeModal();
        });
      });
    });
  };

  // ------------------------------------------------------------------------
  // 8. PAGE CONTROLLERS
  // ------------------------------------------------------------------------

  // HOME PAGE
  const initHomePage = () => {
    const featuredPets = document.getElementById('home-featured-pets');
    if (featuredPets) {
      featuredPets.innerHTML = [PETS[0], PETS[4], PETS[1]].map(renderPetCard).join('');
      bindCardActions(featuredPets);
    }
    const featuredProds = document.getElementById('home-featured-products');
    if (featuredProds) {
      featuredProds.innerHTML = [PRODUCTS[0], PRODUCTS[10], PRODUCTS[8], PRODUCTS[13]].map(renderProductCard).join('');
      bindCardActions(featuredProds);
    }
    const newsForm = document.getElementById('newsletter-form');
    if (newsForm) {
      newsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsForm.querySelector('input[type="email"]').value.trim();
        newsForm.reset();
        showToast(`Subscribed ${email} to shelter updates! 🐾`, 'success');
      });
    }
  };

  // PAWS (ADOPTION GALLERY) PAGE
  const initPawsPage = () => {
    const grid = document.getElementById('pets-gallery-grid');
    if (!grid) return;

    const searchInput = document.getElementById('pet-search');
    const genderSelect = document.getElementById('pet-gender-filter');
    const countLabel = document.getElementById('pet-results-count');
    let activeCategory = 'all';

    const render = () => {
      const q = (searchInput ? searchInput.value : '').trim().toLowerCase();
      const gender = genderSelect ? genderSelect.value : 'all';
      const favs = getFavs();

      const filtered = PETS.filter(p => {
        const matchCat = activeCategory === 'all'
          ? true
          : activeCategory === 'favorites'
            ? favs.includes(p.id)
            : p.category === activeCategory;
        const matchGender = gender === 'all' || p.gender.toLowerCase() === gender;
        const matchSearch = !q || `${p.name} ${p.breed} ${p.type} ${p.traits.join(' ')}`.toLowerCase().includes(q);
        return matchCat && matchGender && matchSearch;
      });

      if (countLabel) {
        countLabel.textContent = `Showing ${filtered.length} of ${PETS.length} adoptable friends`;
      }

      if (!filtered.length) {
        grid.innerHTML = `
          <div style="grid-column:1/-1;text-align:center;padding:48px 20px;background:var(--surface);border-radius:20px;border:1px solid var(--border);">
            <i class="fas fa-paw" style="font-size:2.5rem;color:var(--border);margin-bottom:12px;"></i>
            <h3 style="margin-bottom:6px;">No pets match your filters</h3>
            <p style="color:var(--muted);margin-bottom:16px;">Try clearing your search or viewing all adoptable animals.</p>
            <button class="btn btn-secondary btn-sm" id="reset-pet-filters">Show All Pets</button>
          </div>`;
        const resetBtn = document.getElementById('reset-pet-filters');
        if (resetBtn) resetBtn.addEventListener('click', () => {
          activeCategory = 'all';
          if (searchInput) searchInput.value = '';
          if (genderSelect) genderSelect.value = 'all';
          document.querySelectorAll('.pet-filter-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === 'all'));
          render();
        });
        return;
      }

      grid.innerHTML = filtered.map(renderPetCard).join('');
      bindCardActions(grid);
    };

    document.querySelectorAll('.pet-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCategory = btn.dataset.cat;
        document.querySelectorAll('.pet-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        render();
      });
    });
    if (searchInput) searchInput.addEventListener('input', render);
    if (genderSelect) genderSelect.addEventListener('change', render);
    render();
  };

  // PET DETAIL PAGE
  const initPetDetailPage = () => {
    const container = document.getElementById('pet-detail-root');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || params.get('petId') || 'loza';
    const pet = PETS.find(p => p.id === id) || PETS[0];
    const isFav = getFavs().includes(pet.id);

    document.title = `${pet.name} (${pet.type}) — The Paw Place 🐾`;
    const bc = document.getElementById('breadcrumb-pet-name');
    if (bc) bc.textContent = pet.name;

    container.innerHTML = `
      <div class="pet-detail-card">
        <div class="pet-detail-media">
          <img src="${pet.img}" alt="${pet.name}">
          <button class="fav-btn ${isFav ? 'active' : ''}" data-pet-id="${pet.id}" style="width:44px;height:44px;font-size:1.15rem;">
            <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
          </button>
        </div>
        <div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px;">
            <span class="badge ${pet.category === 'cat' ? 'badge-secondary' : 'badge-primary'}">${pet.type}</span>
            <span class="badge badge-success"><i class="fas fa-check-circle"></i> Available for Adoption</span>
          </div>
          <h1 style="font-size:clamp(1.8rem,3.5vw,2.5rem);font-weight:800;margin-bottom:6px;">${pet.name}</h1>
          <p style="color:var(--muted);font-weight:600;margin-bottom:14px;"><i class="fas fa-map-marker-alt" style="color:var(--primary);"></i> Victoria Shelter, Alexandria</p>

          <div class="pet-facts-grid">
            <div class="fact-box"><small>Breed</small><strong>${pet.breed}</strong></div>
            <div class="fact-box"><small>Age</small><strong>${pet.age}</strong></div>
            <div class="fact-box"><small>Gender</small><strong>${pet.gender}</strong></div>
            <div class="fact-box"><small>Size</small><strong>${pet.size}</strong></div>
          </div>

          <div style="margin-bottom:18px;">
            <div style="display:flex;justify-content:space-between;font-size:0.85rem;font-weight:700;margin-bottom:6px;">
              <span>Energy Level</span><span>${pet.energy}%</span>
            </div>
            <div class="progress-track" style="height:9px;"><div class="progress-fill" style="width:${pet.energy}%"></div></div>
          </div>

          <div class="health-pills">
            ${pet.vaccinated ? '<span class="health-pill"><i class="fas fa-syringe"></i> Fully Vaccinated</span>' : ''}
            ${pet.spayed ? '<span class="health-pill"><i class="fas fa-check"></i> Spayed / Neutered</span>' : ''}
            ${pet.microchipped ? '<span class="health-pill"><i class="fas fa-microchip"></i> Microchipped</span>' : ''}
            ${pet.goodWithKids ? '<span class="health-pill"><i class="fas fa-child"></i> Kid Friendly</span>' : ''}
          </div>

          <h3 style="font-size:1.15rem;margin-bottom:8px;">About ${pet.name}</h3>
          <p style="color:var(--muted);margin-bottom:16px;">${pet.description}</p>

          <div class="pet-tags" style="margin-bottom:24px;">
            ${pet.traits.map(t => `<span class="pet-tag">#${t}</span>`).join('')}
          </div>

          <div style="display:flex;flex-wrap:wrap;gap:12px;">
            <a href="adopt_form.html?petId=${pet.id}" class="btn btn-primary btn-lg" style="flex:1 1 200px;">
              <i class="fas fa-heart"></i> Adopt ${pet.name}
            </a>
            <a href="donate.html" class="btn btn-outline btn-lg">
              <i class="fas fa-hand-holding-heart"></i> Sponsor Care
            </a>
          </div>
        </div>
      </div>`;

    bindCardActions(container);

    const related = document.getElementById('related-pets-grid');
    if (related) {
      const others = PETS.filter(p => p.id !== pet.id).slice(0, 3);
      related.innerHTML = others.map(renderPetCard).join('');
      bindCardActions(related);
    }
  };

  // ADOPTION FORM PAGE
  const initAdoptFormPage = () => {
    const form = document.getElementById('adoption-form');
    if (!form) return;

    const params = new URLSearchParams(window.location.search);
    const petIdParam = params.get('petId') || params.get('id');
    const selectEl = document.getElementById('pet-select-field');
    const previewBox = document.getElementById('selected-pet-preview');

    const updatePreview = (id) => {
      const pet = PETS.find(p => p.id === id);
      if (!previewBox) return;
      if (pet) {
        previewBox.innerHTML = `
          <div style="display:flex;align-items:center;gap:16px;padding:14px;background:var(--secondary-soft);border-radius:16px;margin-bottom:22px;">
            <img src="${pet.img}" alt="${pet.name}" style="width:68px;height:68px;border-radius:12px;object-fit:cover;">
            <div>
              <span style="font-size:0.78rem;font-weight:700;color:var(--secondary);text-transform:uppercase;">Applying to Adopt</span>
              <h3 style="font-size:1.18rem;color:var(--text);">${pet.name} — ${pet.breed}</h3>
              <p style="font-size:0.85rem;color:var(--muted);">${pet.age} • ${pet.gender} • Vaccinated</p>
            </div>
          </div>`;
      } else {
        previewBox.innerHTML = '';
      }
    };

    if (selectEl) {
      selectEl.innerHTML = `<option value="">-- Choose a Pet --</option>` +
        PETS.map(p => `<option value="${p.id}" ${p.id === petIdParam ? 'selected' : ''}>${p.name} (${p.type} — ${p.age})</option>`).join('');
      selectEl.addEventListener('change', () => updatePreview(selectEl.value));
      if (petIdParam) updatePreview(petIdParam);
    }

    // Pre-fill logged-in user
    const user = readStore(KEYS.USER, null);
    if (user) {
      const nameInput = document.getElementById('name-adopt');
      const emailInput = document.getElementById('email-adopt');
      const phoneInput = document.getElementById('phone-adopt');
      if (nameInput) nameInput.value = user.name || '';
      if (emailInput) emailInput.value = user.email || '';
      if (phoneInput && user.phone) phoneInput.value = user.phone;
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const petId = selectEl ? selectEl.value : petIdParam;
      const pet = PETS.find(p => p.id === petId) || { id: 'any', name: 'Shelter Matched Pet', img: 'pet1.jpg' };
      const refId = 'ADP-' + Math.floor(100000 + Math.random() * 900000);
      const record = {
        refId,
        petId: pet.id,
        petName: pet.name,
        petImg: pet.img,
        applicant: document.getElementById('name-adopt').value.trim(),
        email: document.getElementById('email-adopt').value.trim(),
        housing: document.getElementById('housing').value,
        date: new Date().toLocaleDateString(),
        status: 'Under Shelter Review'
      };
      const list = readStore(KEYS.ADOPTIONS, []);
      list.unshift(record);
      writeStore(KEYS.ADOPTIONS, list);
      form.reset();

      openModal(`
        <div style="text-align:center;padding:8px 0;">
          <div style="width:68px;height:68px;border-radius:50%;background:var(--accent-soft);color:var(--accent);display:grid;place-items:center;font-size:2rem;margin:0 auto 16px;">
            <i class="fas fa-check"></i>
          </div>
          <h2 style="margin-bottom:8px;">Application Received!</h2>
          <p style="color:var(--muted);margin-bottom:18px;">Thank you, <strong>${record.applicant}</strong>! Our Victoria shelter team will review your application for <strong>${pet.name}</strong> and call you within 24 hours.</p>
          <div style="background:var(--bg);border:1px solid var(--border);border-radius:14px;padding:14px;margin-bottom:22px;font-size:0.9rem;">
            <div><strong>Reference ID:</strong> ${refId}</div>
            <div><strong>Status:</strong> <span style="color:var(--accent);font-weight:700;">Under Review</span></div>
          </div>
          <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
            <a href="auth.html" class="btn btn-secondary btn-sm">Track in My Account</a>
            <a href="paws.html" class="btn btn-ghost btn-sm">Back to Pets</a>
          </div>
        </div>`);
    });
  };

  // PRODUCTS PAGE
  const initProductsPage = () => {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    const searchInput = document.getElementById('product-search');
    const sortSelect = document.getElementById('product-sort');
    const countLabel = document.getElementById('product-results-count');
    let activeCat = 'all';

    const render = () => {
      const q = (searchInput ? searchInput.value : '').trim().toLowerCase();
      const sort = sortSelect ? sortSelect.value : 'featured';

      let list = PRODUCTS.filter(p => {
        const matchCat = activeCat === 'all' || p.category === activeCat;
        const matchSearch = !q || `${p.name} ${p.shortDesc} ${p.category}`.toLowerCase().includes(q);
        return matchCat && matchSearch;
      });

      if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
      if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
      if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);

      if (countLabel) countLabel.textContent = `Showing ${list.length} of ${PRODUCTS.length} essentials`;

      if (!list.length) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px;background:var(--surface);border-radius:18px;border:1px solid var(--border);">
          <h3>No products found</h3><p style="color:var(--muted);">Try a different keyword or category.</p></div>`;
        return;
      }

      grid.innerHTML = list.map(renderProductCard).join('');
      bindCardActions(grid);
    };

    document.querySelectorAll('.prod-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCat = btn.dataset.cat;
        document.querySelectorAll('.prod-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        render();
      });
    });
    if (searchInput) searchInput.addEventListener('input', render);
    if (sortSelect) sortSelect.addEventListener('change', render);
    render();
  };

  // SERVICES PAGE
  const initServicesPage = () => {
    const grid = document.getElementById('services-grid');
    if (!grid) return;

    grid.innerHTML = SERVICES.map(s => `
      <article class="item-card">
        <div class="card-media">
          <img src="${s.img}" alt="${s.name}" loading="lazy">
          <div class="card-badges">
            <span class="badge badge-secondary"><i class="far fa-clock"></i> ${s.duration}</span>
          </div>
        </div>
        <div class="card-body">
          <div class="card-meta-row">
            <span><i class="fas fa-user-md"></i> ${s.vet}</span>
            <span class="rating"><i class="fas fa-star"></i> ${s.rating}</span>
          </div>
          <h3 class="card-title">${s.name}</h3>
          <p class="card-desc">${s.shortDesc}</p>
          <ul class="service-checklist">
            ${s.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
          </ul>
          <div class="card-footer-row">
            <div class="price-tag">${s.price} EGP <small>Per Booking</small></div>
            <button class="btn btn-primary btn-sm book-service-btn" data-service-id="${s.id}">
              <i class="fas fa-calendar-check"></i> Book Now
            </button>
          </div>
        </div>
      </article>`).join('');

    grid.querySelectorAll('.book-service-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const srv = SERVICES.find(s => s.id === btn.dataset.serviceId);
        if (!srv) return;
        const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
        openModal(`
          <div>
            <span class="badge badge-secondary" style="margin-bottom:8px;">Appointment Booking</span>
            <h3 style="font-size:1.3rem;margin-bottom:4px;">${srv.name}</h3>
            <p style="color:var(--muted);font-size:0.9rem;margin-bottom:18px;">${srv.vet} • ${srv.duration} • <strong style="color:var(--primary);">${srv.price} EGP</strong></p>
            <form id="service-booking-form">
              <div class="form-row-2">
                <div class="input-group">
                  <label>Pet's Name</label>
                  <input type="text" id="bk-pet-name" placeholder="e.g., Loza" required>
                </div>
                <div class="input-group">
                  <label>Pet Type</label>
                  <select id="bk-pet-type" required>
                    <option value="Cat">Cat</option>
                    <option value="Dog">Dog</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div class="form-row-2">
                <div class="input-group">
                  <label>Preferred Date</label>
                  <input type="date" id="bk-date" min="${tomorrow}" value="${tomorrow}" required>
                </div>
                <div class="input-group">
                  <label>Time Slot</label>
                  <select id="bk-time" required>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                  </select>
                </div>
              </div>
              <div class="input-group">
                <label>Notes for our specialist (optional)</label>
                <input type="text" id="bk-notes" placeholder="Allergies, temperament, special requests...">
              </div>
              <div style="display:flex;gap:10px;flex-wrap:wrap;">
                <button type="submit" class="btn btn-primary" style="flex:1;"><i class="fas fa-cart-plus"></i> Add Booking to Cart</button>
              </div>
            </form>
          </div>`);

        document.getElementById('service-booking-form').addEventListener('submit', (e) => {
          e.preventDefault();
          addToCart({
            id: srv.id,
            name: srv.name,
            price: srv.price,
            type: 'service',
            img: srv.img,
            meta: {
              petName: document.getElementById('bk-pet-name').value.trim(),
              petType: document.getElementById('bk-pet-type').value,
              date: document.getElementById('bk-date').value,
              time: document.getElementById('bk-time').value
            }
          });
          closeModal();
          if (window.PAW_UI.openCart) window.PAW_UI.openCart();
        });
      });
    });
  };

  // CHECKOUT PAGE
  let activePromo = null;

  const renderCheckoutPage = () => {
    const listEl = document.getElementById('checkout-cart-items');
    if (!listEl) return;

    const cart = getCart();
    const subtotalEl = document.getElementById('subtotal-amount');
    const discountRow = document.getElementById('discount-row');
    const discountEl = document.getElementById('discount-amount');
    const shippingEl = document.getElementById('shipping-amount');
    const grandEl = document.getElementById('grand-total-amount');
    const finalBtn = document.getElementById('final-total');

    const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    const discount = activePromo === 'PAW10' ? subtotal * 0.1 : 0;
    const shipping = calcShipping(cart, activePromo);
    const grand = Math.max(0, subtotal - discount + shipping);

    if (!cart.length) {
      listEl.innerHTML = `
        <div class="cart-empty-state" style="padding:30px 10px;">
          <i class="fas fa-shopping-cart"></i>
          <p style="margin-bottom:14px;">Your cart is empty right now.</p>
          <a href="products.html" class="btn btn-primary btn-sm">Browse Shop</a>
          <a href="services.html" class="btn btn-outline btn-sm" style="margin-left:6px;">Book a Service</a>
        </div>`;
    } else {
      listEl.innerHTML = cart.map((item, idx) => {
        const metaText = item.meta
          ? `Pet: ${item.meta.petName} • ${item.meta.date} at ${item.meta.time}`
          : `${item.type === 'service' ? 'Service' : 'Product'} • ${item.price} EGP each`;
        return `
          <div class="cart-drawer-item">
            <img src="${resolveItemImage(item)}" alt="${item.name}">
            <div class="cart-drawer-info">
              <h4>${item.name}</h4>
              <div class="cart-drawer-meta">${metaText}</div>
              <div class="qty-control">
                <button type="button" class="qty-btn" data-ck-qty="${idx}" data-delta="-1">−</button>
                <span class="qty-value">${item.quantity}</span>
                <button type="button" class="qty-btn" data-ck-qty="${idx}" data-delta="1">+</button>
              </div>
            </div>
            <div class="cart-drawer-right">
              <span class="cart-drawer-price">${(item.price * item.quantity).toFixed(0)} EGP</span>
              <button type="button" class="cart-remove-btn" data-ck-rm="${idx}"><i class="fas fa-trash-alt"></i> Remove</button>
            </div>
          </div>`;
      }).join('');

      listEl.querySelectorAll('[data-ck-qty]').forEach(b => {
        b.addEventListener('click', () => updateCartQty(Number(b.dataset.ckQty), Number(b.dataset.delta)));
      });
      listEl.querySelectorAll('[data-ck-rm]').forEach(b => {
        b.addEventListener('click', () => removeCartItem(Number(b.dataset.ckRm)));
      });
    }

    if (subtotalEl) subtotalEl.textContent = `${subtotal.toFixed(2)} EGP`;
    if (discountRow && discountEl) {
      discountRow.style.display = discount > 0 ? 'flex' : 'none';
      discountEl.textContent = `-${discount.toFixed(2)} EGP`;
    }
    if (shippingEl) shippingEl.textContent = shipping === 0 && cart.length ? 'FREE' : `${shipping.toFixed(2)} EGP`;
    if (grandEl) grandEl.textContent = `${grand.toFixed(2)} EGP`;
    if (finalBtn) finalBtn.textContent = `${grand.toFixed(2)} EGP`;
  };

  const initCheckoutPage = () => {
    const form = document.getElementById('checkout-form');
    if (!form) return;

    renderCheckoutPage();

    // Pre-fill logged-in user
    const user = readStore(KEYS.USER, null);
    if (user) {
      const n = document.getElementById('full-name');
      const p = document.getElementById('phone');
      if (n && !n.value) n.value = user.name || '';
      if (p && !p.value && user.phone) p.value = user.phone;
    }

    // Payment method switcher
    const cardBox = document.getElementById('card-details-fields');
    const walletBox = document.getElementById('wallet-details-fields');
    document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
      radio.addEventListener('change', () => {
        if (cardBox) cardBox.style.display = radio.value === 'card' ? 'block' : 'none';
        if (walletBox) walletBox.style.display = radio.value === 'wallet' ? 'block' : 'none';
      });
    });

    // Promo code handler
    const promoBtn = document.getElementById('apply-promo-btn');
    const promoInput = document.getElementById('promo-input');
    if (promoBtn && promoInput) {
      promoBtn.addEventListener('click', () => {
        const code = promoInput.value.trim().toUpperCase();
        if (code === 'PAW10' || code === 'FREESHIP') {
          activePromo = code;
          renderCheckoutPage();
          showToast(code === 'PAW10' ? 'Promo PAW10 applied — 10% OFF!' : 'Promo FREESHIP applied — Free Shipping!', 'success');
        } else {
          showToast('Invalid promo code. Try PAW10 or FREESHIP!', 'error');
        }
      });
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const cart = getCart();
      if (!cart.length) {
        showToast('Your cart is empty! Add items before placing an order.', 'error');
        return;
      }

      const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
      const discount = activePromo === 'PAW10' ? subtotal * 0.1 : 0;
      const shipping = calcShipping(cart, activePromo);
      const total = Math.max(0, subtotal - discount + shipping);
      const orderId = 'PAW-' + Math.floor(100000 + Math.random() * 900000);
      const payment = form.querySelector('input[name="payment-method"]:checked').value;

      const order = {
        orderId,
        customer: document.getElementById('full-name').value.trim(),
        city: document.getElementById('city').value.trim(),
        payment: payment === 'cod' ? 'Cash on Delivery' : payment === 'card' ? 'Credit / Debit Card' : 'InstaPay / Vodafone Cash',
        items: cart,
        total,
        date: new Date().toLocaleDateString(),
        status: 'Confirmed — Preparing'
      };

      const orders = readStore(KEYS.ORDERS, []);
      orders.unshift(order);
      writeStore(KEYS.ORDERS, orders);
      activePromo = null;
      saveCart([]);
      form.reset();

      openModal(`
        <div style="text-align:center;">
          <div style="width:72px;height:72px;border-radius:50%;background:var(--accent-soft);color:var(--accent);display:grid;place-items:center;font-size:2.1rem;margin:0 auto 16px;">
            <i class="fas fa-check-circle"></i>
          </div>
          <h2 style="margin-bottom:6px;">Order Confirmed! 🎉</h2>
          <p style="color:var(--muted);margin-bottom:18px;">Thank you, <strong>${order.customer}</strong>! Your order has been received and a confirmation SMS has been queued.</p>
          <div style="background:var(--bg);border:1px solid var(--border);border-radius:14px;padding:16px;text-align:left;margin-bottom:20px;font-size:0.9rem;display:grid;gap:6px;">
            <div><strong>Order Number:</strong> #${order.orderId}</div>
            <div><strong>Items:</strong> ${order.items.reduce((s, i) => s + i.quantity, 0)} item(s)</div>
            <div><strong>Payment:</strong> ${order.payment}</div>
            <div><strong>Total Paid:</strong> <span style="color:var(--secondary);font-weight:800;">${order.total.toFixed(2)} EGP</span></div>
            <div><strong>Estimated Delivery:</strong> 1–2 Business Days (${order.city})</div>
          </div>
          <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
            <a href="auth.html" class="btn btn-secondary btn-sm">View Order History</a>
            <a href="products.html" class="btn btn-primary btn-sm">Continue Shopping</a>
          </div>
        </div>`);
    });
  };

  // AUTH & ACCOUNT DASHBOARD PAGE
  const initAuthPage = () => {
    const authView = document.getElementById('auth-logged-out');
    const dashView = document.getElementById('auth-dashboard');
    if (!authView || !dashView) return;

    const renderAuthState = () => {
      const user = readStore(KEYS.USER, null);
      syncHeaderAuth();
      if (!user) {
        authView.style.display = 'block';
        dashView.style.display = 'none';
        return;
      }

      authView.style.display = 'none';
      dashView.style.display = 'block';

      const orders = readStore(KEYS.ORDERS, []);
      const adoptions = readStore(KEYS.ADOPTIONS, []);
      const donations = readStore(KEYS.DONATIONS, []);
      const favIds = getFavs();
      const favPets = PETS.filter(p => favIds.includes(p.id));

      document.getElementById('dash-user-name').textContent = user.name;
      document.getElementById('dash-user-email').textContent = user.email;
      document.getElementById('dash-stat-orders').textContent = orders.length;
      document.getElementById('dash-stat-adoptions').textContent = adoptions.length;
      document.getElementById('dash-stat-favs').textContent = favPets.length;
      document.getElementById('dash-stat-donations').textContent = donations.length;

      const ordersList = document.getElementById('dash-orders-list');
      ordersList.innerHTML = orders.length
        ? orders.map(o => `
            <div class="record-card">
              <div>
                <strong>#${o.orderId}</strong> <span class="badge badge-success" style="margin-left:6px;">${o.status}</span>
                <div style="font-size:0.85rem;color:var(--muted);margin-top:4px;">${o.date} • ${o.items.map(i => `${i.name} (×${i.quantity})`).join(', ')}</div>
              </div>
              <div style="font-weight:800;color:var(--secondary);font-size:1.05rem;">${Number(o.total).toFixed(2)} EGP</div>
            </div>`).join('')
        : '<p style="color:var(--muted);text-align:center;padding:24px;">No orders placed yet. <a href="products.html">Start shopping →</a></p>';

      const adoptList = document.getElementById('dash-adoptions-list');
      adoptList.innerHTML = adoptions.length
        ? adoptions.map(a => `
            <div class="record-card">
              <div style="display:flex;align-items:center;gap:12px;">
                <img src="${a.petImg || 'pet1.jpg'}" alt="${a.petName}" style="width:48px;height:48px;border-radius:10px;object-fit:cover;">
                <div>
                  <strong>${a.petName}</strong> <small style="color:var(--muted);">(${a.refId})</small>
                  <div style="font-size:0.84rem;color:var(--muted);">Submitted on ${a.date}</div>
                </div>
              </div>
              <span class="badge badge-secondary">${a.status}</span>
            </div>`).join('')
        : '<p style="color:var(--muted);text-align:center;padding:24px;">No adoption applications yet. <a href="paws.html">Meet our pets →</a></p>';

      const favGrid = document.getElementById('dash-favs-grid');
      favGrid.innerHTML = favPets.length
        ? favPets.map(renderPetCard).join('')
        : '<p style="grid-column:1/-1;color:var(--muted);text-align:center;padding:24px;">No saved favorites yet. Tap the heart icon on any pet to save them here!</p>';
      bindCardActions(favGrid);

      const donList = document.getElementById('dash-donations-list');
      donList.innerHTML = donations.length
        ? donations.map(d => `
            <div class="record-card">
              <div>
                <strong>${d.certId}</strong> <span class="badge badge-primary" style="margin-left:6px;">${d.frequency}</span>
                <div style="font-size:0.84rem;color:var(--muted);margin-top:4px;">${d.date} • ${d.method}</div>
              </div>
              <div style="font-weight:800;color:var(--accent);font-size:1.05rem;">${d.amount} EGP</div>
            </div>`).join('')
        : '<p style="color:var(--muted);text-align:center;padding:24px;">No donations recorded yet. <a href="donate.html">Support our shelter →</a></p>';
    };

    // Auth Tabs
    document.querySelectorAll('.auth-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const target = tab.dataset.tab;
        document.getElementById('login-form').style.display = target === 'login' ? 'block' : 'none';
        document.getElementById('signup-form').style.display = target === 'signup' ? 'block' : 'none';
      });
    });

    // Dashboard Tabs
    document.querySelectorAll('.dash-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.dash-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.dash-tab-panel').forEach(p => {
          p.style.display = p.id === btn.dataset.panel ? 'block' : 'none';
        });
      });
    });

    // Login submit
    document.getElementById('login-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim().toLowerCase();
      const pass = document.getElementById('login-password').value;
      const users = readStore(KEYS.USERS, []);
      const found = users.find(u => u.email.toLowerCase() === email && u.password === pass);
      if (!found) {
        showToast('Invalid email or password. Try the 1-Click Demo Login!', 'error');
        return;
      }
      writeStore(KEYS.USER, found);
      showToast(`Welcome back, ${found.name}! 🐾`, 'success');
      renderAuthState();
    });

    // Signup submit
    document.getElementById('signup-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('signup-name').value.trim();
      const email = document.getElementById('signup-email').value.trim().toLowerCase();
      const phone = document.getElementById('signup-phone').value.trim();
      const password = document.getElementById('signup-password').value;
      if (password.length < 6) {
        showToast('Password must be at least 6 characters.', 'error');
        return;
      }
      const users = readStore(KEYS.USERS, []);
      if (users.some(u => u.email.toLowerCase() === email)) {
        showToast('An account with this email already exists. Please Sign In.', 'error');
        return;
      }
      const newUser = { name, email, phone, password, joinedAt: new Date().toISOString().split('T')[0] };
      users.push(newUser);
      writeStore(KEYS.USERS, users);
      writeStore(KEYS.USER, newUser);
      showToast(`Account created! Welcome to The Paw Place, ${name}!`, 'success');
      renderAuthState();
    });

    // 1-Click Demo Sign In
    const demoBtn = document.getElementById('demo-login-btn');
    if (demoBtn) {
      demoBtn.addEventListener('click', () => {
        const users = readStore(KEYS.USERS, []);
        const demo = users.find(u => u.email === 'demo@pawplace.com');
        if (demo) {
          writeStore(KEYS.USER, demo);
          showToast('Signed in with Demo Account! Explore your dashboard.', 'success');
          renderAuthState();
        }
      });
    }

    // Logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        localStorage.removeItem(KEYS.USER);
        showToast('You have been signed out.', 'info');
        renderAuthState();
      });
    }

    renderAuthState();
  };

  // DONATE PAGE
  const initDonatePage = () => {
    const form = document.getElementById('donation-form');
    if (!form) return;

    const GOAL = 50000;
    const BASE_RAISED = 38400;
    let selectedAmount = 300;
    let frequency = 'One-Time';

    const impactMap = (amt) => {
      if (amt >= 1000) return 'Funds emergency surgery & full medical recovery for a rescued stray!';
      if (amt >= 500) return 'Provides a complete rescue kit, microchipping, and shelter stay.';
      if (amt >= 300) return 'Covers full core vaccinations & vet exam for one rescued pet.';
      return 'Provides nutritious meals for 3 rescued cats or dogs for a full day.';
    };

    const updateGoalBar = () => {
      const extra = readStore(KEYS.DONATIONS, []).reduce((s, d) => s + Number(d.amount || 0), 0);
      const total = BASE_RAISED + extra;
      const pct = Math.min(100, (total / GOAL) * 100);
      const raisedEl = document.getElementById('goal-raised-amount');
      const fillEl = document.getElementById('goal-progress-fill');
      const pctEl = document.getElementById('goal-percent');
      if (raisedEl) raisedEl.textContent = `${total.toLocaleString()} EGP`;
      if (fillEl) fillEl.style.width = `${pct}%`;
      if (pctEl) pctEl.textContent = `${Math.round(pct)}%`;
    };

    const customInput = document.getElementById('custom-amount');
    const impactText = document.getElementById('impact-text');
    const btnAmountSpan = document.getElementById('donate-btn-amount');

    const syncAmount = (amt) => {
      selectedAmount = Math.max(20, Number(amt) || 0);
      if (impactText) impactText.textContent = impactMap(selectedAmount);
      if (btnAmountSpan) btnAmountSpan.textContent = `${selectedAmount} EGP`;
    };

    document.querySelectorAll('.amount-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.amount-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (customInput) customInput.value = '';
        syncAmount(btn.dataset.amount);
      });
    });

    if (customInput) {
      customInput.addEventListener('input', () => {
        if (customInput.value) {
          document.querySelectorAll('.amount-pill').forEach(b => b.classList.remove('active'));
          syncAmount(customInput.value);
        }
      });
    }

    document.querySelectorAll('.freq-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.freq-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        frequency = btn.dataset.freq;
      });
    });

    // Pre-fill logged-in user
    const user = readStore(KEYS.USER, null);
    if (user) {
      const n = document.getElementById('name-donor');
      const em = document.getElementById('email-donor');
      if (n) n.value = user.name || '';
      if (em) em.value = user.email || '';
    }

    updateGoalBar();
    syncAmount(selectedAmount);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const donor = document.getElementById('name-donor').value.trim();
      const method = form.querySelector('input[name="donate-method"]:checked').value;
      const certId = 'DON-' + Math.floor(100000 + Math.random() * 900000);
      const record = {
        certId,
        donor,
        amount: selectedAmount,
        frequency,
        method,
        date: new Date().toLocaleDateString()
      };
      const list = readStore(KEYS.DONATIONS, []);
      list.unshift(record);
      writeStore(KEYS.DONATIONS, list);
      updateGoalBar();
      form.reset();

      openModal(`
        <div style="text-align:center;">
          <div style="width:72px;height:72px;border-radius:50%;background:var(--primary-soft);color:var(--primary);display:grid;place-items:center;font-size:2rem;margin:0 auto 16px;">
            <i class="fas fa-heart"></i>
          </div>
          <h2 style="margin-bottom:8px;">Thank You, ${donor}! 🐾</h2>
          <p style="color:var(--muted);margin-bottom:18px;">Your generous <strong>${selectedAmount} EGP (${frequency})</strong> gift directly supports rescued animals in Alexandria.</p>
          <div style="background:var(--bg);border:1px solid var(--border);border-radius:14px;padding:14px;margin-bottom:20px;font-size:0.9rem;">
            <div><strong>Certificate ID:</strong> ${certId}</div>
            <div><strong>Payment Method:</strong> ${method}</div>
          </div>
          <button class="btn btn-primary" onclick="document.querySelector('.modal-close').click()">Done</button>
        </div>`);
    });
  };

  // CONTACT PAGE & FAQ
  const initContactPage = () => {
    document.querySelectorAll('.faq-question').forEach(q => {
      q.addEventListener('click', () => {
        const item = q.closest('.faq-item');
        item.classList.toggle('open');
      });
    });

    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        form.reset();
        openModal(`
          <div style="text-align:center;">
            <div style="width:68px;height:68px;border-radius:50%;background:var(--accent-soft);color:var(--accent);display:grid;place-items:center;font-size:2rem;margin:0 auto 14px;">
              <i class="fas fa-paper-plane"></i>
            </div>
            <h2 style="margin-bottom:8px;">Message Sent!</h2>
            <p style="color:var(--muted);margin-bottom:20px;">Thanks for reaching out, <strong>${name}</strong>. Our shelter support team will reply within 24 hours.</p>
            <button class="btn btn-primary" onclick="document.querySelector('.modal-close').click()">Close</button>
          </div>`);
      });
    }
  };

  // ------------------------------------------------------------------------
  // 9. BOOTSTRAP
  // ------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    ensureDemoUser();
    migrateLegacyCart();
    initHeader();
    updateCartUI();
    initHomePage();
    initPawsPage();
    initPetDetailPage();
    initAdoptFormPage();
    initProductsPage();
    initServicesPage();
    initCheckoutPage();
    initAuthPage();
    initDonatePage();
    initContactPage();
  });
})();
