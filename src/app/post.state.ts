import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {GetData} from './post.actions';
import {Post} from './post';
import {ApiService} from './api.service';

export interface PostStateModel {
  posts: Post[];
  loading: boolean;
}

@State<PostStateModel>({
  name: 'posts',
  defaults: {
    posts: [],
    loading: true
  }
})

export class PostState {

  constructor(private api: ApiService) {
  }

  @Selector()
  public static post(state: PostStateModel) {
    // return state.posts.filter((post) => {
    //   //console.log(post);
    //   if (post.id = 1) {
    //     console.log(post);
    //     return post;
    //   }
    //
    // });
    return state.posts;
  }


  @Action(GetData)
  getPosts({getState, setState}: StateContext<PostStateModel>) {
    const state = getState();
    let data: Post[];
    this.api.getData().subscribe((post) => {
      console.log(post);
      data = post;
      console.log(data);
      setState({
        ...state,
        posts: post,
        loading: false
      });



    });

  }

}
