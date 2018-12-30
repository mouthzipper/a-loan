import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { required } from 'components/FormUtility/Validators';
import Paper from '@material-ui/core/Paper';
import NavButton from './NavButton';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paperRoot: {
    padding: 12,
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  button: {
    width: '100%',
    color: 'white',
    marginTop: 20,
  },
  datePicker: {
    width: '100%',
  },
});

export class BusinessInfoForm extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      showPassword: false,
      showConfirmPassword: false,
    };

    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
  }

  togglePasswordVisibility(name) {
    this.setState(prevState => ({
      [name]: !prevState[name],
    }));
  }

  render() {
    const { classes, handleSubmit } = this.props;
    return (
      <Paper className={classes.paperRoot} square>
        <form className={classes.container} onSubmit={handleSubmit}>
          <Field
            name="name"
            className={classes.textField}
            fullWidth
            component={TextField}
            label="Business Name"
            validate={required}
          />
          <Field
            name="registrationId"
            className={classes.textField}
            fullWidth
            component={TextField}
            label="Registration Id"
            validate={required}
          />
          <Field
            name="email"
            className={classes.textField}
            fullWidth
            component={TextField}
            label="Email"
            validate={required}
            type="email"
          />
          <Field
            name="address"
            className={classes.textField}
            fullWidth
            component={TextField}
            label="Address"
            validate={required}
          />
          <Field
            name="contactNumber"
            className={classes.textField}
            fullWidth
            component={TextField}
            label="Contact Number"
            validate={required}
          />
          <NavButton activeStep={0} handleNext={handleSubmit} />
        </form>
      </Paper>
    );
  }
}

BusinessInfoForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func,
};

const ReduxBusinessInfoForm = reduxForm({
  form: 'BusinessInfoForm',
  destroyOnUnmount: false,
})(BusinessInfoForm);

export default withStyles(styles)(ReduxBusinessInfoForm);
