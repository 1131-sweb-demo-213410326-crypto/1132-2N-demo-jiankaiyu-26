const p = document.querySelector('.show-classdemo');
console.log('p', p);

function showClassDemo(item) {
  switch (item) {
    case 'w01_dom_26':
      p.innerHTML = `<iframe src='./demo/w01_dom_26/index.html' width='100%' height='100%' />`;
      break;
    case 'w02_dom_26':
      p.innerHTML = `<iframe src='./demo/w02_dom_26/index.html' width='100%' height='100%' />`;
      break;
    case 'w03_tictactoe_26':
      p.innerHTML = `<iframe src='./demo/w03_tictactoe_26/tictactoe_26.html' width="100%" height="100%" />`;
      break;
    case 'w03_p1_26':
      p.innerHTML = `<iframe src='./demo/w03_basics_26/p1_26/p1_26.html' width="100%" height="100%" />`;
      break;
    case 'w04_p2_26':
      p.innerHTML = `<iframe src='./demo/w04_basics_26/p2_26/p2_26.html' width="100%" height="100%" />`;
      break;
  }
}
