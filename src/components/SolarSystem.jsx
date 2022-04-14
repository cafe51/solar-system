import React from 'react';
// import PropTypes from 'prop-types';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    // const { headline } = this.props;
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { Planets.map((element) => {
          const retorno = (<PlanetCard
            key={ element.name }
            planetName={ element.name }
            planetImage={ element.image }
          />);
          return retorno;
        })}
      </div>
    );
  }
}

// SolarSystem.propTypes = {
//   headline: PropTypes.string.isRequired,
// };

export default SolarSystem;
