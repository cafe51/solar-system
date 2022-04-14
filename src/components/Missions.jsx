import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
// import PropTypes from 'prop-types';

class Missions extends React.Component {
  render() {
    // const { planetName, planetImage } = this.props;
    return (
      <div data-testid="missions">
        <Title headline="missões" />
        { missions.map((element) => {
          const retorno = (<MissionCard
            key={ element.name }
            name={ element.name }
            year={ element.year }
            country={ element.country }
            destination={ element.destination }
          />);
          return retorno;
        })}
      </div>
    );
  }
}

// Missions.propTypes = {
//   planetName: PropTypes.string.isRequired,
//   planetImage: PropTypes.string.isRequired,
// };

export default Missions;
