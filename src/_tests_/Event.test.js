import React from "react";
import { shallow } from "enzyme";
import Event from "../components/Event";
import { mockEventData } from "../mock_data";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockEventData} />);
  });

  test("Event summary to exsist", () => {
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  });

  test("Event description to exsist", () => {
    expect(EventWrapper.find(".description")).toHaveLength(1);
  });

  test("expect details to be set to false initially", () => {
    expect(EventWrapper.state("details")).toBe(false);
  });

  test("expect details to be set to true when clicked and event details to be shown", () => {
    EventWrapper.find(".details").simulate("click");
    expect(EventWrapper.state("details")).toBe(true);
    expect(EventWrapper.find(".details-section")).toHaveLength(1);
  });
});
