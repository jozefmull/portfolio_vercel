import { gsap, Power4, CSSPlugin } from 'gsap'
import styles from '../Css/Arrows.module.css'

gsap.config({ nullTargetWarn: false });
gsap.registerPlugin( CSSPlugin )

/**
 * TOOGLE TIMELINE
 * @param tl 
 * @returns FALSE IF TL IS ACTIVE IF NOT IT PLAYS OR REVERSES TIMELINE
 */
export const toggleTimeline = (tl:any) => {
    if(tl.isActive()) {
        return false
    };
    tl.reversed() ? tl.play() :  tl.reverse()
}
/**
 * ANIMATE SOCIAL LINKS
 * @param ref 
 */
export const SocialLinkAnim = (ref:HTMLUListElement) => {
    let socialLinksTl = gsap.timeline({paused:true, reversed:true})

    socialLinksTl.to(ref, {duration:0.5, x:0, ease: Power4.easeInOut, stagger: 0.1, delay:0.5})
    
    socialLinksTl.play()
}
/**
 * DECLARE TIMELINE SO WE CAN ACCES ITS PROPERTIES IN A NAV COMPONENT
 * @param tlnav 
 * @param navRef 
 * @param ulWrapRef 
 * @param ulRef 
 * @param topArrRef 
 * @param botArrRef 
 * @param midArrRef 
 * @param firstPolygonRef 
 * @param secondPolygonRef 
 * @param thirdPolygon 
 */
export const DeclareNavTimeline = (tlnav:any, navRef:HTMLElement, ulWrapRef:HTMLDivElement, ulRef:HTMLUListElement, topArrRef:HTMLSpanElement, botArrRef:HTMLSpanElement, midArrRef:HTMLSpanElement, firstPolygonRef:HTMLDivElement, secondPolygonRef:HTMLDivElement, thirdPolygon:HTMLDivElement) => {
    tlnav.to(navRef, {duration: 0.5, height:'100vh', ease:Power4.easeInOut}, 'start')
         .to(ulWrapRef, {duration: 0.5, height: 300, ease:Power4.easeInOut},'start+=0.25')
         .to(ulRef, {duration:0.3,  x:0, ease:Power4.easeInOut, stagger:0.1}, '-=0.2')
         .to(firstPolygonRef, {duration: 0.5, rotate: 70, scale:1, ease:Power4.easeInOut}, 'polygon-=0.6')
         .to(secondPolygonRef, {duration: 0.5, rotate: 150, scale:1, ease:Power4.easeInOut}, 'polygon-=0.5')
         .to(thirdPolygon, {duration: 0.5, rotate: 10, scale:1, ease:Power4.easeInOut}, 'polygon-=0.4') 
         .to(topArrRef, {duration: 0.2, rotate: 135, y:7, ease:Power4.easeInOut}, 'start' )
         .to(botArrRef, {duration: 0.2, rotate: '-135', y:'-2', ease:Power4.easeInOut}, 'start')
         .to(midArrRef, {duration: 0.2, width: 0, ease:Power4.easeInOut}, 'start')        
}
/**
 * ANIMATE CONTACT FORM 
 * @param textRef 
 * @param emailRef 
 * @param textareaRef 
 * @param btnRef 
 */
export const animateContactForm = (textRef:HTMLInputElement, emailRef:HTMLInputElement, textareaRef:HTMLTextAreaElement, btnRef:HTMLButtonElement) => {
    let formtl = gsap.timeline({paused:true, reversed:true})

    formtl.to(textRef, {duration:0.2, x:0, opacity:1, delay: 0.75})
          .to(emailRef, {duration:0.2, x:0, opacity:1})
          .to(textareaRef, {duration:0.2, x:0, opacity:1})
          .to(btnRef, {duration:0.2, scale:1, opacity:1})
    
    formtl.play()
}
export const animOutTl = gsap.timeline({paused: true})

/** 
 * ANIMATE ELEMENT WITH IDS (QUITFADEDOWN / UP / RIGHT / LEFT) OUT
 */
