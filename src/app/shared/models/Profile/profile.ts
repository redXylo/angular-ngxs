export class Profile {
    nick_name: string;
    owner_id: number;
    profile_name: string;
    profile_origin_id: number;
    status: string;
    user_id: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);

    }


    getId() {
        return this.owner_id;
    }

}
