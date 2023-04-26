import { productList } from '@/data/dataItems';

export default async function handler(req, res) {
  res.status(200).json({ results: productList });
}
