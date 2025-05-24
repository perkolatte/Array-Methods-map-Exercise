const users = [
  { firstName: "Alice", lastName: "Johnson", points: 120 },
  { firstName: "Bob", lastName: "Smith", points: 99 },
  { firstName: "Charlie", lastName: "Brown", points: 180 },
];

console.log(
  users.map(function (user) {
    let membershipStatus = user.points > 100 ? "Premium" : "Standard";
    return {
      fullName: user.firstName + " " + user.lastName,
      membershipStatus: membershipStatus,
    };
  })
);
