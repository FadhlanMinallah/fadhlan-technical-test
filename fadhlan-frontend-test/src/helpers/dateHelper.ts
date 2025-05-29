export const getCurrentDate = (): string => {
  const date = new Date();
  return date.toISOString().split('T')[0]; // Returns date in YYYY-MM-DD format
};

// Get formatted date and time
export const getCurrentDateTime = (): string => {
  const date = new Date();
  return date.toISOString().replace('T', ' ').split('.')[0]; // Returns date in YYYY-MM-DD HH:mm:ss format
};

// Get formatted date with custom format
export const formatDate = (date: Date, format: string = 'YYYY-MM-DD'): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return format
    .replace('YYYY', year.toString())
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
};