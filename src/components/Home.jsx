import { useAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';
import TimeOut from './TimeOut';

const Home = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();


  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <>

      {isAuthenticated ?
        <div className='text-center'>
          <h2 className='mt-5'>Your Profile</h2>
          <small className='text-primary'>You are currently <br /> logged in</small>
          <div className="row justify-content-center">
            <div className="  col-md-3 col-sm-6 col-lg-4">
              <div className="card p-3 text-center m-2">
                <Profile data={user} />
                <TimeOut/>
                <button className='btn btn-danger mx-5 my-2' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Log Out
                </button>
                <div className="timeout">
                 
                  </div> 
              </div>
            </div>
          </div>
        </div> :
        <div className="d-flex flex-column justify-content-center align-items-center h-100 py-5 m-3">
          <h3 className='pb-3'>Click below button to login with Google account</h3>
          <div>
            <button className='btn btn-success' onClick={() => loginWithRedirect()}>Log In</button>
          </div>
        </div>
      }

    </>
  )


}

export default Home
