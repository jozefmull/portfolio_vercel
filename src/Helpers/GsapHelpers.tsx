import { gsap, Power4 } from 'gsap'

//toggle timeline
export const toggleTimeline = (tl:any) => {
    if(tl.isActive()) {
        // e.preventDefault(); // this will also stop <a> tag links
        // e.stopImmediatePropagation(); // this will stop event bubbling
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
         .to(firstPolygonRef, {duration: 0.5, rotate: 70, scale:1, ease:Power4.easeInOut}, 'polygon-=0.4')
         .to(secondPolygonRef, {duration: 0.5, rotate: 150, scale:1, ease:Power4.easeInOut}, 'polygon-=0.3')
         .to(thirdPolygon, {duration: 0.5, rotate: 10, scale:1, ease:Power4.easeInOut}, 'polygon-=0.2') 
         .to(topArrRef, {duration: 0.2, rotate: 135, y:10, ease:Power4.easeInOut}, 'start' )
         .to(botArrRef, {duration: 0.2, rotate: '-135', y:'-10', ease:Power4.easeInOut}, 'start')
         .to(midArrRef, {duration: 0.2, width: 0, ease:Power4.easeInOut}, 'start')        
}
export const animateContactForm = (textRef:HTMLInputElement, emailRef:HTMLInputElement, textareaRef:HTMLTextAreaElement, btnRef:HTMLButtonElement) => {
    let formtl = gsap.timeline({paused:true, reversed:true})

    formtl.to(textRef, {duration:0.2, y:0, opacity:1, delay: 0.75})
          .to(emailRef, {duration:0.2, y:0, opacity:1})
          .to(textareaRef, {duration:0.2, y:0, opacity:1})
          .to(btnRef, {duration:0.2, scale:1, opacity:1})
    
    formtl.play()
}