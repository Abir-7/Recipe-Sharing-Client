interface IRecipeCustomer {
  _id: string;
  userName: string;
  email: string;
  photo: string;
  user: string;
  __v: number;
  bio: string;
}

interface IComment {
  userEmail: string;
  comment: string[];
}

interface IRating {
  _id: string;
  recipeId: string;
  customerId: string;
  rating: number;
  comment: string[];
  isLiked: boolean;
  isDisliked: boolean;
  __v: number;
}

export interface IRecipe {
  _id: string;
  recipe: string;
  customer: IRecipeCustomer;
  upVote: number;
  downVote: number;
  rating: {
    avgRating: number;
    totalCount: number;
  };
  __v: number;
  ratings: IRating[];
  ratingCustomers: IRecipeCustomer[];
  totalLikes: number;
  totalDislikes: number;
  averageRating: number;
  comments: IComment[];
  isPublished: boolean;
  isDeleted: boolean;
  isPremium: boolean;
}

export interface IRecipeResponse {
  _id: string;
  customer: IRecipeCustomer;
  recipe: IRecipe;
  isFollower?: boolean;
}
