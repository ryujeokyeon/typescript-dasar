describe("Array", () => {
  it("should same with javascript", () => {
    const names: string[] = ["annisa", "max", "gamin"];
    const values: number[] = [1, 2, 3, 4, 5, 6];

    console.info(names, values);
  });

  it("should support readonly array", () => {
    const hobbies: ReadonlyArray<string> = ["membaca", "tidur"];
    console.info(hobbies);
    console.info(hobbies[0]);
    console.info(hobbies[1]);

    // hobbies[0] = "membaca";
  });

  it("should support tupple", () => {
    const person: readonly [string, number, string, number] = ["Mookang", 12, "maxjuvelian", 10];
    console.info(person);

    console.info(person[0]);
    console.info(person[1]);
    console.info(person[2]);
    console.info(person[3]);
  });
});
