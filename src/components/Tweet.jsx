import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

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

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
