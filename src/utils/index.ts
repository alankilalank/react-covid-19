export const formatNumber = (num: number) =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

export const formatDate = (dateString: Date) => {
  const dt = new Date(dateString);
  return `${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt
    .getDate()
    .toString()
    .padStart(2, '0')}/${dt
    .getFullYear()
    .toString()
    .padStart(4, '0')} ${dt
    .getHours()
    .toString()
    .padStart(2, '0')}:${dt
    .getMinutes()
    .toString()
    .padStart(2, '0')}:${dt
    .getSeconds()
    .toString()
    .padStart(2, '0')}`;
};
