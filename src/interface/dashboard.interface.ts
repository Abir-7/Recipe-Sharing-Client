interface IFollower {
  _id: string;
  userName: string;
  email: string;
  photo: string;
}

interface IMyData {
  _id: string;
  userName: string;
  email: string;
  photo: string;
  user: string;
  bio: string;
  followers: IFollower[];
  following: IFollower[];
  __v: number;
}

interface IRecipe {
  _id: string;
  recipe: string;
  customer: string;
  __v: number;
  isPublished: boolean;
  isDeleted: boolean;
  isPremium: boolean;
}

export interface IUserDashboardData {
  myRacipe: IRecipe[];
  mydata: IMyData;
}
