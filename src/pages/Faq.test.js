import { shallow } from "enzyme";
import Faq from "./Faq";

describe("Faq", () => {
  let faqContainer;

  beforeEach(() => (faqContainer = shallow(<Faq />)));

  it("should render the div element", () => {
    expect(faqContainer.find("div")).toBeTruthy();
  });
  it("renders FAQ correctly", () => {
    expect(faqContainer).toMatchSnapshot();
  });
});
