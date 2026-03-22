export class Project {
  public id: number;
  public github_link: string;
  public name: string;
  public short_description: string;
  public description: string;
  public technologies: Technology[];
  public order: number | null;

  constructor(data: any) {
    this.id = data.id;
    this.github_link = data.github_link;
    this.name = data.name;
    this.short_description = data.short_description;
    this.description = data.description;
    try {
      this.technologies = (JSON.parse(data.technology_ids) as number[]).map((id) =>
          data.technologies.find((el: any) => parseInt(el.id) == id));
    } catch (e) {
      this.technologies = [];
    }
    this.order = data.order;
  }
}
