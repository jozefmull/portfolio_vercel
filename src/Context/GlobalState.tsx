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
    filterValue: 'All',
}

export const GlobalContext = createContext({} as ContextProps)

type Props = {
    children: JSX.Element | JSX.Element[]
}

export const GlobalProvider: React.FC<Props> = ({ children }) => {
    const [myState, dispatch] = useReducer(AppReducer, INITIAL_STATE);

    // PROEJCTS COLLECTION FROM FIREBASE
    const projectsCollectionRef = collection(db, 'projects')

    /**
     * GET ALL PROJECTS FROM FIREBASE 
     * ASYNC
     */
    const getProjects = async() => {
        // LOADER
        dispatch({type:'GET_PROJECT_LIST_REQUEST'})
        // TRY TO GET DATA FROM FIREBASE
        try {
            const data = await getDocs(projectsCollectionRef)
            // IF WE HAVE DATA DISPATCH SUCCESS ACTION
            dispatch({type:'GET_PROJECT_LIST_SUCCESS', payload: data.docs.map(doc => ({...doc.data(), id: doc.id}))})
        // IF THERE IS AN ERROR DISPATCH FAIL ACTION
        } catch (error) {
            dispatch({type:'GET_PROJECT_LIST_FAIL', payload: error})
        }  
    }
    /**
     * GET PROJECT DETAILS
     * @param id 
     */
    const getProjectById = async(id:string) => {
        const projectDocRef = doc(db, 'projects', id)
        // LOADER
        dispatch({type:'GET_PROJECT_DETAILS_REQUEST'})
        // TRY TO GET DATA FROM FIREBASE
        try {
            const data = await getDoc(projectDocRef)
            // IF WE HAVE DATA DISPATCH SUCCESS ACTION 
            dispatch({type:'GET_PROJECT_DETAILS_SUCCESS', payload: data.data()})
            // IF THERE IS AN ERROR DISPATCH FAIL ACTION
        } catch (error) {
            dispatch({type:'GET_PROJECT_DETAILS_FAIL', payload: error})
        }  
    }
    /**
     * FILTER PROJECTS
     * @param tech 
     */
    const filterProjects = async(tech:string) => {
        // if i am filtering current filter value then return
        if (tech === myState.filterValue) {
            return
        }
        // LOADER
        dispatch({type:'FILTER_PROJECTS_REQUEST'})
        // SET FILTER VALUE IN STATE
        dispatch({type:'SET_FILTER_VALUE', payload: tech})    

        const data = myState.projects.filter(i => i.technologies.includes(tech))

        setTimeout(() => {
            if (data) {
                dispatch({type:'FILTER_PROJECTS_SUCCESS', payload: data})                    
            }
        }, 500);
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