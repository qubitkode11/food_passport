import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './ProductTable.css';

const categories = [
  {
    code: 'CAT-01',
    name: 'Confectionery & Snacks',
    brands: [
      'Cadbury','Oreo','KitKat','Nestlé','Mars Wrigley',
      "Allen's","Arnott's",'Cobs','Sour Patch Kids','Lotus Biscoff','Snack Brands',
    ],
    format: 'Dry / Ambient',
  },
  {
    code: 'CAT-02',
    name: 'Pantry Essentials',
    brands: [
      'Sandhurst',"McKenzie's",'SPC','Spiral Foods',"Leggo's",'Chicken Tonight',
      'Well&Good','Riverina Grove','Slendier','Mingle',"Green's",'Tabasco',
      'Beerenberg',"Mayver's",'Ebo Raw','Pure Harvest',"Taylor's",'Lotus Celtic Sea Salt',
    ],
    format: 'Dry / Ambient',
  },
  {
    code: 'CAT-03',
    name: 'Healthy Living',
    brands: [
      'Locako','Nōshu','Piranha','Food for Health','DJ&A','Fodmapped',
      'Brookfarm','Bains Wholefoods','Orgran','Splits Veggie Crispbread',
    ],
    format: 'Dry / Ambient',
  },
];

const ProductTable = () => {
  const headerRef = useScrollReveal();
  const tableRef  = useScrollReveal();

  return (
    <section className="section products-section" id="products">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <div className="eyebrow">Our Product Range</div>
          <h2 className="section-title">What We Export</h2>
          <p className="section-body">
            Three core categories, dozens of brands — all Australian-made and ready for global export.
          </p>
        </div>

        <div className="table-wrap reveal" ref={tableRef}>
          <table className="manifest-table" aria-label="Product categories export manifest">
            <thead>
              <tr>
                <th>Cat.</th>
                <th>Category</th>
                <th>Key Brands</th>
                <th>Format</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => (
                <tr key={cat.code}>
                  <td><span className="cat-code">{cat.code}</span></td>
                  <td><span className="cat-name">{cat.name}</span></td>
                  <td>
                    <div className="brand-list">
                      {cat.brands.map((b) => (
                        <span className="brand-pill" key={b}>{b}</span>
                      ))}
                    </div>
                  </td>
                  <td><span className="format-badge">{cat.format}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProductTable;
