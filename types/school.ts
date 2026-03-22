import moment from "moment";

export class School {
  public id: number;
  public name: string;
  public branch: string;
  public start_date: string;
  public end_date: string;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.branch = data.branch;
    this.start_date = moment(data.start_date, "YYYY-MM-DD").format("MMM YYYY");
    this.end_date = !!data.end_date
      ? moment(data.end_date, "YYYY-MM-DD").format("MMM YYYY")
      : "";
  }
}
