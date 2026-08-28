// Datos de las gorras extraídos automáticamente
const rawData = ``;

const products = [];
let idCounter = 1;

rawData.split('\n').forEach(line => {
    if (!line.trim()) return;
    const parts = line.split('\t');
    if (parts.length >= 3) {
        let name = parts[0].trim();
        let price = parseFloat(parts[1].trim());
        let imageUrl = parts[2].trim();
        
        // Determinar categoría por nombre
        let category = "urban";
        let nameLower = name.toLowerCase();
        if (nameLower.match(/astros|boston|dodges|dudges|la|new york|san diego|sox|rays|florida|chicago|bulls|raiders/)) category = "sports";
        else if (nameLower.match(/san judas|cruces|santa muerte|rosario|rosone|dios|god|mishu/)) category = "religious";
        else if (nameLower.match(/barbas|dandy|supreme|thirthly/)) category = "premium";
        else if (nameLower.match(/natanael|wstcol|muratravis|baez|richardbohz/)) category = "collab";
        else if (nameLower.match(/cartas|ruleta|apostar/)) category = "casino";

        products.push({
            id: idCounter++,
            name: name,
            category: category,
            price: price,
            imageIcon: "ph-crown",
            imageUrl: imageUrl,
            desc: "Gorra exclusiva de nuestra colección. Calidad de importación."
        });
    }
});


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

// Herramientas del catálogo
const searchInput = document.getElementById('product-search');
const sortSelect = document.getElementById('product-sort');
const catalogCount = document.getElementById('catalog-count');

// Modal Elementos
const modalOverlay = document.getElementById('quick-view-modal');
const closeModalBtn = document.getElementById('close-modal');
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

// Catálogo: "Todas", búsqueda y ordenamiento
function getCatalogProducts() {
    const term = (searchInput?.value || '').trim().toLowerCase();

    let result = products.filter(product => {
        if (!term) return true;

        return (
            product.name.toLowerCase().includes(term) ||
            product.price.toString().includes(term)
        );
    });

    const sort = sortSelect?.value || 'featured';

    if (sort === 'price-low') {
        result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
        result.sort((a, b) => b.price - a.price);
    } else if (sort === 'name') {
        result.sort((a, b) =>
            a.name.localeCompare(b.name, 'es', { sensitivity: 'base' })
        );
    }

    return result;
}

function renderCatalog() {
    if (!productGrid) return;

    productGrid.innerHTML = '';

    const visibleProducts = getCatalogProducts();

    if (catalogCount) {
        catalogCount.textContent =
            `${visibleProducts.length} ${visibleProducts.length === 1 ? 'modelo' : 'modelos'}`;
    }

    if (visibleProducts.length === 0) {
        productGrid.innerHTML = `
            <div class="catalog-empty">
                <i class="ph ph-magnifying-glass"></i>
                <h3>No encontramos esa gorra</h3>
                <p>Prueba con otro nombre o limpia la búsqueda para ver toda la colección.</p>
                <button type="button" onclick="clearProductSearch()">Ver todas</button>
            </div>
        `;
        return;
    }

    visibleProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card reveal active';

        const imageHTML = product.imageUrl
            ? `<img src="${product.imageUrl}" alt="${product.name}" class="product-img" loading="lazy">`
            : `<i class="ph ${product.imageIcon} img-placeholder"></i>`;

        card.innerHTML = `
            <div class="product-image-container" onclick="openModal(${product.id})">
                ${imageHTML}
            </div>

            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-price">
                    <span>$</span>${product.price.toFixed(2)}
                </div>
            </div>

            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                Añadir al Carrito
            </button>
        `;

        productGrid.appendChild(card);
    });
}

function clearProductSearch() {
    if (searchInput) {
        searchInput.value = '';
    }

    if (sortSelect) {
        sortSelect.value = 'featured';
    }

    renderCatalog();
}

// Buscar mientras escribes
if (searchInput) {
    searchInput.addEventListener('input', renderCatalog);
}

// Ordenar al cambiar el selector
if (sortSelect) {
    sortSelect.addEventListener('change', renderCatalog);
}

// Modal Logic
let currentModalProductId = null;

