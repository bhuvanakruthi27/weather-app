export function getCityDate(timezoneSec) {
  const now = new Date();
  const cityTime = new Date(now.getTime() + (timezoneSec + now.getTimezoneOffset() * 60) * 1000);

  return cityTime.toLocaleDateString('en-GB', { 
    weekday: 'long', 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric' 
  });
}

export function getCityTime(timezoneSec) {
  const now = new Date();
  const cityTime = new Date(now.getTime() + (timezoneSec + now.getTimezoneOffset() * 60) * 1000);

  return cityTime.toLocaleTimeString('en-GB', { 
    hour: '2-digit', 
    minute: '2-digit', 
    hour12: true 
  });
}
