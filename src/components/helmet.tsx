import {Helmet} from 'react-helmet-async'

const Seo = ({
    title = 'ChaiTea',
}) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    )
}
export default Seo;