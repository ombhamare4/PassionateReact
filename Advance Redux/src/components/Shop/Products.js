import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    itemId: "SKU123",
    price: 29.99,
    name: "Wireless Bluetooth Earbuds",
    description:
      "Enjoy high-quality audio with these wireless earbuds. They provide a comfortable fit and long battery life, making them perfect for workouts, commutes, or everyday use.",
  },
  {
    itemId: "SKU456",
    price: 149.99,
    name: "Smartphone Holder for Car",
    description:
      "Keep your smartphone secure and accessible while driving with this car phone holder. Its adjustable design fits most smartphones and attaches easily to your car's dashboard or windshield.",
  },
  {
    itemId: "SKU789",
    price: 39.95,
    name: "Stainless Steel Insulated Water Bottle",
    description:
      "Stay hydrated on the go with this insulated water bottle. Made from durable stainless steel, it keeps your drinks cold for hours. Perfect for hiking, camping, or everyday use.",
  },
  {
    itemId: "SKU321",
    price: 79.99,
    name: "Wireless Charging Pad",
    description:
      "Charge your compatible devices wirelessly with this charging pad. Its sleek design looks great on any desk or nightstand, and its fast-charging capability saves you time.",
  },
  {
    itemId: "SKU654",
    price: 199.99,
    name: "Noise-Canceling Headphones",
    description:
      "Immerse yourself in your favorite music or podcasts with these noise-canceling headphones. They block out ambient noise for a distraction-free listening experience, whether you're at home, work, or on the go.",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.itemId}
            id={product.itemId}
            title={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
