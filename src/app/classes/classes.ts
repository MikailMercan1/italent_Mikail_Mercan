class ActivityCard {
    title: string;
    description: string;
    id: string;
    date: string;
    company: string;
    place: string;
    extra: string;
  
    constructor(title: string, description: string, id: string, date: string, company: string, place: string, extra: string){
      this.title = title;
      this.description = description;
      this.id = id;
      this.date = date;
      this.company = company;
      this.place = place;
      this.extra = extra;
    }
  }