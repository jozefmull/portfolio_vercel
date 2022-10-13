import { gsap, Power4, CSSPlugin } from 'gsap'

gsap.config({ nullTargetWarn: false });
gsap.registerPlugin( CSSPlugin )

//toggle timeline
export const toggleTimeline = (tl:any) => {
    if(tl.isActive()) {
        return false
    };
    tl.reversed() ? tl.play() :  tl.reverse()
}
export const SocialLinkAnim = (ref:HTMLUListElement) => {
    let socialLinksTl = gsap.timeline({paused:true, reversed:true})

    socialLinksTl.to(ref, {duration:0.5, x:0, ease: Power4.easeInOut, stagger: 0.1, delay:0.5})
    
    socialLinksTl.play()
}
export const DeclareNavTimeline = (tlnav:any, navRef:HTMLElement, ulWrapRef:HTMLDivElement, ulRef:HTMLUListElement, topArrRef:HTMLSpanElement, botArrRef:HTMLSpanElement, midArrRef:HTMLSpanElement, firstPolygonRef:HTMLDivElement, secondPolygonRef:HTMLDivElement, thirdPolygon:HTMLDivElement) => {
    tlnav.to(navRef, {duration: 0.5, y:0, ease:Power4.easeInOut}, 'start')
         .to(ulWrapRef, {duration: 0.5, height: 300, ease:Power4.easeInOut})
         .to(ulRef, {duration:0.3,  x:0, ease:Power4.easeInOut, stagger:0.1}, '-=0.1')
         .to(firstPolygonRef, {duration: 0.5, rotate: 70, scale:1, ease:Power4.easeInOut}, 'polygon-=0.7')
         .to(secondPolygonRef, {duration: 0.5, rotate: 150, scale:1, ease:Power4.easeInOut}, 'polygon-=0.6')
         .to(thirdPolygon, {duration: 0.5, rotate: 10, scale:1, ease:Power4.easeInOut}, 'polygon-=0.5') 
         .to(topArrRef, {duration: 0.2, rotate: 135, y:10, ease:Power4.easeInOut}, 'start' )
         .to(botArrRef, {duration: 0.2, rotate: '-135', y:'-10', ease:Power4.easeInOut}, 'start')
         .to(midArrRef, {duration: 0.2, width: 0, ease:Power4.easeInOut}, 'start')        
}
export const animateContactForm = (textRef:HTMLInputElement, emailRef:HTMLInputElement, textareaRef:HTMLTextAreaElement, btnRef:HTMLButtonElement) => {
    let formtl = gsap.timeline({paused:true, reversed:true})

    formtl.to(textRef, {duration:0.2, x:0, opacity:1, delay: 0.75})
          .to(emailRef, {duration:0.2, x:0, opacity:1})
          .to(textareaRef, {duration:0.2, x:0, opacity:1})
          .to(btnRef, {duration:0.2, scale:1, opacity:1})
    
    formtl.play()
}
export const animOutTl = gsap.timeline({paused: true})

export const animateElementsOut = () => {
    animOutTl.clear()

    animOutTl.to('#quitFadeUp', {duration: 0.2 ,y:'-100', opacity:0,  stagger:0.1}, 'start')
             .to('#quitFadeDown', {duration: 0.2 ,y:'100', opacity:0,  stagger:0.1}, 'start')
             .to('#quitFadeLeft', {duration: 0.1 ,x:'-100', opacity:0,  stagger:0.1}, 'start')
             .to('#quitFadeRight', {duration: 0.1 ,x:'100', opacity:0,  stagger:0.1}, 'start')
             .to('#load', {duration: 0.3 , scaleX: 1, transformOrigin: 'left'})
             .to('#load', {duration: 0.3 , scaleX: 0, transformOrigin: 'right', delay:0.3})  
            //  .to('#homelinkHeader', {duration:0.2, x:'-100', opacity:0}, 'start')
            //  .to('#burgerHeader', {duration:0.2, x:'100', opacity:0}, 'start')
            
    animOutTl.play()
}

