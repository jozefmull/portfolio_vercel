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

export default Meta