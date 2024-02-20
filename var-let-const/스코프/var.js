var a = 1;

function func() {
  a = 2;
  if (true) {
    a = 3;
    console.log(a);
  }
  console.log(a);
}

func();

console.log(a);
