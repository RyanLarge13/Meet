import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../components/NumberOfEvents";
import { mockData } from "../mock_data.js";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("making sure a text box element has rendered correctly", () => {
    expect(NumberOfEventsWrapper.find(".number-of-events")).toHaveLength(1);
  });

  //I need help on this one... Not sure how to do this one right...
  test("Checking for the change in number of events within the text box", () => {
    const number = mockData.length;
    expect(NumberOfEventsWrapper.prop("number")).toBe(number);
  });
});
