export interface FreelancerInterface {
  createdAt: String;
  email: String;
  freelancer: {
    availability: Boolean;
    avatar: String;
    hourly_rate: Number;
    job_title: String;
    phone: String;
    rating: Number;
    region: String;
    service: [];
    skills: [];
    worked_projects: [];
    _id: String;
  };
  name: String;
  role: String;
  updatedAt: String;
}
