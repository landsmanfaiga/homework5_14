import { useUser } from '../UserContext';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


const MyBookmarks = () => {
    const { user } = useUser();
    const [bookmarks, setBookmarks] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [title, setTitle] = useState();

    const getBookmarks = async () => {
        const { data } = await axios.get('/api/bookmark/getbookmarks');
        setBookmarks(data);
    }

    useEffect(() => {
        getBookmarks();
    }, []);

    const onDeleteClick = async (id) => {
        await axios.post(`/api/bookmark/deletebookmark?id=${id}`)
        getBookmarks();
    }

    const onEditClick = (bookmark) => {
        setIsEdit(true);
        setTitle(bookmark.title);
    }

    const onCancelClick = (bookmark) => {
        setIsEdit(false);
        setTitle(bookmark.title);
    }

    const onTextChange = (e) => {
        setTitle(e.target.value);
    }

    const onUpdateClick = async (bookmark) => {
        bookmark.title = title;
        await axios.post('/api/bookmark/editbookmark', bookmark)
        setIsEdit(false);
        getBookmarks();
    }

    return (
        <div className="container">
            <main role="main" className="pb-3">
                <div>
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Welcome back {user.firstName} {user.lastName}</h1>
                            <Link className="btn btn-primary btn-block" to="/addbookmark">Add Bookmark</Link>
                        </div>
                    </div>
                    <div className="row">
                        <table className="table table-hover table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Url</th>
                                    <th>Edit/Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookmarks.map(bookmark => (
                                    <tr key={bookmark.id}>
                                    {!isEdit && <td>{bookmark.title}</td>}
                                    {isEdit && <input type="text" className="form-control" value={title} onChange={onTextChange} />}
                                    <td><Link to={bookmark.url} target="_blank">{bookmark.url}</Link></td>
                                    <td>{!isEdit &&
                                        <button className="btn btn-success" onClick={()=>onEditClick(bookmark)}>Edit Title</button>}
                                        {isEdit && <>
                                            <button className="btn btn-warning" onClick={()=>onUpdateClick(bookmark)}>Update</button>
                                            <button className="btn btn-info" onClick={()=>onCancelClick(bookmark)}>Cancel</button>
                                           </>}
                                            <button className="btn btn-danger" onClick={() => onDeleteClick(bookmark.id)}>Delete</button>
                                        </td>
                                  </tr>))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MyBookmarks;