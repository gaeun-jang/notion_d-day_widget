(function () {
  const TODAY = new Date();
  const D_DAY = new Date('2024-03-18');
  const GAP = D_DAY - TODAY;
  const GAP_DAY = Math.floor(GAP / (1000 * 60 * 60 * 24));

  const get = (target) => document.querySelector(target);
  const $d_day = get('.d-day');

  const get_text = (gap_day) => {
    if (gap_day == 0) {
      $d_day.innerHTML = 'DAY';
    } else {
      $d_day.innerHTML = `${gap_day}`;
    }
  };

  get_text(GAP_DAY);
});