function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if(!product) return;

    currentModalProductId = productId;
    
    const modalImageContainer = document.querySelector('.modal-image');
    if (product.imageUrl) {
        modalImageContainer.innerHTML = `<img src="${product.imageUrl}" alt="${product.name}" class="modal-real-img" id="modal-icon">`;
    } else {
        modalImageContainer.innerHTML = `<i id="modal-icon" class="ph ${product.imageIcon}"></i>`;
    }
    
    document.getElementById('modal-title').textContent = product.name;
    modalCategory.textContent = "Colección Top Style";
    modalPrice.textContent = `$${product.price.toFixed(2)}`;
    document.querySelector('.modal-description').textContent = product.desc;

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
    
    cartButton.classList.remove('pulse-anim');
    void cartButton.offsetWidth;
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

function toggleCart() {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('active');
}

cartButton.addEventListener('click', toggleCart);
closeCartBtn.addEventListener('click', toggleCart);
cartOverlay.addEventListener('click', toggleCart);

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i class="ph ph-check-circle"></i>
        <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

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
    
    let orderMessage = "¡Hola Top Style Caps! Quiero hacer el siguiente pedido:\n\n";
    cart.forEach(item => {
        orderMessage += `- ${item.quantity}x ${item.name} ($${(item.price * item.quantity).toFixed(2)})\n`;
    });
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    orderMessage += `\nTotal a pagar: $${totalPrice.toFixed(2)}\n\n¿Me pueden confirmar disponibilidad para hacer el pago?`;

    navigator.clipboard.writeText(orderMessage).then(() => {
        alert("¡Tu pedido ha sido copiado al portapapeles!\n\nTe redirigiremos a nuestro Instagram. Solo tienes que pegarlo en un mensaje directo (DM) para concretar tu compra.");
        window.open("https://www.instagram.com/top.style.cap/", "_blank");
        cart = [];
        updateCartUI();
        toggleCart();
    }).catch(err => {
        alert("Te redirigiremos a nuestro Instagram para concretar la compra. ¡Escríbenos por DM!");
        window.open("https://www.instagram.com/top.style.cap/", "_blank");
        cart = [];
        updateCartUI();
        toggleCart();
    });
});


// Asistente de compra Top Style IA
const assistant = document.getElementById('shopping-assistant');
const assistantToggle = document.getElementById('assistant-toggle');
const assistantClose = document.getElementById('assistant-close');
const assistantPanel = assistant?.querySelector('.assistant-panel');
const assistantMessages = document.getElementById('assistant-messages');
const assistantForm = document.getElementById('assistant-form');
const assistantInput = document.getElementById('assistant-input');
const assistantSuggestions = document.querySelectorAll('[data-assistant]');

function toggleAssistant(force) {
    if (!assistant || !assistantPanel) return;
    const open = typeof force === 'boolean' ? force : !assistant.classList.contains('open');
    assistant.classList.toggle('open', open);
    assistantToggle?.setAttribute('aria-expanded', String(open));
    assistantPanel.setAttribute('aria-hidden', String(!open));
    if (open) setTimeout(() => assistantInput?.focus(), 120);
}

assistantToggle?.addEventListener('click', () => toggleAssistant());
assistantClose?.addEventListener('click', () => toggleAssistant(false));

function addAssistantMessage(text, type = 'bot') {
    if (!assistantMessages) return;
    const message = document.createElement('div');
    message.className = `assistant-message ${type}`;
    message.innerHTML = type === 'bot'
        ? `<span class="message-avatar"><i class="ph ph-sparkle"></i></span><div>${text}</div>`
        : `<div>${text}</div>`;
    assistantMessages.appendChild(message);
    assistantMessages.scrollTop = assistantMessages.scrollHeight;
}

function money(value) {
    return `$${Number(value).toFixed(2)}`;
}

