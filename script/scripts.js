document.addEventListener('DOMContentLoaded', () => {
  fetchMedalRankings();
  fetchNewsUpdates();
});

function fetchMedalRankings() {
  const medalData = [
      { country: 'United States of America', gold: 19, silver: 26, bronze: 26, total: 71 },
      { country: 'China', gold: 19, silver: 15, bronze: 11, total: 45 },
      { country: 'France', gold: 12, silver: 14, bronze: 18, total: 44 },
      { country: 'Australia', gold: 12, silver: 11, bronze: 8, total: 31 },
      { country: 'Great Britain', gold: 10, silver: 12, bronze: 15, total: 37 },
      { country: 'Republic of Korea', gold: 10, silver: 7, bronze: 7, total: 24 },
      { country: 'Japan', gold: 9, silver: 5, bronze: 10, total: 24 },
      { country: 'Italy', gold: 7, silver: 10, bronze: 5, total: 22 },
      { country: 'Netherlands', gold: 6, silver: 5, bronze: 4, total: 15 },
      { country: 'Germany', gold: 5, silver: 5, bronze: 2, total: 12 }
  ];

  const table = document.getElementById('table-data');
  medalData.forEach(row => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
          <td>${row.country}</td>
          <td>${row.gold}</td>
          <td>${row.silver}</td>
          <td>${row.bronze}</td>
          <td>${row.total}</td>
      `;
      table.appendChild(tr);
  });
}


function fetchNewsUpdates() {
  const newsData = [
      { title: 'Olympics Opening Ceremony Highlights', date: '2024-07-26' },
      { title: 'First Gold Medal Awarded in Swimming', date: '2024-08-01' },
      { title: 'World Record Broken in Athletics', date: '2024-08-02' },
      { title: 'Gymnast Simone Biles wins silver in floor exercise final', date: '2024-08-04' },
      { title: 'Badminton: Viktor Axelsen defends men’s singles title to win gold', date: '2024-08-05' },
      { title: 'Surfing: Caroline Marks wins semifinal heat in tiebreaker', date: '2024-08-05' },
      { title: 'Soccer: France defeats Egypt 3-1, advances to men\'s final', date: '2024-08-05' },
      { title: '3x3 basketball: USA women defeat Canada for bronze', date: '2024-08-06' },
  ];

  const news_area = document.getElementById('news-area');
  newsData.forEach(news => {
      const div = document.createElement('div');
      div.innerHTML = `${news.date} : <strong>${news.title}</strong>`;
      news_area.appendChild(div);
  });
}
