export interface User {
    id: number;
    username: string;
    firstName?: string;
    lastName?: string;
    fullName?: string;
    email: string;
    phoneNumber: string;
    avatarUrl?: string;
    bio?: string;
    birthday?: string;
    role: string;
    isActive?: boolean;
    createdAt?: string;
    updatedAt?: string;
}
