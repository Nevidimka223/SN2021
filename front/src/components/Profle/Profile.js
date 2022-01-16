import './Profile.css'
import PropTypes from 'prop-types';

function Profile({fullName, email, phoneNumbr}) {
    return (
        <div className='profile'>
            <p>{fullName}</p>
            <p>{email}</p>
            <p>{phoneNumbr}</p>
        </div>
    );
}
// just for example
Profile.propTypes = {
    fullName: PropTypes.string,
    email: PropTypes.string,
    phoneNumbr: PropTypes.string
}

Profile.defaultProps = {
    fullName: 'Vova Vynokur',
    email: 'email.email@gmail.com',
    phoneNumbr: '+380999888777'
}

export default Profile;