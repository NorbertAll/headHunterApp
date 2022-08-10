export enum DIRECTION {
  inc = 'inc',
  dec = 'dec'
}

export interface IStudent {
  id_student: number
    tel: number
    first_name: string
    last_name: string
    github_username: string
    portfolios_urls: string
    project_urls: string
    bio: string
    expected_type_work: string
    target_city_work: string
    expected_contract_type: string
    expected_salary: number
    can_takeapprenticeship: boolean
    months_of_commercial_exp: number
    education: string
    work_experience: string
    courses: string

    email:string
    course_completion: number
    course_engagment: number
    project_degree: number
    team_project_degree: number
    bonus_project_urls: string
    status: string

}