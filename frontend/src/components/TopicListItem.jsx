import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const topicData = props.topicData;
  return (
    <div className="topic-list__item">
      <span> {topicData.title} </span>
    </div>
  );
};

export default TopicListItem;
