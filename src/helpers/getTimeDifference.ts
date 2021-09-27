export default function getTimeDifference(date: number) {
  const dateFuture = new Date(date);
  const dateNow = new Date();
  let diffInMilliSeconds = Math.abs(dateFuture.getTime() - dateNow.getTime()) / 1000;

  // calculate days
  const days = Math.floor(diffInMilliSeconds / 86400);
  diffInMilliSeconds -= days * 86400;

  // calculate hours
  const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
  diffInMilliSeconds -= hours * 3600;

  // calculate minutes
  const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
  diffInMilliSeconds -= minutes * 60;
  if (days > 0) {
    return (days === 1) ? `${days} dia` : `${days} dias`;
  }
  if (hours > 0) {
    return (hours === 0 || hours === 1) ? `${hours} hora` : `${hours} horas`;
  }

  return (minutes === 0 || hours === 1) ? `${minutes} minuto` : `${minutes} minutos`;
}
