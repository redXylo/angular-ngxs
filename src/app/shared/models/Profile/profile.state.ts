import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Profile} from './profile';
import {ApiService} from '../../../api.service';
import {GetProfiles} from './profile.actions';

export interface ProfileStateModel {
    profiles: Profile[];
    loading: boolean;
}

@State<ProfileStateModel>({
    name: 'profiles',
    defaults: {
        profiles: [],
        loading: false
    }
})

export class ProfileState {

    constructor(private api: ApiService) {
    }

    @Selector()
    public static profile(state: ProfileStateModel) {
      // return state.profiles.filter((profile) => {
      //   if( profile.owner_id === 1){
      //       return;
      //   }
      // });
      return state.profiles;
    }


    @Action(GetProfiles)
    getProfiles({getState, setState}: StateContext<ProfileStateModel>) {
        const state = getState();
        let data: Profile[];
        this.api.getProfile().subscribe((profile) => {
            data = profile;
            console.log(data);
            setState({
                ...state,
                profiles: data,
                loading: false
            });

        });

    }

}
