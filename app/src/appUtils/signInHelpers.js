// @flow

// regexp messing with eslint
/* eslint no-useless-escape: "off" */

export const isValidEmail = (email: string) => {
// requirements as per OWASP
// https://www.owasp.org/index.php/Input_Validation_Cheat_Sheet#Email_Address_Validation
/*
            /^
              (
                (
                  [^<>()[\]\\.,;:\s@\"]+(
                                          \.[^<>()[\]\\.,;:\s@\"]+
                                        )*
                )|(\".+\")
              )
              @
              (
                (
                  \[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\]
                )|(
                    (
                      [a-zA-Z\-0-9]+\.
                    )+[a-zA-Z]{2,}
                  )
              )
            $/
*/
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const isValidPassword = (password: string) => {
/*
            /^
              (?=.*\d)          // should contain at least one digit
              (?=.*[a-z])       // should contain at least one lower case
              (?=.*[A-Z])       // should contain at least one upper case
              [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters
            $/
*/
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return re.test(password);
};

export const isValidUsername = (password: string) => {
/*
            /^
              [a-zA-Z0-9]{6,}   // should contain at least 6 from the mentioned characters
            $/
*/
  const re = /^[a-zA-Z0-9]{6,}$/;
  return re.test(password);
};
