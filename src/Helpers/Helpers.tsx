// get age
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

//typewriter CONTACT PAGE
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

//typewriter PORTFOLIO PAGE
export const typewriterPortfolio = (heading:string, outputHeading:HTMLHeadingElement) => {
    const speed = 60
    let i = 0

    outputHeading.innerHTML = ''

    const timerId = setInterval(() => {
        outputHeading.innerHTML += heading.charAt(i)
        i++
        if (i === heading.length) {
            clearInterval(timerId)
        }
      }, speed)  
}

//typewriter PROJECT DETAILS PAGE
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


export const mergeArrays = (...arrays:string[][]) => {
    let jointArray:string[] = [];
    arrays.forEach((array) => {
      jointArray = [...jointArray, ...array];
    });
    return [...new Set([...jointArray])];
}

