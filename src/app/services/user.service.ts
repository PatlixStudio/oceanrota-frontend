import { isPlatformBrowser } from '@angular/common';
import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { User } from '../core/models/user.model';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private platformId = inject(PLATFORM_ID);
    // Signal for current user state
    private _currentUser = signal<User | null>(this.getUserFromStorage());
    currentUser = computed(() => this._currentUser()); // expose readonly signal

    private getUserFromStorage(): User | null {
        if (isPlatformBrowser(this.platformId)) {
            const userJson = localStorage.getItem('user');
            return userJson ? (JSON.parse(userJson) as User) : null;
        }
        return null;
    }

    // Update user in localStorage (if needed)
    setCurrentUser(user: User): void {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('user', JSON.stringify(user));
        }
        this._currentUser.set(user);
    }

    // Get logged-in user from localStorage
    getCurrentUser(): User | null {
        return this._currentUser();
    }

    // Clear user on logout
    clearCurrentUser(): void {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem('user');
        }
        this._currentUser.set(null);
    }
}
