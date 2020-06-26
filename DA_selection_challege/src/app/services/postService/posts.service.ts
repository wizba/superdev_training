import { Injectable } from '@angular/core';
import { post } from './interfaces/user.interface';
import { NodeWithI18n } from '@angular/compiler';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public _post:post[]=[
    {
      postedBy:'john',
      date:Date.now(),
      message:'',
      image:'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
      comments:[
        {
          commentedBy:'David morisod',
          message:'Hello Alex. My name is Oluremi Victor ( a future billionaire) from Nigeria. I am 17 and have been an aluxer since 2019. I am currently reading the eq, willpower, biography, investing, and business',
          date:Date.now(),
        },
        {
          commentedBy:'Dominik',
          message:'Are there any Public Business Corporations (Group) in U.S that has diversified Business Interests by having its Subsidiaries in Industries like Aviation, Technology, Real estate, Retail, Pharmaceuticals etc?',
          date:Date.now(),
        },
        {
          commentedBy:'Dolcie',
          message:'Hello Alex. My name is Oluremi Victor ( a future billionaire) from Nigeria. I am 17 and have been an aluxer since 2019. I am currently reading the eq, willpower, biography, investing, and business',
          date:Date.now(),
        }
      
      ],
        likes:[
          {
            likedBy:'Lorenzo',
            date:Date.now()
          },
          {
            likedBy:'David',
            date:Date.now()
          },
          ,
          {
            likedBy:'Griff',
            date:Date.now()
          },
          {
            likedBy:'Isabelle',
            date:Date.now()
          }
        ]
    },

    {
      postedBy:'David',
      date:Date.now(),
      message:'',
      image:'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
      comments:[
        {
          commentedBy:'john',
          message:'Hello Alex. My name is Oluremi Victor ( a future billionaire) from Nigeria. I am 17 and have been an aluxer since 2019. I am currently reading the eq, willpower, biography, investing, and business',
          date:Date.now(),
        },
        {
          commentedBy:'Leonard',
          message:'Are there any Public Business Corporations (Group) in U.S that has diversified Business Interests by having its Subsidiaries in Industries like Aviation, Technology, Real estate, Retail, Pharmaceuticals etc?',
          date:Date.now(),
        },
        {
          commentedBy:'Dominik',
          message:'Hello Alex. My name is Oluremi Victor ( a future billionaire) from Nigeria. I am 17 and have been an aluxer since 2019. I am currently reading the eq, willpower, biography, investing, and business',
          date:Date.now(),
        }
      ],
      likes:[
        {
          likedBy:'john',
          date:Date.now()
        },
        {
          likedBy:'David',
          date:Date.now()
        },
        ,
        {
          likedBy:'Griff',
          date:Date.now()
        },
        {
          likedBy:'Isabelle',
          date:Date.now()
        },
        {
          likedBy:'Evie-Mae',
          date:Date.now()
        }
      ]
    },
    {
      postedBy:'Dylute',
      date:Date.now(),
      message:'',
      image:'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
      comments:[
        {
          commentedBy:'Lorenzo',
          message:'Hello Alex. My name is Oluremi Victor ( a future billionaire) from Nigeria. I am 17 and have been an aluxer since 2019. I am currently reading the eq, willpower, biography, investing, and business',
          date:Date.now(),
        },
        {
          commentedBy:'Leonard',
          message:'Are there any Public Business Corporations (Group) in U.S that has diversified Business Interests by having its Subsidiaries in Industries like Aviation, Technology, Real estate, Retail, Pharmaceuticals etc?',
          date:Date.now(),
        },
        {
          commentedBy:'Talhah',
          message:'Hello Alex. My name is Oluremi Victor ( a future billionaire) from Nigeria. I am 17 and have been an aluxer since 2019. I am currently reading the eq, willpower, biography, investing, and business',
          date:Date.now(),
        },
        {
          commentedBy:'Json',
          message:'Hello Alex. My name is Oluremi Victor ( a future billionaire) from Nigeria. I am 17 and have been an aluxer since 2019. I am currently reading the eq, willpower, biography, investing, and business',
          date:Date.now(),
        }
        
      ],
      likes:[
        {
          likedBy:'john',
          date:Date.now()
        },
        {
          likedBy:'David',
          date:Date.now()
        },
        ,
        {
          likedBy:'Griff',
          date:Date.now()
        },
        {
          likedBy:'Isabelle',
          date:Date.now()
        },
        {
          likedBy:'Evie-Mae',
          date:Date.now()
        }
      ]
    },
    {
      postedBy:'Benny',
      date:Date.now(),
      message:'',
      image:'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
      comments:[
        {
          commentedBy:'Lorenzo',
          message:'Hello Alex. My name is Oluremi Victor ( a future billionaire) from Nigeria. I am 17 and have been an aluxer since 2019. I am currently reading the eq, willpower, biography, investing, and business',
          date:Date.now(),
        },
        {
          commentedBy:'Leonard',
          message:'Are there any Public Business Corporations (Group) in U.S that has diversified Business Interests by having its Subsidiaries in Industries like Aviation, Technology, Real estate, Retail, Pharmaceuticals etc?',
          date:Date.now(),
        },
        {
          commentedBy:'Talhah',
          message:'Hello Alex. My name is Oluremi Victor ( a future billionaire) from Nigeria. I am 17 and have been an aluxer since 2019. I am currently reading the eq, willpower, biography, investing, and business',
          date:Date.now(),
        },
        {
          commentedBy:'Json',
          message:'Hello Alex. My name is Oluremi Victor ( a future billionaire) from Nigeria. I am 17 and have been an aluxer since 2019. I am currently reading the eq, willpower, biography, investing, and business',
          date:Date.now(),
        }
        
      ],
      likes:[
        {
          likedBy:'john',
          date:Date.now()
        },
        {
          likedBy:'David',
          date:Date.now()
        },
        ,
        {
          likedBy:'Griff',
          date:Date.now()
        },
        {
          likedBy:'Isabelle',
          date:Date.now()
        },
        {
          likedBy:'Evie-Mae',
          date:Date.now()
        }
      ]
    },
  ];

constructor() { }

   getPost(name:string)
  {
    let myArray ={};
      this._post.forEach(value=>{
       
      if(name === value.postedBy)
           myArray= value.postedBy
      })

      return of(myArray)
  }
}
