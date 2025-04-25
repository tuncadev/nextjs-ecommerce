export type UserType = {
  id: string;
  email: string;
  username: string;
  passwordHash: string;
  
  firstName?: string;
  lastName?: string;
  role: string;
  
  billing?: any;
  shipping?: any;
  isPayingUser?: boolean;
  avatarUrl?: string;
  hash?: string;
  
  dateCreated: Date;
  dateModified?: Date;

  // Relations (optional unless you're working with them directly)
  cart?: any;
  favorites?: any[];
  sessions?: any[];
};
