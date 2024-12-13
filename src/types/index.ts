export interface Product {
  id: string;
  name: string;
  addedAt: string;
  currentPrice: number;
  targetPrice: number | null;
}