import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's our Reasearch</h1>
        <p className="pl-desc">
          Robotic Fish design indeed is an upcoming and revolutionizing research
          idea with a lot of challenging and subsequent tasks sustaining in it.
          With the help of hydrodynamics and angular mechnaism adaptable to this
          impulsive idea, we establish a different computational approach.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
