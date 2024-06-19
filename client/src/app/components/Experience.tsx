import React from "react";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import { Image } from "primereact/image";

const timelineItems = [
  {
    title: "Software Engineering Intern",
    company: "Podsmart AI",
    date: "May 2024 - Present",
    icon: "pi pi-briefcase",
  },
];

const Experience = () => {
  const customizedContent = (item: any) => {
    return (
      <Card className="my-4" title={item.title} subTitle={item.company}>
        <ul className="list-disc px-4">
          <li>
            Assisted with full-stack software development of AI products for the
            company
          </li>
          <li>Utilised React.js with Shadcn UI to create new webpages</li>
          <li>
            Used OpenAPI, PostgreSQL with SQLAlchemy ORM and Firebase for the
            backend
          </li>
          <li>
            Engaged in Agile development, implemented CI/CD and attended daily
            stand-ups
          </li>
        </ul>
      </Card>
    );
  };

  return (
    <Timeline
      value={timelineItems}
      content={customizedContent}
      opposite={(item) => item.date}
      className="bg-dun-700"
    />
  );
};

export default Experience;
