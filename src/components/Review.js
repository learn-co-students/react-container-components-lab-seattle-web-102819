import React from 'react';

const Review = ({
  index,
  headline,
  byline,
  link,
  summary_short
}) => {
  return (
    <div
      key={index}
      className="review"
    >
      <header>
        <a
          className="review-link"
          href={link.url}
        >
          {headline}
        </a>
        <br/>
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  )
};

export default Review