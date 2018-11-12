import { Component, OnInit } from '@angular/core';
import {ProfileState } from '../../shared/models/Profile/profile.state';
import {ProfileService} from '../../shared/models/Profile/profile.service';
import {Select, Store} from '@ngxs/store';
import {GetProfiles} from '../../shared/models/Profile/profile.actions';
import {Profile} from '../../shared/models/Profile/profile';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {AccountState} from '../../shared/models/Account/account.state';
import {GetAccounts} from '../../shared/models/Account/account.actions';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  profileId = 1;

  constructor(private store: Store) {}


    @Select(ProfileState.profile) profiles$;

    @Select(AccountState.accounts) accounts$;

  ngOnInit() {
      this.geProfile();
      this.displayData();
  }


  geProfile() {
   this.store.dispatch(new GetProfiles());
  }

  displayData() {
        // console.log(this.profiles$);
        this.profiles$.subscribe(profiles => {
            profiles.map((post) => {
            if (post.getId() === 1) {
              console.log(post);
            }
          });
        });

  }

  getAccounts(profileId) {
      this.store.dispatch(new GetAccounts());
  }


}
