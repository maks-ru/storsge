export interface Item {
  id: number;
  type: 'Аукцион' | 'Прямые продажи';
  name: string;
  city: string;
  seller: string;
  category: string;
  description: string;
  price: string;
  quantity: number;
  costPerPiece: number,
}