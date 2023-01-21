import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const products = [
    {
      id: 'p1',
      price: 6,
      title: "Book",
      description: "Read your book here",
  },
  {
    id: 'p2',
    price: 16,
    title: "Second Book",
    description: "Read your second book here",
},  {
  id: 'p3',
  price: 26,
  title: "Third Book",
  description: "Read your third book here",
},
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
    
      <ul>
      {products.map(items=> 
        <ProductItem
        key={items.id}
        id={items.id}
          title={items.title}
          price={items.price}
          description={items.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
