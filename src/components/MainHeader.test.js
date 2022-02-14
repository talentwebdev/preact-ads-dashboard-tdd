import { shallow } from "enzyme";
import MainHeader from "./MainHeader";

describe("MainHeader", () => {
  let mainHeaderContainer;

  beforeEach(() => (mainHeaderContainer = shallow(<MainHeader />)));

  it("should render the div element", () => {
    expect(mainHeaderContainer.find("div").length).toBeGreaterThanOrEqual(1);
  });
  it("renders MainHeader correctly", () => {
    expect(mainHeaderContainer).toMatchSnapshot();
  });
});
