import { PostsService } from './../../services/postService/posts.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public PostsService:PostsService,
              private router: Router) { }
  liked =true;
  likes:any[]=[];
  logedin:string = 'Evie-Mae';
  index:number =0;
  isFound = false;
  ngOnInit() {

    
    this.PostsService._post.forEach((value, index)=>{
      
      value.likes.forEach(value2=>{
       if( !this.isFound){
          if((value2.likedBy == this.logedin ))
          {
            this.isFound=true;
            console.log(value);
          }
       }

      });
      this.likes.push(this.isFound);
      this.isFound=false;
    });
   console.log(this.likes);

  }
 
  likeOrUnlike(index)
  {
    let youCanAdd = true;

    this.PostsService
    ._post[index]
    .likes.forEach((value,i)=>{
      
      if(this.logedin == value.likedBy)
      {
        if(this.likes[index] == true )
        {
          this.PostsService
          ._post[index]
          .likes.splice(i,1);
          youCanAdd = false;
        }
      }
     });
     
     //you can add now
      if(youCanAdd )
      {
        this.PostsService
        ._post[index]
        .likes.push( {likedBy:this.logedin,date:Date.now()});
      }
     this.likes[index] = !this.likes[index];
  }

  onCLickComments(item){
    console.log(item.postedBy);
    
    this.router.navigate([`comment/${item.postedBy}`]);
  }
}
