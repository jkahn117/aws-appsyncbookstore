import React from 'react';
import { withRouter } from 'react-router-dom';

import { Authenticator as AmplifyAuthenticator } from 'aws-amplify-react';

function Authenticator(props) {
  return (
    <div>
      <AmplifyAuthenticator authData={ props.currentUser }/>
    </div>
  );
}

export default withRouter(Authenticator);
