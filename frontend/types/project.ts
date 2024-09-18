import moment from "moment";

export class Project {
  public id: number;
  public github_link: string;
  public name: string;
  public short_description: string;
  public description: string;
  public technologies: Technology[];

  constructor(data: any) {
    this.id = data.id;
    this.github_link = data.github_link;
    this.name = data.name;
    this.short_description = data.short_description;
    this.description = data.description;
    try {
      this.technologies = data.technologies.map(
        (el: any) => el.technologies_id
      );
    } catch (e) {
      this.technologies = [];
    }
  }
}
