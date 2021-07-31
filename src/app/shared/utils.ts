
export function getCustomDate(unix_timestamp: number, options: Intl.DateTimeFormatOptions): string {
    const date = new Date(unix_timestamp * 1000);
    return new Intl.DateTimeFormat('default', options).format(date);
}

export function groupForecastByDay(day: string): string {
    return day.slice(0, 10);
}
