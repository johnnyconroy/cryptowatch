// @flow
import React from 'react';
import TextField from 'material-ui/TextField';
import styles from '../../styles/materialStyles';
import SignInButton from './LoginButton';

type Props = {
  onChange: Function,
  onSubmit: Function,
  login: Object,
}

const SignInForm = (props: Props) => {
  const { onChange, onSubmit, login } = props;
  const { errors } = login;
  const { loading } = login;
  return (
    <div>
      <TextField
        name="siEmail"
        hintText="email"
        floatingLabelText="email"
        errorText={errors.email}
        onChange={onChange}
      /><br />
      <TextField
        name="siPassword"
        hintText="password"
        floatingLabelText="password"
        errorText={errors.password}
        onChange={onChange}
      /><br />
      <a href="#" style={styles.text}>Forgot your password?</a>
      <SignInButton
        siLoading={loading}
        signInUser={onSubmit}
        styles={styles}
      />
    </div>
  );
};

export default SignInForm;
