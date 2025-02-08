export interface StockData {
  id: number;
  name: string;
  symbol: string;
  price: number;
  chartImage: string;
  peRatio: number;
  grossMargin: number;
  ttmEPS: number;
  epsGrowth: number;
  deRatio: number;
  change: string;
}

export type SwipeDirection = 'left' | 'right' | 'top' | 'bottom'; 