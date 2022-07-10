// flow
export type RetailReview = Array<{
  customer: string,
  review: string,
  score: number,
}>;

export type RetailSale = {
  weekEnding: string,
  retailSales: number,
  wholesaleSales: number,
  unitsSold: number,
  retailerMargin: number,
};

export type RetailState = {
  id: string,
  title: string,
  image: string,
  subtitle: string,
  brand: string,
  reviews: RetailReview,
  details: Array<string>,
  tags: Array<string>,
  sales: Array<RetailSale>,
};
