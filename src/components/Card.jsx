import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Card(props) {
    return(
        <div className="card--container">
            <img src={props.imageUrl} alt="pic" className="card--image" />
            <div className="card--text">
                <div className="card--country">
                    <div className="card--country--icon"><FaMapMarkerAlt /></div>
                    <p className="card--country--name">{props.location}</p>
                    <a className="card--country--link" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <p className="card--title">{props.title}</p>
                <p className="card--date">{props.startDate} - {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}