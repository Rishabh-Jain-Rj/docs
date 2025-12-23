let x = 10;

function foo() {
  console.log(x);
}

x = 30;

function bar() {
  let x = 20;
  foo();
}

bar();
