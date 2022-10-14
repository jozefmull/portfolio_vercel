export interface AppState {
    loading: boolean,
    error: unknown,
    projects: Project[],
    projectDetails: Project,
    filteredProjects: Project[],
    filterValue: string
}

export interface Project {
    technologies: string[];
    codeUrl:      string;
    shortDesc:    string;
    slug:         string;
    imgs:         string[];
    mainTech:     string;
    name:         string;
    url:          string;
    description:  string;
    id:           string;
}
