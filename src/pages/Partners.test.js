import { shallow } from "enzyme";
import Partners from "./Partners";

describe("Partners", () => {
  let partnersContainer;

  beforeEach(() => (partnersContainer = shallow(<Partners />)));

  test("should render the div element", () => {
    expect(partnersContainer.find("div")).toBeTruthy();
  });
  it("renders Partners correctly", () => {
    expect(partnersContainer).toMatchSnapshot();
  });
});
