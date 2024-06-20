import { Product } from "../types";

interface ProductFormProps {
  product?: Product;
}

function ProductForm(props: Readonly<ProductFormProps>) {
  const { product } = props;

  return (
    <>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="name">
          Product name:
        </label>
        <input
          id="name"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Name of the product"
          name="name"
          defaultValue={product?.name}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="price">
          Price:
        </label>
        <input
          id="price"
          name="price"
          type="number"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Price of the product. ej. 200, 300"
          defaultValue={product?.price}
        />
      </div>
    </>
  );
}

export default ProductForm;
