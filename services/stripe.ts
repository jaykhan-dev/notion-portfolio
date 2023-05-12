export const stripe = require("stripe")(process.env.STRIPE_API);

export default async function getProducts(req: any, res: any) {
  const products = await stripe.products.list();
  res.status(200).json(products);
  console.log(products);
}
