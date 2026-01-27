// ========================================
// NEWCRETE Store - 앱 로직
// ========================================

// DOM 요소
const productsGrid = document.getElementById('products-grid');
const floatingKakao = document.getElementById('floating-kakao');

// ========================================
// 초기화
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupContactButtons();
});

// ========================================
// 상품 렌더링
// ========================================
function renderProducts() {
    if (!productsGrid) return;

    if (!products || products.length === 0) {
        productsGrid.innerHTML = `
      <div class="no-products">
        <p>등록된 상품이 없습니다.</p>
      </div>
    `;
        return;
    }

    productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
}

// ========================================
// 상품 카드 생성
// ========================================
function createProductCard(product) {
    const tagsHtml = product.tags
        ? product.tags.slice(0, 2).map(tag => `<span class="badge">${tag}</span>`).join('')
        : '';

    // 상품 페이지 URL 생성 (id를 slug로 변환)
    const productUrl = `products/${product.slug || 'newcrete-fr'}.html`;

    return `
    <a href="${productUrl}" class="product-card">
      <div class="product-image-container">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="product-image"
          loading="lazy"
        >
        ${tagsHtml ? `<div class="product-badge">${tagsHtml}</div>` : ''}
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-subtitle">${product.subtitle || ''}</p>
        <span class="product-cta">상세보기</span>
      </div>
    </a>
  `;
}

// ========================================
// 연락처 버튼 설정
// ========================================
function setupContactButtons() {
    // 카카오톡 설정 (URL이 있을 경우에만 표시)
    if (contactInfo && contactInfo.kakaoUrl) {
        if (floatingKakao) {
            floatingKakao.href = contactInfo.kakaoUrl;
            floatingKakao.style.display = 'flex';
        }
    }
}
