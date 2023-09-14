import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = ({ topics, handleFetch }) => {
  const topicInfo = topics.map((topic) => {
    return <TopicListItem key={topic.id} topicData={topic} handleFetch={handleFetch} />;
  });

  return (
    <div className="top-nav-bar__topic-list">
      {topicInfo}
    </div>
  );
};

export default TopicList;