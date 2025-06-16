import { Outlet } from 'react-router-dom';
import Top from './components/Top';

export default function App() {
  return (
    <>  {/* СЮДА МОЖНО ДОБАВИТЬ ЭЛЕМЕНТ АКТУАЛЬНЫЙ ВСЕГДА*/}
      <Outlet /> {/* Renders current route here */}
    </>
  );
}