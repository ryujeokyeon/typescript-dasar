import { sayHello } from "../src/say-hello";
describe("sayhello", () => {
  it("should return Hello annisa", () => {
    expect(sayHello("annisa")).toBe("Hello annisa");
  });
});
