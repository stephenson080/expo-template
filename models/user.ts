export default class User {
  constructor(
    public firstname: string,
    public lastname: string,
    public status: "active" | "suspended",
    public no: string,
    public plan: string
  ) {}
}
