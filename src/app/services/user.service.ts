import { Injectable } from '@angular/core';

export interface User {
    id: number;
    username: string;
    firstName?: string;
    lastName?: string;
    fullName?: string;
    email: string;
    avatarUrl?: string;
    bio?: string;
    birthday?: string;
    role: string;
    isActive?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

@Injectable({
    providedIn: 'root',
})
export class UserService {

    // Get logged-in user from localStorage
    getCurrentUser(): User | null {
        const userJson = localStorage.getItem('user');
        if (!userJson) return null;
        try {
            return JSON.parse(userJson) as User;
        } catch (err) {
            console.error('Error parsing user from localStorage', err);
            return null;
        }
    }

    // Update user in localStorage (if needed)
    setCurrentUser(user: User) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    // Clear user on logout
    clearCurrentUser() {
        localStorage.removeItem('user');
    }
}
