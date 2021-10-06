import { User } from "src/app/core/model/user.model";

export interface AuthState {
  user: User | null;
}

export const authInitialState = {
  user: null
}
