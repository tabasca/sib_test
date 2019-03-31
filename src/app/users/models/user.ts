export interface User {
  gender: 'female' | 'male',
  name: {
    title: string,
    first: string,
    last: string
  },
  location: {
    street: string,
    city: string,
    state: string,
    postcode: number
  },
  email: string,
  login: {
    username: string,
    password: string,
    salt: string,
    md5: string,
    sha1: string,
    sha256: string
  },
  dob: Date,
  registered: Date,
  phone: string,
  cell: string,
  id: {
    name: string,
    value: string
  },
  picture: {
    large: string,
    medium: string,
    thumbnail: string,
  },
  nat: string
}

export interface FormattedUser extends User{
  lastName: string,
  city: string
}