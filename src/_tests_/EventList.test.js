import React from "react";
import { shallow } from "enzyme";
import EventList from "../components/EventList";
import Event from "../components/Event";

describe("<EventList /> component", () => {
  test("render correct number of events", () => {
    const EventListWrapper = shallow(
      <EventList events={[{ _id: 1 }, { _id: 2 }, { _id: 3 }, { _id: 4 }]} />
    );
    expect(EventListWrapper.find(Event)).toHaveLength(4);
  });
});
