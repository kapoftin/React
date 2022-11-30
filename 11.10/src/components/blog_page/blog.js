import './blog.scss'

const Green_txt = () => {
    return (
        <>
            <a className="green_txttt">Cloverly Blog</a>
        </>
    )
}

const Read = () => {
    return (<div className='Read__knop'>
        <a className='Read__Read__txt' href='#'>More Partners</a>
    </div>
    )
}

const Blog = () => {
    return (
        <>
            <div className="app__blog__str">
                <div className='app__block__margin'>
                    <div><Green_txt /></div>
                    <div className='app__blog__txt'>The Latest in the World of Sustainability</div>
                    <div className='app__blog__button'><Read /></div>
                </div>
            </div>
        </>
    )
}
export default Blog;