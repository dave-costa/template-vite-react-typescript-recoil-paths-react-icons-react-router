import { Header$Organisms } from '@organisms';
import { Route, Routes } from 'react-router-dom';
import {
  RecoilRoot
} from 'recoil';
import { Home$Page } from './components/pages/Home';
import { NotFound$Page } from './components/pages/NotFound';
export const App = () => {
  return (
    <RecoilRoot>
      <div>
      <Header$Organisms />
      <Routes>
        <Route path='/' element={<Home$Page />} />
        <Route path='*' element={<NotFound$Page />} />
      </Routes> 
      </div>
    </RecoilRoot> 
  );
}

