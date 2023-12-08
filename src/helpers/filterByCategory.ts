export const filterByCategory = (data: TProductsArr, category: string) => {
  return data.filter((item) => item.category === category);
};
