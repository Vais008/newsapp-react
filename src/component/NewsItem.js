
import React from 'react'

 const NewsItem = (props)=> {
        let {title,description,imageUrl,newsUrl,author, date,source}= props;
        return (
            <div className='my-3'>
                    <span className="positon-absolute badge rounded-pill bg-danger" style={{left:'90%' , zIndex:'1', width:'130px'}}>{source}</span>
                <div className="card" >
                
                    <img src={!imageUrl?"https://techcrunch.com/wp-content/uploads/2023/12/google-bard-gemini-v2.jpg?resize=1200,675":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }


export default NewsItem