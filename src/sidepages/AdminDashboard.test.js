import { shallow } from "enzyme";
import AdminDashboard from "./AdminDashboard";

describe("AdminDashboard", () => {
  let adminDashboardContainer;

  beforeEach(() => (adminDashboardContainer = shallow(<AdminDashboard />)));

  it("should render the div element", () => {
    expect(adminDashboardContainer.find("div").length).toBeGreaterThanOrEqual(
      1
    );
  });
  it("renders AdminDashboard correctly", () => {
    expect(adminDashboardContainer).toMatchSnapshot();
  });
});