function recommendProducts(message) {
    const text = message.toLowerCase();
    let matches = [...products];

    const budgetMatch = text.match(/(?:\$|usd|dólares?|presupuesto|máximo|maximo|menos de|hasta)\s*(\d+(?:[.,]\d+)?)/i);
    if (budgetMatch) {
        const budget = parseFloat(budgetMatch[1].replace(',', '.'));
        matches = matches.filter(p => p.price <= budget);
    }

    if (/barat|económ|menos|presupuesto|precio bajo|low/i.test(text)) {
        matches.sort((a, b) => a.price - b.price);
    } else if (/cara|premium|exclusiv|lujo/i.test(text)) {
        matches.sort((a, b) => b.price - a.price);
    }

    const keywordGroups = [
        { re: /deport|nba|baseball|boston|york|la |bulls|raiders|astros/i, terms: ['sports', 'new york', 'la', 'boston', 'bulls', 'raiders', 'astros'] },
        { re: /colab|artista|natanael|wstcol|muratravis|baez|richard/i, terms: ['natanael', 'wstcol', 'muratravis', 'baez', 'richard'] },
        { re: /cartas|casino|ruleta|apostar/i, terms: ['cartas', 'ruleta', 'apostar'] },
        { re: /relig|santa|judas|cruz|dios|oveja/i, terms: ['san judas', 'santa', 'cruces', 'dios', 'oveja'] }
    ];

    const group = keywordGroups.find(g => g.re.test(text));
    if (group) {
        const specific = matches.filter(p => group.terms.some(term => p.name.toLowerCase().includes(term)));
        if (specific.length) matches = specific;
    }

    return matches.slice(0, 3);
}

function assistantReply(message) {
    const text = message.toLowerCase();

    if (/cómo compro|como compro|comprar|pedido|pago|finalizar|checkout|instagram|ig|dm/i.test(text)) {
        return `Facilísimo 👌 Elige una o varias gorras, añádelas al carrito y pulsa <strong>“Finalizar pedido”</strong>. Te prepararé el mensaje con tu pedido y te llevaré al Instagram oficial <strong>@top.style.cap</strong> para confirmar disponibilidad y pago.`;
    }

    if (/hola|hey|buenas|ayuda|ayúdame|ayudame/i.test(text)) {
        return `¡Claro! 😎 Puedo ayudarte a encontrar modelos por <strong>precio, estilo o nombre</strong>. Por ejemplo: “quiero algo de menos de $20” o “busco una deportiva”.`;
    }

    if (/instagram|ig|redes|tiktok/i.test(text)) {
        return `Nuestro Instagram es <strong>@top.style.cap</strong>. Desde ahí puedes hablar directamente con Top Style y confirmar tu compra. También tienes el botón de Instagram aquí abajo.`;
    }

    const recommendations = recommendProducts(message);
    if (recommendations.length) {
        const names = recommendations.map(p => `<strong>${p.name}</strong> — ${money(p.price)}`).join('<br>');
        return `Mira estas opciones que encontré para ti 👇<br>${names}<br><br>Si alguna te gusta, toca su tarjeta para verla y añadirla al carrito.`;
    }

    const exact = products.find(p => p.name.toLowerCase().includes(text.trim()));
    if (exact) {
        return `Encontré <strong>${exact.name}</strong> por <strong>${money(exact.price)}</strong>. Puedes buscarla en el catálogo o decirme “añádela” y te indico el siguiente paso.`;
    }

    return `Puedo afinar la búsqueda si me das una pista. Prueba con <strong>“menos de $20”</strong>, <strong>“quiero algo deportivo”</strong>, <strong>“busco una colaboración”</strong> o dime el nombre de una gorra.`;
}

function handleAssistantMessage(text) {
    const clean = text.trim();
    if (!clean) return;

    addAssistantMessage(clean, 'user');

    const lower = clean.toLowerCase();
    const addMatch = lower.match(/(?:añade|anade|agrega|mete|quiero)\s+(?:la\s+)?(.+)/i);
    if (addMatch && /añade|anade|agrega|mete/.test(lower)) {
        const product = products.find(p => p.name.toLowerCase().includes(addMatch[1].trim()));
        if (product) {
            addToCart(product.id);
            addAssistantMessage(`Listo 😎 Añadí <strong>${product.name}</strong> al carrito por ${money(product.price)}. Cuando quieras, abre el carrito y finaliza tu pedido por Instagram.`);
            return;
        }
    }

    setTimeout(() => addAssistantMessage(assistantReply(clean)), 220);
}

assistantForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = assistantInput?.value || '';
    if (assistantInput) assistantInput.value = '';
    handleAssistantMessage(text);
});

assistantSuggestions.forEach(button => {
    button.addEventListener('click', () => handleAssistantMessage(button.dataset.assistant || ''));
});


document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
    updateCartUI();
});
