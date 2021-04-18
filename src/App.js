import React from 'react';
import PropTypes from "prop-types";
import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json"
import friends from "./data/friends.json"
import transactions from './data/transactions.json';
import Profile from "./components/Profile/Profile";
import Container from './components/Container/Container';
import Statistics from "./components/Statistics/Statistics";
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';


const App = () => (
  <>
    <Container/>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <Statistics title="Upload Stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory transactions={transactions} />   
  </>
);

App.propTypes = {
  children: PropTypes.array,
};

export default App;