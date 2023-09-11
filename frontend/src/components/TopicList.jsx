import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    label: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    label: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    label: "People",
  },
];

const TopicList = () => {
  const topics = sampleDataForTopicList.map((topic) => {
    return <TopicListItem key={topic.id} topicData={topic} />;
  });

  return (
    <div className="top-nav-bar__topic-list">
      {topics}
    </div>
  );
};

export default TopicList;