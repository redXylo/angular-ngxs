import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {Post} from './post';
import {Select, Store} from '@ngxs/store';
import {PostState} from './post.state';
import {GetData} from './post.actions';
import {forEach} from '@angular/router/src/utils/collection';
import {post} from 'selenium-webdriver/http';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private apiService: ApiService, private store: Store) {

  }

  //@Select(PostState.post) posts$: Post[];


  ngOnInit() {

   // this.store.dispatch(new GetData());


  }

  // displayData() {
  //
  //   // console.log(this.posts$);
  //   this.posts$.subscribe(posts => {
  //     posts.map((post) => {
  //       if (post.getId() === 1) {
  //         console.log(post);
  //       }
  //     });
  //   });
  // }


}
