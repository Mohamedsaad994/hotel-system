export interface Charts {
  rooms: number
  facilities: number
  bookings: Bookings
  ads: number
  users: Users
}

export interface Bookings {
  pending: number
  completed: number
}

export interface Users {
  user: number
  admin: number
}
