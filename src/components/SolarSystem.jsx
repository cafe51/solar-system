import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    const { titulo } = this.props;
    return (
      <div data-testid="solar-system">
        <Title headline={ titulo } />
      </div>
    );
  }
}

SolarSystem.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default SolarSystem;
