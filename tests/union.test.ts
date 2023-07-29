describe("Union Types", () => {
  it("should support in typescript", () => {
    let sample: boolean | number | string = "max";
    console.info(sample);

    sample = 10;
    console.info(sample);

    sample = false;
    console.info(sample);
  });

  it("should support typeof operator", function () {
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process("max")).toBe("MAX");
    expect(process(10)).toBe(12);
    expect(process(false)).toBe(true);
  });
});