export const animateElementsOut = () => {
    animOutTl.clear()

    let leftArr = document.getElementById('arrow_left')
    let rightArr = document.getElementById('arrow_right')

    if (leftArr) {
        leftArr.classList.add(styles.clicked)
    }
    if (rightArr) {
        rightArr.classList.add(styles.clicked)
    }
    
    //handle add classes
    animOutTl.to('#quitFadeUp', {duration: 0.2 ,y:'-100', opacity:0, pointerEvents:'none',  stagger:0.15, ease:Power4.easeInOut}, 'start')
             .to('#quitFadeDown', {duration: 0.2 ,y:'100', opacity:0, pointerEvents:'none',  stagger:0.15, ease:Power4.easeInOut}, 'start')
             .to('#quitFadeLeft', {duration: 0.2 ,x:'-100', opacity:0, pointerEvents:'none',  stagger:0.15, ease:Power4.easeInOut}, 'start')
             .to('#quitFadeRight', {duration: 0.2 ,x:'100', opacity:0, pointerEvents:'none',  stagger:0.15, ease:Power4.easeInOut}, 'start')
             .to('#load', {duration: 0.3 , scaleX: 1, transformOrigin: 'left' , ease:Power4.easeInOut})
             .to('#load', {duration: 0.3 , scaleX: 0, transformOrigin: 'right', delay:0.3, ease:Power4.easeInOut})  
             .to('#burger_button', {duration:0.25, x:'100', opacity:0, ease:Power4.easeInOut}, 'start')
             .to('#arrow_left', {duration:0.25, left:'-150', ease:Power4.easeInOut}, 'start+=0.5')
             .to('#arrow_right', {duration:0.25, right:'-150', ease:Power4.easeInOut}, 'start+=0.5')
             .to('#burger_button', {duration: 0.25, x: 0, opacity: 1, ease:Power4.easeInOut}, 'enter')

    animOutTl.play()

    setTimeout(() => {
        // handle remove classes
        if (leftArr) {
            leftArr.classList.remove(styles.clicked)
        }
        if (rightArr) {
            rightArr.classList.remove(styles.clicked)
        }  
    }, (animOutTl.duration() * 1000))
}
/**
 * ANIMATE HOMEPAGE BUTTONS IN
 * @param refBtnWrap 
 */
export const animateHomeButtons = (refBtnWrap:HTMLDivElement) => {
    gsap.to([refBtnWrap], {duration:0.3,  y:0, scale:1, opacity:1, ease:Power4.easeInOut, stagger:0.1, delay:0.5})
}
/**
 * ANIMATE PROJECT LIST IN 
 * @param projListRef 
 */
export const animateProjectList = (projListRef:HTMLUListElement) => {
    gsap.to(projListRef, {duration:0.5, y:0, opacity:1,ease:Power4.easeInOut, delay:0.25})
}
/**
 * ANIMATE FOOTER IN
 * @param footerRef 
 */
export const animateFooter = (footerRef:HTMLElement) => {
    gsap.to(footerRef, {duration:1, y:0, opacity:1,ease:Power4.easeInOut, stagger:0.2, delay:0.5})
}
/**
 * ANIMATE ARROWS IN
 */
export const animateArrowsIn = () => {
    gsap.to('#arrow_right', {duration:1, right:'0', ease:Power4.easeInOut, delay:2})
    gsap.to('#arrow_left', {duration:1, left:0, ease:Power4.easeInOut, delay:2})
}
let tlfilter = gsap.timeline({paused: true, reversed: true})


/**
 * FILTER ANIMATION
 * @param upperRow 
 * @param downRow 
 * @param text 
 */
export const filterAnim = (upperRow:HTMLElement,downRow:HTMLElement, text:HTMLSpanElement) => {
    tlfilter.clear()

    tlfilter.to(upperRow, {duration:0.25, x: 0, ease:Power4.easeInOut}, 'start')
        .to(downRow, {duration:0.25, x: 0, ease:Power4.easeInOut}, 'start')
        .to(text, {duration:0.25 , top: 0, ease:Power4.easeInOut, stagger:0.2})
        .to(text, {duration:0.5 , top: '-40',  ease:Power4.easeInOut, delay:0.5, stagger:0.2})
        .to(upperRow, {duration:0.5, x: '-100%' , ease:Power4.easeInOut})
        .to(downRow, {duration:0.5, x: '100%' , ease:Power4.easeInOut}, '-=0.5')
    
        tlfilter.play()
}


export const hideLoader = new Promise((resolve) => {
    setTimeout(function() {
      resolve(
        gsap.to('#page-loader', {duration:0.75, bottom:'unset', top: '-150vh', ease:Power4.easeInOut})
      )
    }, 750);
  });