import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/postService/posts.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  name;
  constructor(private route:ActivatedRoute,
    public postsService:PostsService,
    private router: Router
    ) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('id').toString();
  }

  goHome()
  {
    
    this.router.navigate(['/home'])
  }

}
