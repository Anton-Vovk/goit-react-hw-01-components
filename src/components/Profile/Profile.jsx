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
