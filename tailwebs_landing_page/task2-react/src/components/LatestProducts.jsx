import React, { useState, useEffect } from 'react';

// Dummy data including name, image, category, and price as requested
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "Digital Public Goods: Health",
    category: "Articles",
    price: "$0.00 (Open Source)",
    image: "https://picsum.photos/seed/health/400/250"
  },
  {
    id: 2,
    name: "Evolving Digital Infrastructure",
    category: "eGov Updates",
    price: "$50.00 / yr support",
    image: "https://picsum.photos/seed/infra/400/250"
  },
  {
    id: 3,
    name: "Building resilient frontline capability in 2025",
    category: "Milestones",
    price: "$120.00",
    image: "https://picsum.photos/seed/milestone/400/250"
  },
  {
    id: 4,
    name: "Case Study: Sanitation transformation",
    category: "Case Study",
    price: "Free",
    image: "https://picsum.photos/seed/sanit/400/250"
  },
  {
    id: 5,
    name: "Press Release: Impacting 1 Billion",
    category: "Press Awards",
    price: "N/A",
    image: "https://picsum.photos/seed/press/400/250"
  }
];

const CATEGORIES = ["All", "Articles", "Milestones", "Case Study", "eGov Updates", "Press Awards"];

const LatestProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      setProducts(DUMMY_PRODUCTS);
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Filter logic
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="latest-section py-5 bg-light">
      <div className="container py-5">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center mb-5">
            <h2 className="display-6 fw-bold mb-4 mb-lg-0">
            <span className="text-muted fw-normal">Latest at</span>{" "}
            <span className="text-primary">eGov</span>
            </h2>
            
            {/* Search Bar */}
            <div className="w-100" style={{maxWidth: '400px'}}>
                <input 
                    type="text" 
                    className="form-control rounded-pill px-4 py-2 shadow-sm" 
                    placeholder="Search products by name..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>

        {/* Category Filters */}
        <div className="d-flex flex-wrap gap-2 mb-5 justify-content-center justify-content-lg-start">
          {CATEGORIES.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn rounded-pill px-4 shadow-sm fw-medium hover-lift ${
                activeCategory === cat ? 'btn-info text-white' : 'btn-outline-secondary bg-white text-dark border-0'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <span className="ms-3 fw-medium text-muted">Loading products...</span>
          </div>
        ) : (
          <div className="row g-4">
            {/* Empty State */}
            {filteredProducts.length === 0 ? (
              <div className="col-12 py-5 text-center">
                <div className="p-5 bg-white rounded-4 shadow-sm">
                    <h3 className="text-muted mb-3">No results found</h3>
                    <p className="mb-0">We couldn't find any products matching "{searchTerm}" in the "{activeCategory}" category.</p>
                    <button className="btn btn-outline-primary mt-4 rounded-pill" onClick={() => {setSearchTerm(""); setActiveCategory("All");}}>Clear Filters</button>
                </div>
              </div>
            ) : (
              /* Product Cards */
              filteredProducts.map(product => (
                <div key={product.id} className="col-lg-4 col-md-6">
                  <div className="card border-0 shadow-sm h-100 rounded-4 hover-lift">
                    <img src={product.image} className="card-img-top rounded-top-4" alt={product.name} />
                    <div className="card-body p-4 d-flex flex-column">
                      <h5 className="card-title fw-bold mb-2">{product.name}</h5>
                      <p className="text-success fw-bold mb-3">{product.price}</p>
                      <div className="mt-auto">
                        <span className="badge bg-light text-dark border">{product.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestProducts;
