interface ICustomer {
  _id: string;
  userName: string;
  email: string;
  photo: string;
  user: string;
  __v: number;
  bio: string;
}

export interface IRecipe {
  rating: {
    avgRating: number;
    totalCount: number;
  };
  _id: string;
  recipe: string;
  customer: ICustomer;
  upVote: number;
  downVote: number;
  __v: number;
}

export interface IRecipeWithRating {
  _id: string;
  recipe: string; // Assuming the HTML content is stored as a string
  totalLikes: number;
  totalDislikes: number;
  customer: ICustomer; // Reference to the customer who posted the recipe
  comments: { userEmail: string; comment: string[] }[]; // Assuming the comments array is empty for now; can be further defined if comments have a structure
  averageRating: number;
}
