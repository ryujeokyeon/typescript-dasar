describe("Any", () => {
  it("should support in typescript", () => {
    const person: any = {
      id: 1,
      name: "Annisa Fitriani Haqiqi",
      age: 22,
    };

    person.age = 23;
    person.address = "Indonesia";

    console.info(person);
  });
});
