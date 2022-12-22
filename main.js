const Sort = () => {
    const sortOptions = ["Featured", "Best Selling", "Alphabetically, A-Z", "Alphabetically, Z-A", "Price, low to high", "Price, high to low", "Date, new to old", "Date, old to new"];
    const sortOptionsList = sortOptions.map((option, index) => <option key={index}>{option}</option>);
    return (
        <div className="collection-sort">
        <label>Sort by:</label>
        <select>{sortOptionsList}</select>
        </div>
    );
};

const Filter = () => {
    const filterOptions = ["All Jackets", "2016", "jacket", "jackets", "layers", "Obermeyer", "Roxy", "womens"];
    const filterOptionsList = filterOptions.map((option, index) => <option key={index}>{option}</option>);
    return (
        <div className="collection-sort">
        <label>Filter by:</label>
        <select>{filterOptionsList}</select>
        </div>
    );
};

const Nav = () => {
    return (
    <nav className="product-filter">
      <h1>Jackets</h1>

      <div className="sort">
        <Filter />
        <Sort />
      </div>

    </nav>
    );
};

const Product = () => {
    return (
        <div className="product-card">
        <div className="product-image">
          <img
            src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
          />
        </div>
        <div className="product-info">
          <h5>Winter Jacket</h5>
          <h6>$99.99</h6>
        </div>
      </div>
    );
};

const Products = () => {
    return (
        <section className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        {/* <Product /> */}
        </section>
    );
};

const Main = () => {
    return (
    <div>
        <Nav />
        <Products />
    </div>
    );
};

ReactDOM.render(<Main />, document.getElementById("app"));