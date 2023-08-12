import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authname } from './AuthSlice';


const AuthPage = (props) => {
  const usernameFormRedux = useSelector(state => state.auth.value);
  const disapatch = useDispatch();

    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      disapatch(authname({username:value}))
      apiCall(value);
      sessionStorage.setItem('auth', JSON.stringify(value))
    }

    const apiCall= (value)=>{
      axios.post('https://real-peplum-elk.cyclic.app/authenticate',{username: value})
      .then(res=>  props.onAuth({...res.data, secret: value}))
      .catch(err => console.log('error',err))
    };

  useEffect(()=>{
    const getVal = sessionStorage.getItem('auth')
    const res = JSON.parse(getVal)
    apiCall(res)
  })
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome 👋</div>
  
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>

      </div>
    );
  };
  
  export default AuthPage;