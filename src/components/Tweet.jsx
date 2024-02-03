import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage userImage={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userName={tweet.user.name} userHandle={tweet.user.handle} />

          <Timestamp postTime={tweet.timestamp} />
        </div>

        <p className="message"> {tweet.message} </p>

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
