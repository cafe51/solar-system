import React from 'react';
import Title from './Title';
// import PropTypes from 'prop-types';

class Missions extends React.Component {
  render() {
    // const { planetName, planetImage } = this.props;
    return (
      <div data-testid="missions">
        <Title headline="missões" />
      </div>
    );
  }
}

// Missions.propTypes = {
//   planetName: PropTypes.string.isRequired,
//   planetImage: PropTypes.string.isRequired,
// };

export default Missions;
