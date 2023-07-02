import './App.css';
import Account from './account/App';
import Body from './body/App';

export default function Home() {
    return (
      <div className='home'>
        <Body/>
        <Account/>
      </div>
    );
  }