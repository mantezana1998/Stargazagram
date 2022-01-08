import tokenService from './tokenService';

const BASE_URL = '/api/users/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    body: user 
  })
  .then(res => {
    if (res.ok) return res.json();
    console.log("if you have an error, you must check your server terminal!")
    throw new Error('Email already taken!');
  })
  .then(({token}) => tokenService.setToken(token));
}

export default {
  signup
};