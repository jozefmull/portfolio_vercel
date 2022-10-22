import { myRoutes } from '../assets/Routes'
/**
 * MERGE ARRAYS INTO ONE AND RETURN ONLY UNIQUE VALUES
 * @param arrays 
 * @returns 
 */
 export const mergeArrays = (...arrays:string[][]) => {
    let jointArray:string[] = [];
    arrays.forEach((array) => {
      jointArray = [...jointArray, ...array];
    });
    return [...new Set([...jointArray])];
}
/**
 * GET AGE FROM DATE STRING
 * @param dateString 
 * @returns 
 */
export const getAge = (dateString:string) => {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
/**
 * RETURN PREVIOUS PAGE IF THERE IS FROM MY ROUTES
 * @param id 
 * @returns 
 */
export const getPreviousPage = (id:number) => {
    return myRoutes.find((x, i) => i === id) 
}
/**
 * RETURN NEXT PAGE IF THERE IS FROM MY ROUTES
 * @param id 
 * @returns 
 */
export const getNextPage = (id:number) => {
    return myRoutes.find((x, i) => i === id)  
}
/**
 * TYPEWRITER EFFECT CONTACT PAGE
 * @param heading 
 * @param outputHeading 
 * @param text 
 * @param textOutput 
 */
export const typewriterContact = (heading:string, outputHeading:HTMLHeadingElement, text:string, textOutput:HTMLParagraphElement) => {
    const speed = 60
    let i = 0

    outputHeading.innerHTML = ''
    textOutput.innerHTML = ''
    outputHeading.style.setProperty('--contactHeadingAfterDisplay', 'unset')

    const timerId = setInterval(() => {
        outputHeading.innerHTML += heading.charAt(i)
        i++
        if (i === heading.length) {
            outputHeading.style.setProperty('--contactHeadingAfterDisplay', 'none')
            typewriterText(text, textOutput, 10)
            clearInterval(timerId)
        }
      }, speed)  
}
/**
 *  TYPEWRITER EFFECT ON PARAGRAPH CONTACT PAGE
 * @param text 
 * @param textOutput 
 * @param speed 
 */
const typewriterText = (text:string, textOutput:HTMLParagraphElement, speed:number) => {
    let i = 0,
        j = 0,
        emailText = 'dodkymull@gmail.com.'

    let link = document.createElement('a')
    link.href = `mailto:${emailText}`
    link.title = 'email-address'
    link.style.fontWeight = '600'

    const timerId = setInterval(() => {
        textOutput.innerHTML += text.charAt(i)
        i++
        if (i === text.length) {
           textOutput.appendChild(link)

            clearInterval(timerId)
            
            const timer2Id = setInterval(() => {
                link.innerHTML += emailText.charAt(j) 
                j++
                if (j === emailText.length) {
                    clearInterval(timer2Id)
                }
            }, speed)
        }
      },speed) 
}
/**
 *  TYPEWRITER EFFECT PORTFOLIO PAGE
 * @param heading 
 * @param outputHeading 
 * @param par 
 * @param outputPar 
 */
export const typewriterPortfolio = (heading:string, outputHeading:HTMLHeadingElement, par:string, outputPar:HTMLParagraphElement) => {
    const speed = 60
    let i = 0

    outputHeading.innerHTML = ''
    outputHeading.style.setProperty('--portfoliotHeadingAfterDisplay', 'unset')

    const timerId = setInterval(() => {
        outputHeading.innerHTML += heading.charAt(i)
        i++
        if (i === heading.length) {
            outputHeading.style.setProperty('--portfoliotHeadingAfterDisplay', 'none')
            typewriterPortfolioPar(par, outputPar, 20)
            clearInterval(timerId)
        }
      }, speed)  
}
/**
 * TYPEWRITER EFFECT ON PARAGRAPH PORTFOLIO PAGE
 * @param par 
 * @param outputPar 
 * @param speed 
 */
const typewriterPortfolioPar = (par:string, outputPar:HTMLParagraphElement, speed:number) => {
    let i = 0

    outputPar.style.setProperty('--portfoliotParAfterDisplay', 'unset')

    const timerId = setInterval(() => {
        outputPar.innerHTML += par.charAt(i)
        i++
        if (i === par.length) {
            clearInterval(timerId)
        }
      }, speed)  
}
/**
 * TYPEWRITER EFFECT PROJECT DETAILS PAGE
 * @param heading 
 * @param outputHeading 
 * @param shortDesc 
 * @param outputShortDesc 
 */
export const typewriterProjectDetails = (heading:string, outputHeading:HTMLHeadingElement, shortDesc:string, outputShortDesc:HTMLParagraphElement) => {
    const speed = 60
    let i = 0
    outputHeading.style.setProperty('--projectDetailsHeadingAfterDisplay', 'unset')

    outputHeading.innerHTML = ''
    outputShortDesc.innerHTML = ''
    outputShortDesc.style.setProperty('--projectDetailsshortDescAfterDisplay', 'none')

    const timerId = setInterval(() => {
        outputHeading.innerHTML += heading.charAt(i)
        i++
        if (i === heading.length) {
            outputHeading.style.setProperty('--projectDetailsHeadingAfterDisplay', 'none')
            typewriterProjDetailsPar(shortDesc, outputShortDesc, 20)
            clearInterval(timerId)
        }
      }, speed)  
}
/**
 * TYPEWRITER EFFECT PROJECT DETAILS PAGE PARAGRAPH
 * @param shortDesc 
 * @param outputShortDesc 
 * @param speed 
 */
const typewriterProjDetailsPar = (shortDesc:string, outputShortDesc:HTMLParagraphElement, speed:number) => {
    let i = 0

    outputShortDesc.style.setProperty('--projectDetailsshortDescAfterDisplay', 'unset')

    const timerId = setInterval(() => {
        outputShortDesc.innerHTML += shortDesc.charAt(i)
        i++
        if (i === shortDesc.length) {
            clearInterval(timerId)
        }
      }, speed)  
}


