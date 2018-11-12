export class Account {
   balance:number;
   currency_id: number;
   funding_source: number;
   is_prefferd: number;
   is_public: number;
   pre_authorize: number;
   product_id: number;
   profile_id: number;

    // constructor(body: string,
    //             id: number,
    //             title: string,
    //             userId: number) {
    //
    //   this.body = body;
    //   this.id = id;
    //   this.title = title;
    //   this.userId = userId;
    //
    // }

    constructor(values: Object = {}) {
        Object.assign(this, values);

    }


    // getId() {
    //     return this.owner_id;
    // }
    // //
    // getTitle() {
    //     return this.title;
    // }
}
