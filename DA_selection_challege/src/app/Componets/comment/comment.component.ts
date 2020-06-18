import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  name;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('id');
  }

}
