import { shallow } from "enzyme";
import MyLinks from "./MyLinks";

describe("MyLinks", () => {
  let myLinksContainer;
  beforeEach(() => (myLinksContainer = shallow(<MyLinks />)));
  test("should render the div element", () => {
    expect(myLinksContainer.find("div")).toBeTruthy();
  });
  it("renders MyLinks correctly", () => {
    expect(myLinksContainer).toMatchSnapshot();
  });
});
