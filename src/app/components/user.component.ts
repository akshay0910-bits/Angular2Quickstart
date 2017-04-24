/**
 * Created by AkshayK on 21-04-2017.
 */
import {Component} from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId:module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers:[PostsService]
})
export class UserComponent {
  name: string;
  email: string;
  hobbies: string[];
  showHobbies: boolean;
  posts:Post[];
  Address: Address;


  constructor(private postService:PostsService) {
    this.name = 'Akshay';
    this.email = 'akgunner0910@gmail.com';
    this.Address = {city: 'Hyderabad', state: 'Telangana', street: 'Kondapur'};
    this.hobbies = ['Arsenal', 'Man City', 'Liverpool'];
    this.showHobbies = true;
    this.postService.getPosts().subscribe(posts =>{
      this.posts = posts;
    });
  }

  toggleHobbies = function(){
    this.showHobbies = !(this.showHobbies);
  };
}

interface Address {
  street: string;
  city: string;
  state: string;
}

interface Post{
  id: number;
  title:string;
  body:string;
}
