import React, { useState } from 'react'
import Header from '../../Components/Home/Header/Header'
import SearchBar from '../../Components/Home/SearchBar/SearchBar'
import BlogList from '../../Components/Home/BlogList'
import { blogList } from '../../config/data'
import EmptyList from '../../Components/Common/EmptyList'

const Home = () => {

 const [blogs, setBlogs] = useState(blogList) ;
const [searchKey,setSearchKey] = useState('');

const handleSearchBar=(event)=>{
event.preventDefault();
handleSearchResult();
}

const handleSearchResult=()=>{
const allBlogs = blogList;
const filterBlogs = allBlogs.filter((blog) =>
blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()) 
);

setBlogs(filterBlogs);

};

const handleClearSearch=()=>{
      setBlogs(blogList);
      setSearchKey('');
};


  return (
    <div>
      {/* Page Header */}
<Header/>


      {/* Serach Bar */}
<SearchBar 
value={searchKey} 
clearSearch={handleClearSearch}
formSubmit={handleSearchBar} 
handleSearchKey={(e)=> setSearchKey(e.target.value) }/>


      {/* Blog List and Empty List */}
{!blogs.length ? <EmptyList/> : <BlogList blogs={blogList}/>}

    </div>
  );
};

export default Home;
