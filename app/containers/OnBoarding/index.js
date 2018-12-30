/**
 *
 * OnBoarding
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Colors from 'utils/colors';
import _isEmpty from 'lodash/isEmpty';
import {
  makeSelectAmount,
  makeSelecTerm,
  makeSelectPaymentInfo,
} from 'containers/HomePage/selectors';
import LoadingOverlay from 'components/LoadingOverlay';
import {
  makeSelectBusinessInfo,
  makeSelectBankMetadata,
  makeSelectStep,
  makeSelectLoanCreated,
  makeSelectProcessing,
} from './selectors';
import {
  saveBusinessInfo,
  saveBankMetadata,
  saveDocuments,
  updateStep,
  createLoan,
} from './actions';
import reducer from './reducer';
import saga from './saga';
import Fund from './Fund';
import BusinessInfo from './BusinessInfo';
import NavButton from './NavButton';
import Documents from './Documents';

const style = theme => ({
  root: {
    marginTop: 30,
    '& svg': {
      color: `${Colors.green} !important`,
    },
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  content: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getSteps() {
  return ['Business Infomation', 'Fund', 'Documents'];
}

/* eslint-disable react/prefer-stateless-function */
export class OnBoarding extends React.PureComponent {
  state = {
    authorizedDocs: false,
  };

  componentWillReceiveProps(nextProps) {
    if (
      this.props.loanCreated !== nextProps.loanCreated &&
      nextProps.loanCreated
    ) {
      this.props.history.push('/dashboard');
    }
  }

  handleNext = () => {
    if (this.props.step + 1 > 2) {
      const {
        amount,
        term,
        paymentInfo,
        businessInfo,
        bankMetadata,
      } = this.props;
      const payload = {
        amount,
        term,
        paymentInfo,
        businessInfo,
        bankMetadata,
      };
      this.props.createLoan(payload);
    } else {
      this.props.updateStep(this.props.step + 1);
    }
  };

  handleBack = () => {
    this.props.updateStep(this.props.step - 1);
  };

  saveBusinessInfo = values => {
    this.props.saveBusinessInfo(values);
    this.handleNext();
  };

  toggleAuthorizeDocs = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  getStepContent = () => {
    const { step, bankMetadata } = this.props;
    const { authorizedDocs } = this.state;
    switch (step) {
      case 0:
        return (
          <BusinessInfo onSubmit={this.saveBusinessInfo} activeStep={step} />
        );
      case 1:
        return (
          <Fund
            data={bankMetadata}
            saveBankMetadata={this.props.saveBankMetadata}
          />
        );
      case 2:
        return (
          <Documents
            value={authorizedDocs}
            handleChange={this.toggleAuthorizeDocs}
          />
        );
      default:
        return null;
    }
  };

  render() {
    const { classes, step, bankMetadata, processing } = this.props;
    const steps = getSteps();
    return (
      <div>
        <Helmet>
          <title>OnBoarding</title>
          <meta name="description" content="Description of OnBoarding" />
        </Helmet>
        <div className={classes.root}>
          <LoadingOverlay show={processing} />
          <Stepper activeStep={step}>
            {steps.map(label => {
              const props = {};
              const labelProps = {};
              return (
                <Step key={label} {...props}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <div className={classes.content}>{this.getStepContent(step)}</div>
          {step !== 0 && (
            <NavButton
              activeStep={step}
              handleBack={this.handleBack}
              handleNext={this.handleNext}
              disable={
                (step === 1 && _isEmpty(bankMetadata)) ||
                (step === 2 && !this.state.authorizedDocs)
              }
            />
          )}
        </div>
      </div>
    );
  }
}

OnBoarding.propTypes = {
  businessInfo: PropTypes.object,
  saveBusinessInfo: PropTypes.func,
  step: PropTypes.number,
  bankMetadata: PropTypes.object,
  saveBankMetadata: PropTypes.func,
  saveDocuments: PropTypes.func,
  updateStep: PropTypes.func,
  amount: PropTypes.number,
  term: PropTypes.number,
  paymentInfo: PropTypes.object,
  createLoan: PropTypes.func,
  loanCreated: PropTypes.bool,
  processing: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  businessInfo: makeSelectBusinessInfo(),
  step: makeSelectStep(),
  bankMetadata: makeSelectBankMetadata(),
  amount: makeSelectAmount(),
  term: makeSelecTerm(),
  paymentInfo: makeSelectPaymentInfo(),
  loanCreated: makeSelectLoanCreated(),
  processing: makeSelectProcessing(),
});

function mapDispatchToProps(dispatch) {
  return {
    saveBusinessInfo: payload => dispatch(saveBusinessInfo(payload)),
    saveBankMetadata: payload => dispatch(saveBankMetadata(payload)),
    saveDocuments: payload => dispatch(saveDocuments(payload)),
    updateStep: payload => dispatch(updateStep(payload)),
    createLoan: payload => dispatch(createLoan(payload)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'onBoarding', reducer });
const withSaga = injectSaga({ key: 'onBoarding', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(style),
)(OnBoarding);
