export class Post {
  body: string;
  id: number;
  title: string;
  userId: number;

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


  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }
}
