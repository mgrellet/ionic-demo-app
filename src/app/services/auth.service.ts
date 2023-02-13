import {Injectable} from '@angular/core';
import {Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState$ = authState(this.afAuth) //observable
  constructor(private afAuth: Auth) {
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.afAuth, email, password)
      .then(user => {
        return signInWithEmailAndPassword(this.afAuth, email, password);
      });
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.afAuth, email, password);
  }

  logout() {
    return signOut(this.afAuth);
  }
}
