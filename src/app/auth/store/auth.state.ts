import { User } from "src/app/core/model/user.model";
import { AuthEffects } from "./auth.effects";

export interface AuthState {
  user: User | null;
}

export const authInitialState = {
  user: null
}
