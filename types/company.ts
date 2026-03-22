import moment from "moment";

export class Company {
    public id: number;
    public name: string;
    public role: string;
    public start_date: string;
    public end_date: string;
    public technologies: Technology[];
    public order: number | null;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.role = data.role;
        this.start_date = moment(data.start_date, "YYYY-MM-DD").format("MMM YYYY");
        this.end_date = !!data.end_date ? moment(data.end_date, "YYYY-MM-DD").format("MMM YYYY") : "";
        try {
            this.technologies = (JSON.parse(data.technology_ids) as number[]).map((id) =>
                data.technologies.find((el: any) => parseInt(el.id) == id));
        } catch (e) {
            this.technologies = [];
        }
        this.order = data.order;
    }
}
