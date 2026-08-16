// Datos de los productos (Catálogo)
// Para conectar con Cloudinary, simplemente pon el link de la foto en "imageUrl"
const products = [
    {
        id: 1,
        name: "Phantom Black Gold",
        category: "gold",
        price: 45.00,
        imageIcon: "ph-crown",
        imageUrl: "", // EJEMPLO: "https://res.cloudinary.com/tu-cuenta/image/upload/v1234/gorra1.jpg"
        desc: "Edición limitada. Negra profunda con costuras e insignias bañadas en tonos dorados reflectantes."
    },
    {
        id: 2,
        name: "Crimson Eclipse",
        category: "fire",
        price: 38.50,
        imageIcon: "ph-fire",
        imageUrl: "",
        desc: "Diseño audaz con detalles en rojo carmesí que resaltan en la oscuridad. Perfecta para destacar."
    },
    {
        id: 3,
        name: "Sunset Rider",
        category: "urban",
        price: 42.00,
        imageIcon: "ph-sun",
        imageUrl: "",
        desc: "Estilo urbano con un degradado sutil inspirado en el atardecer. Ligera y muy cómoda."
    },
    {
        id: 4,
        name: "Golden Hive",
        category: "gold",
        price: 50.00,
        imageIcon: "ph-hexagon",
        imageUrl: "",
        desc: "Estructura hexagonal en la visera con toques de oro. Una corona moderna para el día a día."
    },
    {
        id: 5,
        name: "Urban Onyx",
        category: "urban",
        price: 35.00,
        imageIcon: "ph-buildings",
        imageUrl: "",
        desc: "Totalmente negra, textura mate y minimalista. Combina literalmente con todo tu armario."
    },
    {
        id: 6,
        name: "Solar Flare",
        category: "fire",
        price: 48.00,
        imageIcon: "ph-lightning",
        imageUrl: "",
        desc: "Detalles vibrantes en naranja y amarillo. Atrapa las miradas con su estilo electrizante."
    }
];

// Estado del carrito
let cart = [];

// Elementos del DOM
const productGrid = document.getElementById('product-grid');
const cartButton = document.getElementById('cart-button');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartBtn = document.getElementById('close-cart');
const cartOverlay = document.getElementById('cart-overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartBadge = document.getElementById('cart-badge');
const totalPriceEl = document.getElementById('total-price');
const toastContainer = document.getElementById('toast-container');
const checkoutButton = document.getElementById('checkout-button');
const header = document.querySelector('.header');
const filterBtns = document.querySelectorAll('.filter-btn');

// Modal Elementos
const modalOverlay = document.getElementById('quick-view-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalIcon = document.getElementById('modal-icon');
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalPrice = document.getElementById('modal-price');
const modalAddBtn = document.getElementById('modal-add-btn');

// Header Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Intersection Observer para Animaciones Reveal
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));

// Inicializar el catálogo
function renderCatalog(filter = 'all') {
    productGrid.innerHTML = ''; // Limpiar
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);

    filteredProducts.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card reveal active'; // Ya activos si se filtran
        card.style.animationDelay = `${index * 0.1}s`;
        
        let categoryName = "";
        if(product.category === 'gold') categoryName = "Edición Oro";
        if(product.category === 'fire') categoryName = "Edición Fuego";
        if(product.category === 'urban') categoryName = "Urbano";

        let imageHTML = product.imageUrl 
            ? `<img src="${product.imageUrl}" alt="${product.name}" class="product-img">`
            : `<i class="ph ${product.imageIcon} img-placeholder"></i>`;

        card.innerHTML = `
            <div class="product-image-container" onclick="openModal(${product.id})">
                ${imageHTML}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <span class="product-category">${categoryName}</span>
                <div class="product-price"><span>$</span>${product.price.toFixed(2)}</div>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Añadir al Carrito</button>
        `;
        productGrid.appendChild(card);
    });
}

// Filtros
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remover active de todos
        filterBtns.forEach(b => b.classList.remove('active'));
        // Añadir al clickeado
        e.target.classList.add('active');
        // Renderizar
        const filterValue = e.target.getAttribute('data-filter');
        renderCatalog(filterValue);
    });
});

