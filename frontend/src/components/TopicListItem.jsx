import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topicData, handleFetch }) => {
  return (
    <div className="topic-list__item" onClick={() => handleFetch(topicData.id)}>
      <span> {topicData.title} </span>
    </div>
  );
};

export default TopicListItem;
