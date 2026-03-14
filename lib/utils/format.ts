export function formatPrice(price: number, currency: string): string {
  if (currency === "៛") return `${price.toLocaleString("km-KH")}៛`;
  return `${currency}${price.toLocaleString()}`;
}
