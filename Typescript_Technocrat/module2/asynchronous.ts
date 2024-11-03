{
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data = "Next Level Web Development";
      if (data) {
        resolve(data);
      } else {
        reject("There Was An Error");
      }
    });
  };

  const showData = async () : Promise<string> => {
    const data = await createPromise();
    console.log(data);
    return data
  };
  showData();
}
