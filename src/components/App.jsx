import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import { FriendsList } from "components/FriendsList/FriendsList";
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";
import user from 'components/Profile/user.json'
import data from 'components/Statistics/data.json'
import friendsData from 'components/FriendsList/friends.json'
import transactionsData from 'components/TransactionHistory/transactions.json'
export const App = () => {
  return (
    <div>
      <Profile   
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friendsData} />;
      <TransactionHistory transactions={transactionsData} />;
    </div>
  );
};
