import {
  DraftProductSchema,
  ProductSchema,
  ProductsSchema,
  Product,
} from "../types";
import axios from "axios";
import { safeParse, number, parse, boolean } from "valibot";

type ProductData = {
  [k: string]: FormDataEntryValue;
};

export async function addProduct(data: ProductData) {
  console.log('data', data)
  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      price: +data.price,
    });

    console.log('the result', result)
    if (result.success) {
      console.log("entre");
      const url = `${import.meta.env.VITE_API_URL}/api/products`;
      await axios.post(url, {
        name: result.output.name,
        price: result.output.price,
      });
    } else {
      throw new Error("Data not valid");
    }
  } catch (error) {}
}

export async function getProducts() {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products`;
    const { data } = await axios(url);
    const result = safeParse(ProductsSchema, data.data);
    if (result.success) {
      return result.output;
    } else {
      throw new Error("There was an error...");
    }
  } catch (error) {}
}

export async function getProductById(id: Product["id"]) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    const { data } = await axios(url);
    const result = safeParse(ProductSchema, data.data);
    if (result.success) {
      return result.output;
    } else {
      throw new Error("There was an error...");
    }
  } catch (error) {}
}

export async function updateProduct(data: ProductData, id: Product["id"]) {
  try {
    const booleanResponse = JSON.parse(data.availability as string);

    const result = safeParse(ProductSchema, {
      id,
      name: data.name,
      price: +data.price,
      availability: booleanResponse,
    });

    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
      await axios.put(url, result.output);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProduct(id: Product["id"]) {
  try{
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    await axios.delete(url)
  }catch(error){

  }
}

export async function updateProductAvailability(id: Product["id"]) {
  try{
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    await axios.patch(url)
  }catch(error){
    console.log(error)
  }
}
