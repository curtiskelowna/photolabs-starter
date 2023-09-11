import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = ({ topics }) => {
  const topicInfo = topics.map((topic) => {
    return <TopicListItem key={topic.id} topicData={topic} />;
  });

  return (
    <div className="top-nav-bar__topic-list">
      {topicInfo}
    </div>
  );
};

export default TopicList;