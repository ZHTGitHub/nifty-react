export const formatCurrencyManual = (value: number): string => {
    console.log(value)
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}