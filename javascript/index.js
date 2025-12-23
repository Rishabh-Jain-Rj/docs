const user = {
  name: "Rishabh",
  greet() {
    console.log(this.name);
  },
};

const fn = user.greet;
fn();
