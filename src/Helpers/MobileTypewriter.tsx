export const typewriterMobile = (headingH2:string, outputHeadingH2:HTMLElement, headingH3:string, outputHeadingH3:HTMLElement, par1:string, outputPar1:HTMLElement, par2:string, outputPar2:HTMLElement, par3:string, outputPar3:HTMLElement, par4:string, outputPar4:HTMLElement, par5:string, outputPar5:HTMLElement, par6:string, outputPar6:HTMLElement) => {
    let i = 0,
    speed = 50

    outputHeadingH2.innerHTML = ''
    outputHeadingH2.style.setProperty('--homeHeadingAfterDisplay', 'unset')

    outputHeadingH3.innerHTML = ''
    outputHeadingH3.style.setProperty('--homeHeadingH3AfterDisplay', 'none')

    outputPar1.innerHTML = ''
    outputPar1.style.setProperty('--homePar1AfterDisplay', 'none')

    outputPar2.innerHTML = ''
    outputPar2.style.setProperty('--homePar2AfterDisplay', 'none')

    outputPar3.innerHTML = ''
    outputPar3.style.setProperty('--homePar3AfterDisplay', 'none')

    outputPar4.innerHTML = ''
    outputPar4.style.setProperty('--homePar4AfterDisplay', 'none')

    outputPar5.innerHTML = ''
    outputPar5.style.setProperty('--homePar5AfterDisplay', 'none')

    outputPar6.innerHTML = ''
    outputPar6.style.setProperty('--homePar6AfterDisplay', 'none')

    const timerId = setInterval(() => {
        outputHeadingH2.innerHTML += headingH2.charAt(i)
        i++
        if (i === headingH2.length) {
            outputHeadingH2.style.setProperty('--homeHeadingAfterDisplay', 'none')
            headingH3typewriter(headingH3, outputHeadingH3, par1, outputPar1, par2, outputPar2, par3, outputPar3, par4, outputPar4, par5, outputPar5, par6, outputPar6, speed)     
            clearInterval(timerId)
        }
      }, speed)  
}
const headingH3typewriter = (headingH3:string, outputHeadingH3:HTMLElement, par1:string, outputPar1:HTMLElement, par2:string, outputPar2:HTMLElement, par3:string, outputPar3:HTMLElement, par4:string, outputPar4:HTMLElement, par5:string, outputPar5:HTMLElement, par6:string, outputPar6:HTMLElement, speed:number) => {
    let i = 0
    outputHeadingH3.style.setProperty('--homeHeadingH3AfterDisplay', 'unset')

    const timerId = setInterval(() => {
        outputHeadingH3.innerHTML += headingH3.charAt(i)
        i++
        if (i === headingH3.length) {
            outputHeadingH3.style.setProperty('--homeHeadingH3AfterDisplay', 'none')
            mobileP1Typewriter(par1, outputPar1, par2, outputPar2, par3, outputPar3, par4, outputPar4, par5, outputPar5, par6, outputPar6, 20)
            clearInterval(timerId)
        }
    },speed) 
}
const mobileP1Typewriter = (par1:string, outputPar1:HTMLElement, par2:string, outputPar2:HTMLElement, par3:string, outputPar3:HTMLElement, par4:string, outputPar4:HTMLElement, par5:string, outputPar5:HTMLElement, par6:string, outputPar6:HTMLElement, speed:number) => {
    let i = 0
    
    outputPar1.style.setProperty('--homePar1AfterDisplay', 'unset')

    const timerId = setInterval(() => {
        outputPar1.innerHTML += par1.charAt(i)
        i++
        if (i === par1.length) {
            outputPar1.style.setProperty('--homePar1AfterDisplay', 'none')
            mobileP2Typewriter(par2, outputPar2, par3, outputPar3, par4, outputPar4, par5, outputPar5, par6, outputPar6, speed)
            clearInterval(timerId)
        }
      },speed) 
}
const mobileP2Typewriter = (par2:string, outputPar2:HTMLElement, par3:string, outputPar3:HTMLElement, par4:string, outputPar4:HTMLElement, par5:string, outputPar5:HTMLElement, par6:string, outputPar6:HTMLElement, speed:number) => {
    let i = 0
    
    outputPar2.style.setProperty('--homePar2AfterDisplay', 'unset')

    const timerId = setInterval(() => {
        outputPar2.innerHTML += par2.charAt(i)
        i++
        if (i === par2.length) {
            outputPar2.style.setProperty('--homePar2AfterDisplay', 'none')
            mobileP3Typewriter(par3, outputPar3, par4, outputPar4, par5, outputPar5, par6, outputPar6, speed)
            clearInterval(timerId)
        }
      },speed) 
}
const mobileP3Typewriter = (par3:string, outputPar3:HTMLElement, par4:string, outputPar4:HTMLElement, par5:string, outputPar5:HTMLElement, par6:string, outputPar6:HTMLElement, speed:number) => {
    let i = 0
    
    outputPar3.style.setProperty('--homePar3AfterDisplay', 'unset')

    const timerId = setInterval(() => {
        outputPar3.innerHTML += par3.charAt(i)
        i++
        if (i === par3.length) {
            outputPar3.style.setProperty('--homePar3AfterDisplay', 'none')
            mobileP4Typewriter(par4, outputPar4, par5, outputPar5, par6, outputPar6, speed)
            clearInterval(timerId)
        }
      },speed) 
}
const mobileP4Typewriter = (par4:string, outputPar4:HTMLElement, par5:string, outputPar5:HTMLElement, par6:string, outputPar6:HTMLElement, speed:number) => {
    let i = 0,
    j = 0,
    linkText = 'portfolio page.'
    
    outputPar4.style.setProperty('--homePar4AfterDisplay', 'unset')

    let link = document.createElement('a')
    link.href = '/portfolio'
    link.title = 'portfolio-page'

    const timerId = setInterval(() => {
        outputPar4.innerHTML += par4.charAt(i)
        i++
        if (i === par4.length) {
            outputPar4.appendChild(link)
            clearInterval(timerId)

            const timer4Id = setInterval(() => {
                link.innerHTML += linkText.charAt(j) 
                j++
                if (j === linkText.length) {
                    outputPar4.style.setProperty('--homePar4AfterDisplay', 'none')
                    mobileP5Typewriter(par5, outputPar5, par6, outputPar6, speed)
                    clearInterval(timer4Id)
                    }
            }, speed)
        }
      },speed) 
}
const mobileP5Typewriter = (par5:string, outputPar5:HTMLElement, par6:string, outputPar6:HTMLElement, speed:number) => {
    let i = 0
    
    outputPar5.style.setProperty('--homePar5AfterDisplay', 'unset')

    const timerId = setInterval(() => {
        outputPar5.innerHTML += par5.charAt(i)
        i++
        if (i === par5.length) {
            outputPar5.style.setProperty('--homePar5AfterDisplay', 'none')
            mobileP6Typewriter(par6, outputPar6, speed)
            clearInterval(timerId)
        }
      },speed) 
}
const mobileP6Typewriter = (par6:string, outputPar6:HTMLElement, speed:number) => {
    let i = 0,
    j = 0,
    emailText = 'dodkymull@gmail.com.'
    
    outputPar6.style.setProperty('--homePar6AfterDisplay', 'unset')

    let link = document.createElement('a')
    link.href = `mailto:${emailText}`
    link.title = 'email-address'

    const timerId = setInterval(() => {
        outputPar6.innerHTML += par6.charAt(i)
        i++
        if (i === par6.length) {
            outputPar6.appendChild(link)

            // outputPar6.style.setProperty('--homePar6AfterDisplay', 'none')
            clearInterval(timerId)
            const timer6Id = setInterval(() => {
                link.innerHTML += emailText.charAt(j) 
                j++
                if (j === emailText.length) {
                    clearInterval(timer6Id)
                }
            }, speed)
        }
      },speed) 
}