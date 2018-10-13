import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss'

class ArticleOverviewList extends React.Component {
  formatDate(date){
    return Intl.DateTimeFormat('en-US',  
      {year: 'numeric',  
      month: 'short', 
      day: '2-digit'})
    .format(date)
  }

  renderOneOverview(post){ 
    const overview = 
      <div className="overview" key={post.slug}>
        <div className="overview__date">
          {this.formatDate(post.published_date)}
        </div>
        <div className="overview__description">
          <Link to={`/blog/${post.slug}`} className='overview__description--link'>
            <h2 className="overview__description--title">{post.title}</h2>
          </Link>
            <p className="overview__description--excerpt">{post.custom_excerpt}</p>
        </div>
        <div className="overview__feature_image">
          <Link to={`/blog/${post.slug}`} className='overview__description--link'>
            <img src={post.feature_image} alt="featured"/>
          </Link>
        </div>
      </div>
      return overview
  }
  
  render() {
    let {articles} = this.props
    return (
      <div className="articles-list">
        <h1 className="articles-list__title">Blog</h1>
         {articles.map(post => this.renderOneOverview(post))}
      </div>
    )
  }
}

export default ArticleOverviewList;
