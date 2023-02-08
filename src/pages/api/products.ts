export const getProduct = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  } catch (err) {
    return console.log(err);
  }
};
export const getSingleProduct = async (id: string) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    return console.log(err);
  }
};
