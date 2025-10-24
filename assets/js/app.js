const collectionsData = [
  {
    slug: 'modern-art',
    name: 'Modern Art Koleksiyonu',
    coverImage: '../assets/img/modern-art-cover.jpg',
    galleryImages: [
      '../assets/img/modern-art-1.jpg',
      '../assets/img/modern-art-2.jpg',
      '../assets/img/modern-art-3.jpg'
    ],
    orderCodes: ['MOD-001', 'MOD-002', 'MOD-003'],
    description:
      'Modern Art koleksiyonu, yalın ve geometrik formları canlı renklerle birleştirerek çağdaş mekanlara güçlü bir ifade kazandırır.'
  },
  {
    slug: 'nature-serenity',
    name: 'Doğa ve Sükûnet Koleksiyonu',
    coverImage: '../assets/img/nature-serenity-cover.jpg',
    galleryImages: [
      '../assets/img/nature-serenity-1.jpg',
      '../assets/img/nature-serenity-2.jpg',
      '../assets/img/nature-serenity-3.jpg'
    ],
    orderCodes: ['NTR-101', 'NTR-102'],
    description:
      'Doğa ve Sükûnet koleksiyonu, pastel tonlar ve sakinleştirici manzaralarla yaşam alanlarında dinginlik ve huzur yaratır.'
  },
  {
    slug: 'monochrome-elegance',
    name: 'Monokrom Zarafet Koleksiyonu',
    coverImage: '../assets/img/monochrome-elegance-cover.jpg',
    galleryImages: [
      '../assets/img/monochrome-elegance-1.jpg',
      '../assets/img/monochrome-elegance-2.jpg'
    ],
    orderCodes: ['MNE-210', 'MNE-220', 'MNE-230'],
    description:
      'Monokrom Zarafet koleksiyonu, siyah-beyaz kontrastını kullanarak minimal ve sofistike atmosferler oluşturur.'
  }
];

window.collectionsData = collectionsData;

document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.querySelector('[data-collection-list]');
  const detailContainer = document.querySelector('[data-collection-detail]');
  const currentYearElement = document.getElementById('currentYear');

  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  if (listContainer) {
    listContainer.innerHTML = collectionsData
      .map(
        (collection) => `
          <article class="glass-card flex flex-col overflow-hidden">
            <div class="relative">
              <div class="aspect-[4/3] overflow-hidden">
                <img src="${collection.coverImage.replace('..', '.')}" alt="${collection.name}" class="h-full w-full object-cover" />
              </div>
            </div>
            <div class="flex flex-1 flex-col gap-4 p-6">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-semibold text-slate-950">${collection.name}</h3>
                <span class="text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark">${collection.slug.replace('-', ' ')}</span>
              </div>
              <p class="text-sm text-slate-600">${collection.description}</p>
              <div class="mt-auto flex items-center justify-between">
                <div class="flex gap-2">
                  ${collection.orderCodes
                    .map(
                      (code) => `
                        <span class="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
                          ${code}
                        </span>
                      `
                    )
                    .join('')}
                </div>
                <a href="collections/${collection.slug}.html" class="text-sm font-semibold text-primary-dark transition hover:text-primary">
                  İncele
                </a>
              </div>
            </div>
          </article>
        `
      )
      .join('');
  }

  if (detailContainer) {
    const slug = detailContainer.closest('[data-collection-slug]')?.dataset.collectionSlug;
    const collection = collectionsData.find((item) => item.slug === slug);

    if (!collection) {
      detailContainer.innerHTML = `<p class="text-center text-slate-600">Koleksiyon bulunamadı.</p>`;
      return;
    }

    const nameElement = detailContainer.querySelector('[data-collection-name]');
    const coverElement = detailContainer.querySelector('[data-collection-cover]');
    const orderCodesContainer = detailContainer.querySelector('[data-order-codes]');
    const galleryGrid = detailContainer.querySelector('[data-gallery-grid]');
    const descriptionElement = detailContainer.querySelector('[data-collection-description]');

    if (nameElement) nameElement.textContent = collection.name;
    if (descriptionElement) descriptionElement.textContent = collection.description;
    if (coverElement) {
      coverElement.src = collection.coverImage;
      coverElement.alt = collection.name;
    }
    if (orderCodesContainer) {
      orderCodesContainer.innerHTML = collection.orderCodes
        .map(
          (code) => `
            <span class="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-4 py-1 text-xs font-medium text-slate-600">
              ${code}
            </span>
          `
        )
        .join('');
    }
    if (galleryGrid) {
      galleryGrid.innerHTML = collection.galleryImages
        .map(
          (image, index) => `
            <figure class="glass-card overflow-hidden">
              <img src="${image}" alt="${collection.name} görsel ${index + 1}" class="h-full w-full object-cover" />
            </figure>
          `
        )
        .join('');
    }
  }
});
