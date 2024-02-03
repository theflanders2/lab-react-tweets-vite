import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage userImage={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userName={tweet.user.name} userHandle={tweet.user.handle} />

          <Timestamp tweetTime={tweet.timestamp} />
        </div>

        <Message userTweetText={tweet.message} />

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
