import { shallow } from "enzyme";
import SearchItem from "./SearchItem";

describe("SearchItem", () => {
  let searchItemContainer;
  beforeEach(() => (searchItemContainer = shallow(<SearchItem />)));
  it("should render the div element", () => {
    expect(searchItemContainer.find("div").length).toBeGreaterThanOrEqual(1);
  });
  it("renders SearchItem correctly", () => {
    expect(searchItemContainer).toMatchSnapshot();
  });
});
