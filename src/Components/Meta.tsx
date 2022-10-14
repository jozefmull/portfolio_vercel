import {Helmet} from 'react-helmet'

type Props = {
    title:string,
    description:string,
    keywords:string,
}

const Meta = ({title, description, keywords}: Props) => {
  return (
    <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title:'Web Developer Portfolio - React, Javascript, UI/UX',
  description: 'Web Developer Portfolio Website. Front-End developer specialized in Javascript, React and UI/UX. Check out my Github repositories.',
  keywords: 'web developer portfolio, web developer, portfolio, react, javascript, UI/UX,'
}

export default Meta