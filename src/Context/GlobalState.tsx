import { createContext, useReducer } from 'react'
import { AppReducer } from './AppReducer'
import { AppState, Project } from './interface'

import { db } from '../firebase-config'
import { collection, getDocs, getDoc, doc } from 'firebase/firestore'

export type ContextProps = {
    myState: AppState,
    getProjects: () => void,
    getProjectById: (id: string) => void,
    filterProjects: (tech: string) => void
}

const INITIAL_STATE:AppState = {
    loading: false,
    error: '',
    projects: [],
    projectDetails: {} as Project,
    filteredProjects: [],
    filterValue: 'All'
}

export const GlobalContext = createContext({} as ContextProps)

type Props = {
    children: JSX.Element | JSX.Element[]
}

export const GlobalProvider: React.FC<Props> = ({ children }) => {
    const [myState, dispatch] = useReducer(AppReducer, INITIAL_STATE);

    const projectsCollectionRef = collection(db, 'projects')

    // get all projects
    const getProjects = async() => {
        dispatch({type:'GET_PROJECT_LIST_REQUEST'})

        try {
            const data = await getDocs(projectsCollectionRef)

            dispatch({type:'GET_PROJECT_LIST_SUCCESS', payload: data.docs.map(doc => ({...doc.data(), id: doc.id}))})
        } catch (error) {
            dispatch({type:'GET_PROJECT_LIST_FAIL', payload: error})
        }  
    }
    // get project details
    const getProjectById = async(id:string) => {
        const projectDocRef = doc(db, 'projects', id)

        dispatch({type:'GET_PROJECT_DETAILS_REQUEST'})

        try {
            const data = await getDoc(projectDocRef)
            
            dispatch({type:'GET_PROJECT_DETAILS_SUCCESS', payload: data.data()})
        } catch (error) {
            dispatch({type:'GET_PROJECT_DETAILS_FAIL', payload: error})
        }  
    }
    // get project details
    const filterProjects = async(tech:string) => {
        dispatch({type:'FILTER_PROJECTS_REQUEST'})
        dispatch({type:'SET_FILTER_VALUE', payload: tech})
        
            try {
                const data = myState.projects.filter(i => i.technologies.includes(tech))
                dispatch({type:'FILTER_PROJECTS_SUCCESS', payload: data})
            } catch (error) {
                dispatch({type:'FILTER_PROJECTS_FAIL', payload: error})
            }  
    }

    return (<GlobalContext.Provider value={{
            myState,
            getProjects,
            getProjectById,
            filterProjects,
        }}>
        {children}
    </GlobalContext.Provider>)
}