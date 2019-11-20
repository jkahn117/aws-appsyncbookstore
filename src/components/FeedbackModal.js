import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import { Button, Form, Input, Message, Modal } from 'semantic-ui-react';

import { submitFeedback as submitFeedbackMutation } from '../graphql/mutations';

function FeedbackModal({ open, onClose, currentUser }) {
  const [ email, setEmail ] = useState('');
  const [ feedback, setFeedback ] = useState('');
  const [ message, setMessage ] = useState(null);

  useEffect(() => {
    setMessage(null);
  }, []);

  useEffect(() => {
    if (currentUser) {
      setEmail(currentUser.attributes.email)
    }
  }, [ currentUser ]);

  async function submitFeedback() {
    setMessage(null);

    const input = {
      email,
      message: feedback
    }

    try {
      await API.graphql(graphqlOperation(submitFeedbackMutation, { input }));
      setMessage('Feedback submitted, thanks!');
    } catch(error) {
      console.error('[ERROR - submitFeedback] ', error);
      setMessage('An error occurred.');
    }
    

  }

  return (
    <Modal open={ open } onClose={ onClose } centered={ false }>
      <Modal.Header>Contact Us</Modal.Header>
      <Modal.Content>
        { message && 
            <Message>{ message }</Message>
        }
        <p>We welcome your feedback...</p>

        <Form>
          <Form.Field>
            <label>Email</label>
            <Input placeholder='email'
                  onChange={ (e, { value }) => setEmail(value) }
                  value={ email }
                  disabled={ !!currentUser } />
          </Form.Field>
          <Form.Field>
            <Form.TextArea label='Feedback'
                          placeholder='tell us your thoughts...'
                          onChange={ (e, { value }) => setFeedback(value) }/>
          </Form.Field>
          
          <Button type='submit' color='blue' onClick={ submitFeedback }>Submit Feedback</Button>
          <Button onClick={ onClose }>Cancel</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
}

export default FeedbackModal;
