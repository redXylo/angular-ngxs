import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Account} from './account';
import {ApiService} from '../../../api.service';
import {GetAccounts} from './account.actions';


export interface AccountStateModel {
    accounts: Account[];
    loading: boolean;
}

@State<AccountStateModel>({
    name: 'accounts',
    defaults: {
        accounts: [],
        loading: false
    }
})

export class AccountState {

    constructor(private api: ApiService) {
    }

    @Selector()
    public static accounts(state: AccountStateModel) {
        // return state.profiles.filter((profile) => {
        //   if( profile.owner_id === 1){
        //       return;
        //   }
        // });
        return state.accounts;
    }


    @Action(GetAccounts)
    getAccounts({getState, setState}: StateContext<AccountStateModel>) {
        const state = getState();
        let data: Account[];
        this.api.getAccounts().subscribe((account) => {
            data = account;
            console.log(data);
            setState({
                ...state,
                accounts: data,
                loading: false
            });

        });

    }

}
