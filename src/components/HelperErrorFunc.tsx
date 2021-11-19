export const checkError = (
  questions: { Question: string; Answer: string | { label: string }[] }[],
  usersSelections: Record<string, string>
): boolean => {
  questions.forEach((q) => {
    if (!usersSelections[q.Question + "Other"]) {
      delete usersSelections[q.Question + "Other"];
    }

    if (!usersSelections[q.Question]) {
      delete usersSelections[q.Question];
    }
  });

  if (questions.every((key) => key.Question in usersSelections)) {
    //Get the number of Other options user selected
    const numberOfOther = Object.values(usersSelections).reduce(
      (acc, curr) => (curr === "Other" ? acc + 1 : acc),
      0
    );
    //Get the number of Question+Other properties in usersSelections
    const numberOfOtherText = Object.keys(usersSelections).reduce(
      (acc, curr) => (curr.includes("Other") ? acc + 1 : acc),
      0
    );
    // If both numbers are equal, set error to false, else true
    if (numberOfOther === numberOfOtherText) {
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
};
