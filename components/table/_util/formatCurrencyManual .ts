export const formatCurrencyManual = (value: number): string => {
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}