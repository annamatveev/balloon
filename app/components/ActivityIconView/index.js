import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'material-icons-react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  display: block;
  width: 24px;
  height: 24px;
  position: relative;
  left: 50%;
  top: 50%;
  margin-left: -12px;
  margin-top: -12px;
`;

export class ActivityIconView extends React.PureComponent {
  // TODO: seperate to file and chang to key value
  convertToMaterialIcon(department) {
    const iconMap = {
      'Bug fix': 'build',
      Feature: 'star',
      Hire: 'person',
    };
    return iconMap[department] || 'check';
  }

  render() {
    const { type } = this.props;

    return (
      <IconWrapper>
        <MaterialIcon
          icon={this.convertToMaterialIcon(type)}
          size={24}
          invert
        />
      </IconWrapper>
    );
  }
}

ActivityIconView.propTypes = {
  type: PropTypes.string,
};

export default ActivityIconView;
