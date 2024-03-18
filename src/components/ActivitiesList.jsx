import { Link } from 'react-router-dom';


const ActivitiesList = ({ activities }) => {

    return (
        <div className="blog-list">
            {activities.map(item => (
                <Link to={`/activities/${item.id}`} key={item.id}>
                    <div className="activity-preview" key={item.id} style={{ backgroundImage: `url(${item.asset.url/* .replace("http://localhost:4000","https://landrup-dans-api-3.onrender.com") */})`, }}>
                        <div className='preview-caption'>
                            <p>{item.name}</p>
                            <p>{item.minAge}-{item.maxAge} år</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default ActivitiesList;