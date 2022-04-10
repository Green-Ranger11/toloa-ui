import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FlagIcon } from "@heroicons/react/outline";

function PostTimeline() {
  return (
    <>
      <VerticalTimeline lineColor={"red"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011-present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<ArchiveIcon />}
        >
          <h3 className="text-sm font-semibold">
            Climate Change for Small Island States
          </h3>
          <h4 className="text-sm">Apia, Samoa</h4>
          <p>
            Explore the impacts of Climate Change - and how it's affecting small
            island states in the Pacific
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "red", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid green" }}
          date="2011-present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<ArchiveIcon />}
        >
          <h3 className="text-sm font-semibold">Rise of NCD's</h3>
          <h4 className="text-sm">Nukualofa, Tonga</h4>
          <p>
            Discuss the rise of Non-communicable diseases; and how it correlates
            to unhealthy eating habits..
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "red", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid green" }}
          date="2011-present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<ArchiveIcon />}
        >
          <h3 className="text-sm font-semibold">
            NGO's Annual General Meeting
          </h3>
          <h4 className="text-sm">Suva, Fiji</h4>
          <p>2022 Annual General Meeting Outcomes </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}

export default PostTimeline;
