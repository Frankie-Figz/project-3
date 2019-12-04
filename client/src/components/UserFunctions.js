import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const receive_products = () => {
  return axios
    .get('/users/products_landing')
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err);
    })
}

export const check_user_order = user => {

  let userObj = {
    user_id: user.user_id,
    ispaid: user.ispaid,
    price: user.price,
    product_id: user.product_id
  }

  console.log('user',user.user_id);
  return axios
    .post('/users/check_user_order', userObj)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err);
    })
}

export const check_orderlines = user => {
  return axios
    .get('/users/check_orderlines/' + user)
    .then(response => {
      // console.log(response);
      return response.data;
      // if(response)
      //   return response
      // else
      //   console.log("No data");
    })
    .catch(err => {
      console.log(err);
    })
}

export const update_order = order => {
  return axios
    .post('/users/update_order', order)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err);
    });
}