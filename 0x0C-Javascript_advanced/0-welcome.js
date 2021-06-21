const welcome = (firstName, lastName) => {
  const fullName = `${firstName} ${lastName}`;
  const displayFullName = function () {
    alert(`Welcome ${fullName}!`);
  };
  displayFullName();
};
