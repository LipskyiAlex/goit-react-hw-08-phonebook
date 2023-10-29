import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUserName } from 'redux/auth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };
  const name = useSelector(selectUserName);

  return (
    <>
      <p>Hello {name}!</p>
      <button type="button" onClick={handleClick}>
        Log out
      </button>
    </>
  );
};
