// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { products } from "../../dummyData/products"

export default function handler(req, res) {
  res.status(200).json(products)
}
