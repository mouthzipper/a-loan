import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import PlaidLink from 'react-plaid-link';
import Typography from '@material-ui/core/Typography';
import _isEmpty from 'lodash/isEmpty';
import { withStyles } from '@material-ui/core/styles';
import Colors from 'utils/colors';
const style = () => ({
  plaidRoot: {
    display: 'flex',
    justifyContent: 'center',
    padding: 20,
    '& button': {
      height: 50,
      padding: 10,
      backgroundColor: `${Colors.green} !important`,
      color: '#fff',
      cursor: 'pointer',
    },
  },
  info: {
    fontWeight: 600,
    color: Colors.green,
    fontStyle: 'italic',
  },
});
/*eslint-disable*/
function Fund(props) {
  const { saveBankMetadata, data, classes } = props;
  const plaidText = _isEmpty(data)
    ? 'Click here to connect to your bank.'
    : 'Connect to other bank.';
  return (
    <Grid container>
      <Grid item xs={12} className={classes.plaidRoot}>
        <PlaidLink
          clientName="aLoan"
          env="sandbox"
          product={['auth', 'transactions']}
          publicKey="f45c62c492ed7bb9d6b5a4b91720a8"
          onSuccess={(_, metadata) => saveBankMetadata(metadata)}
        >
          {plaidText}
        </PlaidLink>
      </Grid>
      {!_isEmpty(data) && (
        <Grid item xs={12}>
          <Typography
            variant="h6"
            align="center"
            className={classes.info}
          >{`Successfully connected to your ${
            data.institution.name
          } bank account.`}</Typography>
        </Grid>
      )}
    </Grid>
  );
}
Fund.propTypes = {
  classes: PropTypes.object,
  saveBankMetadata: PropTypes.func,
  data: PropTypes.object,
};
export default withStyles(style)(Fund);
