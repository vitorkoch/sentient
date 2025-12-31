export function getIsoDateString(date: Date) {
	return date.toISOString().split('T')[0]!
}

export function getDateByIsoDateString(isoDateString: string) {
	return new Date(`${isoDateString}T00:00`)
}
