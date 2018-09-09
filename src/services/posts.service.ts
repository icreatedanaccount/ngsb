import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) {
  }

  /**
   * Return all posts
   * @return Observable of array of posts
   */
  public getAllPosts(): Observable<Post[]> {

    return this.http.get<Post[]>('/api/posts').pipe(
      map(data => data)
    );

  }

  /**
   * Return a specific post
   * @param id : post Id
   * @return Observable of returned post
   */
  public getPost(id: number): Observable<Post> {

    return this.http.get<Post>('/api/posts/${id}');

  }

}
