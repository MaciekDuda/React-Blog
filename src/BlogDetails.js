import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom';

const BlogDetails = () => {
	const { id } = useParams();
	const {
		data: blog,
		error,
		isPending,
	} = useFetch('http://localhost:8000/blogs/' + id);
	const navigate = useNavigate();

	const handleClick = () => {
		fetch('http://localhost:8000/blogs/' + id, {
			method: 'DELETE',
		}).then(() => {
			navigate('/');
		});
	};
	return (
		<div className="blog-details">
			{isPending && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{blog && (
				<article>
					<h2 className="blog-title">{blog.title}</h2>
					<p className="blog-author">Written by {blog.author} </p>
					<div className="blog-body">{blog.body}</div>
					<button onClick={handleClick}>Delete</button>
				</article>
			)}
		</div>
	);
};
export default BlogDetails;
