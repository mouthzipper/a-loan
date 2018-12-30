import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = () => ({
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
    justifyContent: 'center',
  },
});

function Documents({ classes, value, handleChange }) {
  return (
    <FormGroup>
      <FormControlLabel
        className={classes.root}
        control={
          <Checkbox
            checked={value}
            onChange={handleChange('authorizedDocs')}
            value="authorizedDocs"
          />
        }
        label="Allow us to get required documents from your connected bank."
      />
    </FormGroup>
  );
}

Documents.propTypes = {
  classes: PropTypes.object,
  value: PropTypes.bool,
  handleChange: PropTypes.func,
};

export default withStyles(styles)(Documents);
