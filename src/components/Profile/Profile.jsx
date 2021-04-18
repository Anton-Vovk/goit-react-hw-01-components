import React from "react";
import propTypes from "prop-types";
import "./Profile.css";

const Profile = ({ name, tag, location, avatar, followers, views, likes}) => (
    <div className="profile">
        <div className="description">
            <img
                src={avatar}
                alt={name}
                className="avatar"
            />
            <p className="name">{ name}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>
        <ul className="stats">
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{likes}</span>
            </li>
        </ul>
    </div>
);

Profile.defaultProps = {
    avatar: 'https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png',
};

Profile.propTypes = {
  name: propTypes.string.isRequired,
  tag: propTypes.string,
  location: propTypes.string,
  avatar: propTypes.string,
  followers: propTypes.number,
  views: propTypes.number,
  likes: propTypes.number,
};

export default Profile;