// Modal Logic
let currentModalProductId = null;

function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if(!product) return;

    currentModalProductId = productId;
    
    // Set data
    const modalImageContainer = document.querySelector('.modal-image');
    if (product.imageUrl) {
        modalImageContainer.innerHTML = `<img src="${product.imageUrl}" alt="${product.name}" class="modal-real-img" id="modal-icon">`;
    } else {
        modalImageContainer.innerHTML = `<i id="modal-icon" class="ph ${product.imageIcon}"></i>`;
    }
    
    document.getElementById('modal-title').textContent = product.name;
    
    let categoryName = "";
    if(product.category === 'gold') categoryName = "Edición Oro";
    if(product.category === 'fire') categoryName = "Edición Fuego";
    if(product.category === 'urban') categoryName = "Urbano";
    modalCategory.textContent = categoryName;
    
    modalPrice.textContent = `$${product.price.toFixed(2)}`;
    document.querySelector('.modal-description').textContent = product.desc;

    // Show modal
    modalOverlay.classList.add('active');
}

function closeModal() {
    modalOverlay.classList.remove('active');
}

closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

modalAddBtn.addEventListener('click', () => {
    if(currentModalProductId) {
        addToCart(currentModalProductId);
        closeModal();
    }
});


// Funciones del Carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    showToast(`¡${product.name} añadida a tu corona!`);
    
    // Animación de pulso en el botón del carrito
    cartButton.classList.remove('pulse-anim');
    void cartButton.offsetWidth; // trigger reflow
    cartButton.classList.add('pulse-anim');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPriceEl.textContent = `$${totalPrice.toFixed(2)}`;

    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Aún no has elegido tu corona.</div>';
        return;
    }

    cart.forEach(item => {
        let cartImageHTML = item.imageUrl 
            ? `<img src="${item.imageUrl}" alt="${item.name}" class="cart-real-img">`
            : `<i class="ph ${item.imageIcon}" style="color: var(--accent-gold); font-size: 2rem;"></i>`;

        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <div class="cart-item-img">
                ${cartImageHTML}
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Eliminar">
                <i class="ph ph-trash"></i>
            </button>
        `;
        cartItemsContainer.appendChild(itemEl);
    });
}

// Abrir/Cerrar Sidebar
function toggleCart() {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('active');
}

cartButton.addEventListener('click', toggleCart);
closeCartBtn.addEventListener('click', toggleCart);
cartOverlay.addEventListener('click', toggleCart);

// Notificación Toast
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i class="ph ph-check-circle"></i>
        <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    // Remover el elemento del DOM después de la animación
    setTimeout(() => {
        toast.remove();
    }, 3500);
}

// Checkout (Redirección a Instagram)
checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Tu carrito está vacío. ¡Elige una corona primero!");
        return;
    }
    
    // Crear el mensaje de pedido
    let orderMessage = "¡Hola Top Style Caps! Quiero hacer el siguiente pedido:\n\n";
    cart.forEach(item => {
        orderMessage += `- ${item.quantity}x ${item.name} ($${(item.price * item.quantity).toFixed(2)})\n`;
    });
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    orderMessage += `\nTotal a pagar: $${totalPrice.toFixed(2)}\n\n¿Me pueden confirmar disponibilidad para hacer el pago?`;

    // Intentar copiar al portapapeles y redirigir
    navigator.clipboard.writeText(orderMessage).then(() => {
        alert("¡Tu pedido ha sido copiado al portapapeles!\n\nTe redirigiremos a nuestro Instagram. Solo tienes que pegarlo en un mensaje directo (DM) para concretar tu compra.");
        window.open("https://www.instagram.com/top.style.cap/", "_blank");
        cart = [];
        updateCartUI();
        toggleCart();
    }).catch(err => {
        // Fallback si falla el clipboard por permisos del navegador
        alert("Te redirigiremos a nuestro Instagram para concretar la compra. ¡Escríbenos por DM!");
        window.open("https://www.instagram.com/top.style.cap/", "_blank");
        cart = [];
        updateCartUI();
        toggleCart();
    });
});

// Inicializar la app al cargar
document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
});
