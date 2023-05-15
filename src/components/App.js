import userInfo from './dataJson/profileUser.json';
import statisticsData from './dataJson/statisticsData.json';
import friends from './dataJson/friends.json';
import transactions from './dataJson/transactions.json';
import Container from 'components/Container';
import Statistics from 'components/Statistics';
import Profile from 'components/Profile';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

const App = () => {
  return (
    <div>
      <Container>
        <Profile data={userInfo} />
        <Statistics title="Upload stats" stats={statisticsData} />
        <Statistics stats={statisticsData} />
        <FriendList friends={friends} />
        <TransactionHistory item={transactions} />
      </Container>
    </div>
  );
};

export default App;
