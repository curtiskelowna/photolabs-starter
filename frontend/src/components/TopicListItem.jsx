import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const topicData = props.topicData;
  return (
    <div className="topic-list__item">
      <span> {topicData.label} </span>
    </div>
  );
};

TopicListItem.defaultProps = {
  topicData: {
    id: "1",
    slug: "topic-1",
    label: "Nature",
  },
};

export default TopicListItem;
