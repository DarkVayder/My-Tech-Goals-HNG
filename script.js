document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const expandBtn = document.querySelector('.expand-btn');
  
    expandBtn.addEventListener('click', () => {
      document.body.classList.toggle('collapsed');
    });
  
    const updateTime = () => {
      const now = new Date();
      const options = { timeZone: 'UTC', timeZoneName: 'short' };
      const currentTimeUTC = now.toLocaleTimeString('en-US', options);
      const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
  
      document.getElementById('currentTimeUTC').textContent = currentTimeUTC;
      document.getElementById('currentDay').textContent = currentDay;
    };
  
    updateTime();
    setInterval(updateTime, 1000);
  });
  