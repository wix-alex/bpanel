import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as UI from 'bpanel-ui';

const { components: { Text }, utils: { connectTheme } } = UI;

class Footer extends PureComponent {
  static get propTypes() {
    return {
      theme: PropTypes.object,
      version: PropTypes.string,
      progress: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    };
  }

  render() {
    const { version, progress, theme } = this.props;
    const progressPercentage = progress * 100;

    return (
      <div className="container-fluid">
        <footer
          className="row align-items-center"
          style={theme.footer.container}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-3 version text-truncate">
                <Text style={theme.footer.text}>{version}</Text>
              </div>
              <div className="col-3" style={theme.footer.progress}>
                <Text style={theme.footer.text}>
                  {progressPercentage.toFixed(2)}% synced
                </Text>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default connectTheme(Footer);
