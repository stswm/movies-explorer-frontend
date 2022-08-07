class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }
  _handleResp(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }
  get _headers() {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    };
  }
  register({ name, email, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    }).then(this._handleResp);
  }
  authorize({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then(this._handleResp);
  }
  validateToken = (token) => {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._handleResp);
  };

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._handleResp);
  }

  editUser(user) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: user.name,
        email: user.email
    }),
    }).then(this._handleResp);
  }
  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
    }).then(this._handleResp);
  }
  postMovie(movie){
    return fetch(`${this._baseUrl}/movies/`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(movie),
    }).then(this._handleResp);
  }
  deleteMovies(movie) {
    return fetch(`${this._baseUrl}/movies/${movie._id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResp);
  }
  
}

const mainApi = new MainApi({
  baseUrl: 'https://api.stswm.movie.nomoredomains.xyz',
  // baseUrl: 'http://localhost:3099',
  // baseUrl: 'https://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
});

export default mainApi;
