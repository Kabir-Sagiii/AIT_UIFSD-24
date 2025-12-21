function findDesignation(experience) {
  if (experience >= 0 && experience <= 2) {
    console.log("He is a Junior Engineer");
  } else if (experience > 2 && experience <= 5) {
    console.log("He is a Senior Engineer");
  } else if (experience > 5 && experience <= 7) {
    console.log("He is a Team Lead");
  } else if (experience > 7 && experience <= 12) {
    console.log("He is a Project Manager");
  } else {
    console.log("Add exp in between 0-12 only");
  }
}

findDesignation(0.8);
