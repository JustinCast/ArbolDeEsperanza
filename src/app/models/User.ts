export class User {
  constructor(
    public UserName: string,
    public Role: string,
    public Password: string,
    public _id?: string
  ) {}
}
