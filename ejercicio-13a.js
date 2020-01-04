var primos = [];

function esPrimo(n) {
  if (n > 3) {
    for (var i = 2; i < n / 2; i++) {
      if(n % i == 0) {
        return False;
      }
    }
  }
  return True;
}

function primerosPrimos(n) {
  var i = 2;
  while(primos.length < n) {
    if(esPrimo(i)) {
      primos.push(i);
    }
    i++;
  }
}
