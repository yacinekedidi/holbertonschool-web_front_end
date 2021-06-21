const globalVariable = "Welcome";
const outer = function () {
  alert(globalVariable);
  const course = "Holberton";
  const inner = function () {
    alert(`${globalVariable} ${course}`);
    const exclamation = "!";
    const inception = function () {
      alert(`${globalVariable} ${course}${exclamation}`);
    };
    inception();
  };
  inner();
};
outer();
