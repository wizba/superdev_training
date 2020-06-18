export interface friend{
 name:string;
 surname:string;
 email:string;
 password:string
//  posts?:post[];
}

export interface post{
    postedBy:string;
    date:any;
    message?:string;
    image?:any;
    comments?:Comment[];
    likes?:Like[]
}

export interface Comment{
  commentedBy:string;
  message:string;
  date:any
}

export interface Like{
 likedBy:string;
 date:any
}