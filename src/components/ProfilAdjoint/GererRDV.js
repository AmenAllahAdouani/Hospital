import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './GererRDV.css';
import SideBarr from '../SideBarr/SideBarr'

const ManageAppointments = () => {
  const appointments = [
    {
      id: 1,
      patientName: 'Flen Fouleni 1',
      dateTime: '2024-04-25 a 14:00',
      location: 'Chambre 101',
      image: 'path/to/image1.jpg'
    },
    {
      id: 2,
      patientName: 'Flen Fouleni 2',
      dateTime: '2024-04-26 a 16:00',
      location: 'Chambre 102',
      image: 'path/to/image2.jpg'
    },
    {
      id: 3,
      patientName: 'Flen Fouleni 3',
      dateTime: '2024-04-27 a 10:00',
      location: 'Chambre 104',
      image: 'path/to/image3.jpg'
    },
    {
        id: 4,
        patientName: 'Flen Fouleni 4',
        dateTime: '2024-04-26 a 16:00',
        location: 'Chambre 101',
        image: 'path/to/image4.jpg'
      },
      {
        id: 5,
        patientName: 'Flen Fouleni 5',
        dateTime: '2024-04-28 a 11:00',
        location: 'Chambre 105',
        image: 'path/to/image5.jpg'
      }
  ];

  return (
    <div className='lowerRdv'>
      <SideBarr/>
      <div className="appointment-container">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="card">
            <div className="card-header">
              <img src={appointment.image} />
              <div>
                <h3>{appointment.patientName}</h3>
                <p><FontAwesomeIcon icon={faClock} /> {appointment.dateTime}</p>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {appointment.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAppointments;
