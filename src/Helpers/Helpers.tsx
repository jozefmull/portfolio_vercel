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
// typewriter HOMEPAGE
export const typewriterDesktop = (heading:string, outputHeading:HTMLElement, par1:string, outputPar1:HTMLElement, par2:string, outputPar2:HTMLElement, par3:string, outputPar3:HTMLElement) => {
    const speed = 30
    let i = 0

    outputHeading.innerHTML = ''
    outputHeading.style.setProperty('--homeHeadingAfterDisplay', 'unset')

    outputPar1.innerHTML = ''
    outputPar1.style.setProperty('--homePar1AfterDisplay', 'none')

    outputPar2.innerHTML = ''
    outputPar2.style.setProperty('--homePar2AfterDisplay', 'none')

    outputPar3.innerHTML = ''
    outputPar3.style.setProperty('--homePar3AfterDisplay', 'none')

    const timerId = setInterval(() => {
        outputHeading.innerHTML += heading.charAt(i)
        i++
        if (i === heading.length) {
            outputHeading.style.setProperty('--homeHeadingAfterDisplay', 'none')
            par1typewriter(par1, outputPar1, par2, outputPar2, par3, outputPar3, 10)     
            clearInterval(timerId)
        }
      }, speed)  
}
const par1typewriter = (par1:string, outputPar1:HTMLElement, par2:string, outputPar2:HTMLElement,par3:string, outputPar3:HTMLElement, speed:number) => {
    let i = 0
    
    outputPar1.style.setProperty('--homePar1AfterDisplay', 'unset')

    const timerId = setInterval(() => {
        outputPar1.innerHTML += par1.charAt(i)
        i++
        if (i === par1.length) {
            outputPar1.style.setProperty('--homePar1AfterDisplay', 'none')
            par2typewriter(par2, outputPar2,par3, outputPar3, speed)  
            clearInterval(timerId)
        }
      },speed) 
}
const par2typewriter = (par2:string, outputPar2:HTMLElement,par3:string, outputPar3:HTMLElement, speed:number) => {
    let i = 0,
        j = 0,
        linkText = 'portfolio page.'

    outputPar2.style.setProperty('--homePar2AfterDisplay', 'unset')

    let link = document.createElement('a')
    link.href = '/portfolio'
    link.title = 'portfolio-page'

    const timerId = setInterval(() => {
        outputPar2.innerHTML += par2.charAt(i)
        i++
        if (i === par2.length) {
            outputPar2.appendChild(link)

            clearInterval(timerId)
            
            const timer2Id = setInterval(() => {
                link.innerHTML += linkText.charAt(j) 
                j++
                if (j === linkText.length) {
                    outputPar2.style.setProperty('--homePar2AfterDisplay', 'none')
                    par3typewriter(par3, outputPar3, speed)
                    clearInterval(timer2Id)
                }
            }, speed)
        }
      },speed) 
}
const par3typewriter = (par3:string, outputPar3:HTMLElement, speed:number) => {
    let i = 0,
        j = 0,
        emailText = 'dodkymull@gmail.com.'

        outputPar3.style.setProperty('--homePar3AfterDisplay', 'unset')

    let link = document.createElement('a')
    link.href = `mailto:${emailText}`
    link.title = 'email-address'

    const timerId = setInterval(() => {
        outputPar3.innerHTML += par3.charAt(i)
        i++
        if (i === par3.length) {
           outputPar3.appendChild(link)

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