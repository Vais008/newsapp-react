import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading,setLoading]=useState(true)
    const [page,setPage]=useState(1)
    const [totalResults,setTotalResults]=useState(0)
    // document.title = `${this.props.category} - NewsMonkey`

     const updateComponent=async()=> {
       props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
      
        setLoading(true)
        let data = await fetch(url)
       props.setProgress(30)
        let parseData = await data.json()
       props.setProgress(70)
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)

       props.setProgress(100)
    }

    useEffect(() => {
        updateComponent()

    }, [])

   

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
        setPage(page+1)
        let data = await fetch(url)
        let parseData = await data.json()
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
    }

    
        return (
            <>
                <h2 className='text-center my-5'>NewsMonkey - Top {props.category} Headlines</h2>
                {loading && <Spinner/>}
                <InfiniteScroll
                    dataLength = {articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
>
                    <div className="container">
                        <div className="row">
                            {!loading && articles.map((element) => {
                                return <div className='col-md-4' key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </>
        )
}


News.defaultProps = {
    country: 'us',
    pageSize: 5,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News