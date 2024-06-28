
export const fetcher = (url: string) => fetch(url).then(res => res.json())

export const transformCurrency = (value: number): string => {
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND', currencyDisplay: 'code' });
}
