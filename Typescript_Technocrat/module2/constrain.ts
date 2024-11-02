{
  const addToCourse = <T extends { id: number; name: string; email: string }>(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addToCourse({
    id: 111,
    name: "a",
    email: "a@gmail.com",
  });
  const student2 = addToCourse({
    id: 222,
    name: "b",
    email: "b@gmail.com",
  });
}
