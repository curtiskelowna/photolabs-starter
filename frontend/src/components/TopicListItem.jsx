import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const topicData = props.topicData;
  return (
    <div className="top-nav-bar__topic-list__item">
      <a href={`/topics/${topicData.slug}`}>{topicData.label}</a>
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
