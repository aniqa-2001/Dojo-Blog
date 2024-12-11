//  import React, { Component } from 'react';
// import BlogList from './BlogList';

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       blogs: null, // Initial state for blogs
//     };
//   }

//   // Lifecycle method for fetching data when the component mounts
//   componentDidMount() {
//     fetch('http://localhost:8000/blogs')
//       .then((res) => res.json())
//       .then((data) => {
//         this.setState({ blogs: data }); // Update state with fetched data
//       })
//       .catch((error) => console.error('Error fetching blogs:', error));
//   }

//   // Handler for deleting a blog
//   handleDelete = (id) => {
//     const newBlogs = this.state.blogs.filter((blog) => blog.id !== id);
//     this.setState({ blogs: newBlogs }); // Update state after deletion
//   };

//   render() {
//     const { blogs } = this.state;

//     return (
//       <div className="home">
//         {/* Render the BlogList component only if blogs are available */}
//         {blogs && (
//           <BlogList
//             blogs={blogs}
//             title="All Blogs!"
//             handleDelete={this.handleDelete}
//           />
//         )}
//       </div>
//     );
//   }
// }

// export default Home;
  

import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;