import Nav from '@components/Nav';
import { Outlet } from 'react-router';

const Home = () => {
  return (
    <div className="h-screen flex">
      <Nav/>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  )
}

export default Home