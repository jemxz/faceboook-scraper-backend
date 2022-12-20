////////////////// THIS WHERE YOU SET THE SELECTORS FOR THE HTML ELEMENTS FOR SCRAPING //////////////////////////////////

/// This selectors are used inside core-scraper, group-scraper section

const postLinks_selector = "._52jc";
const numberOfFollowers_selector = "._59k";
const aboutPage_selector = "._59k";
const nameOfPage_selector = "._59k";

/// This selectors are used inside core-scraper, post-scraper section

const postContent_selector = "._5rgt";
const commentsOfPost_selector = "._2b06";
const commentorLink_selector = "._2b05";
const commentorName_selector = "._2b05";

module.exports = {
  postLinks_selector,
  numberOfFollowers_selector,
  aboutPage_selector,
  nameOfPage_selector,
  postContent_selector,
  commentsOfPost_selector,
  commentorLink_selector,
  commentorName_selector,
};
