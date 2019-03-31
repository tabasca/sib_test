import { User } from './user';

export interface UsersResponse {
  results: User[],
  info: {
    seed: string,
    results: number,
    page: number,
    version: string
  }
}