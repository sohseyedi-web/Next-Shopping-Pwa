import { productList } from "@/data/dataItems";

export default async function handler(req, res) {
  
    const { productId } = req.query;
    const product = productList.find((p) => p.id === parseInt(productId));
    res.status(200).json({ results: product });
  
}
