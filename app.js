const cover = document.querySelector('#cover');
const invitation = document.querySelector('#invitation');
const ambientHearts = document.querySelector('#ambientHearts');
const burstHearts = document.querySelector('#burstHearts');

function makeHeart(container, className = '') {
  const heart = document.createElement('span');
  heart.className = className;
  heart.textContent = '♥';
  return heart;
}

for (let i = 0; i < 18; i += 1) {
  const heart = makeHeart(ambientHearts, 'ambient-heart');
  heart.style.setProperty('--left', `${4 + Math.random() * 92}%`);
  heart.style.setProperty('--top', `${4 + Math.random() * 84}%`);
  heart.style.setProperty('--size', `${10 + Math.random() * 18}px`);
  heart.style.setProperty('--delay', `${Math.random() * -8}s`);
  heart.style.setProperty('--duration', `${5 + Math.random() * 6}s`);
  ambientHearts.append(heart);
}

function burstCardIntoHearts() {
  const total = 64;
  for (let i = 0; i < total; i += 1) {
    const heart = makeHeart(burstHearts, 'burst-heart');
    const angle = Math.random() * Math.PI * 2;
    const distance = 90 + Math.random() * Math.max(innerWidth, innerHeight) * .48;
    heart.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
    heart.style.setProperty('--y', `${Math.sin(angle) * distance}px`);
    heart.style.setProperty('--rotation', `${Math.random() * 500 - 250}deg`);
    heart.style.setProperty('--scale', `${.55 + Math.random() * 1.35}`);
    heart.style.setProperty('--delay', `${Math.random() * .18}s`);
    burstHearts.append(heart);
  }
}

document.querySelector('#openInvitation').addEventListener('click', () => {
  invitation.hidden = false;
  document.body.classList.add('is-open');
  window.scrollTo(0, 0);
  burstCardIntoHearts();
  cover.classList.add('opening');
  setTimeout(() => { cover.hidden = true; burstHearts.replaceChildren(); }, 950);
});
const target = new Date('2026-08-15T09:00:00+05:00');
function updateCountdown() {
  let d = Math.max(0, target - new Date());
  const days = Math.floor(d / 864e5); d %= 864e5;
  const hours = Math.floor(d / 36e5); d %= 36e5;
  const mins = Math.floor(d / 6e4); const secs = Math.floor((d % 6e4) / 1e3);
  document.querySelector('#countdown').textContent = `${days} дн. ${hours} ч ${mins} мин ${secs} сек`;
}
updateCountdown(); setInterval(updateCountdown, 1000);
const start = 5, days = 31, grid = document.querySelector('#calendarDates');
for (let i = 0; i < start + days; i++) { const cell = document.createElement('span'); if (i >= start) { const n = i - start + 1; cell.textContent = n; if (n === 15) cell.className = 'special'; } grid.append(cell); }
